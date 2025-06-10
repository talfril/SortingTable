import React from "react";
import { TableCell, Typography } from "@mui/material";
import type { Column } from "../../../types/types";

interface RowProps<T> {
  columns: Column<T>[];
  row: T;
}

const RowContent = <T extends object>({ columns, row }: RowProps<T>) => (
  <>
    {columns.map((column) => (
      <TableCell
        key={column.key}
        size='small'
        className={
          typeof column.cellClassName === "function"
            ? column.cellClassName(row)
            : column.cellClassName
        }
      >
        <Typography variant='body2'>{column.render(row)}</Typography>
      </TableCell>
    ))}
  </>
);

export default React.memo(RowContent) as typeof RowContent;
