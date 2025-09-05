import React, { useState } from "react";
import { BookOpen, Briefcase, Users, MessageSquare, Bell } from "lucide-react";

export default function StudentDashboard() {
  const [active, setActive] = useState("home");

  const renderContent = () => {
    switch (active) {
      case "home":
        return <h2 className="text-2xl font-bold">Welcome Student 👋</h2>;
      case "profile":
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">My Profile</h2>
            <p>Edit your details, add skills, and upload resume.</p>
          </div>
        );
      case "mentorship":
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Mentorship</h2>
            <p>Browse alumni mentors and request guidance.</p>
          </div>
        );
      case "internships":
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Internships & Jobs</h2>
            <p>View alumni-posted opportunities and apply.</p>
          </div>
        );
      case "community":
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Community</h2>
            <p>Join groups and discussions with peers & alumni.</p>
          </div>
        );
      case "notifications":
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Notifications</h2>
            <p>Track updates about mentorship, jobs, and events.</p>
          </div>
        );
      default:
        return <h2 className="text-xl font-bold">Select a section</h2>;
    }
  };

  const menuItems = [
    { key: "home", label: "Home", icon: <BookOpen size={18} /> },
    { key: "profile", label: "Profile", icon: <Users size={18} /> },
    { key: "mentorship", label: "Mentorship", icon: <MessageSquare size={18} /> },
    { key: "internships", label: "Internships", icon: <Briefcase size={18} /> },
    { key: "community", label: "Community", icon: <Users size={18} /> },
    { key: "notifications", label: "Notifications", icon: <Bell size={18} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="px-6 py-4 border-b">
          <h1 className="text-xl font-bold text-purple-600">Student Panel</h1>
        </div>
        <nav className="flex-1 px-4 py-6 overflow-y-auto space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg w-full text-left transition ${
                active === item.key
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}
