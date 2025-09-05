import React from "react";
import PageHeader from "../components/PageHeader";

function AdminProfile() {
  return (
    <div>
      <PageHeader
        title="Admin Profile"
        subtitle="Update your personal details and preferences."
      />

      <section className="max-w-3xl mx-auto px-4 py-12">
        <form className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg space-y-6 transition hover:shadow-xl">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition shadow-sm"
              placeholder="e.g., Alex Johnson"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition shadow-sm"
              placeholder="admin@college.edu"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-gray-50 text-gray-600 cursor-not-allowed shadow-sm"
              placeholder="Administrator"
              disabled
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-end pt-4">
            <button
              className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              type="reset"
            >
              Reset
            </button>
            <button
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
              type="button"
            >
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AdminProfile;
