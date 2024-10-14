import { useEffect } from "react";

import { LngLatBoundsLike, useMap } from "react-map-gl";

import { usePreviousDifferent } from "rooks";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { STEPS } from "@/containers/stories/south-africa-mozambique/section-4/map";
import { useStep } from "@/containers/stories/south-africa-mozambique/utils";

import { useBbox } from "@/components/map/layer-manager/utils";

export const FitBounds = () => {
  const [step] = useSyncStep();
  const { current } = useMap();

  const s = useStep({
    steps: STEPS,
    step,
    offset: 5,
  });

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
