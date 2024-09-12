"use client";

import { useRef, useState } from "react";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { useSyncSearchParams } from "@/app/(atlas)/atlas/store";

import { Button } from "@/components/ui/button";

export const MapShare = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [copied, setCopied] = useState(false);

  const pathname = usePathname();
  const searchParams = useSyncSearchParams();

  const handleCopy = () => {
    if (!ref.current) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    navigator.clipboard.writeText(ref.current.textContent ?? "");
    setCopied(true);

    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold uppercase">Map settings</h3>

      <div className="flex flex-col items-end gap-2">
        <p
          ref={ref}
          className={cn({
            "break-all rounded-lg border border-navy-100 p-2 text-xs leading-4": true,
            "bg-lightblue-50": copied,
          })}
        >
          {`${window.location.origin}${pathname}${searchParams}`}
        </p>
        <Button size="sm" variant="default" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
};
