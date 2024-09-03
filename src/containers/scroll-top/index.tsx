"use client";

import { useEffect } from "react";

import { usePathname } from "next/navigation";

export const ScrollTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return null;
};
