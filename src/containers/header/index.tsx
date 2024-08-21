"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Squash as Hamburger } from "hamburger-react";
import { useAtom } from "jotai";

import { cn } from "@/lib/utils";

import { menuOpenAtom } from "@/app/store";

import { Nav } from "@/containers/header/nav";

import { Logo } from "./logo";

const DARK_PATHNAMES = ["/about-us", "/coming-soon"];

export const Header = () => {
  const pathname = usePathname();
  const isDark = DARK_PATHNAMES.includes(pathname);

  const [open, setOpen] = useAtom(menuOpenAtom);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="relative z-10 py-8">
      <div className="container">
        <div className="flex items-center justify-between gap-3">
          <Link href="/">
            <h1 className="flex items-center space-x-3 md:space-x-6">
              <Logo
                className={cn({
                  "fill-navy-700": !isDark,
                  "fill-white": isDark,
                })}
              />
              <span
                className={cn({
                  "rounded border border-navy-700 px-2 py-1 text-2xs font-bold uppercase italic":
                    true,
                  "border-navy-700 text-navy-700": !isDark,
                  "border-white text-white": isDark,
                })}
              >
                Beta
              </span>
            </h1>
          </Link>

          <button
            type="button"
            aria-label="menu"
            className={cn({
              "h-12 w-12 rounded-full outline outline-1": true,
              "bg-navy-700 outline-navy-700": !isDark,
              "bg-white outline-white": isDark,
            })}
            onClick={handleOpen}
          >
            <Hamburger
              color={cn({
                "#FFF": !isDark,
                "#002848": isDark,
              })}
              size={24}
              toggled={open}
              rounded
            />
          </button>

          <Nav />
        </div>
      </div>
    </header>
  );
};
