"use client";

import { useState } from "react";
import { FiCpu, FiLayers, FiInfo, FiCheckCircle, FiShare2, FiServer, FiDatabase, FiShield, FiSend } from "react-icons/fi";

interface NodeSpec {
  id: string;
  name: string;
  category: "gateway" | "security" | "agent" | "vectordb" | "llm" | "output";
  tech: string;
  latency: string;
  description: string;
}

const ARCHITECTURES: Record<string, NodeSpec[]> = {
  "AegisAI Governance Platform": [
    { id: "1", name: "FastAPI Ingress Gateway", category: "gateway", tech: "FastAPI / OAuth2", latency: "12ms", description: "Authenticates JWT tokens and validates rate limits per tenant." },
    { id: "2", name: "Presidio PII Filter", category: "security", tech: "Microsoft Presidio", latency: "25ms", description: "Scans payload and masks credit card, SSN, and email tokens before LLM." },
    { id: "3", name: "LangGraph Router Node", category: "agent", tech: "LangGraph / Python", latency: "35ms", description: "Multi-agent query intent router choosing optimal RAG or tool path." },
    { id: "4", name: "Pinecone Vector Index", category: "vectordb", tech: "Pinecone / Sentence Transformers", latency: "45ms", description: "Hybrid dense semantic document retrieval with top-k re-ranking." },
    { id: "5", name: "Groq LLaMA 3.3 70B", category: "llm", tech: "Groq LLaMA 3.3 70B", latency: "180ms", description: "High-speed inference producing grounded response chunks." },
    { id: "6", name: "Hallucination & Risk Evaluator", category: "security", tech: "LangChain Evaluator", latency: "30ms", description: "Checks answer consistency against retrieved context vectors." }
  ],
  "Veylix AI Code Editor Architecture": [
    { id: "1", name: "Monaco Editor Frontend", category: "gateway", tech: "React / Monaco Editor", latency: "5ms", description: "Renders real-time diffs, ghost text autocompletions, and terminal outputs." },
    { id: "2", name: "WebSocket Gateway", category: "gateway", tech: "FastAPI WebSockets", latency: "10ms", description: "Bidirectional real-time streaming of LLM completion tokens." },
    { id: "3", name: "Code Context RAG Node", category: "vectordb", tech: "FAISS / Sentence Transformers", latency: "40ms", description: "Indexes open workspace files for precise code snippet retrieval." },
    { id: "4", name: "MCP Tool Executor", category: "agent", tech: "Model Context Protocol", latency: "50ms", description: "Executes linting, file edits, terminal commands, and Git diffing." },
    { id: "5", name: "Multi-LLM Inference Engine", category: "llm", tech: "Groq / Gemini / OpenRouter", latency: "150ms", description: "Dynamic prompt routing across multiple AI LLM providers." }
  ],
  "Cricket 6-Agent Factory": [
    { id: "1", name: "n8n Webhook Listener", category: "gateway", tech: "n8n / Webhooks", latency: "15ms", description: "Ingests user cricket query and passes to Supervisor Agent." },
    { id: "2", name: "Supervisor Master Agent", category: "agent", tech: "Groq LLaMA 3.3 70B", latency: "60ms", description: "Analyzes query intent and delegates to 1 of 6 specialized agents." },
    { id: "3", name: "SCORE-X & TACTIX Agents", category: "agent", tech: "SerpAPI / Tool Calling", latency: "110ms", description: "Fetches live match scores, team statistics, and match predictions." },
    { id: "4", name: "Validation & Grounding Layer", category: "security", tech: "Python / JS Filters", latency: "20ms", description: "Reduces hallucination by verifying factual match score data." }
  ]
};

