import React from "react";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", signups: 30 },
  { month: "Feb", signups: 45 },
  { month: "Mar", signups: 80 },
  { month: "Apr", signups: 60 },
  { month: "May", signups: 120 },
  { month: "Jun", signups: 90 },
];

function AdminDashboard() {
  return (
    <div>
      <PageHeader
        title="Admin Dashboard"
        subtitle="Moderate content, manage alumni & gain insights."
      >
        <Link
          to="/admin/add-alumni"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
        >
          + Add Alumni
        </Link>
      </PageHeader>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Alumni" value="1,248" hint="+38 this week" />
        <StatCard label="Active Mentors" value="163" hint="+5 this week" />
        <StatCard label="Open Positions" value="47" />
        <StatCard label="Events this month" value="9" />
      </section>

      {/* Chart Section */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition">
          <h3 className="text-lg font-bold text-gray-800">📈 Monthly Signups</h3>
          <p className="text-sm text-gray-500">Track alumni joining trends</p>
          <div className="h-80 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="signups"
                  stroke="#4F46E5"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#4F46E5" }}
                  activeDot={{ r: 7, fill: "#312E81" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
