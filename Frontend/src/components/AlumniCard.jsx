import React from "react";

function AlumniCard({ a }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex items-center gap-4">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
            a.name
          )}`}
          alt={a.name}
          className="w-16 h-16 rounded-full ring-2 ring-brand-500 shadow-sm"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{a.name}</h3>
          <p className="text-sm text-gray-500">
            {a.city} • {a.graduationYear}
          </p>
          <a
            href={`mailto:${a.email}`}
            className="text-sm font-medium text-brand-600 hover:text-brand-800 transition"
          >
            {a.email}
          </a>
        </div>
      </div>

      {a.skills?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {a.skills.map((s) => (
            <span
              key={s}
              className="bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm"
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default AlumniCard;
