import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      if (email.includes("admin")) navigate("/admin");
      else navigate("/alumni");
    } catch (err) {
      alert("Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900 flex flex-col">
      <PageHeader title="Login" subtitle="Access your alumni account" />

      <section className="flex-1 flex items-center justify-center px-4 py-10">
        <form
          onSubmit={handleLogin}
          className="card bg-white/20 backdrop-blur-md border border-white/30 p-8 rounded-3xl shadow-xl w-full max-w-md grid gap-6"
          noValidate
        >
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Welcome Back
          </h2>

          <div>
            <label className="label block mb-2 text-gray-100 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input w-full rounded-lg border border-gray-300 bg-white/30 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>

          <div>
            <label className="label block mb-2 text-gray-100 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input w-full rounded-lg border border-gray-300 bg-white/30 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition text-white shadow-lg"
          >
            Login
          </button>

          <p className="text-sm text-gray-200 text-center mt-4">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-400 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}
