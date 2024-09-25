"use client";

import { ColumnDef } from "@tanstack/react-table";
import { FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";

import { Dataset } from "@/types/dataset";

export const columns: ColumnDef<Dataset>[] = [
  {
    accessorKey: "title",
    header: "Title",
    minSize: 260,
    maxSize: 260,
  },
  {
    accessorKey: "published_year",
    header: "Published Year",
    minSize: 150,
    maxSize: 150,
  },
  {
    accessorKey: "provider",
    header: "Provider",
  },
  {
    accessorKey: "URL",
    header: "Link",
    minSize: 120,
    maxSize: 120,
    enableSorting: false,
    cell: (cell) => (
      <a
        href={cell.row.getValue("URL")}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1"
      >
        <span>Dataset</span>
        <FiArrowUpRight className="h-5 w-5" />
      </a>
    ),
  },
  {
    id: "expanded",
    minSize: 60,
    maxSize: 60,
    cell: ({ row }) => (
      <button
        onClick={row.getToggleExpandedHandler()}
        className="mt-1 block h-4 w-4 overflow-hidden"
      >
        {row.getIsExpanded() && <FiChevronUp className="h-6 w-6 -translate-x-1 -translate-y-1" />}
        {!row.getIsExpanded() && (
          <FiChevronDown className="h-6 w-6 -translate-x-1 -translate-y-1" />
        )}
      </button>
    ),
  },
];
