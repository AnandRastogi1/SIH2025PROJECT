import React from "react";

function PageHeader({ title, subtitle, children }) {
  return (
    <header className="relative bg-gradient-to-r from-violet-500 to-purple-500 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          {/* Title + Subtitle */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-base sm:text-lg text-gray-600">
                {subtitle}
              </p>
            )}
          </div>

          {/* Optional Action Buttons / Filters */}
          {children && (
            <div className="flex items-center gap-3">{children}</div>
          )}
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
