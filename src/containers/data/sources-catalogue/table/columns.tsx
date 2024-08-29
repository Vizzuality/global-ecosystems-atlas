"use client";

import { ColumnDef } from "@tanstack/react-table";
import { FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";

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
    size: 120,
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
  {
    id: "expanded",
    size: 60,
    cell: ({ row }) => (
      <button onClick={row.getToggleExpandedHandler()}>
        {row.getIsExpanded() && <FiChevronUp className="h-6 w-6" />}
        {!row.getIsExpanded() && <FiChevronDown className="h-6 w-6" />}
      </button>
    ),
  },
];
