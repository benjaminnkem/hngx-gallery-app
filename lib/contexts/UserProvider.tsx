"use client";

import { useSession } from "next-auth/react";
import { createContext, useContext } from "react";
import { Dna } from "react-loader-spinner";

interface User {
  name: string | null;
}

const UserContext = createContext<User | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  switch (status) {
    case "loading":
      return (
        <div className="absolute top-0 left-0 w-full h-full grid place-content-center">
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      );
    default:
      break;
  }

  return <UserContext.Provider value={{ name: session?.user?.name ?? null }}>{children}</UserContext.Provider>;
};

export const useUser = (): User => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used inside UserProvider");

  return context;
};

export default UserProvider;
