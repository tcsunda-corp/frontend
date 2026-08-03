import CardMenu from "components/card/CardMenu";
import React from "react";
import Checkbox from "components/checkbox";
import { MdDragIndicator, MdCheckCircle } from "react-icons/md";
import Card from "components/card";

const tasks = [
  "Restock stok minuman - Outlet Cabang 1",
  "Setor tunai harian ke rekening",
  "Training kasir baru",
  "Cek laporan selisih kas kemarin",
  "Perpanjang kontrak sewa outlet",
];

const TaskCard = () => {
  return (
    <Card extra="pb-7 p-[20px]">
      {/* task header */}
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 dark:bg-navy-600">
            <MdCheckCircle className="h-6 w-6 text-brand-600 dark:text-brand-300" />
          </div>
          <h4 className="ml-4 font-display text-xl font-semibold text-navy-700 dark:text-white">
            Tugas Outlet
          </h4>
        </div>
        <CardMenu />
      </div>

      {/* task content */}

      <div className="h-full w-full">
        {tasks.map((task, i) => (
          <div
            key={i}
            className="mt-2 flex items-center justify-between border-b border-dashed border-graphite-200 p-2 last:border-b-0 dark:border-navy-600"
          >
            <div className="flex items-center justify-center gap-2">
              <Checkbox />
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                {task}
              </p>
            </div>
            <div>
              <MdDragIndicator className="h-5 w-5 text-graphite-400 dark:text-graphite-300" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TaskCard;
