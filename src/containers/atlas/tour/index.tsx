import { useCallback, useMemo, useState } from "react";

import { useCookies } from "react-cookie";
import { CallBackProps, Step } from "react-joyride";

import dynamic from "next/dynamic";
import Image from "next/image";

import { useAtom } from "jotai";

import { tourAtom } from "@/app/(atlas)/atlas/store";

import { TourTooltip } from "@/containers/atlas/tour/tooltip";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const JoyRideNoSSR = dynamic(() => import("react-joyride"), { ssr: false });
const STEPS: Step[] = [
  {
    target: "#tour-atlas",
    title: "Search by countries or territories",
    content: `
It allows users to refine global information to focus on specific countries or territories. By default, the tool provides a broad overview of global data. When you search by country, the information is customised to provide detailed insights specific to that nation.
    `,
    placement: "right-start",
    disableBeacon: true,
  },
  {
    target: "#tour-atlas-filters",
    title: "Filters",
    content: `
They help you customise and refine the data displayed on the map based on 3 categories, realms, biomes, and ecosystem groups. While realms represent broad categories or large regions within the dataset, ecosystems groups categorise specific types of ecosystems within biomes or realms.

As you select or deselect filters, the results display updates immediately. This allows you to see the impact of your choices in real-time.
    `,
    placement: "right-start",
    disableBeacon: true,
  },
  {
    target: "#tour-atlas-ecosystems",
    title: "Ecosysytem functional groups",
    content: `
Here’s a view of **ecosystem groups categorised by realms and biomes**, with a focus on those that are threatened.

Select any of the ecosystems listed to get more detailed information about them.
    `,
    placement: "right-start",
    disableBeacon: true,
  },
  {
    target: "#tour-atlas-layers",
    title: "Layers",
    content: `
They allow to **visualise and analyse different types of spatial information** by overlaying various layers on a base map, changing the order, playing with opacity, switching off/on, and more.

Start by choosing from realms, biomes or ecosystems groups to narrow down the scope of your map view. Once selected, you can further refine your view by toggling Data status or Contextual layers.
    `,
    placement: "right-start",
    disableBeacon: true,
  },
  {
    target: "#tour-atlas-expand",
    title: "Expandable sidebar",
    content: `
An expandable and collapsible sidebar is designed to optimise screen real estate and enhance navigation. **With the sidebar expanded, users can see all menu items with descriptive text.**
    `,
    placement: "right-end",
    disableBeacon: true,
  },
  {
    target: "#tour-atlas-basemap",
    title: "Basemap settings",
    content: `
Select your preferred basemap based on your current needs or activity: **Default**, **Terrain**, and **Satellite**.
    `,
    placement: "left-start",
    disableBeacon: true,
  },
  {
    target: "#tour-atlas-share",
    title: "Share or embed a view",
    content: `
Sharing content with your network and embedding on your website is quick and easy!

**Tips for effective sharing**

- **Add personal touches**: Customize your messages to make them more engaging.
- **Use relevant hashtags**: When sharing on social media, include hashtags to increase visibility.
- **Test embedded content**: Ensure the embedded view displays correctly on your website.
    `,
    placement: "left-start",
    disableBeacon: true,
  },
  {
    target: "#tour-atlas-feedback",
    title: "Give feedback",
    content: `
Provide **thoughts or suggestions to help us understand your experience** and we will make necessary adjustments to enhance the quality and effectiveness of the platform.
    `,
    placement: "left-start",
    disableBeacon: true,
  },
];

export const AtlasTour = () => {
  const [tour, setTour] = useAtom(tourAtom);
  const [run, setRun] = useState(false);

  const [cookies, setCookies] = useCookies(["welcome", "tour"]);

  const handleCallback = useCallback(
    (data: CallBackProps) => {
      if (data.status === "finished" || data.status === "skipped" || data.status === "error") {
        setRun(false);
      }
    },
    [setRun],
  );

  const TOUR = useMemo(() => {
    if (!cookies.welcome) return false;

    if (tour) return tour;

    if (cookies.tour) return false;

    return tour || !cookies.tour;
  }, [tour, cookies]);

  return (
    <>
      <Dialog open={TOUR} onOpenChange={setTour}>
        <DialogContent className="p-10 2xl:p-14">
          <div className="-mx-10 2xl:-mx-14">
            <Image
              src="/atlas/tour.webp"
              alt="Global Ecosystems Atlas tour"
              width={2144}
              height={871}
            />
          </div>
          <div className="space-y-2 text-center">
            <h2 className="text-xl font-bold">Introducing Global Ecosystems Atlas</h2>
            <p className="text-sm leading-normal">
              This tour is a walkthrough of the Atlas key features and will help you understand what
              you can do with the platform.
            </p>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            <Button
              variant="default"
              className="px-5"
              onClick={() => {
                setRun(true);
                setTour(false);
                setCookies("tour", true);
              }}
            >
              Show me
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <JoyRideNoSSR
        steps={STEPS}
        tooltipComponent={TourTooltip}
        continuous
        key="tour"
        run={run}
        spotlightPadding={4}
        locale={{
          back: "Previous",
          last: "Finish",
        }}
        styles={{
          overlay: {
            maxHeight: "100vh",
          },
        }}
        floaterProps={{
          disableAnimation: true,
          eventDelay: 0,
          styles: {
            arrow: {
              length: 8,
              spread: 16,
            },
          },
        }}
        disableScrolling
        callback={handleCallback}
      />
    </>
  );
};
