import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import AlumniDashboard from "./pages/AlumniDashboard";
import StudentDashboard from "./pages/StudentDashboard"; // add this!
import AlumniDirectory from "./pages/AlumniDirectory";
import AlumniMap from "./pages/AlumniMap";
import Gallery from "./pages/Gallery";
import Analytics from "./pages/Analytics";
import Contributions from "./pages/Contributions";
import AlumniProfile from "./pages/AlumniProfile";
import AdminProfile from "./pages/AdminProfile";
import AddAlumni from "./pages/AddAlumni";

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/gallery" element={<Gallery />} />

            {/* Alumni public features */}
            <Route path="/alumni/directory" element={<AlumniDirectory />} />
            <Route path="/alumni/map" element={<AlumniMap />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/contributions" element={<Contributions />} />

            {/* Student Dashboard */}
            <Route
              path="/student"
              element={
                <ProtectedRoute role="student">
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />

            {/* Alumni Dashboard */}
            <Route
              path="/alumni"
              element={
                <ProtectedRoute role="alumni">
                  <AlumniDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/alumni/profile"
              element={
                <ProtectedRoute role="alumni">
                  <AlumniProfile />
                </ProtectedRoute>
              }
            />

            {/* Admin Dashboard */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/profile"
              element={
                <ProtectedRoute role="admin">
                  <AdminProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/add-alumni"
              element={
                <ProtectedRoute role="admin">
                  <AddAlumni />
                </ProtectedRoute>
              }
            />

            {/* Catch all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
