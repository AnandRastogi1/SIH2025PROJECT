import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-900 min-h-screen">
      <PageHeader
        title="Welcome to Alumni Connect"
        subtitle="Find, engage, and grow with your alumni network."
      />

<section className=" mt-4 max-w-7xl mx-auto px-4 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30">
        {[
          {
            title: "Alumni Directory",
            desc: "Browse and filter alumni by year, city, or skills.",
            link: "/alumni/directory",
            btn: "Open Directory",
          },
          {
            title: "Interactive Map",
            desc: "See alumni around the world and connect nearby.",
            link: "/alumni/map",
            btn: "View Map",
          },
          {
            title: "Photo Gallery",
            desc: "Relive moments from campus and reunions.",
            link: "/gallery",
            btn: "Explore Gallery",
          },
          {
            title: "Analytics",
            desc: "Insights into placement, locations, and trends.",
            link: "/analytics",
            btn: "Open Analytics",
          },
          {
            title: "Contributions",
            desc: "Donate, mentor, or volunteer for events.",
            link: "/contributions",
            btn: "Contribute",
          },
          {
            title: "Admin",
            desc: "Manage profiles, events, and content.",
            link: "/admin",
            btn: "Go to Dashboard",
          },
        ].map((item, idx) => (
          <div
            key={idx}
className="card bg-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 backdrop-blur-md border border-white/40"
          >
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
            <Link
              to={item.link}
className="btn btn-primary mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"            >
              {item.btn}
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
