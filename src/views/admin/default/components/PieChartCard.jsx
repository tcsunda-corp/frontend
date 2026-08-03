import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import Card from "components/card";

const PieChartCard = () => {
  return (
    <Card extra="rounded-xl p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="font-display text-lg font-semibold text-navy-700 dark:text-white">
            Metode Pembayaran
          </h4>
        </div>

        <div className="mb-6 flex items-center justify-center">
          <select className="mb-3 mr-2 flex items-center justify-center text-sm font-semibold text-graphite-500 hover:cursor-pointer dark:!bg-navy-700 dark:text-white">
            <option value="monthly">Bulan ini</option>
            <option value="yearly">Tahun ini</option>
            <option value="weekly">Minggu ini</option>
          </select>
        </div>
      </div>

      <div className="mb-auto flex h-[220px] w-full items-center justify-center">
        <PieChart options={pieChartOptions} series={pieChartData} />
      </div>
      <div className="flex flex-row !justify-between rounded-lg border border-graphite-100 px-6 py-3 dark:!border-navy-600 dark:!bg-navy-700">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-brand-500" />
            <p className="ml-1 text-sm font-normal text-graphite-500 dark:text-graphite-300">
              Tunai
            </p>
          </div>
          <p className="mt-px font-mono text-xl font-semibold text-navy-700 dark:text-white">
            63%
          </p>
        </div>

        <div className="h-11 w-px bg-graphite-200 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-teal-500" />
            <p className="ml-1 text-sm font-normal text-graphite-500 dark:text-graphite-300">
              QRIS / Transfer
            </p>
          </div>
          <p className="mt-px font-mono text-xl font-semibold text-navy-700 dark:text-white">
            37%
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PieChartCard;
