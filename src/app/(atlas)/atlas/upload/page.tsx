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
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

export default function AtlasUploadPage() {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>
          Upload area
          <Badge variant="alert" className="relative normal-case lg:-top-0.5">
            Coming soon
          </Badge>
        </AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>
        <div className="space-y-12">
          <div className="space-y-8">
            <div className="prose prose-sm">
              <p className="font-medium">
                Upload your own shapefile (learn more about shapefiles{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Shapefile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  here
                </a>
                ).
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col items-center gap-6 rounded-xl border border-dashed border-neutral-300 px-11 py-9">
                <Image
                  src="/atlas/upload.svg"
                  width={159}
                  height={108}
                  alt="Upload area"
                  priority
                />
                <div className="space-y-2 text-center text-xs">
                  <p className="font-medium">
                    <strong>Drag and drop</strong> your shapefile or{" "}
                    <strong className="underline">click here</strong> to upload it.
                  </p>
                  <p className="text-navy-400">{`Recommended file size < 1 MB`}</p>
                </div>
              </div>
              <p className="font-emdium text-center text-xs text-navy-400">
                By uploading data you agree to the Global Ecosystems Altas Terms of service
              </p>
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
