import Card from "components/card";
import BarChart from "components/charts/BarChart";
import {
  barChartDataWeeklyRevenue,
  barChartOptionsWeeklyRevenue,
} from "variables/charts";
import { MdBarChart } from "react-icons/md";

const WeeklyRevenue = () => {
  return (
    <Card extra="flex flex-col bg-white w-full rounded-xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between px-6">
        <div className="flex flex-col items-start">
          <h2 className="font-display text-lg font-semibold text-navy-700 dark:text-white">
            Penjualan per Outlet
          </h2>
          <p className="text-xs text-graphite-500 dark:text-graphite-300">
            7 hari terakhir
          </p>
        </div>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-600 !transition !duration-200 hover:bg-graphite-100 active:bg-graphite-200 dark:bg-navy-600 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="md:mt-16 lg:mt-0">
        <div className="h-[250px] w-full xl:h-[350px]">
          <BarChart
            chartData={barChartDataWeeklyRevenue}
            chartOptions={barChartOptionsWeeklyRevenue}
          />
        </div>
      </div>
    </Card>
  );
};

export default WeeklyRevenue;
