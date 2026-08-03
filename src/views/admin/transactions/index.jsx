import Card from "components/card";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";

// Dummy data for now — will be replaced with real data from
// GET /api/v1/transactions once that endpoint exists on the backend.
const transactions = [
  { id: "TRX-10231", outlet: "Toko Budi Cabang 1", kasir: "Rina", metode: "QRIS", nilai: 125000, waktu: "10:24", status: "Lunas" },
  { id: "TRX-10230", outlet: "Toko Budi Cabang 2", kasir: "Dedi", metode: "Tunai", nilai: 48000, waktu: "09:58", status: "Dibatalkan" },
  { id: "TRX-10229", outlet: "Toko Budi Cabang 1", kasir: "Sari", metode: "Transfer", nilai: 320000, waktu: "09:41", status: "Tertunda" },
  { id: "TRX-10228", outlet: "Toko Budi - Kelapa Gading", kasir: "Agus", metode: "QRIS", nilai: 76000, waktu: "09:12", status: "Lunas" },
  { id: "TRX-10227", outlet: "Toko Budi Cabang 1", kasir: "Rina", metode: "Tunai", nilai: 210000, waktu: "08:55", status: "Lunas" },
  { id: "TRX-10226", outlet: "Toko Budi - Pasar Baru", kasir: "Dedi", metode: "QRIS", nilai: 59000, waktu: "08:30", status: "Lunas" },
];

const statusStyle = {
  Lunas: { icon: MdCheckCircle, className: "text-teal-500 dark:text-teal-300" },
  Dibatalkan: { icon: MdCancel, className: "text-red-500 dark:text-red-300" },
  Tertunda: { icon: MdOutlineError, className: "text-brand-500 dark:text-brand-300" },
};

function formatRupiah(n) {
  return "Rp " + n.toLocaleString("id-ID");
}

const Transactions = () => {
  return (
    <div className="mt-3">
      <div className="mb-5">
        <h4 className="font-display text-2xl font-semibold text-navy-700 dark:text-white">
          Transaksi
        </h4>
        <p className="text-sm text-graphite-500 dark:text-graphite-300">
          Riwayat transaksi dari semua outlet.
        </p>
      </div>

      <Card extra="w-full h-full px-6 pb-6 sm:overflow-x-auto">
        <div className="mt-6 overflow-x-scroll xl:overflow-x-hidden">
          <table className="w-full">
            <thead>
              <tr className="!border-px !border-graphite-200 dark:!border-navy-600">
                {["ID", "OUTLET", "KASIR", "METODE", "NILAI", "WAKTU", "STATUS"].map(
                  (h) => (
                    <th
                      key={h}
                      className="border-b border-dashed border-graphite-300 pb-2 pr-4 pt-4 text-start dark:border-navy-500"
                    >
                      <p className="text-xs font-semibold text-graphite-500 dark:text-graphite-300">
                        {h}
                      </p>
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => {
                const { icon: Icon, className } = statusStyle[t.status];
                return (
                  <tr key={t.id}>
                    <td className="min-w-[120px] border-white/0 py-3 pr-4">
                      <p className="font-mono text-sm font-medium text-navy-700 dark:text-white">
                        {t.id}
                      </p>
                    </td>
                    <td className="min-w-[160px] border-white/0 py-3 pr-4">
                      <p className="text-sm text-navy-700 dark:text-white">{t.outlet}</p>
                    </td>
                    <td className="min-w-[100px] border-white/0 py-3 pr-4">
                      <p className="text-sm text-navy-700 dark:text-white">{t.kasir}</p>
                    </td>
                    <td className="min-w-[100px] border-white/0 py-3 pr-4">
                      <p className="text-sm text-navy-700 dark:text-white">{t.metode}</p>
                    </td>
                    <td className="min-w-[120px] border-white/0 py-3 pr-4">
                      <p className="font-mono text-sm font-medium text-navy-700 dark:text-white">
                        {formatRupiah(t.nilai)}
                      </p>
                    </td>
                    <td className="min-w-[80px] border-white/0 py-3 pr-4">
                      <p className="font-mono text-sm text-graphite-500 dark:text-graphite-300">
                        {t.waktu}
                      </p>
                    </td>
                    <td className="min-w-[120px] border-white/0 py-3 pr-4">
                      <div className="flex items-center gap-1.5">
                        <Icon className={`h-4 w-4 ${className}`} />
                        <p className="text-sm font-medium text-navy-700 dark:text-white">
                          {t.status}
                        </p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Transactions;
