import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ add this

const stats = [
  { id: 1, Detail: "Total Earning", value: "4,53,453" },
  { id: 2, Detail: "Active Projects", value: "10" },
  { id: 3, Detail: "Completed", value: "13" },
];

export default function FreelancerDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/projectData")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-[#080d14] flex items-center justify-center">
        <div className="text-blue-400 font-bold tracking-widest animate-pulse uppercase">
          Initializing Dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="[background:radial-gradient(ellipse_at_center,_#1a2535_0%,_#080d14_100%)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Hello {"Rajesh"}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-300">
            Manage your active projects.
          </p>
        </div>

        <div className="py-24 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4 border-gray-100"
                >
                  <div className="text-base/7 text-gray-100">{stat.Detail}</div>
                  <div className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    {stat.value}
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <h1 className="text-2xl font-semibold tracking-tight text-pretty text-white sm:text-2xl">
          Active & Ongoing Projects
        </h1>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 border-t border-gray-700 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((project) => (
            // ✅ replaced <article> with <Link to="/project/:id">
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              className="flex max-w-xl mt-16 flex-col items-start justify-between bg-slate-800/60 p-6 rounded-2xl border border-slate-700 border-t-2 border-t-blue-500/60 hover:border-blue-500 hover:bg-slate-800/80 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.4)] cursor-pointer"
            >
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                {project.id}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white capitalize">
                {project.project_analysis.project_type.replace(/_/g, " ")}
              </h3>
              <div className="flex gap-3 mt-6">
                <div className="bg-slate-900/60 border border-slate-600 p-3 rounded-xl">
                  <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">
                    Complexity
                  </p>
                  <p className="text-orange-400 text-sm font-semibold uppercase">
                    {project.project_analysis.complexity}
                  </p>
                </div>
                <div className="bg-slate-900/60 border border-slate-600 p-3 rounded-xl">
                  <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">
                    Timeline
                  </p>
                  <p className="text-emerald-400 text-sm font-semibold">
                    {project.project_analysis.estimated_total_days} Days
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
