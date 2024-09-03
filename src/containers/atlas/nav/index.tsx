"use client";
import { ButtonHTMLAttributes, MouseEvent } from "react";

import { useCookies } from "react-cookie";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { TooltipPortal } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";
import {
  PiMagnifyingGlass,
  PiUserCircle,
  PiPolygon,
  PiQuestion,
  PiFunnel,
  PiStack,
  PiFileSql,
  PiList,
  PiStackFill,
} from "react-icons/pi";

import { cn } from "@/lib/utils";

import { navExpandedAtom } from "@/app/(atlas)/atlas/store";

import { LogoSmall } from "@/containers/logo";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const AtlasNavItem = ({
  index,
  label,
  href,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  index: number;
  label: string;
  href?: string;
  children: React.ReactNode;
}) => {
  const navExpanded = useAtomValue(navExpandedAtom);
  const pathname = usePathname();

  return (
    <Tooltip delayDuration={100} open={navExpanded ? false : undefined}>
      {href && (
        <TooltipTrigger asChild>
          <Link
            href={href}
            prefetch
            className={cn({
              "flex items-center gap-3 rounded-sm p-2.5": true,
              "hover:bg-lightblue-50": pathname !== href,
              "bg-lightblue-100": pathname === href,
            })}
          >
            {children}

            {navExpanded && (
              <motion.span
                className="text-nowrap text-sm leading-none"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                {label}
              </motion.span>
            )}
          </Link>
        </TooltipTrigger>
      )}

      {!href && (
        <TooltipTrigger asChild>
          <button className="flex items-center gap-4 rounded-sm p-2.5" {...props}>
            {children}

            {navExpanded && (
              <motion.span
                className="text-nowrap text-sm leading-none"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                {label}
              </motion.span>
            )}
          </button>
        </TooltipTrigger>
      )}
      <TooltipPortal>
        <TooltipContent side="right">{label}</TooltipContent>
      </TooltipPortal>
    </Tooltip>
  );
};

export const AtlasNav = () => {
  const [, setCookie] = useCookies(["welcome"]);

  const [navExpanded, setNavExpanded] = useAtom(navExpandedAtom);

  const handleBetaClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCookie("welcome", false);
  };

  return (
    <motion.nav
      layout="size"
      transition={{
        duration: 0.4,
      }}
      className="flex flex-col justify-between bg-navy-10 px-4 py-6"
    >
      <motion.div layout="position" className="flex flex-col divide-y divide-navy-100">
        <div className="flex flex-col items-start py-3">
          <Link href="/" className="flex flex-col items-center space-y-1">
            <div className="flex h-10 w-10 flex-col items-center space-y-1">
              <LogoSmall />

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
              <PiMagnifyingGlass className="h-5 w-5" />
            </AtlasNavItem>
          </li>
          <li>
            <AtlasNavItem href="/atlas/draw" label="Draw polygon" index={1}>
              <PiPolygon className="h-5 w-5" />
            </AtlasNavItem>
          </li>
          <li>
            <AtlasNavItem href="/atlas/upload" label="Upload area" index={2}>
              <PiFileSql className="h-5 w-5" />
            </AtlasNavItem>
          </li>
        </ul>

        <ul className="space-y-3 py-3">
          <AtlasNavItem href="/atlas/filters" label="Filter" index={3}>
            <PiFunnel className="h-5 w-5" />
          </AtlasNavItem>
        </ul>

        <ul className="space-y-3 py-3">
          <AtlasNavItem href="/atlas/list" label="View list" index={4}>
            <PiList className="h-5 w-5" />
          </AtlasNavItem>
        </ul>

        <ul className="space-y-3 py-3">
          <AtlasNavItem href="/atlas/layers" label="Data layers" index={5}>
            <PiStack className="h-5 w-5" />
          </AtlasNavItem>
        </ul>
      </motion.div>

      <motion.div layout="position" className="flex flex-col divide-y divide-navy-100">
        <ul className="space-y-3 py-3">
          <AtlasNavItem href="/atlas/login" label="Login" index={6}>
            <PiUserCircle className="h-5 w-5" />
          </AtlasNavItem>
        </ul>

        <ul className="space-y-3 py-3">
          <AtlasNavItem label="Tour" onClick={() => console.info("button")} index={7}>
            <PiQuestion className="h-5 w-5" />
          </AtlasNavItem>
        </ul>

        <ul className="space-y-3 py-3">
          <AtlasNavItem
            label="Expand sidebar"
            onClick={() => setNavExpanded(!navExpanded)}
            index={8}
          >
            {!navExpanded && <PiStack className="h-5 w-5" />}
            {navExpanded && <PiStackFill className="h-5 w-5" />}
          </AtlasNavItem>
        </ul>
      </motion.div>
    </motion.nav>
  );
};
