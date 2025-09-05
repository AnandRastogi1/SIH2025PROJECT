import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [role, setRole] = useState(""); // admin or alumni
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    graduationYear: "",
    city: "",
    role: "",
  });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setForm({ ...form, role: selectedRole });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // alumni should send extra fields, admin only sends base fields
      const payload =
        role === "alumni"
          ? form
          : { name: form.name, email: form.email, password: form.password, role };

      await register(payload);

      // redirect alumni to alumni page, admin to dashboard
      if (role === "alumni") {
        navigate("/alumni");
      } else {
        navigate("/admin/dashboard");
      }
    } catch (err) {
      alert("Registration failed.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900 flex flex-col">
      <PageHeader title="Register" subtitle="Create your account" />

      <section className="flex-1 flex items-center justify-center px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="card bg-white/20 backdrop-blur-md border border-white/30 p-8 rounded-3xl shadow-xl w-full max-w-md grid gap-5"
        >
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Join Alumni Connect
          </h2>

          {/* Step 1: Ask role */}
          {!role && (
            <div className="grid gap-3">
              <p className="text-gray-200 text-center">Are you registering as:</p>
              <button
                type="button"
                onClick={() => handleRoleSelect("alumni")}
                className="w-full py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700"
              >
                Alumni
              </button>
              <button
                type="button"
                onClick={() => handleRoleSelect("admin")}
                className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                Admin
              </button>
            </div>
          )}

          {/* Step 2: Show form after role selection */}
          {role && (
            <>
              <input
                className="input w-full rounded-xl border border-gray-300 bg-white/30 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                className="input w-full rounded-xl border border-gray-300 bg-white/30 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                className="input w-full rounded-xl border border-gray-300 bg-white/30 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />

              {/* Alumni-only fields */}
              {role === "alumni" && (
                <>
                  <input
                    type="number"
                    className="input w-full rounded-xl border border-gray-300 bg-white/30 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                    name="graduationYear"
                    placeholder="Graduation Year"
                    value={form.graduationYear}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="input w-full rounded-xl border border-gray-300 bg-white/30 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                    name="city"
                    placeholder="City"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                </>
              )}

              <button
                type="submit"
                className="btn btn-primary w-full py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition text-white shadow-lg"
              >
                Register as {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>

              <p className="text-sm text-gray-200 text-center">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="text-green-400 font-medium hover:underline cursor-pointer"
                >
                  Login
                </span>
              </p>
            </>
          )}
        </form>
      </section>
    </div>
  );
}
