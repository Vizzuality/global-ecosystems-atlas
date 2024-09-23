import { ReactNode } from "react";

import { CollapsibleProps } from "@radix-ui/react-collapsible";
import { FiChevronDown } from "react-icons/fi";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export interface FilterItemProps extends CollapsibleProps {
  trigger: ReactNode;
  component: ReactNode;
}

export const FilterItem = ({ trigger, component, ...rest }: FilterItemProps) => {
  return (
    <Collapsible className="border-t border-neutral-200 py-4" {...rest}>
      <CollapsibleTrigger className="flex w-full items-center justify-between gap-2 text-sm font-semibold uppercase">
        {trigger}
        <FiChevronDown className="h-4 w-4" />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3">{component}</CollapsibleContent>
    </Collapsible>
  );
  return <div>Filter Item</div>;
};
