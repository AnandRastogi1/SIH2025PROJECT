import React from "react";

function StatCard({ label, value, hint }) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
      {/* Label */}
      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
        {label}
      </p>

      {/* Value */}
      <p className="mt-3 text-4xl font-extrabold text-gray-900">
        {value}
      </p>

      {/* Hint */}
      {hint && (
        <p className="mt-2 text-sm text-gray-600 italic">{hint}</p>
      )}

      {/* Accent Bar */}
      <div className="mt-4 h-1 w-16 bg-gradient-to-r from-brand-500 to-brand-700 rounded-full"></div>
    </div>
  );
}

export default StatCard;
