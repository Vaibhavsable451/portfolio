"use client";

import { useState, useRef, useEffect } from "react";
import { FiMessageSquare, FiX, FiSend, FiCpu, FiUser, FiZap, FiMinimize2 } from "react-icons/fi";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export default function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "👋 Hi! I'm Vaibhav's live Groq LLaMA 3.3 AI Assistant. Ask me anything about his projects, technical stack, or background!"
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    setInput("");
    setMessages(prev => [...prev, { sender: "user", text: query }]);
    setLoading(true);

    try {
      const res = await fetch("/api/groq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: query,
          systemPrompt: "You are Vaibhav Sable's portfolio AI assistant. Answer concisely and professionally in 2-3 sentences. Highlight his experience in LangGraph, RAG, FastAPI, Java Spring Boot, Groq LLMs, and AI Security.",
          model: "llama-3.3-70b-versatile"
        })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages(prev => [...prev, { sender: "ai", text: data.reply || "Sorry, I couldn't process that response." }]);
      } else {
        setMessages(prev => [...prev, { sender: "ai", text: "Vaibhav's portfolio highlights expertise in LangGraph 8-agent systems, Pinecone RAG, Presidio PII redaction, and FastAPI microservices." }]);
      }
    } catch {
      setMessages(prev => [...prev, { sender: "ai", text: "Vaibhav specializes in Enterprise Agentic AI, Spring AI microservices, and Groq-powered multi-agent architectures." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 text-white font-bold text-sm shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
          <FiCpu size={20} className="animate-spin" style={{ animationDuration: "5s" }} />
          <span>Ask Portfolio AI</span>
        </button>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] bg-gray-950/95 border border-purple-500/40 rounded-2xl shadow-2xl flex flex-col backdrop-blur-2xl overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-gray-900 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white text-xs shadow-lg">
                AI
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Portfolio Assistant</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Groq LLaMA 3.3 70B Active</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FiX size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "ai" && (
                  <div className="w-6 h-6 rounded-full bg-purple-600/30 border border-purple-500/50 flex items-center justify-center text-[10px] text-purple-300 shrink-0 mt-0.5">
                    AI
                  </div>
                )}
                <div
                  className={`p-3 rounded-xl max-w-[80%] leading-relaxed ${
                    m.sender === "user"
                      ? "bg-purple-600 text-white rounded-br-none shadow-md"
                      : "bg-gray-900 text-gray-200 border border-gray-800 rounded-bl-none"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2 items-center text-gray-400 text-xs italic">
                <FiZap className="text-purple-400 animate-bounce" /> Groq is thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-gray-900/60 border-t border-gray-800/80 flex gap-1.5 overflow-x-auto no-scrollbar">
            {[
              "Top 3 projects?",
              "Why hire Vaibhav?",
              "Explain AegisAI security"
            ].map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip)}
                className="px-2.5 py-1 bg-gray-800 hover:bg-purple-900/50 text-gray-300 hover:text-purple-300 rounded-full text-[10px] whitespace-nowrap border border-gray-700 transition-colors shrink-0"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-gray-950 border-t border-gray-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Ask anything about Vaibhav..."
              className="flex-1 bg-gray-900 border border-gray-800 text-white text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-purple-500"
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              className="px-3.5 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center"
            >
              <FiSend size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
