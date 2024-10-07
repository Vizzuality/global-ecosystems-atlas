"use client";

import Link from "next/link";

import { FiChevronLeft } from "react-icons/fi";

import { useSyncSearchParams } from "@/app/(atlas)/atlas/store";

export const AtlasEcosysytemsDetailBack = () => {
  const searchParams = useSyncSearchParams();

  return (
    <Link href={`/atlas/ecosystems/${searchParams}`} className="flex gap-2">
      <FiChevronLeft className="mt-px h-5 w-5" /> List view of Ecosystem Groups
    </Link>
  );
};
