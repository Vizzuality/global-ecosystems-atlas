"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

import { cn } from "@/lib/utils";

import { DataPagination } from "@/containers/data/sources-catalogue/table/pagination";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DatasetTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DatasetTable<TData, TValue>({ columns, data }: DatasetTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      sorting: [
        {
          id: "title",
          desc: false,
        },
      ],
      pagination: {
        pageSize: 20,
      },
    },
  });

  const { pageIndex } = table.getState().pagination;
  const [sort] = table.getState().sorting;

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={cn("text-nowrap text-xs font-bold uppercase", {
                        "cursor-pointer hover:bg-slate-100": header.column.getCanSort(),
                      })}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <span className="flex items-center gap-1">
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}

                        {header.column.getIsSorted() && sort.desc && (
                          <FiArrowUp className="h-4 w-4 shrink-0 text-muted-foreground" />
                        )}
                        {header.column.getIsSorted() && !sort.desc && (
                          <FiArrowDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                        )}
                      </span>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-sm">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataPagination
        pageIndex={pageIndex}
        pageCount={table.getPageCount()}
        totalPagesToDisplay={5}
        onPagePrevious={table.previousPage}
        onPageNext={table.nextPage}
        onPageIndex={table.setPageIndex}
      />
    </div>
  );
}
