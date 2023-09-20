"use client";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import { Toaster, ToastPosition } from "react-hot-toast";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const toastConfig = {
    position: "bottom-right" as ToastPosition,
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
        <AnimatePresence>
          <Toaster toastOptions={toastConfig} />
          {children}
        </AnimatePresence>
      </SessionProvider>
    </>
  );
};

export default Provider;
