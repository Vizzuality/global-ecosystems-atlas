import Image from "next/image";
import Link from "next/link";

import { FiSearch } from "react-icons/fi";
import { PiBinoculars, PiFlashlight } from "react-icons/pi";

import { Footer } from "@/containers/footer";
import { Header } from "@/containers/header";

import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/h1";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <Section
        hero
        className="relative z-10 flex grow flex-col items-center justify-center bg-left-top bg-no-repeat"
      >
        <div className="container relative z-20 flex flex-col sm:items-center sm:justify-center">
          <H1 className="sm:text-center">Page not found</H1>
          <p className="max-w-[600px] pt-8 text-left text-xl font-medium text-navy-600 sm:text-center sm:text-2xl">
            The page you are looking for was moved, removed, renamed or might never existed.
          </p>

          <Link href="/" className="mt-14">
            <Button size="lg" variant="outline">
              Back to homepage
            </Button>
          </Link>
        </div>
        <div className="absolute left-1/3 top-40 z-10 hidden h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg xl:flex 2xl:top-1/4">
          <FiSearch className="h-8 w-8" />
        </div>
        <div className="absolute left-1/4 top-3/4 z-10 hidden h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg xl:flex">
          <PiBinoculars className="h-8 w-8" />
        </div>
        <div className="absolute left-3/4 top-2/4 z-10 hidden h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg xl:flex">
          <PiFlashlight className="h-8 w-8 rotate-[-135deg]" />
        </div>

        <div className="absolute bottom-0 left-0 z-0 h-full w-1/2">
          <Image src="/404.svg" alt="404" fill className="object-cover object-right" />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
