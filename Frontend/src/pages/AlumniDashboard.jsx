import React from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import { User, Users, MapPin } from "lucide-react"; // modern icons

function AlumniDashboard() {
  const tools = [
    {
      title: "My Profile",
      desc: "View or edit your information.",
      link: "/alumni/profile",
      btn: "Open",
      icon: <User className="w-8 h-8 text-brand-600" />,
    },
    {
      title: "Directory",
      desc: "Find classmates and mentors.",
      link: "/alumni/directory",
      btn: "Browse",
      icon: <Users className="w-8 h-8 text-brand-600" />,
    },
    {
      title: "Map",
      desc: "See alumni near you.",
      link: "/alumni/map",
      btn: "Open",
      icon: <MapPin className="w-8 h-8 text-brand-600" />,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Alumni Dashboard"
        subtitle="Quick access to your tools."
      />

      <section className="max-w-7xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-brand-50">{tool.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {tool.title}
              </h3>
            </div>
            <p className="text-gray-600 mt-3">{tool.desc}</p>
            <Link
              to={tool.link}
              className="inline-block mt-5 px-5 py-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white font-medium shadow hover:shadow-lg transition"
            >
              {tool.btn}
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AlumniDashboard;
