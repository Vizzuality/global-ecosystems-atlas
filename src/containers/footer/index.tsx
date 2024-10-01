import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";
import {
  PiFacebookLogoLight,
  PiInstagramLogoLight,
  PiLinkedinLogoLight,
  PiXLogoLight,
  PiYoutubeLogoLight,
} from "react-icons/pi";

import { NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";

import { Logo } from "@/containers/logo";

import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-lightblue-50 py-16">
      <div className="container">
        <div className="flex justify-center lg:justify-start">
          <Logo className="fill-navy-700" />
        </div>
        <div className="flex flex-col items-center justify-between py-12 lg:flex-row">
          <ul className="flex flex-col space-y-16 text-sm font-medium lg:flex-row lg:space-x-16 lg:space-y-0">
            {NAV.map((item, i) => (
              <li
                key={item.href}
                className={cn({
                  "relative text-center lg:text-left": true,
                  "before:absolute before:-top-8 before:left-1/2 before:h-1 before:w-1 before:-translate-x-0.5 before:bg-white lg:before:-left-8 lg:before:top-1/2 lg:before:-translate-y-0.5":
                    i !== 0,
                })}
              >
                <Link href={item.href} scroll={true}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="mt-12 block w-full lg:mt-0 lg:w-auto">
            <Button size="lg" className="w-full">
              Let&apos;s talk
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-between space-y-10 border-t border-white pt-8 lg:flex-row lg:space-y-0">
          <div className="flex flex-col gap-10 lg:flex-row">
            <ul className="flex flex-col gap-5 sm:flex-row">
              {/* <li>
                <a
                  href="https://www.facebook.com/"
                  className="flex items-center justify-center space-x-1 text-xs font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiArrowUpRight className="h-4 w-4" />
                  <span>Google Earth Engine</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="flex items-center justify-center space-x-1 text-xs font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiArrowUpRight className="h-4 w-4" />
                  <span>ArcGIS</span>
                </a>
              </li> */}
              <li>
                <a
                  href="https://github.com/geo-global-ecosystem-atlas"
                  className="flex items-center justify-center space-x-1 text-xs font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiArrowUpRight className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-5 sm:flex-row">
              <li className="relative before:absolute before:-top-5 before:left-1/2 before:h-1 before:w-1 before:-translate-x-0.5 before:bg-white lg:before:-left-5 lg:before:top-1/2 lg:before:-translate-y-0.5">
                <Link
                  href="/privacy-policy"
                  className="flex items-center justify-center space-x-1 text-xs font-medium"
                >
                  <span>Privacy policy</span>
                </Link>
              </li>
            </ul>
          </div>

          <ul className="flex space-x-4 lg:space-x-8">
            <li>
              <a
                href="https://www.facebook.com/GroupOnEarthObservations"
                target="_blank"
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
                rel="noopener noreferrer"
                className="block rounded-lg bg-white/40 p-2 transition-colors hover:bg-white/75"
              >
                <PiYoutubeLogoLight className="h-8 w-8" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
