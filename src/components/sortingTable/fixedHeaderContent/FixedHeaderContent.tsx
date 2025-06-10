import React from "react";
import { TableRow, TableCell, TableSortLabel, Typography } from "@mui/material";
import type { Column, ColumnKey, Order } from "../../../types/types";
import styles from "../sorting-table.module.scss";

interface HeaderProps<T> {
  columns: Column<T>[];
  order: Order;
  orderBy: ColumnKey<T>;
  onSort: (key: ColumnKey<T>) => void;
}

const FixedHeaderContent = <T extends object>({
  columns,
  order,
  orderBy,
  onSort,
}: HeaderProps<T>) => (
  <TableRow>
    {columns.map((column) => (
      <TableCell
        key={column.key}
        variant='head'
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 2,
          width: column.width,
          ...column.headerStyle,
        }}
      >
        {column.sortable !== false ? (
          <TableSortLabel
            active={orderBy === column.key}
            direction={orderBy === column.key ? order : "asc"}
            onClick={() => onSort(column.key)}
            sx={{
              color: "white !important",
              "& .MuiTableSortLabel-icon": { display: "none" },
              "&:hover": { color: "rgb(182, 107, 33) !important" },
            }}
          >
            <Typography variant='body1' component='p'>
              {column.label}
            </Typography>
            {orderBy === column.key ? (
              <span className={styles.sortIcon}>
                {order === "asc" ? "↑" : "↓"}
              </span>
            ) : (
              <span className={`${styles.sortIcon} ${styles.disabled}`}>
                ↑↓
              </span>
            )}
          </TableSortLabel>
        ) : (
          column.label
        )}
      </TableCell>
    ))}
  </TableRow>
);

export default React.memo(FixedHeaderContent) as typeof FixedHeaderContent;
