import React from "react";
import PageHeader from "../components/PageHeader";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function Analytics() {
  const genderData = [
    { name: "Male", value: 62 },
    { name: "Female", value: 38 },
  ];
  const yearData = [
    { year: "2010", count: 120 },
    { year: "2012", count: 150 },
    { year: "2014", count: 110 },
    { year: "2016", count: 180 },
    { year: "2018", count: 210 },
    { year: "2020", count: 260 },
  ];

  const COLORS = ["#3B82F6", "#EC4899"]; // Tailwind blue & pink
  const BAR_COLOR = "#10B981"; // Tailwind emerald

  return (
    <div>
      <PageHeader
        title="Analytics"
        subtitle="Key stats about the alumni community."
      />

      <section className="max-w-7xl mx-auto px-4 py-10 grid gap-6 lg:grid-cols-2">
        {/* Gender Pie Chart */}
        <div className="card p-6 shadow-lg rounded-2xl">
          <h3 className="text-lg font-bold text-gray-800">
            Gender Distribution
          </h3>
          <div className="h-72 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {genderData.map((entry, idx) => (
                    <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alumni by Year Bar Chart */}
        <div className="card p-6 shadow-lg rounded-2xl">
          <h3 className="text-lg font-bold text-gray-800">Alumni by Year</h3>
          <div className="h-72 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yearData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Bar dataKey="count" fill={BAR_COLOR} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Analytics;
