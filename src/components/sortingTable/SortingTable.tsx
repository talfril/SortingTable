import React from "react";
import {
  Table,
  TableHead,
  TableContainer,
  TableBody,
  Paper,
  TableRow,
} from "@mui/material";
import { useSort } from "../../hooks/useSort";
import type { SortindTableProps } from "../../types/types";
import FixedHeaderContent from "./fixedHeaderContent/FixedHeaderContent";
import RowContent from "./rowContent/RowContent";
import styles from "./sorting-table.module.scss";

const SortingTable = <T extends object>({
  columns,
  data,
  defaultSortBy,
  tableHeight = "auto",
}: SortindTableProps<T>) => {
  const { sortedData, order, orderBy, handleSort } = useSort<T>(
    data,
    (defaultSortBy ?? columns[0].key) as Extract<keyof T, string | number>
  );

  return (
    <div className={styles.wrapper}>
      <Paper style={{ height: tableHeight }} elevation={10}>
        <TableContainer>
          <Table sx={{ tableLayout: "fixed" }}>
            <TableHead>
              <FixedHeaderContent
                columns={columns}
                order={order}
                orderBy={orderBy}
                onSort={handleSort}
              />
            </TableHead>
            <TableBody>
              {sortedData.map((row, index) => (
                <TableRow key={index} hover className={styles.bodyRow}>
                  <RowContent columns={columns} row={row} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default React.memo(SortingTable) as typeof SortingTable;
