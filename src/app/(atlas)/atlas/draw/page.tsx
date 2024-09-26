import { Metadata } from "next";

import Image from "next/image";

import { FiAlertTriangle } from "react-icons/fi";

import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";
import { NewsletterForm } from "@/containers/newsletter/form";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

export const metadata: Metadata = {
  title: "Atlas Draw | Global Ecosystems Atlas",
  description: "Atlas Draw | Global Ecosystems Atlas description",
};

export default async function AtlasDrawPage() {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>
          Draw a polygon
          <Badge variant="alert" className="relative -top-0.5 normal-case">
            Coming soon
          </Badge>
        </AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>
        <div className="space-y-12">
          <div className="space-y-8">
            <div className="prose prose-sm">
              <p className="font-medium">
                Draw the area you want to analyze on the map. Make sure it&rsquo;s smaller than
                35,000 km², roughly the size of Belgium.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image src="/atlas/draw.svg" width={177} height={137} alt="Draw a polygon" priority />
            </div>
            <div className="flex items-center justify-center">
              <Button disabled>Start drawing</Button>
            </div>
          </div>

          <div className="space-y-3 rounded-lg border border-alert-800 bg-alert-50 px-6 py-5">
            <FiAlertTriangle className="h-6 w-6" />
            <div className="space-y-2">
              <p className="text-sm font-medium">
                This functionality is not yet developed and may take some time to become available.
              </p>
              <p className="text-sm font-medium">
                Subscribe to{" "}
                <Dialog>
                  <DialogTrigger>
                    <strong className="underline">stay tuned.</strong>
                  </DialogTrigger>
                  <DialogContent aria-describedby="newsletter-form">
                    <DialogDescription />
                    <NewsletterForm />
                  </DialogContent>
                </Dialog>
              </p>
            </div>
          </div>
        </div>
      </AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
