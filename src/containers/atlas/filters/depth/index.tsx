import { formatNumber } from "@/lib/utils";

import { depthParser } from "@/app/(atlas)/atlas/parsers";
import { useSyncDepth } from "@/app/(atlas)/atlas/store";

import { Slider } from "@/components/ui/slider";

export const DepthTrigger = () => {
  return <div className="flex items-center gap-2">Elevation</div>;
};

export const DepthContent = () => {
  const [depth, setDepth] = useSyncDepth();

  const handleChange = (depth: number[]) => {
    setDepth(depth);
  };

  return (
    <div className="space-y-1.5 pt-3">
      <Slider
        value={depth}
        min={depthParser.defaultValue[0]}
        max={depthParser.defaultValue[1]}
        step={1}
        onValueChange={handleChange}
      />
      <div className="flex justify-between text-xs font-medium">
        <span>{formatNumber(depthParser.defaultValue[0])}m</span>
        <span>+{formatNumber(depthParser.defaultValue[1])}m</span>
      </div>
    </div>
  );
};
