import { PropsWithChildren } from "react";

import Link, { LinkProps } from "next/link";

import Hamburger from "hamburger-react";
import { useAtom, useSetAtom } from "jotai";
import { FiArrowRight } from "react-icons/fi";
import { PiFacebookLogoLight, PiLinkedinLogoLight, PiXLogoLight } from "react-icons/pi";

import { cn } from "@/lib/utils";

import { menuOpenAtom } from "@/app/store";

import { Button } from "@/components/ui/button";

const NavItem = (props: PropsWithChildren<LinkProps>) => {
  const setOpen = useSetAtom(menuOpenAtom);

  return (
    <Link
      href={props.href}
      className="inline-flex items-center space-x-6 text-4xl font-semibold text-navy-700 hover:text-navy-500"
      onClick={() => setOpen(false)}
    >
      <FiArrowRight />
      <span className="block">{props.children}</span>
    </Link>
  );
};

export const Nav = () => {
  const [open, setOpen] = useAtom(menuOpenAtom);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={cn({
        "pointer-events-none fixed left-0 top-0 z-10 h-screen w-full bg-white opacity-0 transition-all":
          true,
        "pointer-events-auto opacity-100": open,
      })}
    >
      <div className="container">
        <div className="flex items-center justify-end py-8">
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white outline outline-1 outline-navy-700"
            onClick={handleOpen}
          >
            <Hamburger color="#002848" size={24} toggled={open} rounded />
          </button>
        </div>
      </div>

      <div className="container p-16">
        <nav
          className={cn({
            "flex flex-col gap-8 transition-transform": true,
            "-translate-y-4": !open,
            "translate-y-0": open,
          })}
        >
          <NavItem href="/">Homepage</NavItem>
          <NavItem href="/atlas">Atlas</NavItem>
          <NavItem href="/about-us">About us</NavItem>
          <NavItem href="/methodology">Methodology</NavItem>
          <NavItem href="/resources">Resources</NavItem>
          <NavItem href="/datasets">Datasets Catalogue</NavItem>
        </nav>

        <div
          className={cn({
            "flex justify-between pt-28 opacity-0 transition-all delay-100": true,
            "-translate-y-4 opacity-0": !open,
            "translate-y-0 opacity-100": open,
          })}
        >
          <div className="space-y-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider">Follow us</h3>
            <div className="flex gap-6">
              <a target="_blank" href="https://twitter.com" className="block p-2">
                <PiXLogoLight className="h-8 w-8" />
              </a>
              <a target="_blank" href="https://linkedin.com" className="block p-2">
                <PiLinkedinLogoLight className="h-8 w-8" />
              </a>
              <a target="_blank" href="https://facebook.com" className="block p-2">
                <PiFacebookLogoLight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-right text-xs font-semibold uppercase tracking-wider">Contact</h3>
            <Link href="/contact-us" className="block">
              <Button className="h-auto space-x-2 px-8 py-4 text-base font-semibold">
                <span>Let&apos;s talk</span>
                <FiArrowRight className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
