"use client";

import React, { useState, useEffect } from "react";
import { IoCloseOutline, IoSparkles, IoColorWandOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";

export default function NoupeChatbotPopup() {
  // Automatically open chatbot directly on page load (true by default — NO click required)
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Inject Noupe chatbot script dynamically on page load
    const scriptId = "noupe-chatbot-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.noupe.com/embed/019eff5b3747779da2c82804a17257f7c890.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Auto-expand/click Noupe widget if generated as a launcher button by the script
    const autoOpenInterval = setInterval(() => {
      const noupeLauncher = document.querySelector<HTMLElement>(
        'iframe[src*="noupe"], [id*="noupe"], [class*="noupe"]'
      );
      if (noupeLauncher) {
        noupeLauncher.click();
      }
    }, 800);

    const timeout = setTimeout(() => clearInterval(autoOpenInterval), 4000);

    return () => {
      clearInterval(autoOpenInterval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
      }}
      className="pointer-events-auto flex flex-col items-end"
    >
      {/* Auto-Opened Chatbot Window */}
      {isOpen && (
        <div
          className="relative flex flex-col overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-950 text-white shadow-2xl backdrop-blur-2xl transition-all duration-500"
          style={{
            width: "min(400px, calc(100vw - 32px))",
            height: "min(580px, calc(100vh - 100px))",
            boxShadow: "0 25px 50px rgba(0,0,0,0.8), 0 0 50px rgba(6,182,212,0.25)",
            animation: "noupePopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/30">
                <IoColorWandOutline className="text-xl text-white" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 border-2 border-slate-950" />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-slate-100">NOUPE AI Chatbot</span>
                  <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                    <IoSparkles size={10} /> Active
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">Virtual Portfolio Assistant</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              title="Close Chatbot"
            >
              <IoCloseOutline size={22} />
            </button>
          </div>

          {/* Embedded Chatbot View */}
          <div className="relative flex-1 w-full bg-slate-900">
            <iframe
              src="https://www.noupe.com/embed/019eff5b3747779da2c82804a17257f7c890"
              title="NOUPE AI Chatbot"
              className="h-full w-full border-none"
              allow="microphone; camera"
            />
          </div>
        </div>
      )}

      {/* Floating Re-open Button when closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-cyan-500/40 hover:scale-105 transition-all cursor-pointer"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <IoChatbubbleEllipsesOutline size={20} />
          <span>Ask NOUPE AI</span>
        </button>
      )}

      <style>{`
        @keyframes noupePopIn {
          0% { opacity: 0; transform: translateY(30px) scale(0.92); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
