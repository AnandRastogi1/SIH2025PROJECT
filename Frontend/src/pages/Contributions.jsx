import React from "react";
import PageHeader from "../components/PageHeader";

function Contributions() {
  return (
    <div>
      <PageHeader
        title="Contributions"
        subtitle="Support with donations, mentorship, or volunteering."
      />

      <section className="max-w-5xl mx-auto px-4 py-10 grid gap-6 lg:grid-cols-2">
        {/* Donation Form */}
        <form className="card bg-white/20 backdrop-blur-md border border-white/30 p-6 shadow-lg rounded-2xl grid gap-4">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">
            Donate
          </h3>
          <input
            className="input rounded-lg border border-gray-300 bg-white/30 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="input rounded-lg border border-gray-300 bg-white/30 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            placeholder="Email"
          />
          <select
            className="input rounded-lg border border-gray-300 bg-white/30 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          >
            <option>₹500</option>
            <option>₹1,000</option>
            <option>₹5,000</option>
            <option>Custom (enter below)</option>
          </select>
          <input
            type="number"
            className="input rounded-lg border border-gray-300 bg-white/30 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            placeholder="Custom Amount (₹)"
          />
          <button className="btn btn-primary hover:shadow-md transition duration-300">
            Proceed to Payment
          </button>
        </form>

        {/* Volunteer / Mentor Form */}
        <form className="card bg-white/20 backdrop-blur-md border border-white/30 p-6 shadow-lg rounded-2xl grid gap-4">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">
            Volunteer / Mentor
          </h3>
          <input
            className="input rounded-lg border border-gray-300 bg-white/30 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="input rounded-lg border border-gray-300 bg-white/30 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
            placeholder="Email"
          />
          <select
            className="input rounded-lg border border-gray-300 bg-white/30 px-4 py-2 text-gray-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
          >
            <option>Mentor</option>
            <option>Event Volunteer</option>
            <option>Guest Speaker</option>
          </select>
          <textarea
            className="input rounded-lg border border-gray-300 bg-white/30 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
            rows="4"
            placeholder="Areas of interest, availability..."
          ></textarea>
          <button className="btn btn-primary hover:shadow-md transition duration-300">
            Submit Interest
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contributions;
