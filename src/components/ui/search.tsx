"use client";

import * as React from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Command as CommandPrimitive } from "cmdk";
import { FiSearch, FiX } from "react-icons/fi";

import { cn } from "@/lib/utils";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverTrigger } from "@/components/ui/popover";

export type Option = {
  label: string;
  value: string;
  key: string;
  bounds: number[];
};

export type SearchProps<T> = {
  initialValue?: string;
  value?: string;
  open: boolean;
  options: T[];
  placeholder?: string;
  onChange: (e: string) => void;
  onSelect: (o: T | null) => void;
};

export function Search<T extends Option>({
  value,
  open,
  options,
  placeholder,
  onChange,
  onSelect,
}: SearchProps<T>) {
  const [opened, setOpened] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Popover onOpenChange={setOpened} open={opened}>
      <PopoverTrigger
        ref={triggerRef}
        className="relative flex w-full rounded-md border border-navy-100 bg-white px-9 pr-11"
      >
        <FiSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
        <div className="flex h-10 w-full min-w-0 items-center overflow-hidden">
          <span
            className={cn(
              "flex h-10 w-full min-w-0 items-center overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-sm leading-none",
              !value && "text-navy-500",
            )}
          >
            {value || placeholder || "Search..."}
          </span>
        </div>

        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {value && (
            <span
              role="button"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary p-0.5 hover:text-navy-500 focus:outline-none"
              onClick={() => {
                onSelect(null);
              }}
            >
              <FiX className="text-current" />
            </span>
          )}
        </div>
      </PopoverTrigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          updatePositionStrategy="always"
          sideOffset={(triggerRef.current?.getBoundingClientRect()?.height || 0) * -1}
          className={cn(
            "z-50 w-popover-width overflow-hidden rounded-md border border-navy-100 bg-white p-0 text-popover-foreground shadow-md outline-none",
          )}
        >
          <Command>
            <div className="relative w-full" cmdk-input-wrapper="">
              <FiSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />

              <CommandPrimitive.Input
                value={value}
                placeholder={placeholder ?? "Search..."}
                className={cn(
                  "flex h-10 w-full bg-transparent py-0 pl-9 pr-11 text-sm outline-none placeholder:text-navy-500 disabled:cursor-not-allowed disabled:opacity-50",
                )}
                onValueChange={(e) => {
                  onChange(e);
                }}
              />

              <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center space-x-2">
                {value && (
                  <span
                    role="button"
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary p-0.5 hover:text-navy-500 focus:outline-none"
                    onClick={() => {
                      onSelect(null);
                    }}
                  >
                    <FiX className="text-current" />
                  </span>
                )}
              </div>
            </div>

            <CommandList>
              {open && !!options.length && (
                <CommandGroup className="border-t border-navy-100 px-1">
                  {options.map((o) => (
                    <CommandItem
                      key={o.key + o.value}
                      value={o.label}
                      className="px-4 py-1.5 pl-8 text-sm leading-5 data-[selected='true']:bg-lightblue-50"
                      onSelect={() => onSelect(o)}
                    >
                      {o.label} <span className="hidden">({o.value})</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              {open && !!value && <CommandEmpty>No results found</CommandEmpty>}
            </CommandList>
          </Command>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </Popover>
  );
}
