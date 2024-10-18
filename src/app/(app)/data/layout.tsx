"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Grid } from "@/components/ui/grid";
import { H1 } from "@/components/ui/h1";
import { Section } from "@/components/ui/section";

export default function DataLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

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
      <nav id="tabs" className="w-full bg-navy-700 pt-8 lg:block">
        <div className="container">
          <Grid>
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <ul className="flex rounded-t-md bg-navy-600">
                <li className="basis-1/4">
                  <Link
                    className={cn({
                      "block rounded-t-md py-4 text-center text-sm font-semibold uppercase text-white/70 transition-colors":
                        true,
                      "bg-white text-navy-700": pathname === "/data/methodology",
                      "hover:bg-white/30": pathname !== "/data/methodology",
                    })}
                    href="/data/methodology#tabs"
                  >
                    Methodology
                  </Link>
                </li>
                <li className="basis-1/4">
                  <Link
                    className={cn({
                      "block rounded-t-md py-4 text-center text-sm font-semibold uppercase text-white/70 transition-colors":
                        true,
                      "bg-white text-navy-700": pathname === "/data/how-to-use-the-data",
                      "hover:bg-white/30": pathname !== "/data/how-to-use-the-data",
                    })}
                    href="/data/how-to-use-the-data#tabs"
                  >
                    How to use the data
                  </Link>
                </li>
                <li className="basis-1/4">
                  <Link
                    className={cn({
                      "block rounded-t-md py-4 text-center text-sm font-semibold uppercase text-white/70 transition-colors":
                        true,
                      "bg-white text-navy-700": pathname === "/data/sources-catalogue",
                      "hover:bg-white/30": pathname !== "/data/sources-catalogue",
                    })}
                    href="/data/sources-catalogue#tabs"
                  >
                    Sources Catalogue
                  </Link>
                </li>
                <li className="basis-1/4">
                  <Link
                    className={cn({
                      "block rounded-t-md py-4 text-center text-sm font-semibold uppercase text-white/70 transition-colors":
                        true,
                      "bg-white text-navy-700": pathname === "/data/questions-and-answers",
                      "hover:bg-white/30": pathname !== "/data/questions-and-answers",
                    })}
                    href="/data/questions-and-answers#tabs"
                  >
                    Questions & Answers
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>
        </div>
      </nav>
      {children}
    </>
  );
}
