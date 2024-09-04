"use client";

import { PropsWithChildren } from "react";

import { motion } from "framer-motion";
import { useAtomValue, useSetAtom } from "jotai";

import { navOpenAtom, sidebarOpenAtom } from "@/app/(atlas)/atlas/store";

import { CollapseSidebarIcon } from "@/components/ui/icons/collapse-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export const AtlasSidebar = ({ children }: PropsWithChildren) => {
  const navOpen = useAtomValue(navOpenAtom);
  const sidebarOpen = useAtomValue(sidebarOpenAtom);

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
        className="pointer-events-auto flex h-full w-full flex-col border-r border-gray-200 bg-white"
        transition={{
          duration: 0.4,
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
      <ScrollArea className="flex grow flex-col">
        <div className="pb-6">{children}</div>
      </ScrollArea>
    </section>
  );
};

export const AtlasSidebarHeader = ({ children }: PropsWithChildren) => {
  const setSidebarOpen = useSetAtom(sidebarOpenAtom);

  return (
    <header className="sticky top-0 flex justify-between gap-6 bg-white p-6">
      {children}
      <button
        className="pointer-events-auto absolute right-6 top-6 z-10 flex h-6 w-6 items-center justify-center"
        onClick={() => setSidebarOpen(false)}
      >
        <CollapseSidebarIcon className="h-6 w-6" />
      </button>
    </header>
  );
};

export const AtlasSidebarContainer = ({ children }: PropsWithChildren) => {
  return <div className="px-6">{children}</div>;
};

export const AtlasSidebarTitle = ({ children }: PropsWithChildren) => {
  return <h1 className="text-sm font-bold uppercase">{children}</h1>;
};
