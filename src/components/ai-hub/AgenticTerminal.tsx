"use client";

import { useState, useEffect } from "react";
import { FiTerminal, FiPlay, FiCheckCircle, FiCpu, FiLayers, FiRefreshCw } from "react-icons/fi";

const AGENT_STEPS = [
  { time: "+0.012s", agent: "Router Agent", status: "SUCCESS", detail: "Query Intent: Enterprise Governance Request. Routing to Aegis multi-agent graph." },
  { time: "+0.045s", agent: "Presidio Shield", status: "REDACTED", detail: "Scanned input for PII tokens. 0 sensitive data points exposed." },
  { time: "+0.098s", agent: "Retrieval Agent", status: "SUCCESS", detail: "Queried Pinecone Index. Fetched top 4 dense vector chunks (Cosine Similarity: 0.94)." },
  { time: "+0.210s", agent: "LLM Response Agent", status: "GENERATING", detail: "Groq LLaMA 3.3 70B generating grounded response stream..." },
  { time: "+0.260s", agent: "Evaluator Agent", status: "PASSED", detail: "Hallucination & Risk Check: 100% Grounded. Zero policy violations." }
];

export default function AgenticTerminal() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startLoop = () => {
    setIsRunning(true);
    setActiveStepIndex(0);
  };

  useEffect(() => {
    if (!isRunning) return;

    if (activeStepIndex < AGENT_STEPS.length - 1) {
      const timer = setTimeout(() => {
        setActiveStepIndex(prev => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
    }
  }, [isRunning, activeStepIndex]);

  return (
    <div className="bg-gray-900/90 border border-indigo-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-2">
            <FiTerminal /> LangGraph Agent Execution Loop
          </div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            Interactive Agentic Workflow Terminal
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Watch a live simulated multi-agent state graph execute step-by-step with real-time latency logs and guardrail evaluations.
          </p>
        </div>

        <button
          onClick={startLoop}
          disabled={isRunning}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
        >
          {isRunning ? <FiRefreshCw className="animate-spin" /> : <FiPlay />}
          <span>{isRunning ? "Executing Graph..." : "Replay Agent Loop"}</span>
        </button>
      </div>

      {/* Visual Agent State Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Step Nodes List */}
        <div className="lg:col-span-6 bg-gray-950 border border-gray-800 rounded-xl p-5 space-y-3">
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <FiLayers /> LangGraph Node Timeline
          </div>

          {AGENT_STEPS.map((step, idx) => {
            const isActive = idx <= activeStepIndex;
            const isCurrent = idx === activeStepIndex;

            return (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border text-xs transition-all flex items-center justify-between ${
                  isCurrent
                    ? "bg-indigo-950/80 border-indigo-500 text-white shadow-lg shadow-indigo-500/10 animate-pulse"
                    : isActive
                    ? "bg-gray-900 border-gray-800 text-gray-300"
                    : "bg-gray-950/50 border-gray-900 text-gray-600 opacity-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] ${
                    isActive ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-500"
                  }`}>
                    {idx + 1}
                  </span>
                  <div>
                    <span className="font-bold block text-white">{step.agent}</span>
                    <span className="text-[10px] text-gray-400">{step.time}</span>
                  </div>
                </div>

                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  step.status === "SUCCESS" ? "bg-emerald-950 text-emerald-300 border-emerald-800" :
                  step.status === "REDACTED" ? "bg-amber-950 text-amber-300 border-amber-800" :
                  step.status === "PASSED" ? "bg-blue-950 text-blue-300 border-blue-800" : "bg-indigo-950 text-indigo-300 border-indigo-800"
                }`}>
                  {step.status}
                </span>
              </div>
            );
          })}
        </div>

        {/* Terminal State Log Window */}
        <div className="lg:col-span-6 bg-gray-950 border border-gray-800 rounded-xl p-5 font-mono text-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800 text-gray-400">
              <span className="font-bold text-indigo-400">STATE INSPECTION LOGS</span>
              <span className="text-[10px] text-gray-500">FRAMEWORK: LANGGRAPH 0.2</span>
            </div>

            <div className="space-y-3">
              <div className="text-gray-400">
                <span className="text-indigo-400 font-bold">$ langgraph run --workflow=aegis_governance</span>
              </div>

              {AGENT_STEPS.slice(0, activeStepIndex + 1).map((step, i) => (
                <div key={i} className="text-gray-300 leading-relaxed bg-gray-900/60 p-2.5 rounded border border-gray-800/80 text-[11px]">
                  <span className="text-indigo-400 font-bold">[{step.time}] [{step.agent}]: </span>
                  <span>{step.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-800 text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
            <FiCheckCircle /> State Graph Persistence Active (MemorySaver Checkpoint OK)
          </div>
        </div>
      </div>
    </div>
  );
}
