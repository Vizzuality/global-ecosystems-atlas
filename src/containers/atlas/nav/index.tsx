"use client";
import { ButtonHTMLAttributes, MouseEvent } from "react";

import { useCookies } from "react-cookie";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { TooltipPortal } from "@radix-ui/react-tooltip";
import {
  PiMagnifyingGlass,
  PiUserCircle,
  PiPolygon,
  PiQuestion,
  PiFunnel,
  PiStack,
  PiFileSql,
  PiList,
} from "react-icons/pi";

import { cn } from "@/lib/utils";

import { LogoSmall } from "@/containers/logo";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const AtlasNavItem = ({
  label,
  href,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  href?: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <Tooltip delayDuration={100}>
      {href && (
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={cn({
              "block rounded-sm p-2.5": true,
              "hover:bg-lightblue-50": pathname !== href,
              "bg-lightblue-100": pathname === href,
            })}
          >
            {children}
          </Link>
        </TooltipTrigger>
      )}

      {!href && (
        <TooltipTrigger asChild>
          <button className="block rounded-sm p-2.5" {...props}>
            {children}
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

  const handleBetaClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCookie("welcome", false);
  };

  return (
    <nav className="flex flex-col justify-between bg-navy-10 px-4 py-6">
      <div className="flex flex-col divide-y divide-navy-100">
        <div className="flex flex-col items-center space-y-1 py-3">
          <Link href="/" className="flex justify-center">
            <LogoSmall />
          </Link>

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
        <ul className="space-y-3 py-3">
          <li>
            <AtlasNavItem href="/atlas" label="Search">
              <PiMagnifyingGlass className="h-5 w-5" />
            </AtlasNavItem>
          </li>
          <li>
            <AtlasNavItem href="/atlas/draw" label="Draw polygon">
              <PiPolygon className="h-5 w-5" />
            </AtlasNavItem>
          </li>
          <li>
            <AtlasNavItem href="/atlas/upload" label="Upload area">
              <PiFileSql className="h-5 w-5" />
            </AtlasNavItem>
          </li>
        </ul>

        <ul className="space-y-3 py-3">
          <AtlasNavItem href="/atlas/filters" label="Filter">
            <PiFunnel className="h-5 w-5" />
          </AtlasNavItem>
        </ul>

        <ul className="space-y-3 py-3">
          <AtlasNavItem href="/atlas/list" label="View list">
            <PiList className="h-5 w-5" />
          </AtlasNavItem>
        </ul>

        <ul className="space-y-3 py-3">
          <AtlasNavItem href="/atlas/layers" label="Data layers">
            <PiStack className="h-5 w-5" />
          </AtlasNavItem>
        </ul>
      </div>

      <div className="flex flex-col divide-y divide-navy-100">
        <ul className="space-y-3 py-3">
          <AtlasNavItem href="/atlas/login" label="Login">
            <PiUserCircle className="h-5 w-5" />
          </AtlasNavItem>
        </ul>

        <ul className="space-y-3 py-3">
          <AtlasNavItem label="Tour" onClick={() => console.info("button")}>
            <PiQuestion className="h-5 w-5" />
          </AtlasNavItem>
        </ul>

        <ul className="space-y-3 py-3">
          <AtlasNavItem label="Expand sidebar">
            <PiStack className="h-5 w-5" />
          </AtlasNavItem>
        </ul>
      </div>
    </nav>
  );
};
