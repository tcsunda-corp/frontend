import Card from "components/card";
import {
  MdStorefront,
  MdMoreVert,
  MdAdd,
  MdPeople,
  MdReceiptLong,
} from "react-icons/md";

// Dummy data for now — will be replaced with real data from
// GET /api/v1/outlets once that endpoint exists on the backend.
const outlets = [
  { id: 1, name: "Toko Budi Cabang 1", staff: 4, transactionsToday: 82, status: "Buka" },
  { id: 2, name: "Toko Budi Cabang 2", staff: 3, transactionsToday: 45, status: "Buka" },
  { id: 3, name: "Toko Budi - Pasar Baru", staff: 2, transactionsToday: 12, status: "Tutup" },
  { id: 4, name: "Toko Budi - Kelapa Gading", staff: 5, transactionsToday: 96, status: "Buka" },
  { id: 5, name: "Toko Budi - Bekasi", staff: 2, transactionsToday: 5, status: "Buka" },
];

function OutletCard({ outlet }) {
  const isOpen = outlet.status === "Buka";
  return (
    <Card extra="!p-5 relative">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 dark:bg-navy-600">
            <MdStorefront className="h-6 w-6 text-brand-600 dark:text-brand-300" />
          </div>
          <div>
            <p className="font-display text-base font-semibold text-navy-700 dark:text-white">
              {outlet.name}
            </p>
            <span
              className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                isOpen
                  ? "bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-300"
                  : "bg-graphite-100 text-graphite-500 dark:bg-navy-600 dark:text-graphite-300"
              }`}
            >
              {outlet.status}
            </span>
          </div>
        </div>
        <button className="text-graphite-400 hover:text-graphite-600 dark:text-graphite-300">
          <MdMoreVert className="h-5 w-5" />
        </button>
      </div>

      <div className="ledger-dash my-4" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MdPeople className="h-4 w-4 text-graphite-400" />
          <p className="text-sm text-graphite-500 dark:text-graphite-300">Tim</p>
        </div>
        <p className="font-mono text-sm font-semibold text-navy-700 dark:text-white">
          {outlet.staff} orang
        </p>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MdReceiptLong className="h-4 w-4 text-graphite-400" />
          <p className="text-sm text-graphite-500 dark:text-graphite-300">
            Transaksi hari ini
          </p>
        </div>
        <p className="font-mono text-sm font-semibold text-navy-700 dark:text-white">
          {outlet.transactionsToday}
        </p>
      </div>
    </Card>
  );
}

const Outlets = () => {
  return (
    <div className="mt-3">
      <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <h4 className="font-display text-2xl font-semibold text-navy-700 dark:text-white">
            Outlet
          </h4>
          <p className="text-sm text-graphite-500 dark:text-graphite-300">
            Kelola semua cabang outlet kamu di sini.
          </p>
        </div>
        <button className="linear flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700">
          <MdAdd className="h-5 w-5" />
          Tambah Outlet
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {outlets.map((outlet) => (
          <OutletCard key={outlet.id} outlet={outlet} />
        ))}
      </div>
    </div>
  );
};

export default Outlets;
