"use client";

import { useState, useEffect, useRef } from "react";
import { FiMic, FiMicOff, FiVolume2, FiVolumeX, FiPlay, FiRefreshCw, FiSend, FiUser, FiCpu, FiZap } from "react-icons/fi";

const PRESET_QUESTIONS = [
  {
    category: "Agentic AI",
    question: "Tell me about your experience with LangGraph & Autonomous AI Agents.",
    fallback: "I specialize in building production-grade autonomous agentic systems using LangGraph and LangChain. For instance, in AegisAI and NeuraGuard, I built an 8-agent architecture with Router, Retrieval, Compliance, Risk, and Response nodes that manage complex query routing, graph state persistence, and autonomous tool calling with human-in-the-loop validation."
  },
  {
    category: "AI Security",
    question: "How do you handle PII redaction and AI security in production?",
    fallback: "In my AegisAI and NeuraGuard platforms, security is enforced at the gateway. Before any prompt hits the LLM, incoming text passes through Microsoft Presidio for automated PII masking, followed by prompt-injection classifiers and real-time toxicity checks. Responses undergo explainable risk scoring and hallucination verification before rendering."
  },
  {
    category: "Architecture",
    question: "Explain the architecture of Veylix AI-Native Code Editor.",
    fallback: "Veylix is built with React, Monaco Editor, FastAPI, WebSockets, and MCP (Model Context Protocol). It indexes codebases using FAISS and Sentence Transformers for semantic chunk retrieval, stream-delivering code completions over WebSockets while supporting multi-LLM backends like Groq LLaMA 3.3, Gemini 2.5 Flash, and OpenRouter."
  },
  {
    category: "Recruitment",
    question: "Why should our engineering team hire you as an AI Engineer?",
    fallback: "Unlike developers who only wrap LLM endpoints, I design scalable end-to-end AI systems—combining Java Spring Boot backends, Python FastAPI microservices, vector search with Pinecone, multi-agent n8n workflows, and MLOps tracking with MLflow and Docker/Kubernetes deployment."
  }
];

