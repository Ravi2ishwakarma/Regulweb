import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      localStorage.setItem("adminToken", data.token);

      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.message || "Login failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="glass w-full max-w-md rounded-3xl p-8"
      >
        <h1 className="mb-2 text-3xl font-bold">
          REGUL Admin
        </h1>

        <p className="mb-8 text-gray-400">
          Login to manage your website requests.
        </p>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          className="theme-input mb-4 w-full rounded-xl border border-white/20 bg-transparent px-5 py-4 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="theme-input mb-5 w-full rounded-xl border border-white/20 bg-transparent px-5 py-4 outline-none"
        />

        <button
          type="submit"
          className="btn-theme w-full rounded-xl py-4 font-semibold"
        >
          Login
        </button>

        {error && (
          <p className="mt-4 text-center text-red-400">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}