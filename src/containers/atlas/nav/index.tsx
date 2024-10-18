"use client";
import { MouseEvent } from "react";

import { useCookies } from "react-cookie";

import Link from "next/link";

import { motion } from "framer-motion";
import { useAtom, useSetAtom } from "jotai";
import { FiHelpCircle } from "react-icons/fi";
import { PiStackBold } from "react-icons/pi";

import { cn } from "@/lib/utils";

import { navOpenAtom, tourAtom } from "@/app/(atlas)/atlas/store";

import { AtlasNavItem } from "@/containers/atlas/nav/item";
import { LogoSmall } from "@/containers/logo";

import { CollapseIcon } from "@/components/ui/icons/collapse";
import { DrawPolygonIcon } from "@/components/ui/icons/draw-polygon";
import { ExpandIcon } from "@/components/ui/icons/expand";
import { FilterIcon } from "@/components/ui/icons/filter";
import { GlobeIcon } from "@/components/ui/icons/globe";
import { ListIcon } from "@/components/ui/icons/list";
import { UploadShapefileIcon } from "@/components/ui/icons/upload-shapefile";
// import { UserIcon } from "@/components/ui/icons/user";

export const AtlasNav = () => {
  const [, setCookie] = useCookies(["welcome"]);

  const [navOpen, setNavExpanded] = useAtom(navOpenAtom);
  const setTour = useSetAtom(tourAtom);

  const handleBetaClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCookie("welcome", false);
  };

  return (
    <motion.nav
      layout="size"
      layoutDependency={navOpen}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="pointer-events-auto relative z-10 h-full overflow-hidden"
    >
      <div className="relative z-20 flex h-full flex-col justify-between bg-navy-10 px-4 py-6">
        <motion.div layout="position" className="flex flex-col divide-y divide-navy-100">
          <div className="flex flex-col items-start pb-3">
            <Link href="/" className="flex flex-col items-center space-y-1">
              <div className="relative flex h-10 w-10 flex-col items-center space-y-1">
                <LogoSmall />

                <motion.span
                  initial={"initial"}
                  animate={navOpen ? "animate" : "initial"}
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                  }}
                  className="absolute -top-1 left-full block translate-x-0.5 text-[7px] font-bold uppercase leading-[8px] opacity-0"
                >
                  Global ecosystems atlas
                </motion.span>

                <span
                  className={cn({
                    "block cursor-pointer text-[7px] font-bold uppercase italic": true,
                    "border-navy-700 text-navy-700": true,
                  })}
                  onClick={handleBetaClick}
                >
                  Beta
                </span>
              </div>
            </Link>
          </div>
          <ul className="space-y-3 py-3">
            <li>
              <AtlasNavItem href="/atlas" label="Search" index={0}>
                <GlobeIcon className="h-5 w-5" />
              </AtlasNavItem>
            </li>
            <li>
              <AtlasNavItem href="/atlas/draw" label="Draw a polygon" index={1}>
                <DrawPolygonIcon className="h-5 w-5" />
              </AtlasNavItem>
            </li>
            <li>
              <AtlasNavItem href="/atlas/upload" label="Upload area" index={2}>
                <UploadShapefileIcon className="h-5 w-5" />
              </AtlasNavItem>
            </li>
          </ul>

          <ul className="space-y-3 py-3">
            <AtlasNavItem href="/atlas/filters" label="Filters" index={3}>
              <FilterIcon className="h-5 w-5" />
            </AtlasNavItem>
          </ul>

          <ul className="space-y-3 py-3">
            <AtlasNavItem href="/atlas/ecosystems" label="Ecosysytem functional groups" index={4}>
              <ListIcon className="h-5 w-5" />
            </AtlasNavItem>
          </ul>

          <ul className="space-y-3 py-3">
            <AtlasNavItem href="/atlas/layers" label="Layers" index={5}>
              <PiStackBold className="h-5 w-5" />
            </AtlasNavItem>
          </ul>
        </motion.div>

        <motion.div layout="position" className="flex flex-col divide-y divide-navy-100">
          {/* <ul className="space-y-3 py-3">
            <AtlasNavItem href="/atlas/login" label="User profile" index={6}>
              <UserIcon className="h-5 w-5" />
            </AtlasNavItem>
          </ul> */}

          <ul className="space-y-3 py-3">
            <AtlasNavItem label="Help center" onClick={() => setTour(true)} index={7}>
              <FiHelpCircle className="h-5 w-5" />
            </AtlasNavItem>
          </ul>

          <ul className="space-y-3 py-3">
            <AtlasNavItem
              id="tour-atlas-expand"
              label={navOpen ? "Collapse side menu" : "Expand side menu"}
              onClick={() => setNavExpanded(!navOpen)}
              index={8}
            >
              {!navOpen && <ExpandIcon className="h-5 w-5" />}
              {navOpen && <CollapseIcon className="h-5 w-5" />}
            </AtlasNavItem>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};
