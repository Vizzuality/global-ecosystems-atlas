"use client";
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
      <Section hero className="relative min-h-0 bg-navy-700 lg:pb-56">
        <div className="container">
          <Grid>
            <div className="col-span-12 lg:col-span-6 lg:col-start-2">
              <div className="space-y-10 lg:space-y-16">
                <H1 className="text-white">A tool to support environmental initiatives</H1>
                <div className="space-y-8 text-white">
                  <p className="text-xl">
                    This is an intro copy of the section, let&apos;s come up with some content
                    sequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </div>

        <nav className="absolute bottom-0 left-0 w-full">
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
                      href="/data/methodology"
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
                      href="/data/how-to-use-the-data"
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
                      href="/data/sources-catalogue"
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
                      href="/data/questions-and-answers"
                    >
                      Questions & Answers
                    </Link>
                  </li>
                </ul>
              </div>
            </Grid>
          </div>
        </nav>
      </Section>
      {children}
    </>
  );
}
