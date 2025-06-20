import { useState, useMemo } from "react";
import type { Order, IP } from "../types/types";

function isIP(value: unknown): value is IP {
  return typeof value === "string" && /^(\d{1,3}\.){3}\d{1,3}$/.test(value);
}

export function useSort<T>(
  data: T[],
  defaultKey: Extract<keyof T, string | number>,
  defaultOrder: Order = "desc"
) {
  const [order, setOrder] = useState<Order>(defaultOrder);
  const [orderBy, setOrderBy] =
    useState<Extract<keyof T, string | number>>(defaultKey);

  const handleSort = (key: Extract<keyof T, string | number>) => {
    const isAsc = orderBy === key && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(key);
  };

  const sortedData = useMemo(() => {
    if (!orderBy) return data;

    return [...data].sort((a, b) => {
      const aValue = a[orderBy];
      const bValue = b[orderBy];

      const aEmpty = aValue === null || aValue === undefined || aValue === "";
      const bEmpty = bValue === null || bValue === undefined || bValue === "";

      if (aEmpty && bEmpty) return 0;
      if (aEmpty) return 1;
      if (bEmpty) return -1;

      if (typeof aValue === "number" && typeof bValue === "number") {
        return order === "asc" ? aValue - bValue : bValue - aValue;
      }

      if (isIP(aValue) && isIP(bValue)) {
        const ipToArray = (ip: IP) => ip.split(".").map(Number);
        const aIp = ipToArray(aValue);
        const bIp = ipToArray(bValue);

        for (let i = 0; i < 4; i++) {
          if (aIp[i] !== bIp[i]) {
            return order === "asc" ? aIp[i] - bIp[i] : bIp[i] - aIp[i];
          }
        }
        return 0;
      }

      if (aValue instanceof Date && bValue instanceof Date) {
        return order === "asc"
          ? aValue.getTime() - bValue.getTime()
          : bValue.getTime() - aValue.getTime();
      }

      const aStr = String(aValue);
      const bStr = String(bValue);

      return order === "asc"
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });
  }, [data, order, orderBy]);

  return { sortedData, order, orderBy, handleSort };
}
