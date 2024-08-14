"use client";

import Link from "next/link";

import { Squash as Hamburger } from "hamburger-react";
import { useAtom } from "jotai";

import { menuOpenAtom } from "@/app/store";

import { Nav } from "@/containers/header/nav";

import { Logo } from "./logo";

export const Header = () => {
  const [open, setOpen] = useAtom(menuOpenAtom);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="py-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="flex items-center space-x-6">
              <Logo className="fill-navy-700" />
              <span className="rounded border border-navy-700 px-2 py-1 text-2xs font-bold uppercase italic">
                Beta
              </span>
            </h1>
          </Link>

          <button
            type="button"
            className="h-12 w-12 rounded-full bg-navy-700 outline outline-1 outline-navy-700"
            onClick={handleOpen}
          >
            <Hamburger color="#FFF" size={24} toggled={open} rounded />
          </button>

          <Nav />
        </div>
      </div>
    </header>
  );
};
