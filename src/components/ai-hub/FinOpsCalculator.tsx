"use client";

import { useState } from "react";
import { FiDollarSign, FiTrendingUp, FiCheckCircle, FiZap, FiSliders } from "react-icons/fi";

export default function FinOpsCalculator() {
  const [monthlyQueries, setMonthlyQueries] = useState(500000);

  // OpenAI GPT-4o avg cost per 1k queries ~$0.06
  const openAiAnnualCost = Math.round((monthlyQueries * 12 * 0.006));
  
  // Vaibhav's Hybrid Groq + Gemini router avg cost per 1k queries ~$0.0008
  const hybridAnnualCost = Math.round((monthlyQueries * 12 * 0.0008));

  const annualSavings = openAiAnnualCost - hybridAnnualCost;
  const percentSaved = Math.round((annualSavings / openAiAnnualCost) * 100);

  return (
    <div className="bg-gray-900/90 border border-amber-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-2">
            <FiDollarSign /> AI FinOps &amp; LLM Cost Optimizer
          </div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            Enterprise LLM Token Cost &amp; ROI Calculator
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Adjust monthly query volume below to calculate how Vaibhav&apos;s Groq + Gemini hybrid routing reduces corporate LLM bills by over 85%!
          </p>
        </div>
      </div>

      {/* Slider Control */}
      <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 mb-8 space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="font-semibold text-gray-300 flex items-center gap-2">
            <FiSliders className="text-amber-400" /> Monthly LLM Request Volume:
          </span>
          <span className="font-mono font-extrabold text-amber-400 text-lg">
            {monthlyQueries.toLocaleString()} queries / month
          </span>
        </div>

        <input
          type="range"
          min={50000}
          max={5000000}
          step={50000}
          value={monthlyQueries}
          onChange={e => setMonthlyQueries(Number(e.target.value))}
          className="w-full accent-amber-500 bg-gray-800 h-2 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-gray-500 font-mono">
          <span>50K / mo</span>
          <span>1 Million / mo</span>
          <span>5 Million / mo</span>
        </div>
      </div>

      {/* Cost Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-950 border border-red-500/30 rounded-xl p-5 text-center flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">Standard GPT-4o API</span>
            <div className="text-2xl font-extrabold text-red-400 font-mono my-2">${openAiAnnualCost.toLocaleString()}</div>
            <p className="text-[11px] text-gray-400">Estimated Annual API Bill without hybrid model caching or routing.</p>
          </div>
        </div>

        <div className="bg-gray-950 border border-emerald-500/40 rounded-xl p-5 text-center flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">Vaibhav&apos;s Groq Hybrid Router</span>
            <div className="text-2xl font-extrabold text-emerald-400 font-mono my-2">${hybridAnnualCost.toLocaleString()}</div>
            <p className="text-[11px] text-gray-400">Low-latency Groq LPU LLaMA 3.3 + Gemini fallback routing architecture.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-950/80 to-emerald-950/80 border border-amber-500/50 rounded-xl p-5 text-center flex flex-col justify-between shadow-xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">Annual Enterprise Savings</span>
            <div className="text-3xl font-black text-amber-300 font-mono my-2">${annualSavings.toLocaleString()}</div>
            <span className="inline-block px-2.5 py-1 bg-amber-500 text-gray-950 font-extrabold text-xs rounded-full">
              {percentSaved}% COST REDUCTION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
