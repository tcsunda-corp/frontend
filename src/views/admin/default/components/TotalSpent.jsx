import React from "react";
import { MdArrowDropUp, MdOutlineCalendarToday, MdBarChart } from "react-icons/md";
import Card from "components/card";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";
import LineChart from "components/charts/LineChart";

const TotalSpent = () => {
  return (
    <Card extra="!p-[20px] text-center">
      <div className="flex justify-between">
        <div className="flex flex-col items-start">
          <p className="font-display text-lg font-semibold text-navy-700 dark:text-white">
            Tren Penjualan
          </p>
          <p className="text-xs text-graphite-500 dark:text-graphite-300">
            Semua outlet
          </p>
        </div>
        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-graphite-600 transition duration-200 hover:cursor-pointer hover:bg-graphite-100 active:bg-graphite-200 dark:bg-navy-600 dark:text-graphite-200 dark:hover:opacity-90 dark:active:opacity-80">
          <MdOutlineCalendarToday />
          <span className="text-sm font-medium">Bulan ini</span>
        </button>
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col items-start">
          <p className="ledger-dash mt-4 w-16" />
          <p className="mt-3 font-mono text-3xl font-semibold text-navy-700 dark:text-white">
            Rp 37.5jt
          </p>
          <div className="flex flex-col items-start">
            <p className="mt-2 text-sm text-graphite-500 dark:text-graphite-300">
              Total penjualan
            </p>
            <div className="flex flex-row items-center justify-center">
              <MdArrowDropUp className="font-medium text-teal-500" />
              <p className="font-mono text-sm font-semibold text-teal-500">
                +2.45%
              </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <LineChart
            options={lineChartOptionsTotalSpent}
            series={lineChartDataTotalSpent}
          />
        </div>
      </div>
    </Card>
  );
};

export default TotalSpent;
