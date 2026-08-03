import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import { useAuth } from "context/AuthContext";

// Step 1: email + password only.
// Step 2 (only shown for Manager/Staff): pick which outlet to work at, by name.
// Owners skip step 2 entirely since they manage every outlet at once.
export default function SignIn() {
  const { checkCredentials, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [outlets, setOutlets] = useState([]);
  const [selectedOutletId, setSelectedOutletId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const redirectTo = location.state?.from || "/admin";

  const handleCheckCredentials = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email dan password wajib diisi.");
      return;
    }

    setLoading(true);
    try {
      const result = await checkCredentials({ email, password });

      if (!result.requires_outlet) {
        // Owner: log straight in, no outlet picker needed.
        await login({ email, password, outletId: null });
        navigate(redirectTo, { replace: true });
        return;
      }

      // Manager/Staff: show the outlet picker.
      setOutlets(result.outlets || []);
      setStep(2);
    } catch (err) {
      setError(err.message || "Gagal login, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const handleFinalLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!selectedOutletId) {
      setError("Pilih outlet dulu ya.");
      return;
    }

    setLoading(true);
    try {
      await login({ email, password, outletId: Number(selectedOutletId) });
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message || "Gagal login, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setStep(1);
    setError("");
    setSelectedOutletId("");
  };

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          {step === 1
            ? "Masukkan email dan password untuk masuk."
            : "Pilih outlet tempat kamu bertugas."}
        </p>

        {error && (
          <div className="mb-4 rounded-lg bg-red-100 px-4 py-3 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleCheckCredentials}>
            <InputField
              variant="auth"
              extra="mb-3"
              label="Email*"
              placeholder="mail@simmmple.com"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
              variant="auth"
              extra="mb-3"
              label="Password*"
              placeholder="Min. 8 characters"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="mb-4 flex items-center justify-between px-2">
              <div className="flex items-center">
                <Checkbox />
                <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                  Keep me logged In
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              {loading ? "Memeriksa..." : "Lanjutkan"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleFinalLogin}>
            <div className="mb-3">
              <label
                htmlFor="outlet"
                className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white"
              >
                Outlet*
              </label>
              <select
                id="outlet"
                value={selectedOutletId}
                onChange={(e) => setSelectedOutletId(e.target.value)}
                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-white/0 p-3 text-sm text-navy-700 outline-none dark:!border-white/10 dark:text-white"
              >
                <option value="" disabled>
                  Pilih outlet...
                </option>
                {outlets.map((o) => (
                  <option key={o.outlet_id} value={o.outlet_id}>
                    {o.outlet_name}
                  </option>
                ))}
              </select>
              {outlets.length === 0 && (
                <p className="mt-2 text-sm text-red-500">
                  Akun ini belum di-assign ke outlet manapun. Hubungi Owner/Manager kamu.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || outlets.length === 0}
              className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <button
              type="button"
              onClick={handleBack}
              className="mt-3 w-full text-sm font-medium text-gray-600 hover:text-navy-700 dark:text-gray-300 dark:hover:text-white"
            >
              ← Kembali
            </button>
          </form>
        )}

        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <Link
            to="/auth/sign-up"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
