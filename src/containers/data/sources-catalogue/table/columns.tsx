"use client";

import { ColumnDef } from "@tanstack/react-table";
import { FiArrowUpRight } from "react-icons/fi";

import { Dataset } from "@/types/dataset";

export const columns: ColumnDef<Dataset>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "published_year",
    header: "Published Year",
  },
  {
    accessorKey: "provider",
    header: "Provider",
  },
  {
    accessorKey: "URL",
    header: "Link",
    enableSorting: false,
    cell: (cell) => (
      <a
        href={cell.row.getValue("URL")}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1"
      >
        <span>Dataset</span>
        <FiArrowUpRight className="h-6 w-6" />
      </a>
    ),
  },
];
