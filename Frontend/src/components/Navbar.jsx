import { Link, NavLink, useNavigate } from "react-router-dom";
import { GraduationCap, Menu, LogOut, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-lg transition-colors duration-200 ${
          isActive
            ? "bg-brand-100 text-brand-700 font-semibold"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl text-brand-700 hover:text-brand-800 transition-colors"
          >
            <GraduationCap size={26} className="text-brand-600" /> Alumni Connect
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-3">
            {navItem({ to: "/alumni/directory", label: "Directory" })}
            {navItem({ to: "/alumni/map", label: "Map" })}
            {navItem({ to: "/gallery", label: "Gallery" })}
            {navItem({ to: "/analytics", label: "Analytics" })}
            {navItem({ to: "/contributions", label: "Contribute" })}

            {/* If logged in */}
            {user ? (
              <>
                {user.role === "admin" &&
                  navItem({ to: "/admin", label: "Admin" })}
                {user.role === "alumni" &&
                  navItem({ to: "/alumni", label: "Alumni" })}

                <span className="ml-4 flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  <User size={16} /> {user.email}
                </span>

                <button
                  onClick={handleLogout}
                  className="ml-3 flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition"
                >
                  <LogOut size={18} /> Logout
                </button>
              </>
            ) : (
              <>
                {navItem({ to: "/login", label: "Login" })}
                {navItem({ to: "/register", label: "Register" })}
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 shadow-lg border-t border-gray-200">
          <div className="px-4 py-4 flex flex-col gap-3">
            <Link
              to="/alumni/directory"
              className="px-3 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Directory
            </Link>
            <Link
              to="/alumni/map"
              className="px-3 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Map
            </Link>
            <Link
              to="/gallery"
              className="px-3 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/analytics"
              className="px-3 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Analytics
            </Link>
            <Link
              to="/contributions"
              className="px-3 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Contribute
            </Link>

            {user ? (
              <>
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="px-3 py-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Admin
                  </Link>
                )}
                {user.role === "alumni" && (
                  <Link
                    to="/alumni"
                    className="px-3 py-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Alumni
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="mt-2 px-3 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-3 py-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
