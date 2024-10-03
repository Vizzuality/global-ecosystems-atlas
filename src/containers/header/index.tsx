"use client";

import { MouseEvent } from "react";

import { useCookies } from "react-cookie";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Squash as Hamburger } from "hamburger-react";
import { useAtom } from "jotai";

import { cn } from "@/lib/utils";

import { menuOpenAtom } from "@/app/store";

import { Logo, LogoGeo, LogoGeoWhite, LogoNoText } from "@/containers/logo";
import { Media } from "@/containers/media";

const DARK_PATHNAMES = [
  "/about-us",
  "/coming-soon",
  "/privacy-policy",
  "/stories",
  "/data",
  "/data/methodology",
  "/data/how-to-use-the-data",
  "/data/sources-catalogue",
  "/data/questions-and-answers",
];

export const Header = () => {
  const [, setCookie] = useCookies(["welcome"]);

  const pathname = usePathname();
  const isDark = DARK_PATHNAMES.includes(pathname);

  const [open, setOpen] = useAtom(menuOpenAtom);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleBetaClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCookie("welcome", false);
  };

  return (
    <header className="relative z-20 py-8">
      <div className="container">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 divide-x divide-neutral-200 md:gap-6">
            <Link href="/">
              <h1 className="flex items-center space-x-3 md:space-x-6">
                <Media greaterThanOrEqual="md">
                  <Logo
                    className={cn({
                      "fill-navy-700": !isDark,
                      "fill-white": isDark,
                    })}
                  />
                </Media>

                <Media lessThan="md">
                  <LogoNoText
                    className={cn({
                      "fill-navy-700": !isDark,
                      "fill-white": isDark,
                    })}
                  />
                </Media>
                <span
                  className={cn({
                    "rounded border border-navy-700 px-2 py-1 text-2xs font-bold uppercase italic":
                      true,
                    "border-navy-700 text-navy-700": !isDark,
                    "border-white text-white": isDark,
                  })}
                  onClick={handleBetaClick}
                >
                  Beta
                </span>
              </h1>
            </Link>

            <div className="block pl-5">
              <a href="https://earthobservations.org/" target="_blank" rel="noopener noreferrer">
                {isDark && <LogoGeoWhite />}
                {!isDark && <LogoGeo />}
              </a>
            </div>
          </div>

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
        </div>
      </div>
    </header>
  );
};
