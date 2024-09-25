"use client";
import { ButtonHTMLAttributes } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { TooltipPortal } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";

import { cn } from "@/lib/utils";

import { navOpenAtom, sidebarOpenAtom, useSyncSearchParams } from "@/app/(atlas)/atlas/store";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const AtlasNavItem = ({
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
  const searchParams = useSyncSearchParams();

  const navOpen = useAtomValue(navOpenAtom);
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);
  const pathname = usePathname();

  return (
    <Tooltip delayDuration={100} open={navOpen ? false : undefined}>
      {href && (
        <TooltipTrigger asChild>
          <Link
            href={`${href}${searchParams}`}
            prefetch
            className={cn({
              "flex items-center gap-3 rounded-sm p-2.5": true,
              "text-navy-500 hover:bg-lightblue-50": pathname !== href,
              "bg-lightblue-100 text-navy-700":
                (href !== "/atlas" && pathname.includes(href)) || pathname === href,
            })}
            onClick={() => {
              const open = pathname !== href ? true : !sidebarOpen;
              setSidebarOpen(open);
            }}
          >
            {children}

            {navOpen && (
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

            {navOpen && (
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
