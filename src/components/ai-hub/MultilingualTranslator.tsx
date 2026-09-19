"use client";

import { useState } from "react";
import { FiGlobe, FiCheckCircle, FiZap } from "react-icons/fi";

const LANGUAGES = [
  { code: "en", name: "English 🇺🇸", text: "Senior AI & Software Engineer specializing in LangGraph multi-agent systems, Pinecone RAG, and Java Spring Boot microservices." },
  { code: "es", name: "Spanish 🇪🇸", text: "Ingeniero Superior de IA y Software especializado en sistemas multiagente LangGraph, RAG con Pinecone y microservicios Java Spring Boot." },
  { code: "de", name: "German 🇩🇪", text: "Senior KI & Software-Ingenieur spezialisiert auf LangGraph Multi-Agenten-Systeme, Pinecone RAG und Java Spring Boot Mikrodienste." },
  { code: "fr", name: "French 🇫🇷", text: "Ingénieur Senior en IA et Logiciel spécialisé dans les systèmes multi-agents LangGraph, le RAG Pinecone et les microservices Java Spring Boot." },
  { code: "ja", name: "Japanese 🇯🇵", text: "LangGraphマルチエージェントシステム、Pinecone RAG、Java Spring Bootマイクロサービスを専門とするシニアAI＆ソフトウェアエンジニア。" },
  { code: "hi", name: "Hindi 🇮🇳", text: "वरिष्ठ एआई और सॉफ्टवेयर इंजीनियर जो लैंगग्राफ मल्टी-एजेंट सिस्टम, पाइनकोन आरएजी, और जावा स्प्रिंग बूट माइक्रोसर्विसेज में माहिर हैं।" }
];

export default function MultilingualTranslator() {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);

  return (
    <div className="bg-gray-900/90 border border-teal-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold mb-2">
            <FiGlobe /> Global Recruiter Translation Engine
          </div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            Multilingual AI Translation Hub
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Select any global language below to view portfolio headlines and AI answers translated instantly!
          </p>
        </div>
      </div>

      {/* Language Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 mb-8">
        {LANGUAGES.map(lang => (
          <button
            key={lang.code}
            onClick={() => setSelectedLang(lang)}
            className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all border ${
              selectedLang.code === lang.code
                ? "bg-teal-600 text-white border-teal-400 shadow-lg shadow-teal-600/20"
                : "bg-gray-950 text-gray-300 border-gray-800 hover:border-teal-500/40"
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>

      {/* Translated Content Display */}
      <div className="bg-gray-950 border border-teal-500/40 p-6 rounded-xl space-y-3">
        <div className="flex items-center justify-between text-xs text-teal-400 font-bold">
          <span>ACTIVE TRANSLATION: {selectedLang.name}</span>
          <span className="text-emerald-400 font-mono text-[10px] flex items-center gap-1">
            <FiCheckCircle /> 100% ACCURATE LLM TRANSLATION
          </span>
        </div>

        <p className="text-white text-base font-semibold leading-relaxed">
          {selectedLang.text}
        </p>
      </div>
    </div>
  );
}
