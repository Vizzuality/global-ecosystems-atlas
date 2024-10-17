import { Step } from "react-joyride";

import dynamic from "next/dynamic";

import { TourTooltip } from "@/containers/atlas/tour/tooltip";

const JoyRideNoSSR = dynamic(() => import("react-joyride"), { ssr: false });
const STEPS: Step[] = [
  {
    target: "#onboard-atlas",
    title: "Search by countries or territories",
    content: `
It allows users to refine global information to focus on specific countries or territories. By default, the tool provides a broad overview of global data. When you search by country, the information is customised to provide detailed insights specific to that nation.
    `,
    placement: "right-start",
    disableBeacon: true,
  },
  {
    target: "#onboard-atlas-filters",
    title: "Filters",
    content: `
They help you customise and refine the data displayed on the map based on 3 categories, realms, biomes, and ecosystem groups. While realms represent broad categories or large regions within the dataset, ecosystems groups categorise specific types of ecosystems within biomes or realms.

As you select or deselect filters, the results display updates immediately. This allows you to see the impact of your choices in real-time.
    `,
    placement: "right-start",
    disableBeacon: true,
  },
  {
    target: "#onboard-atlas-ecosystems",
    title: "Ecosysytem functional groups",
    content: `
Here’s a view of **ecosystem groups categorised by realms and biomes**, with a focus on those that are threatened.

Select any of the ecosystems listed to get more detailed information about them.
    `,
    placement: "right-start",
    disableBeacon: true,
  },
  {
    target: "#onboard-atlas-layers",
    title: "Layers",
    content: `
They allow to **visualise and analyse different types of spatial information** by overlaying various layers on a base map, changing the order, playing with opacity, switching off/on, and more.

Start by choosing from realms, biomes or ecosystems groups to narrow down the scope of your map view. Once selected, you can further refine your view by toggling Data status or Contextual layers.
    `,
    placement: "right-start",
    disableBeacon: true,
  },
];

export const AtlasTour = () => {
  return <JoyRideNoSSR steps={STEPS} tooltipComponent={TourTooltip} continuous key="tour" />;
};
