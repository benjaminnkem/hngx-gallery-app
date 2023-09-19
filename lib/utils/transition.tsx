"use client";
import { motion } from "framer-motion";

export const TransitionElement = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div initial={{ y: "-5%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-5%", opacity: 0 }}>
      {children}
    </motion.div>
  );
};

export const TransitionStart = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};