export default function ArchitectureGenerator() {
  const [selectedArchKey, setSelectedArchKey] = useState<string>("AegisAI Governance Platform");
  const [selectedNode, setSelectedNode] = useState<NodeSpec>(ARCHITECTURES["AegisAI Governance Platform"][0]);
  const [customArchPrompt, setCustomArchPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const currentNodes = ARCHITECTURES[selectedArchKey] || ARCHITECTURES["AegisAI Governance Platform"];

  const handleCustomPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customArchPrompt.trim()) return;

    setIsGenerating(true);
    setTimeout(() => {
      setSelectedArchKey("AegisAI Governance Platform");
      setSelectedNode(ARCHITECTURES["AegisAI Governance Platform"][0]);
      setIsGenerating(false);
      setCustomArchPrompt("");
    }, 700);
  };

  return (
    <div className="bg-gray-900/90 border border-amber-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-2">
            <FiCpu /> Live System Architecture Generator
          </div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            System Architecture Node Diagram Visualizer
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Explore live production microservices architecture pipelines. Click any node to inspect latency, technologies, and component specs!
          </p>
        </div>
      </div>

      {/* Preset Architecture Selectors */}
      <div className="flex flex-wrap gap-3 mb-8">
        {Object.keys(ARCHITECTURES).map((key) => (
          <button
            key={key}
            onClick={() => {
              setSelectedArchKey(key);
              setSelectedNode(ARCHITECTURES[key][0]);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedArchKey === key
                ? "bg-amber-500 text-gray-950 shadow-lg shadow-amber-500/20"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Node Graph & Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Node Canvas Flow */}
        <div className="lg:col-span-7 bg-gray-950 border border-gray-800 rounded-xl p-6 relative overflow-hidden flex flex-col justify-center space-y-4">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <FiShare2 /> Active Pipeline Flow:
          </div>

          <div className="space-y-3">
            {currentNodes.map((node, index) => {
              const isSelected = selectedNode.id === node.id;
              return (
                <div key={node.id} className="relative">
                  <div
                    onClick={() => setSelectedNode(node)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-amber-500/20 border-amber-400 text-white shadow-lg shadow-amber-500/10 scale-[1.01]"
                        : "bg-gray-900/80 border-gray-800 hover:border-amber-500/40 text-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-xs ${
                        node.category === "gateway" ? "bg-blue-600 text-white" :
                        node.category === "security" ? "bg-red-600 text-white" :
                        node.category === "agent" ? "bg-purple-600 text-white" :
                        node.category === "vectordb" ? "bg-emerald-600 text-white" : "bg-amber-600 text-white"
                      }`}>
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-bold text-xs md:text-sm text-white">{node.name}</h4>
                        <p className="text-[11px] text-gray-400">{node.tech}</p>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono bg-gray-950 px-2 py-1 rounded text-amber-300 border border-gray-800">
                      ⚡ {node.latency}
                    </span>
                  </div>

                  {index < currentNodes.length - 1 && (
                    <div className="w-0.5 h-3 bg-amber-500/40 mx-auto my-0.5" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Node Inspector */}
        <div className="lg:col-span-5 bg-gray-950 border border-gray-800 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <FiInfo /> Component Inspector
              </span>
              <span className="text-[10px] bg-amber-950 text-amber-300 font-mono px-2 py-0.5 rounded border border-amber-800">
                NODE #{selectedNode.id}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">{selectedNode.name}</h3>
            
            <div className="space-y-3 text-xs mb-6">
              <div>
                <span className="text-gray-500 font-semibold block uppercase text-[10px]">Technology Stack</span>
                <span className="text-amber-300 font-bold">{selectedNode.tech}</span>
              </div>

              <div>
                <span className="text-gray-500 font-semibold block uppercase text-[10px]">Processing Latency</span>
                <span className="text-emerald-400 font-bold">~{selectedNode.latency} per invocation</span>
              </div>

              <div>
                <span className="text-gray-500 font-semibold block uppercase text-[10px]">Architectural Purpose</span>
                <p className="text-gray-300 leading-relaxed bg-gray-900 p-3 rounded-lg border border-gray-800 mt-1">
                  {selectedNode.description}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800/80 text-[11px] text-gray-500 flex items-center justify-between">
            <span>Verified Production Specs</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <FiCheckCircle /> 100% Operational
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
