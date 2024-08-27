"use client";

import { useCookies } from "react-cookie";

import { cn } from "@/lib/utils";

import { Logo } from "@/containers/logo";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Welcome = () => {
  const [cookies, setCookie] = useCookies(["welcome"]);

  const handleAccept = () => {
    setCookie("welcome", true);
  };

  return (
    <Dialog open={!cookies.welcome}>
      <DialogContent
        aria-describedby="welcome-message"
        close={false}
        className="overflow-hidden border-none p-0 lg:max-w-[900px]"
      >
        <ScrollArea className="max-h-screen">
          <div className="space-y-10 p-10 md:space-y-16 lg:p-16">
            <div className="flex w-full items-center justify-center space-x-6">
              <Logo className="block fill-navy-700" />
              <span
                className={cn({
                  "rounded border border-navy-700 px-2 py-1 text-2xs font-bold uppercase italic":
                    true,
                  "border-navy-700 text-navy-700": true,
                })}
              >
                Beta
              </span>
            </div>

            <div className="space-y-10">
              <DialogDescription className="rounded-lg bg-lightblue-50 p-8 text-center font-medium">
                Welcome to the Global Ecosystems Atlas Beta Release. We&rsquo;re thrilled to have
                you as part of our community during this early stage. This version serves as a
                prototype, allowing us to explore and refine the features that will be included in
                the fully functional platform. We appreciate your participation and feedback as we
                work to make the site as effective and valuable as possible for our users.
              </DialogDescription>

              <div className="space-y-2">
                <DialogTitle className="text-center text-base font-bold">
                  What does Beta mean?
                </DialogTitle>
                <DialogDescription className="text-center font-medium">
                  The <strong>Beta</strong> release means this version of the platform is still
                  under development. It&apos;s a preliminary version that lets you explore core
                  features and provide feedback. Your input will help us refine and improve the
                  final product. Some functionalities may not be fully operational, and the data is
                  incomplete.
                </DialogDescription>
              </div>
            </div>

            <div className="flex justify-center">
              <Button size="lg" className="px-24" onClick={handleAccept}>
                Explore
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
