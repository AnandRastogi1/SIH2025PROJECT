import React, { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";
import AlumniCard from "../components/AlumniCard";
import SearchBar from "../components/SearchBar";
import { alumni } from "../data/alumni";

function AlumniDirectory() {
  const [q, setQ] = useState("");
  const [gender, setGender] = useState("all");
  const [year, setYear] = useState("all");

  const years = useMemo(() => {
    const set = new Set(alumni.map((a) => a.graduationYear));
    return Array.from(set).sort((a, b) => b - a);
  }, []);

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase();
    return alumni.filter((a) => {
      const g = gender === "all" || a.gender === gender;
      const y = year === "all" || String(a.graduationYear) === String(year);
      const s =
        !text ||
        a.name.toLowerCase().includes(text) ||
        a.city.toLowerCase().includes(text) ||
        a.skills?.some((sk) => sk.toLowerCase().includes(text));
      return g && y && s;
    });
  }, [q, gender, year]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900 flex flex-col">
      <PageHeader
        title="Alumni Directory"
        subtitle="Filter and explore alumni by year, gender, city, or skills."
      />

      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* Filters */}
        <div className="card p-6 shadow-md border border-gray-300 rounded-xl bg-white/20 backdrop-blur-md grid gap-4 md:grid-cols-4 items-center">
          {/* Search */}
          <SearchBar
            value={q}
            onChange={setQ}
            placeholder="🔍 Search by name, city, or skill..."
          />

          {/* Gender Filter */}
          <select
            className="input bg-white/70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="all">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          {/* Year Filter */}
          <select
            className="input bg-white/70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="all">All Years</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          {/* Results Count */}
          <div className="flex items-center justify-center md:justify-end text-sm font-medium text-gray-700 bg-white/70 px-4 py-2 rounded-lg shadow">
            {filtered.length} Result{filtered.length !== 1 && "s"}
          </div>
        </div>

        {/* Alumni Cards */}
        <div
          className="mt-8 grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
        >
          {filtered.length > 0 ? (
            filtered.map((a) => <AlumniCard key={a.id} a={a} />)
          ) : (
            <div className="col-span-full text-center py-10 text-gray-300 text-lg">
              🚫 No alumni found. Try adjusting your filters.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default AlumniDirectory;
