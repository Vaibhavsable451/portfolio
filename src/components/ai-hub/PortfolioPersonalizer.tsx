"use client";

import { useState } from "react";
import { FiSliders, FiCheckCircle, FiTarget, FiBriefcase, FiRefreshCw } from "react-icons/fi";

const COMPANY_PRESETS = [
  { company: "Google", role: "Staff AI Engineer", highlight: "Autonomous Multi-Agent Systems, LangGraph & High-Speed Vector Retrieval" },
  { company: "Amazon AWS", role: "Senior Cloud & AI Architect", highlight: "Docker, Kubernetes, AWS EC2, Microservices & AI FinOps" },
  { company: "Microsoft", role: "Senior AI Security & Governance Engineer", highlight: "Presidio PII Redaction, AegisAI Risk Scoring & Azure App Service" },
  { company: "Stripe", role: "Java / Spring AI Systems Engineer", highlight: "Spring Boot, REST APIs, Microservices & High-Throughput Processing" }
];

export default function PortfolioPersonalizer() {
  const [targetCompany, setTargetCompany] = useState("Google");
  const [targetRole, setTargetRole] = useState("Senior AI Engineer");
  const [activePersonalization, setActivePersonalization] = useState<{
    company: string;
    role: string;
    highlight: string;
  } | null>(null);

  const applyPersonalization = (comp?: string, r?: string) => {
    const c = comp || targetCompany;
    const roleStr = r || targetRole;

    const matchedPreset = COMPANY_PRESETS.find(p => p.company.toLowerCase() === c.toLowerCase()) || {
      company: c,
      role: roleStr,
      highlight: "Custom High-Performance AI Engineering & Microservices Architecture"
    };

    setActivePersonalization(matchedPreset);

    // Dispatch custom browser event so main page can update dynamically if listening
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolioPersonalized", { detail: matchedPreset }));
    }
  };

  return (
    <div className="bg-gray-900/90 border border-blue-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-2">
            <FiSliders /> Dynamic AI Content Personalizer
          </div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            Recruiter & Company Theme Personalizer
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Enter your company name or select a target role to dynamically re-order skills, headlines, and project priorities across this portfolio!
          </p>
        </div>
      </div>

      {/* Company Preset Buttons */}
      <div className="mb-6">
        <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">
          Quick Preset Targeting:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {COMPANY_PRESETS.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setTargetCompany(p.company);
                setTargetRole(p.role);
                applyPersonalization(p.company, p.role);
              }}
              className="p-3 bg-gray-950 hover:bg-gray-800 border border-blue-500/30 hover:border-blue-400 text-left rounded-xl transition-all"
            >
              <div className="text-xs font-bold text-white mb-0.5">{p.company}</div>
              <div className="text-[10px] text-blue-400 truncate">{p.role}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5 block">Company Name</label>
          <input
            type="text"
            value={targetCompany}
            onChange={e => setTargetCompany(e.target.value)}
            placeholder="e.g. Google, Amazon, Microsoft"
            className="w-full bg-gray-950 border border-gray-800 text-white text-xs md:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5 block">Target Role</label>
          <input
            type="text"
            value={targetRole}
            onChange={e => setTargetRole(e.target.value)}
            placeholder="e.g. Senior AI Engineer"
            className="w-full bg-gray-950 border border-gray-800 text-white text-xs md:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <button
        onClick={() => applyPersonalization()}
        className="w-full py-3.5 mb-6 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
      >
        <FiTarget /> Personalize Entire Portfolio Experience
      </button>

      {/* Active Personalization Banner */}
      {activePersonalization && (
        <div className="bg-gradient-to-r from-blue-950/80 to-indigo-950/80 border border-blue-500/40 p-5 rounded-xl animate-fadeIn">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
            <FiCheckCircle /> PORTFOLIO PERSONALIZATION ACTIVE
          </div>
          <h4 className="text-lg font-bold text-white mb-1">
            Welcome, {activePersonalization.company} Hiring Team! 👋
          </h4>
          <p className="text-gray-300 text-xs leading-relaxed">
            Portfolio experiences and project highlights have been dynamically prioritized for the <strong className="text-amber-400">{activePersonalization.role}</strong> role, showcasing <span className="text-blue-300 font-semibold">{activePersonalization.highlight}</span>.
          </p>
        </div>
      )}
    </div>
  );
}
