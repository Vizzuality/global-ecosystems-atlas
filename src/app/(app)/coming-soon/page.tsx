import { Metadata } from "next";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Coming soon | Global Ecosystems Atlas",
  description: "Global Ecosystems Atlas Coming soon",
};

export default function ComingSoon() {
  return (
    <Section
      hero
      className="flex flex-col items-center justify-center bg-navy-700 bg-left-top bg-no-repeat"
      style={{
        backgroundImage: "url(/coming-soon.svg)",
        backgroundSize: "auto 100%",
      }}
    >
      <div className="container flex flex-col sm:items-center sm:justify-center">
        <h1 className="text-5xl font-semibold tracking-wide text-white sm:text-7xl">Coming soon</h1>
        <p className="pt-8 text-xl font-medium text-navy-100 sm:text-2xl">
          We’re working hard to bring you something amazing. Stay tuned!
        </p>

        <Link href="/" className="mt-14">
          <Button size="lg" variant="secondary">
            Go back to home
          </Button>
        </Link>
      </div>
    </Section>
  );
}
