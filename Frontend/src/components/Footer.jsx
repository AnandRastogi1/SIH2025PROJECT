import React from "react";

function Footer() {
  return (
    <footer className="mt-12 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="font-semibold text-gray-800">Alumni Connect</span>. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a
            href="#"
            className="text-gray-600 hover:text-brand-600 transition-colors duration-200"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-brand-600 transition-colors duration-200"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-brand-600 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
