"use client";

import { motion } from "framer-motion";

export const AtlasMap = () => {
  return (
    <motion.div
      layout
      transition={{
        duration: 0.4,
      }}
      className="h-full w-full grow bg-lightblue-50"
    ></motion.div>
  );
};
