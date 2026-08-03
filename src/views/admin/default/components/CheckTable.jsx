import React from "react";
import CardMenu from "components/card/CardMenu";
import Checkbox from "components/checkbox";
import Card from "components/card";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

function CheckTable(props) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState([]);
  let defaultData = tableData;
  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">OUTLET</p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          <Checkbox
            defaultChecked={info.getValue()[1]}
            colorScheme="brandScheme"
            me="10px"
          />
          <p className="ml-3 font-mono text-sm font-medium text-navy-700 dark:text-white">
            {info.getValue()[0]}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("progress", {
      id: "progress",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          TARGET
        </p>
      ),
      cell: (info) => (
        <p className="font-mono text-sm font-medium text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("quantity", {
      id: "quantity",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          TRANSAKSI
        </p>
      ),
      cell: (info) => (
        <p className="font-mono text-sm font-medium text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("date", {
      id: "date",
      header: () => (
        <p className="text-sm font-semibold text-graphite-500 dark:text-graphite-300">UPDATE TERAKHIR</p>
      ),
      cell: (info) => (
        <p className="font-mono text-sm font-medium text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
  ]; // eslint-disable-next-line
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: false,
  });
  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="font-display text-xl font-semibold text-navy-700 dark:text-white">
          Ringkasan Outlet
        </div>

        <CardMenu />
      </header>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-graphite-200 dark:!border-navy-600">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b border-dashed border-graphite-300 dark:border-navy-500 pt-4 pb-2 pr-4 text-start"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 5)
              .map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="min-w-[150px] border-white/0 py-3  pr-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default CheckTable;
const columnHelper = createColumnHelper();
