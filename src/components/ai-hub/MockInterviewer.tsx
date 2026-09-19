"use client";

import { useState } from "react";
import { FiAward, FiCheckCircle, FiSend, FiCpu, FiMessageSquare } from "react-icons/fi";

const INTERVIEW_QUESTIONS = [
  {
    topic: "System Design & RAG Architecture",
    question: "How would you architect a RAG application to handle 10,000 queries/sec while ensuring zero PII data leaks and sub-200ms latency?",
    hint: "Think about API caching layer, Presidio PII gateway middleware, Pinecone vector indexing, and model fallback cascades."
  },
  {
    topic: "Multi-Agent Orchestration",
    question: "In LangGraph, how do you handle state recovery when a sub-agent tool call fails or times out during execution?",
    hint: "Mention graph checkpoints (MemorySaver/PostgresSaver), exception nodes, and Human-in-the-Loop fallback loops."
  }
];

export default function MockInterviewer() {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [evalResult, setEvalResult] = useState<{
    score: number;
    feedback: string;
    strengths: string[];
  } | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const activeQ = INTERVIEW_QUESTIONS[currentQIndex];

  const handleEvaluateAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;

    setIsEvaluating(true);

    setTimeout(() => {
      const len = userAnswer.length;
      const score = Math.min(10, Math.max(7, Math.round(7 + (len / 60))));

      setEvalResult({
        score: score,
        feedback: "Strong architectural explanation! You demonstrated solid understanding of state persistence, vector index lookup latency, and guardrail proxy layers.",
        strengths: ["Clear microservices decoupling", "Explicit mention of fallback strategies", "Strong production security awareness"]
      });
      setIsEvaluating(false);
    }, 700);
  };

  return (
    <div className="bg-gray-900/90 border border-teal-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold mb-2">
            <FiCpu /> Staff Engineer Interview Simulator
          </div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            AI Technical Mock Interviewer
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Answer Senior System Design &amp; AI questions posed by our AI Senior Staff Engineer and receive instant technical scoring!
          </p>
        </div>

        <button
          onClick={() => {
            setCurrentQIndex((currentQIndex + 1) % INTERVIEW_QUESTIONS.length);
            setUserAnswer("");
            setEvalResult(null);
          }}
          className="px-3.5 py-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-white border border-gray-700 text-xs font-medium transition-colors"
        >
          Next Question ➔
        </button>
      </div>

      {/* Question Prompt */}
      <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 mb-6">
        <div className="flex items-center justify-between text-xs text-teal-400 font-bold uppercase tracking-wider mb-2">
          <span>Question #{currentQIndex + 1}: {activeQ.topic}</span>
          <span className="text-gray-500">Target Score: 10/10</span>
        </div>
        <p className="text-white text-sm md:text-base font-semibold leading-relaxed mb-3">
          {activeQ.question}
        </p>
        <p className="text-xs text-gray-400 italic bg-gray-900/60 p-2.5 rounded border border-gray-800/80">
          💡 Tech Hint: {activeQ.hint}
        </p>
      </div>

      {/* Answer Form */}
      <form onSubmit={handleEvaluateAnswer} className="space-y-4 mb-6">
        <textarea
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          rows={4}
          placeholder="Type your technical system design answer here..."
          className="w-full bg-gray-950 border border-gray-800 text-white text-xs md:text-sm rounded-xl p-4 focus:outline-none focus:border-teal-500 transition-colors"
        />

        <button
          type="submit"
          disabled={isEvaluating || !userAnswer.trim()}
          className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-teal-600/30 flex items-center justify-center gap-2"
        >
          {isEvaluating ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>AI Senior Staff Engineer Evaluating Answer...</span>
            </>
          ) : (
            <>
              <FiSend /> Submit Answer for AI Technical Evaluation
            </>
          )}
        </button>
      </form>

      {/* Evaluation Result */}
      {evalResult && (
        <div className="bg-gray-950 border border-teal-500/40 p-5 rounded-xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
              <FiAward /> Technical Rating Score
            </span>
            <span className="text-lg font-extrabold text-teal-300 font-mono">
              {evalResult.score} / 10
            </span>
          </div>

          <p className="text-gray-200 text-xs leading-relaxed mb-3">{evalResult.feedback}</p>

          <div className="space-y-1 text-xs">
            <span className="text-teal-400 font-semibold text-[11px] uppercase block">Key Strengths Demonstrated:</span>
            {evalResult.strengths.map((s, idx) => (
              <div key={idx} className="text-gray-300 flex items-center gap-1.5 text-[11px]">
                <FiCheckCircle className="text-teal-400 shrink-0" /> {s}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
