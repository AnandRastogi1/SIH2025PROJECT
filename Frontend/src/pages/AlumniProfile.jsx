import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

function AlumniProfile() {
  const [edit, setEdit] = useState(false);

  return (
    <div>
      <PageHeader title="My Profile" subtitle="Manage your personal details.">
        <button
          onClick={() => setEdit((e) => !e)}
          className={`btn ${edit ? "btn-danger" : "btn-outline"}`}
        >
          {edit ? "Cancel" : "Edit"}
        </button>
      </PageHeader>

      <section className="max-w-3xl mx-auto px-4 py-10">
        {!edit ? (
          // VIEW MODE
          <div className="card grid gap-6 p-6">
            <div className="flex items-center gap-4">
              <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=You`}
                alt="avatar"
                className="w-20 h-20 rounded-2xl shadow-md border border-gray-200"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Your Name</h3>
                <p className="text-gray-600 mt-1">Your City • Class of 2016</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="mt-1 text-gray-900">you@example.com</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Skills</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {["React", "Node", "ML"].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // EDIT MODE
          <form className="card grid gap-6 p-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="label">Full Name</label>
                <input className="input" defaultValue="Your Name" />
              </div>
              <div>
                <label className="label">Graduation Year</label>
                <input
                  className="input"
                  type="number"
                  defaultValue={2016}
                  min={1980}
                  max={2035}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="label">Email</label>
                <input
                  className="input"
                  type="email"
                  defaultValue="you@example.com"
                />
              </div>
              <div>
                <label className="label">City</label>
                <input className="input" defaultValue="Your City" />
              </div>
            </div>

            <div>
              <label className="label">Skills</label>
              <input className="input" defaultValue="React, Node, ML" />
              <p className="text-xs text-gray-500 mt-1">
                Separate skills with commas
              </p>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                className="btn btn-outline"
                type="button"
                onClick={() => setEdit(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" type="submit">
                Save Changes
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}

export default AlumniProfile;
