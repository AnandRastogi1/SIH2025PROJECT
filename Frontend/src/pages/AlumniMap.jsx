import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PageHeader from "../components/PageHeader";
import { alumni } from "../data/alumni";

// Custom marker icon
const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -40],
});

function AlumniMap() {
  const center = [20.5937, 78.9629]; // India default center

  return (
    <div>
      <PageHeader
        title="Alumni Map"
        subtitle="Explore our global alumni network interactively."
      />

      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="card p-0 shadow-lg border border-gray-200 bg-gradient-to-r from-blue-800 to-indigo-900">
          <div className="h-[520px] rounded-2xl overflow-hidden">
            <MapContainer
              center={center}
              zoom={3}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%" }}
              className="rounded-2xl"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
              />

              {alumni.map((a) => (
                <Marker key={a.id} position={[a.lat, a.lng]} icon={icon}>
                  <Popup>
                    <div className="p-2">
                      <div className="flex items-center gap-3">
                        <img
                          src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
                            a.name
                          )}`}
                          alt={a.name}
                          className="w-10 h-10 rounded-lg shadow"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {a.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {a.city} • {a.graduationYear}
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <a
                        href={`mailto:${a.email}`}
                        className="block mt-2 text-xs text-brand-700 hover:underline"
                      >
                        {a.email}
                      </a>

                      {/* Skills tags */}
                      {a.skills?.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {a.skills.slice(0, 3).map((s) => (
                            <span
                              key={s}
                              className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {s}
                            </span>
                          ))}
                          {a.skills.length > 3 && (
                            <span className="px-2 py-0.5 bg-brand-100 text-brand-700 text-xs rounded-full">
                              +{a.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AlumniMap;
