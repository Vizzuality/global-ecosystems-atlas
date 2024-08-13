"use client";
import Link from "next/link";

import { Squash as Hamburger } from "hamburger-react";

import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="py-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="flex items-center space-x-6">
              <Logo className="fill-navy-700" />
              <span className="rounded border border-navy-700 px-2 py-1 text-2xs font-bold uppercase italic tracking-wide">
                Beta
              </span>
            </h1>
          </Link>

          <button type="button" className="h-12 w-12 rounded-full bg-navy-700">
            <Hamburger color="#FFF" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};
