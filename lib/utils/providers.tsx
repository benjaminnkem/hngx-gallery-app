"use client";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import { Toaster, ToastPosition } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import UserProvider from "../contexts/UserProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const toastConfig = {
    position: "top-center" as ToastPosition,
    duration: 3000,
    style: {
      minWidth: "250px",
    },
    success: {
      icon: "👍🏾",
    },
    error: {
      icon: "❌",
    },
    loading: {
      icon: "⏳",
      duration: Infinity,
    },
  } as const;

  return (
    <>
      <SessionProvider>
        <UserProvider>
          <DndProvider backend={HTML5Backend}>
            <AnimatePresence>
              <Toaster toastOptions={toastConfig} />
              {children}
            </AnimatePresence>
          </DndProvider>
        </UserProvider>
      </SessionProvider>
    </>
  );
};

export default Provider;
