import { TooltipRenderProps } from "react-joyride";

import { FiX } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Markdown } from "@/components/ui/markdown";

export const TourTooltip = (props: TooltipRenderProps) => {
  const { backProps, continuous, index, primaryProps, skipProps, step, tooltipProps } = props;

  return (
    <div className="max-w-lg rounded-lg bg-white px-6 py-4" {...tooltipProps}>
      <header className="flex items-center justify-between gap-6 border-b border-navy-100 pb-2">
        {step.title && <h4 className="text-lg font-bold">{step.title}</h4>}

        <button className="shrink-0" {...skipProps}>
          <FiX className="h-4 w-4" />
        </button>
      </header>

      <div className="space-y-6 pt-4">
        <div>
          {typeof step.content === "string" && (
            <Markdown className="prose prose-sm">{step.content}</Markdown>
          )}
        </div>

        <footer className="flex justify-end gap-2">
          {index > 0 && (
            <Button variant="outline" className="px-10" {...backProps}>
              {backProps.title}
            </Button>
          )}

          {continuous && (
            <Button variant="default" className="px-10" {...primaryProps}>
              {primaryProps.title}
            </Button>
          )}
        </footer>
      </div>
    </div>
  );
};
