import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputField from "components/fields/InputField";
import { useAuth } from "context/AuthContext";

export default function SignUp() {
  const { registerOwner } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    outletName: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { userName, email, password, outletName } = form;
    if (!userName || !email || !password || !outletName) {
      setError("Semua field wajib diisi.");
      return;
    }
    if (password.length < 8) {
      setError("Password minimal 8 karakter.");
      return;
    }

    setLoading(true);
    try {
      const result = await registerOwner({
        email,
        password,
        userName,
        outletName,
      });
      setSuccess(
        `Akun berhasil dibuat! Outlet ID kamu: ${result.outlet_id}. Simpan ID ini untuk login.`
      );
      setTimeout(() => {
        navigate("/auth/sign-in", { replace: true });
      }, 2500);
    } catch (err) {
      setError(err.message || "Gagal mendaftar, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Create Account
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Daftar sebagai Owner sekaligus buat outlet pertamamu.
        </p>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 rounded-lg bg-red-100 px-4 py-3 text-sm font-medium text-red-600">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 rounded-lg bg-green-100 px-4 py-3 text-sm font-medium text-green-600">
              {success}
            </div>
          )}

          <InputField
            variant="auth"
            extra="mb-3"
            label="Nama Kamu*"
            placeholder="Budi Santoso"
            id="userName"
            type="text"
            value={form.userName}
            onChange={handleChange("userName")}
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="mail@simmmple.com"
            id="email"
            type="text"
            value={form.email}
            onChange={handleChange("email")}
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
            value={form.password}
            onChange={handleChange("password")}
          />

          <InputField
            variant="auth"
            extra="mb-3"
            label="Nama Outlet*"
            placeholder="Toko Budi Cabang 1"
            id="outletName"
            type="text"
            value={form.outletName}
            onChange={handleChange("outletName")}
          />

          <button
            type="submit"
            disabled={loading}
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <div className="mt-4">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
            Already have an account?
          </span>
          <Link
            to="/auth/sign-in"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
