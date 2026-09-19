"use client";

import { useState } from "react";
import { FiLayers, FiCheckCircle, FiPlus, FiTrash2, FiZap, FiCpu } from "react-icons/fi";

interface ComponentNode {
  id: string;
  name: string;
  type: string;
  cost: number;
  latency: number;
}

const AVAILABLE_NODES: ComponentNode[] = [
  { id: "node_fastapi", name: "FastAPI Async Gateway", type: "Gateway", cost: 25, latency: 12 },
  { id: "node_spring", name: "Java Spring Boot API", type: "Backend", cost: 40, latency: 18 },
  { id: "node_presidio", name: "Presidio PII Redactor", type: "Security", cost: 15, latency: 25 },
  { id: "node_pinecone", name: "Pinecone Vector Store", type: "Vector DB", cost: 70, latency: 45 },
  { id: "node_redis", name: "Redis Memory Cache", type: "Cache", cost: 30, latency: 5 },
  { id: "node_kafka", name: "Kafka Event Stream", type: "Queue", cost: 50, latency: 10 },
  { id: "node_groq", name: "Groq LLaMA 3.3 70B", type: "LLM", cost: 60, latency: 85 }
];

export default function SystemDesignCanvas() {
  const [activeCanvasNodes, setActiveCanvasNodes] = useState<ComponentNode[]>([
    AVAILABLE_NODES[0],
    AVAILABLE_NODES[2],
    AVAILABLE_NODES[3],
    AVAILABLE_NODES[6]
  ]);

  const toggleNode = (node: ComponentNode) => {
    if (activeCanvasNodes.some(n => n.id === node.id)) {
      setActiveCanvasNodes(activeCanvasNodes.filter(n => n.id !== node.id));
    } else {
      setActiveCanvasNodes([...activeCanvasNodes, node]);
    }
  };

  const totalCost = activeCanvasNodes.reduce((acc, n) => acc + n.cost, 0);
  const totalLatency = activeCanvasNodes.reduce((acc, n) => acc + n.latency, 0);
  const scalabilityScore = Math.min(99, Math.max(65, 100 - (totalLatency / 4)));

  return (
    <div className="bg-gray-900/90 border border-purple-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-2">
            <FiLayers /> Interactive System Architecture Evaluator
          </div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            System Design Canvas &amp; Cost Simulator
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Add or remove architecture components below to evaluate system throughput, total pipeline latency, and estimated monthly cloud costs!
          </p>
        </div>
      </div>

      {/* Node Palette Controls */}
      <div className="mb-6">
        <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">
          Toggle Architecture Modules:
        </label>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_NODES.map(node => {
            const isAdded = activeCanvasNodes.some(n => n.id === node.id);
            return (
              <button
                key={node.id}
                onClick={() => toggleNode(node)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
                  isAdded
                    ? "bg-purple-600 text-white border-purple-400 shadow-md"
                    : "bg-gray-950 text-gray-400 border-gray-800 hover:border-purple-500/40"
                }`}
              >
                {isAdded ? <FiCheckCircle size={14} /> : <FiPlus size={14} />}
                <span>{node.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Pipeline Flow & Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-gray-950 border border-gray-800 rounded-xl p-6">
          <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <FiCpu /> Active System Pipeline Flow ({activeCanvasNodes.length} Active Nodes):
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeCanvasNodes.map((n, idx) => (
              <div key={n.id} className="bg-gray-900 border border-gray-800 p-3.5 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold block">{n.type}</span>
                  <h5 className="text-xs font-bold text-white">{n.name}</h5>
                </div>
                <div className="text-right font-mono text-[11px]">
                  <span className="text-emerald-400 block">+{n.latency}ms</span>
                  <span className="text-gray-500">${n.cost}/mo</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Telemetry Summary */}
        <div className="lg:col-span-4 bg-gray-950 border border-gray-800 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-4 text-center">
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-500 block">System Scalability Rating</span>
              <span className="text-3xl font-black text-purple-400 font-mono">{Math.round(scalabilityScore)} / 100</span>
            </div>

            <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Total Pipeline Latency</span>
              <span className="text-xl font-extrabold text-emerald-400 font-mono">~{totalLatency} ms</span>
            </div>

            <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Est. Cloud Infra Bill</span>
              <span className="text-xl font-extrabold text-amber-400 font-mono">${totalCost} / month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
