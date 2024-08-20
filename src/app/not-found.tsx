import Link from "next/link";

import { Header } from "@/containers/header";

import { Button } from "@/components/ui/button";
import { H1 } from "@/components/ui/h1";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="flex grow flex-col items-center justify-center bg-left-top bg-no-repeat">
        <div className="container flex flex-col sm:items-center sm:justify-center">
          <H1>Not found</H1>
          <p className="pt-8 text-xl font-medium text-navy-500 sm:text-2xl">
            The page you are looking for does not exist.
          </p>

          <Link href="/" className="mt-14">
            <Button size="lg" variant="default">
              Go back to home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
