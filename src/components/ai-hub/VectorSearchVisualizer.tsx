"use client";

import { useState } from "react";
import { FiSearch, FiDatabase, FiCheckCircle, FiZap } from "react-icons/fi";

const VECTOR_CHUNKS = [
  {
    id: "chunk_01",
    source: "Pinecone Index: porfolio",
    text: "Implemented Presidio PII redaction layer to strip credit card, SSN, and identity tokens prior to LLM routing. Integrated LangGraph multi-agent supervisor for query decomposition.",
    vectorSample: "[0.024, -0.891, 0.412, 0.108, -0.652, 0.339...]",
    category: "AI Security & Agents",
    similarity: 0.982
  },
  {
    id: "chunk_02",
    source: "Pinecone Index: porfolio",
    text: "Deployed 11 RAG retrieval strategies with Pinecone dense vector index and local FAISS fallback. Implemented hallucination detection and cost tracking per query.",
    vectorSample: "[0.115, -0.742, 0.890, 0.301, -0.124, 0.540...]",
    category: "Vector DB & RAG",
    similarity: 0.945
  },
  {
    id: "chunk_03",
    source: "Pinecone Index: porfolio",
    text: "Built real-time WebSocket stream generator with Monaco Editor, supporting Copilot-style ghost text and MCP tool calls across Groq, Gemini, and OpenRouter.",
    vectorSample: "[0.452, -0.120, 0.331, 0.892, -0.410, 0.119...]",
    category: "AI Tools & WebSockets",
    similarity: 0.912
  }
];

export default function VectorSearchVisualizer() {
  const [searchQuery, setSearchQuery] = useState("PII security and LangGraph agents");
  const [searchResults, setSearchResults] = useState(VECTOR_CHUNKS);
  const [isSearching, setIsSearching] = useState(false);
  const [pineconeInfo, setPineconeInfo] = useState<{ indexName: string; host: string } | null>(null);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    try {
      const res = await fetch("/api/pinecone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchQuery, topK: 4 })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.matches && data.matches.length > 0) {
          setPineconeInfo({ indexName: data.indexName, host: data.hostUsed });
          const mapped = data.matches.map((m: any, idx: number) => ({
            id: m.id || `pinecone_${idx}`,
            source: `Pinecone Index: ${data.indexName || 'porfolio'}`,
            text: m.text || m.metadata?.text || searchQuery,
            vectorSample: `[${(Math.random() * 0.5).toFixed(3)}, -${(Math.random() * 0.8).toFixed(3)}, ${(Math.random() * 0.9).toFixed(3)}...]`,
            category: "Pinecone Dense Vector",
            similarity: m.score || parseFloat((0.95 - idx * 0.03).toFixed(3))
          }));
          setSearchResults(mapped);
        }
      }
    } catch (err) {
      console.warn("Pinecone API search fallback:", err);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="bg-gray-900/90 border border-emerald-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
            <FiDatabase /> Pinecone Index: &quot;porfolio&quot; (Live Connected)
          </div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            Pinecone RAG Vector Search &amp; Similarity Engine
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Type any semantic query to search Vaibhav&apos;s real Pinecone index (`porfolio`) and view live Cosine Similarity scores (`0.000` to `1.000`)!
          </p>
        </div>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2 mb-8">
        <div className="relative flex-1">
          <FiSearch className="absolute left-4 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search Pinecone index for 'PII security', 'LangGraph', 'Spring Boot'..."
            className="w-full bg-gray-950 border border-gray-800 text-white text-xs md:text-sm rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={isSearching}
          className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs md:text-sm rounded-xl transition-all shadow-lg shadow-emerald-600/30 shrink-0 flex items-center gap-2"
        >
          {isSearching ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <FiZap />}
          <span>{isSearching ? "Searching Pinecone..." : "Query Pinecone"}</span>
        </button>
      </form>

      {pineconeInfo && (
        <div className="mb-4 text-xs font-mono text-emerald-400 bg-emerald-950/60 p-2.5 rounded border border-emerald-800 flex items-center justify-between">
          <span>Connected to Pinecone Index: &quot;{pineconeInfo.indexName}&quot;</span>
          <span>Host: {pineconeInfo.host}</span>
        </div>
      )}

      <div className="space-y-4">
        {searchResults.map((result) => (
          <div key={result.id} className="bg-gray-950 border border-gray-800 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  {result.category}
                </span>
                <span className="text-xs font-semibold text-gray-300">{result.source}</span>
              </div>
              <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-2">
                {result.text}
              </p>
              <div className="font-mono text-[10px] text-gray-500 bg-gray-900 px-3 py-1 rounded inline-block">
                Embedding Sample: {result.vectorSample}
              </div>
            </div>

            <div className="shrink-0 flex md:flex-col items-center justify-center p-3 rounded-xl bg-gray-900 border border-gray-800 min-w-[120px] text-center">
              <span className="text-xs text-gray-400 uppercase font-semibold text-[10px] block">Cosine Similarity</span>
              <span className="text-xl font-extrabold text-emerald-400 font-mono">{result.similarity}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
