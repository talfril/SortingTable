import { Typography } from "@mui/material";
import SortingTable from "../sortingTable/SortingTable";
import mockRoutes from "../../mockData/routes.json";
import type { Column, Route } from "../../types/types";

const columns: Column<Route>[] = [
  {
    key: "address",
    label: "Адрес сети",
    sortable: true,
    render: (row) => row.address,
  },
  {
    key: "gateway",
    label: "Шлюз",
    sortable: true,
    render: (row) => row.gateway,
  },
  {
    key: "interface",
    label: "Интерфейс",
    sortable: true,
    render: (row) => row.interface,
  },
];

const ActiveRoutesTable = () => {
  return (
    <>
      <Typography variant='h5' component='h3' sx={{ mb: 2 }}>
        Действующие маршруты IPv4
      </Typography>

      <SortingTable
        columns={columns}
        data={mockRoutes}
        defaultSortBy='address'
        tableHeight='auto'
      />
    </>
  );
};

export default ActiveRoutesTable;
