"use client";

import { PropsWithChildren } from "react";

import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { PiArrowLineLeft } from "react-icons/pi";

import { navOpenAtom, sidebarOpenAtom } from "@/app/(atlas)/atlas/store";

export const AtlasSidebar = ({ children }: PropsWithChildren) => {
  const navOpen = useAtom(navOpenAtom);
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);

  return (
    <motion.aside
      layout
      layoutDependency={navOpen}
      transition={{
        duration: 0.4,
      }}
      className="pointer-events-none relative z-0 h-full w-[450px]"
    >
      <motion.div
        initial={"open"}
        animate={sidebarOpen ? "open" : "closed"}
        variants={{
          open: {
            x: 0,
          },
          closed: {
            x: "-100%",
          },
        }}
        className="pointer-events-auto h-full w-full border-r border-gray-200 bg-white"
        transition={{
          duration: 0.4,
        }}
      >
        <button
          className="pointer-events-auto absolute right-6 top-6 z-10 flex h-6 w-6 items-center justify-center"
          onClick={() => setSidebarOpen(false)}
        >
          <PiArrowLineLeft className="h-6 w-6" />
        </button>

        {children}
      </motion.div>
    </motion.aside>
  );
};
