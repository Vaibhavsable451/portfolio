"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCpu, FiMic, FiZap, FiShield, FiSliders, FiTerminal, FiAward, FiRadio, FiDatabase, FiGlobe } from "react-icons/fi";

import VoiceInterviewer from "./ai-hub/VoiceInterviewer";
import JdMatcher from "./ai-hub/JdMatcher";
import RedTeamingSandbox from "./ai-hub/RedTeamingSandbox";
import PortfolioPersonalizer from "./ai-hub/PortfolioPersonalizer";
import AgenticTerminal from "./ai-hub/AgenticTerminal";
import MockInterviewer from "./ai-hub/MockInterviewer";
import RecruiterRadio from "./ai-hub/RecruiterRadio";
import VectorSearchVisualizer from "./ai-hub/VectorSearchVisualizer";
import MultilingualTranslator from "./ai-hub/MultilingualTranslator";

const AI_TABS = [
  { id: "voice", label: "Voice AI Twin", icon: FiMic, color: "text-purple-400" },
  { id: "jd", label: "Live JD Matcher", icon: FiZap, color: "text-emerald-400" },
  { id: "radio", label: "Recruiter Radio", icon: FiRadio, color: "text-pink-400" },
  { id: "security", label: "Security Red-Teaming", icon: FiShield, color: "text-red-400" },
  { id: "vector", label: "RAG Vector Search", icon: FiDatabase, color: "text-blue-400" },
  { id: "personalizer", label: "Recruiter Personalizer", icon: FiSliders, color: "text-amber-400" },
  { id: "translator", label: "Multilingual AI", icon: FiGlobe, color: "text-teal-400" },
  { id: "terminal", label: "Agentic Terminal", icon: FiTerminal, color: "text-indigo-400" },
  { id: "mock", label: "Mock Interviewer", icon: FiAward, color: "text-cyan-400" },
];

export default function AiInnovationHub() {
  const [activeTab, setActiveTab] = useState("voice");

  return (
    <section id="ai-hub" className="py-24 bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-amber-500/10 border border-purple-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg">
            <FiCpu className="animate-spin" style={{ animationDuration: '6s' }} /> Portfolio AI Innovation Hub
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Portfolio <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">AI Interactive Suite</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Test live interactive portfolio AI features—featuring Voice Speech Synthesis, Live JD Matcher, Security Red-Teaming, Recruiter Radio Podcasts, and Vector Knowledge Search!
          </p>
        </motion.div>

        {/* Tab Navigation Bar */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {AI_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? "bg-gray-800 text-white border-purple-500/60 shadow-lg shadow-purple-500/10 scale-105"
                    : "bg-gray-900/60 text-gray-400 border-gray-800 hover:bg-gray-800 hover:text-gray-200"
                }`}
              >
                <Icon className={`${isActive ? tab.color : "text-gray-500"}`} size={15} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Active Tab Content */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "voice" && <VoiceInterviewer />}
              {activeTab === "jd" && <JdMatcher />}
              {activeTab === "radio" && <RecruiterRadio />}
              {activeTab === "security" && <RedTeamingSandbox />}
              {activeTab === "vector" && <VectorSearchVisualizer />}
              {activeTab === "personalizer" && <PortfolioPersonalizer />}
              {activeTab === "translator" && <MultilingualTranslator />}
              {activeTab === "terminal" && <AgenticTerminal />}
              {activeTab === "mock" && <MockInterviewer />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
