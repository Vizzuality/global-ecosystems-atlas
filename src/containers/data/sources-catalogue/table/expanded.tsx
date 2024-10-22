import { Row } from "@tanstack/react-table";

import { Dataset } from "@/types/dataset";

import { Markdown } from "@/components/ui/markdown";
import { TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";

export const Expanded = (row: Row<Dataset>) => {
  return (
    <div className="pr-40">
      <table className="table">
        <TableBody>
          <TableRow className="table-row border-b-transparent">
            <TableHead className="table-cell leading-6">Abstract</TableHead>
            <TableCell className="table-cell">
              <Markdown className="prose prose-sm">{row.original.abstract}</Markdown>
            </TableCell>
          </TableRow>
          <TableRow className="table-row border-b-transparent">
            <TableHead className="table-cell leading-6">Language</TableHead>
            <TableCell className="table-cell">{row.original.language}</TableCell>
          </TableRow>
          <TableRow className="table-row border-b-transparent">
            <TableHead className="table-cell leading-6">Citation</TableHead>
            <TableCell className="table-cell">
              <Markdown className="prose prose-sm">{row.original.dataset_citation}</Markdown>
            </TableCell>
          </TableRow>
          <TableRow className="table-row border-b-transparent">
            <TableHead className="table-cell leading-6">Crosswalk acknowledgement</TableHead>
            <TableCell className="table-cell">
              <Markdown className="prose prose-sm">
                {row.original.crosswalk_acknowledgement}
              </Markdown>
            </TableCell>
          </TableRow>
          <TableRow className="table-row border-b-transparent">
            <TableHead className="table-cell leading-6">DOI</TableHead>
            <TableCell className="table-cell">{row.original.DOI}</TableCell>
          </TableRow>
        </TableBody>
      </table>
    </div>
  );
};
