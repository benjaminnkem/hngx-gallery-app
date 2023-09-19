"use client";
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
      <Toaster toastOptions={toastConfig} />
      {children}
    </>
  );
};

export default Provider;
