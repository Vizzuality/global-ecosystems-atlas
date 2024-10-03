import { PropsWithChildren } from "react";

import { FiInfo } from "react-icons/fi";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const WidgetInfo = ({ children }: PropsWithChildren) => {
  return (
    <Dialog>
      <DialogTrigger>
        <FiInfo className="h-5 w-5" />
      </DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
