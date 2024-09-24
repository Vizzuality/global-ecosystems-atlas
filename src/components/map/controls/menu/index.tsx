import Hamburger from "hamburger-react";
import { useAtom } from "jotai";

import { cn } from "@/lib/utils";

import { menuOpenAtom } from "@/app/store";

export const MenuControl = () => {
  const [open, setOpen] = useAtom(menuOpenAtom);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <button
      type="button"
      aria-label="menu"
      className={cn({
        "relative mb-2 h-12 w-12 rounded-full outline outline-1": true,
        "bg-navy-700 outline-navy-700": true,
      })}
      onClick={handleOpen}
    >
      <Hamburger
        color={cn({
          "#FFF": true,
        })}
        size={24}
        toggled={open}
        rounded
      />
    </button>
  );
};
