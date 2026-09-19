"use client";

import { useState, useRef } from "react";
import { FiPlay, FiPause, FiRadio, FiVolume2, FiVolumeX, FiCpu, FiUser } from "react-icons/fi";

const PODCAST_EPISODES = [
  {
    title: "Ep 1: Deep Dive into AegisAI & 8-Agent LangGraph Systems",
    duration: "1:45",
    dialogue: [
      { speaker: "Host (Sarah)", text: "Welcome to Tech Innovators! Today we're analyzing Vaibhav Sable's AegisAI platform. How does his 8-agent architecture work?" },
      { speaker: "Tech Lead (Alex)", text: "It's super impressive. Vaibhav built a router agent that delegates incoming queries to Compliance, Retrieval, and Risk agents, complete with Presidio PII redaction and real-time hallucination checks!" },
      { speaker: "Host (Sarah)", text: "And what about response latency?" },
      { speaker: "Tech Lead (Alex)", text: "By using Groq LLaMA 3.3 70B and Pinecone dense vector indexing, queries process in under 180 milliseconds. It's production-grade engineering." }
    ]
  },
  {
    title: "Ep 2: Veylix AI Code Editor & Enterprise Microservices",
    duration: "1:30",
    dialogue: [
      { speaker: "Host (Sarah)", text: "Next up, let's talk about Veylix—Vaibhav's AI-native code editor." },
      { speaker: "Tech Lead (Alex)", text: "Veylix integrates Monaco Editor with WebSockets and Model Context Protocol. It streams ghost-text code autocompletions in real-time while indexing codebase files with FAISS." },
      { speaker: "Host (Sarah)", text: "He also built Java Spring AI microservices, right?" },
      { speaker: "Tech Lead (Alex)", text: "Exactly. He combines Python FastAPI and Java Spring Boot for high-throughput enterprise systems." }
    ]
  }
];

export default function RecruiterRadio() {
  const [activeEpIndex, setActiveEpIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const ep = PODCAST_EPISODES[activeEpIndex];

  const handlePlayPodcast = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel();
    setIsPlaying(true);

    const fullTranscript = ep.dialogue.map(d => `${d.speaker} says: ${d.text}`).join(". ");
    const utterance = new SpeechSynthesisUtterance(fullTranscript);
    utterance.rate = 1.0;

    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-gray-900/90 border border-pink-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold mb-2">
            <FiRadio className="animate-pulse" /> Recruiter Radio Podcast Studio
          </div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            AI Resume Podcast &amp; Audio Broadcast
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Listen to an AI-generated 2-speaker tech podcast episode breaking down Vaibhav&apos;s architectural innovations!
          </p>
        </div>

        <button
          onClick={handlePlayPodcast}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-lg ${
            isPlaying
              ? "bg-red-600 text-white shadow-red-600/30 animate-pulse"
              : "bg-pink-600 hover:bg-pink-500 text-white shadow-pink-600/30"
          }`}
        >
          {isPlaying ? <FiPause size={16} /> : <FiPlay size={16} />}
          <span>{isPlaying ? "Pause Podcast Broadcast" : "Play AI Radio Episode"}</span>
        </button>
      </div>

      {/* Episode Selector */}
      <div className="flex flex-wrap gap-3 mb-6">
        {PODCAST_EPISODES.map((e, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveEpIndex(idx);
              if (isPlaying && typeof window !== "undefined") window.speechSynthesis.cancel();
              setIsPlaying(false);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeEpIndex === idx
                ? "bg-pink-600 text-white shadow-lg shadow-pink-600/20"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
            }`}
          >
            {e.title}
          </button>
        ))}
      </div>

      {/* Dialogue Cards */}
      <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between text-xs text-pink-400 font-bold pb-3 border-b border-gray-800">
          <span>NOW BROADCASTING: {ep.title}</span>
          <span className="text-gray-500">Duration: {ep.duration}</span>
        </div>

        <div className="space-y-3">
          {ep.dialogue.map((d, i) => (
            <div key={i} className={`p-4 rounded-xl border text-xs leading-relaxed ${
              d.speaker.includes("Host")
                ? "bg-purple-950/30 border-purple-800/40 text-purple-200"
                : "bg-pink-950/30 border-pink-800/40 text-pink-200"
            }`}>
              <span className="font-bold text-white block mb-1 uppercase tracking-wider text-[10px]">
                🎙️ {d.speaker}
              </span>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
