"use client";
import { AnimatePresence } from "framer-motion";
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
      <AnimatePresence>
        <Toaster toastOptions={toastConfig} />
        {children}
      </AnimatePresence>
    </>
  );
};

export default Provider;
