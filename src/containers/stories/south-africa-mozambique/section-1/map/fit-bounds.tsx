import { useEffect } from "react";

import { LngLatBoundsLike, useMap } from "react-map-gl";

import { usePreviousDifferent } from "rooks";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { STEPS } from "@/containers/stories/south-africa-mozambique/section-1/map";
import { useBbox } from "@/containers/stories/south-africa-mozambique/utils";

export const FitBounds = () => {
  const [step] = useSyncStep();
  const { current } = useMap();

  const s = Math.min(STEPS.length - 1, step);
  const prevStep = usePreviousDifferent(s);

  const STEP = STEPS[s];

  const BBOX = useBbox({ locations: STEP.locations });

  useEffect(() => {
    if (current && BBOX && prevStep !== s) {
      current.fitBounds(BBOX as LngLatBoundsLike, {
        padding: 50,
        duration: 1000,
      });
    }
  }, [current, s, prevStep, BBOX]);

  return null;
};
