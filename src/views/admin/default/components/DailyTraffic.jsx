import BarChart from "components/charts/BarChart";
import { barChartDataDailyTraffic } from "variables/charts";
import { barChartOptionsDailyTraffic } from "variables/charts";
import { MdArrowDropUp } from "react-icons/md";
import Card from "components/card";

const DailyTraffic = () => {
  return (
    <Card extra="pb-7 p-[20px]">
      <div className="flex flex-row justify-between">
        <div className="ml-1 pt-2">
          <p className="text-sm font-medium leading-4 text-graphite-500 dark:text-graphite-300">
            Transaksi Harian
          </p>
          <p className="font-mono text-[34px] font-semibold text-navy-700 dark:text-white">
            248{" "}
            <span className="font-sans text-sm font-medium leading-6 text-graphite-500 dark:text-graphite-300">
              transaksi
            </span>
          </p>
        </div>
        <div className="mt-2 flex items-start">
          <div className="flex items-center text-sm text-teal-500">
            <MdArrowDropUp className="h-5 w-5" />
            <p className="font-mono font-semibold"> +2.45% </p>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full pt-10 pb-0">
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </div>
    </Card>
  );
};

export default DailyTraffic;
