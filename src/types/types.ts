export type Order = "asc" | "desc";

export interface Route {
  uuid: string;
  address: string;
  mask: string;
  gateway: string;
  interface: string;
}

export type ColumnKey<T> = Extract<keyof T, string | number>;

export interface Column<T> {
  key: ColumnKey<T>;
  label: string;
  width?: string;
  sortable?: boolean;
  render: (row: T) => React.ReactNode;
  cellClassName?: string | ((row: T) => string);
  cellStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
}

export interface SortindTableProps<T> {
  columns: Column<T>[];
  data: T[];
  defaultSortBy?: keyof T;
  defaultOrder?: Order;
  searchable?: boolean;
  onRowClick?: (row: T) => void;
  tableHeight?: string;
}

export interface SearchInTableProps {
  searchLabel?: string;
  onSearchChange: (query: string) => void;
  initialValue?: string;
  placeholder?: string;
}
