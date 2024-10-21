"use client";

import { ChangeEvent, PropsWithChildren, useCallback, useMemo } from "react";

import { usePathname, useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { useAtomValue, useSetAtom } from "jotai";
// import { FiX } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

import {
  // atlasMobileSidebarAtom,
  navOpenAtom,
  sidebarOpenAtom,
  useSyncSearchParams,
} from "@/app/(atlas)/atlas/store";

import { Media } from "@/containers/media";

import { CollapseSidebarIcon } from "@/components/ui/icons/collapse-sidebar";

const ITEMS = [
  { label: "Search", value: "/atlas" },
  { label: "Draw a polygon", value: "/atlas/draw" },
  { label: "Upload area", value: "/atlas/upload" },
  { label: "Ecosysytem functional groups", value: "/atlas/ecosystems" },
  { label: "Layers", value: "/atlas/layers" },
];

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
  // const setAtlasMobileSidebarOpen = useSetAtom(atlasMobileSidebarAtom);

  return (
    <header className="sticky top-0 z-10 flex justify-between gap-4 bg-gradient-to-b from-white to-white/0 p-4 lg:gap-6 lg:p-6">
      {children}

      {/* <Media lessThan="lg">
        <button
          className="pointer-events-auto z-10 flex h-6 w-6 items-center justify-center text-navy-500 hover:text-navy-700"
          onClick={() => setAtlasMobileSidebarOpen(false)}
        >
          <FiX className="h-6 w-6" />
        </button>
      </Media> */}

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
  return <div className="px-4 lg:px-6">{children}</div>;
};

export const AtlasSidebarTitle = ({ children }: PropsWithChildren) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSyncSearchParams();

  const defaultValue = useMemo(() => {
    if (pathname === "/atlas") return ITEMS[0];

    const item = ITEMS.filter((i) => i.value !== "/atlas").find((item) => {
      return pathname.includes(item.value);
    });
    return item;
  }, [pathname]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      push(e.target.value + searchParams);
    },
    [searchParams, push],
  );

  return (
    <>
      <div className="relative w-full" tabIndex={1}>
        <Media lessThan="lg">
          <select
            className="absolute left-0 top-0 h-full w-full opacity-0"
            defaultValue={defaultValue?.value ?? "/atlas"}
            onChange={handleChange}
          >
            <option value="/atlas">Search</option>
            <option value="/atlas/draw">Draw a polygon</option>
            <option value="/atlas/upload">Upload area</option>
            <option value="/atlas/ecosystems">Ecosysytem functional groups</option>
            <option value="/atlas/layers">Layers</option>
          </select>

          <h1 className="flex items-center justify-between gap-4 rounded-lg bg-lightblue-100 p-2.5 text-sm font-bold uppercase leading-normal">
            <div className="flex items-center gap-4">{children}</div>
            <FiChevronDown className="h-4 w-4" />
          </h1>
        </Media>
        <Media greaterThanOrEqual="lg">
          <h1 className="flex gap-4 text-sm font-bold uppercase">{children}</h1>
        </Media>
      </div>
    </>
  );
};
