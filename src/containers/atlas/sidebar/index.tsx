"use client";

import { PropsWithChildren } from "react";

import { motion } from "framer-motion";
import { useAtomValue, useSetAtom } from "jotai";
import { FiX } from "react-icons/fi";

import { atlasMobileSidebarAtom, navOpenAtom, sidebarOpenAtom } from "@/app/(atlas)/atlas/store";

import { Media } from "@/containers/media";

import { CollapseSidebarIcon } from "@/components/ui/icons/collapse-sidebar";

export const AtlasSidebar = ({ children }: PropsWithChildren) => {
  const navOpen = useAtomValue(navOpenAtom);
  const sidebarOpen = useAtomValue(sidebarOpenAtom);

  return (
    <motion.aside
      layout
      layoutDependency={navOpen}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="pointer-events-none relative z-0 flex h-full w-full flex-col overflow-hidden lg:w-[450px]"
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
        className="pointer-events-auto flex h-full w-full flex-col overflow-hidden border-r border-gray-200 bg-white"
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.aside>
  );
};

export const AtlasSidebarSection = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex grow flex-col overflow-hidden">
      <div className="flex grow flex-col overflow-y-auto overflow-x-hidden">
        <div className="pb-6">{children}</div>
      </div>
    </section>
  );
};

export const AtlasSidebarHeader = ({ children }: PropsWithChildren) => {
  const setSidebarOpen = useSetAtom(sidebarOpenAtom);
  const setAtlasMobileSidebarOpen = useSetAtom(atlasMobileSidebarAtom);

  return (
    <header className="sticky top-0 z-10 flex justify-between gap-6 bg-gradient-to-b from-white to-white/0 p-6">
      {children}

      <Media lessThan="lg">
        <button
          className="pointer-events-auto z-10 flex h-6 w-6 items-center justify-center text-navy-500 hover:text-navy-700"
          onClick={() => setAtlasMobileSidebarOpen(false)}
        >
          <FiX className="h-6 w-6" />
        </button>
      </Media>

      <Media greaterThanOrEqual="lg">
        <button
          className="pointer-events-auto z-10 flex h-6 w-6 items-center justify-center text-navy-500 hover:text-navy-700"
          onClick={() => setSidebarOpen(false)}
        >
          <CollapseSidebarIcon className="h-6 w-6" />
        </button>
      </Media>
    </header>
  );
};

export const AtlasSidebarContainer = ({ children }: PropsWithChildren) => {
  return <div className="px-6">{children}</div>;
};

export const AtlasSidebarTitle = ({ children }: PropsWithChildren) => {
  return <h1 className="flex gap-4 text-sm font-bold uppercase">{children}</h1>;
};
