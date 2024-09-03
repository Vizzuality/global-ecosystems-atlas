"use client";

import { PropsWithChildren } from "react";

import { motion } from "framer-motion";

export const AtlasSidebar = ({ children }: PropsWithChildren) => {
  return (
    <motion.aside
      layout="position"
      transition={{
        duration: 0.4,
      }}
      className="w-full max-w-md border-r border-gray-200 bg-white p-10"
    >
      {children}
    </motion.aside>
  );
};
