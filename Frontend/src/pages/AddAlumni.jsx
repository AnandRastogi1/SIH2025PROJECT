import React from "react";
import PageHeader from "../components/PageHeader";

function AddAlumni() {
  return (
    <div>
      <PageHeader title="Add Alumni" subtitle="Create a new alumni record." />

      <section className="max-w-3xl mx-auto px-4 py-10">
        <form className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition duration-300 grid gap-6">
          {/* Full Name + Graduation Year */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Graduation Year
              </label>
              <input
                type="number"
                min="1980"
                max="2035"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition outline-none"
                required
              />
            </div>
          </div>

          {/* Email + City */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition outline-none"
              />
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Skills (comma separated)
            </label>
            <input
              placeholder="React, Node, ML"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-end pt-4">
            <button
              type="reset"
              className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
            >
              Add Alumni
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddAlumni;
