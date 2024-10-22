"use client";
import { ChangeEvent } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { FiChevronDown } from "react-icons/fi";

import { cn } from "@/lib/utils";

import { Grid } from "@/components/ui/grid";
import { H1 } from "@/components/ui/h1";
import { Section } from "@/components/ui/section";

const ITEMS = [
  {
    title: "Methodology",
    href: "/data/methodology",
  },
  {
    title: "How to use the data",
    href: "/data/how-to-use-the-data",
  },
  {
    title: "Sources Catalogue",
    href: "/data/sources-catalogue",
  },
  {
    title: "Questions & Answers",
    href: "/data/questions-and-answers",
  },
];

export default function DataLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { push } = useRouter();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    push(event.target.value);
  };

  return (
    <>
      <Section hero className="relative min-h-0 bg-navy-700">
        <div className="container">
          <Grid>
            <div className="col-span-12 lg:col-span-6 lg:col-start-2">
              <div className="space-y-10 lg:space-y-16">
                <header className="space-y-2">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
                    Data
                  </h2>
                  <H1 className="text-white">Understand the data behind the platform</H1>
                </header>
                <div className="space-y-8 text-white">
                  <p className="text-xl">
                    Explore how ecosystems are mapped, learn how to use the data, browse our data
                    sources, and find answers to your questions.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:col-span-5 lg:col-start-8 xl:block">
              <Image src="/data/hero.png" width={566} height={563} alt="Data" priority />
            </div>
          </Grid>
        </div>
      </Section>

      <div className="relative z-10 -mt-16 block bg-navy-700 py-8 lg:hidden" tabIndex={1}>
        <div className="container space-y-1">
          <label htmlFor="tabs-mobile" className="block text-sm font-medium text-white">
            Select category:
          </label>
          <div className="relative">
            <span className="flex w-full items-center justify-between rounded bg-white px-3 py-2 text-navy-700">
              {ITEMS.find((item) => item.href === pathname)?.title}

              <FiChevronDown className="h-5 w-5" />
            </span>
            <select
              id="tabs-mobile"
              className="absolute left-0 top-0 h-full w-full opacity-0"
              defaultValue={pathname}
              onChange={handleChange}
            >
              {ITEMS.map((item, index) => (
                <option key={index} value={item.href}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <nav id="tabs" className="relative z-10 hidden w-full bg-navy-700 pt-8 lg:block">
        <div className="container">
          <Grid>
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <ul className="flex rounded-t-md bg-navy-600">
                {ITEMS.map((item, index) => (
                  <li key={index} className="basis-1/4">
                    <Link
                      className={cn({
                        "block rounded-t-md py-4 text-center text-sm font-semibold uppercase text-white/70 transition-colors":
                          true,
                        "bg-white text-navy-700": pathname === item.href,
                        "hover:bg-white/30": pathname !== item.href,
                      })}
                      href={`${item.href}#tabs`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </div>
      </nav>

      <div className="-mt-8">{children}</div>
    </>
  );
}
