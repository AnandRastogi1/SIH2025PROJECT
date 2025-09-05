import React from "react";
import PageHeader from "../components/PageHeader";

const images = Array.from(
  { length: 12 },
  (_, i) => `https://picsum.photos/seed/alumni-${i + 1}/800/600`
);

function Gallery() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 min-h-screen">
      <PageHeader
        title="Gallery"
        subtitle="Events, reunions, and campus life."
      />
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {images.map((src, i) => (
            <div
              key={i}
              className="mb-6 break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Alumni ${i + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
