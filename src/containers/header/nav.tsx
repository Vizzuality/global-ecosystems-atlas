import { PropsWithChildren } from "react";

import Link, { LinkProps } from "next/link";

import Hamburger from "hamburger-react";
import { useAtom, useSetAtom } from "jotai";
import { FiArrowRight } from "react-icons/fi";

import { cn } from "@/lib/utils";

import { menuOpenAtom } from "@/app/store";

const NavItem = (props: PropsWithChildren<LinkProps>) => {
  const setOpen = useSetAtom(menuOpenAtom);

  return (
    <Link
      href={props.href}
      className="inline-flex items-center space-x-6 text-4xl font-semibold tracking-wide text-navy-700 hover:text-navy-500"
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

      <div className="container">
        <nav
          className={cn({
            "flex flex-col gap-8 p-16 transition-transform": true,
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
      </div>
    </div>
  );
};
