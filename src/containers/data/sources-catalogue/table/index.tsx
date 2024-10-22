"use client";

import { Fragment } from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  useReactTable,
} from "@tanstack/react-table";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

import { cn } from "@/lib/utils";

import { Dataset } from "@/types/dataset";

import { Expanded } from "@/containers/data/sources-catalogue/table/expanded";
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
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: () => true,
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
      expanded: {},
    },
  });

  const { pageIndex } = table.getState().pagination;
  const [sort] = table.getState().sorting;

  return (
    <div className="space-y-5 lg:space-y-10">
      <div className="rounded-md border">
        <Table className="min-w-[1000px]">
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
                      style={{
                        width:
                          header.column.columnDef.minSize === header.column.columnDef.maxSize
                            ? header.column.columnDef.minSize
                            : undefined,
                      }}
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
                <Fragment key={row.id}>
                  <TableRow
                    data-state={row.getIsSelected() && "selected"}
                    className={cn({
                      "border-transparent": row.getIsExpanded(),
                    })}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-sm">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                  {row.getIsExpanded() && (
                    <TableRow>
                      {/* 2nd row is a custom 1 cell row */}
                      <TableCell colSpan={row.getVisibleCells().length} className="p-0">
                        <Expanded {...(row as Row<Dataset>)} />
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
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
      <div className="flex justify-center">
        <DataPagination
          pageIndex={pageIndex}
          pageCount={table.getPageCount()}
          totalPagesToDisplay={5}
          onPagePrevious={table.previousPage}
          onPageNext={table.nextPage}
          onPageIndex={table.setPageIndex}
        />
      </div>
    </div>
  );
}