export default function VoiceInterviewer() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [activeCategory, setActiveCategory] = useState("Agentic AI");
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [customPrompt, setCustomPrompt] = useState("");
  const [isLiveGroq, setIsLiveGroq] = useState(false);
  const [chatLogs, setChatLogs] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: "Hello! I am Vaibhav's AI Interactive Twin powered by Groq LLaMA 3.3. Ask me anything about my projects, tech stack, AI architecture, or background!"
    }
  ]);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const speakText = (text: string) => {
    if (!voiceEnabled || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const engVoice = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Samantha"))) || voices[0];
    if (engVoice) utterance.voice = engVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const fetchGroqAnswer = async (question: string, fallback: string) => {
    setIsLoading(true);
    setIsLiveGroq(false);
    try {
      const res = await fetch("/api/groq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: question,
          systemPrompt: "You are Vaibhav Sable's AI Voice Twin. Answer in 2-3 concise, impressive technical sentences explaining Vaibhav's hands-on experience in AI Engineering, LangGraph, RAG, FastAPI, Java Spring Boot, Pinecone, or Presidio PII Security.",
          model: "llama-3.3-70b-versatile"
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          setIsLiveGroq(true);
          return data.reply;
        }
      }
    } catch (e) {
      console.warn("Using fallback response:", e);
    } finally {
      setIsLoading(false);
    }

    return fallback;
  };

  const handleSelectQuestion = async (qObj: typeof PRESET_QUESTIONS[0]) => {
    setCurrentQuestion(qObj.question);
    setActiveCategory(qObj.category);

    const answerText = await fetchGroqAnswer(qObj.question, qObj.fallback);
    setCurrentAnswer(answerText);

    setChatLogs(prev => [
      ...prev,
      { sender: 'user', text: qObj.question },
      { sender: 'ai', text: answerText }
    ]);

    speakText(answerText);
  };

  const handleCustomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;

    const userQ = customPrompt;
    setCustomPrompt("");
    setCurrentQuestion(userQ);

    const fallbackAns = `Regarding "${userQ}": In my engineering practice, I build modular microservices with FastAPI and Spring Boot, leveraging LangChain for agentic tool orchestration, Pinecone vector search, and full CI/CD deployment on Azure and AWS EC2.`;
    const answerText = await fetchGroqAnswer(userQ, fallbackAns);

    setCurrentAnswer(answerText);
    setChatLogs(prev => [
      ...prev,
      { sender: 'user', text: userQ },
      { sender: 'ai', text: answerText }
    ]);

    speakText(answerText);
  };

  useEffect(() => {
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let step = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = isSpeaking ? "#a855f7" : isLoading ? "#f59e0b" : "#3b82f6";

      for (let x = 0; x < width; x += 4) {
        const amplitude = isSpeaking ? 18 : isLoading ? 12 : 4;
        const speed = isSpeaking || isLoading ? 0.15 : 0.03;
        const y = centerY + Math.sin(x * 0.05 + step * speed) * amplitude * Math.sin((x / width) * Math.PI);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      step++;
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isSpeaking, isLoading]);

  return (
    <div className="bg-gray-900/90 border border-purple-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-2">
            <FiZap /> Powered by Groq LLaMA 3.3 70B
          </div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            AI Voice Recruiter Twin
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Talk to Vaibhav&apos;s AI Avatar powered by live Groq LLaMA 3.3 inference out loud!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              voiceEnabled
                ? "bg-purple-600/20 text-purple-300 border border-purple-500/40 hover:bg-purple-600/30"
                : "bg-gray-800 text-gray-400 border border-gray-700"
            }`}
          >
            {voiceEnabled ? <FiVolume2 className="text-purple-400" /> : <FiVolumeX />}
            <span>{voiceEnabled ? "Voice Enabled" : "Muted"}</span>
          </button>

          {isSpeaking && (
            <button
              onClick={stopSpeech}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 text-red-300 border border-red-500/40 text-sm font-medium"
            >
              <FiVolumeX /> Stop Voice
            </button>
          )}
        </div>
      </div>

      <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 mb-8 relative">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative shrink-0">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl font-extrabold text-white bg-gradient-to-br from-purple-600 to-blue-600 shadow-xl border-2 ${isSpeaking ? "border-purple-400 shadow-purple-500/50 animate-pulse" : "border-purple-500/30"}`}>
              AI
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
              <span className="font-semibold text-purple-400">Groq Live Audio Status</span>
              <span>{isLoading ? "⚡ Requesting Groq LLaMA 3.3..." : isSpeaking ? "🔊 AI Speaking Output..." : "Ready"}</span>
            </div>
            <canvas ref={canvasRef} width={400} height={40} className="w-full h-10 bg-gray-900/60 rounded-lg border border-gray-800/80" />
          </div>
        </div>

        {currentAnswer && (
          <div className="mt-6 pt-4 border-t border-gray-800/80">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">Active Answer</span>
              {isLiveGroq && <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">LIVE GROQ LLM INFERENCE</span>}
            </div>
            <p className="text-gray-200 text-sm leading-relaxed bg-purple-950/20 border border-purple-800/30 p-4 rounded-lg">
              {currentAnswer}
            </p>
          </div>
        )}
      </div>

      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
          <FiPlay className="text-purple-400" /> Click to Ask Recruiter Questions (Live Groq LLM):
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectQuestion(q)}
              disabled={isLoading}
              className={`text-left p-3.5 rounded-xl border transition-all text-xs font-medium flex flex-col justify-between ${
                currentQuestion === q.question
                  ? "bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-500/10"
                  : "bg-gray-800/50 border-gray-700/80 text-gray-300 hover:bg-gray-800 hover:border-purple-500/40"
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-1">{q.category}</span>
              <span className="line-clamp-2">{q.question}</span>
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleCustomSubmit} className="flex gap-2">
        <input
          type="text"
          value={customPrompt}
          onChange={e => setCustomPrompt(e.target.value)}
          placeholder="Ask any technical question for Groq LLaMA 3.3..."
          className="flex-1 bg-gray-950 border border-gray-800 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
        />
        <button
          type="submit"
          disabled={isLoading || !customPrompt.trim()}
          className="px-5 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-purple-600/30 shrink-0"
        >
          {isLoading ? <FiRefreshCw className="animate-spin" /> : <FiSend />}
          <span>{isLoading ? "Querying..." : "Ask Groq"}</span>
        </button>
      </form>
    </div>
  );
}
