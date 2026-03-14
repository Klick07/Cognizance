import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Milestone() {
  const { id } = useParams();
  const [openId, setOpenId] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/projectData/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading DB:", err);
        setLoading(false);
      });
  }, [id]);

  // ✅ guard was missing — this prevents "cannot read property of null" crash
  if (loading || !data) {
    return (
      <div className="min-h-screen bg-[#0b1120] flex items-center justify-center text-white">
        <div className="animate-pulse text-xl font-bold tracking-widest uppercase">
          Initializing Database...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen [background:radial-gradient(ellipse_at_center,_#1a2535_0%,_#080d14_100%)] p-4 md:p-12 font-sans text-slate-300">
      <header className="max-w-5xl mx-auto mb-12 border-b border-slate-800 pb-8 text-5xl">
        <h1 className="text-xl font-bold text-white mb-6 text-5xl font-semibold tracking-tight text-balance text-white sm:text-3xl">
          {data.project_analysis.project_type.replace("_", " ").toUpperCase()}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm font-medium tracking-wide">
          <span className="bg-slate-800 text-blue-400 px-3 py-1 rounded border border-slate-700">
            COMPLEXITY: {data.project_analysis.complexity.toUpperCase()}
          </span>
          <span className="bg-slate-800 text-emerald-400 px-3 py-1 rounded border border-slate-700">
            DURATION: {data.project_analysis.estimated_total_days} DAYS
          </span>
        </div>
      </header>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-6 text-5xl font-semibold tracking-tight text-balance text-white sm:text-2xl">
          Project Milestones
        </h2>

        <div className="space-y-3">
          {data.milestones.map((milestone) => {
            const isOpen = openId === milestone.id;

            return (
              <div
                key={milestone.id}
                className="bg-[#111827] border border-slate-800 rounded-xl overflow-hidden shadow-xl transition-all"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : milestone.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#161e2d] transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900/30 text-blue-400 font-bold text-sm border border-blue-800/50">
                      {milestone.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-6 text-5xl font-semibold tracking-tight text-balance text-white">
                        {milestone.objective}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                        {milestone.amount_percentage}% • Due in{" "}
                        {milestone.estimated_days} days
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold border border-blue-500/20 uppercase">
                      Paid
                    </span>
                    <svg
                      className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-8 pt-2 border-t border-slate-800/50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="grid md:grid-cols-2 gap-10 mt-6">
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
                          Deliverables
                        </h4>
                        <div className="space-y-5">
                          {milestone.deliverables.map((item, idx) => (
                            <div key={idx}>
                              <div className="flex items-start gap-3 text-slate-300 mb-2">
                                <svg
                                  className="w-4 h-4 text-blue-500 mt-0.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                                <span className="text-sm font-medium">
                                  {item}
                                </span>
                                <span className="text-[9px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded uppercase font-bold">
                                  File
                                </span>
                              </div>
                              <div className="ml-7 inline-flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-[11px]">
                                <svg
                                  className="w-3 h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>
                                  Submitted:{" "}
                                  {item.toLowerCase().replace(/ /g, "_")}.pdf
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
                          Acceptance Criteria
                        </h4>
                        <ul className="space-y-3">
                          {milestone.acceptance_criteria.map(
                            (criteria, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                              >
                                <svg
                                  className="w-4 h-4 text-slate-600 mt-0.5 shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                {criteria}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Milestone;
