"use client";

import { PropsWithChildren, useEffect } from "react";

import { RemoveScroll } from "react-remove-scroll";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import Hamburger from "hamburger-react";
import { useAtom, useSetAtom } from "jotai";
import { FiArrowRight } from "react-icons/fi";
import {
  PiFacebookLogoLight,
  PiInstagramLogoLight,
  PiLinkedinLogoLight,
  PiXLogoLight,
  PiYoutubeLogoLight,
} from "react-icons/pi";

import { NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";

import { menuOpenAtom } from "@/app/store";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const NavItem = (props: PropsWithChildren<LinkProps>) => {
  const pathname = usePathname();
  const setOpen = useSetAtom(menuOpenAtom);

  return (
    <Link
      href={props.href}
      className="group inline-flex items-center space-x-3 text-2xl font-semibold text-navy-700 2xl:space-x-6 2xl:text-4xl"
      scroll={false}
      onClick={() => {
        if (pathname.includes(`${props.href}`) || `${props.href}`.includes(pathname)) {
          setOpen(false);
        }
      }}
    >
      <FiArrowRight className="shrink-0 transition-transform group-hover:translate-x-1 2xl:group-hover:translate-x-2" />
      <span className="block">{props.children}</span>
    </Link>
  );
};

export const Nav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useAtom(menuOpenAtom);

  const handleOpen = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);

    return () => {
      setOpen(false);
    };
  }, [pathname, setOpen]);

  return (
    <div
      className={cn({
        "pointer-events-none fixed left-0 top-0 z-40 h-dvh w-full bg-white opacity-0 transition-all":
          true,
        "pointer-events-auto opacity-100": open,
      })}
    >
      <RemoveScroll enabled={open} forwardProps>
        <ScrollArea className="h-full">
          <div className="container">
            <div className="flex items-center justify-end py-4 lg:py-8">
              <button
                type="button"
                aria-label="menu"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white outline outline-1 outline-navy-700"
                onClick={handleOpen}
              >
                <Hamburger color="#002848" size={24} toggled={open} rounded />
              </button>
            </div>
          </div>

          <div className="container pb-4 2xl:p-10">
            <nav
              className={cn({
                "transition-transform": true,
                "-translate-y-4": !open,
                "translate-y-0": open,
              })}
            >
              <ul className="flex flex-col gap-2">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <NavItem href={item.href}>{item.name}</NavItem>

                    {item.children && (
                      <ul className="ml-12 mt-2 flex flex-col gap-2 2xl:ml-16">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavItem href={child.href} scroll={child.scroll ?? true}>
                              {child.name}
                            </NavItem>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div
              className={cn({
                "flex flex-col justify-between gap-8 pt-16 opacity-0 transition-all md:flex-row 2xl:pt-20":
                  true,
                "-translate-y-4 opacity-0": !open,
                "translate-y-0 opacity-100": open,
              })}
            >
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase">Follow us</h3>
                <ul className="flex gap-3 lg:gap-8">
                  <li>
                    <a
                      href="https://www.facebook.com/GroupOnEarthObservations"
                      target="_blank"
                      aria-label="facebook"
                      rel="noopener noreferrer"
                      className="block rounded-lg bg-white/40 p-2 transition-colors hover:bg-white/75"
                    >
                      <PiFacebookLogoLight className="h-8 w-8" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/geosec2025"
                      target="_blank"
                      aria-label="twitter"
                      rel="noopener noreferrer"
                      className="block rounded-lg bg-white/40 p-2 transition-colors hover:bg-white/75"
                    >
                      <PiXLogoLight className="h-8 w-8" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/group-on-earth-observations/"
                      target="_blank"
                      aria-label="linkedin"
                      rel="noopener noreferrer"
                      className="block rounded-lg bg-white/40 p-2 transition-colors hover:bg-white/75"
                    >
                      <PiLinkedinLogoLight className="h-8 w-8" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/grouponearthobservations/"
                      target="_blank"
                      aria-label="instagram"
                      rel="noopener noreferrer"
                      className="block rounded-lg bg-white/40 p-2 transition-colors hover:bg-white/75"
                    >
                      <PiInstagramLogoLight className="h-8 w-8" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCFJ97Bp2XXA5p7ik_wWSoqg"
                      target="_blank"
                      aria-label="youtube"
                      rel="noopener noreferrer"
                      className="block rounded-lg bg-white/40 p-2 transition-colors hover:bg-white/75"
                    >
                      <PiYoutubeLogoLight className="h-8 w-8" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase md:text-right">Contact</h3>
                <Link href="/contact" className="block">
                  <Button className="h-auto w-full space-x-2 text-base font-semibold md:w-auto">
                    <span>Let&apos;s talk</span>
                    <FiArrowRight className="h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollArea>
      </RemoveScroll>
    </div>
  );
};
