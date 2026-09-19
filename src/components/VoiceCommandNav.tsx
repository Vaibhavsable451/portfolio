"use client";

import { useState, useEffect } from "react";
import { FiMic, FiMicOff, FiZap } from "react-icons/fi";

export default function VoiceCommandNav() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSupported(false);
    }
  }, []);

  const startListening = () => {
    if (typeof window === "undefined") return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript("Listening for navigation commands...");
    };

    recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript.toLowerCase();
      setTranscript(`Command: "${command}"`);
      handleCommand(command);
    };

    recognition.onerror = () => {
      setIsListening(false);
      setTranscript("Voice recognition error or quiet input.");
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleCommand = (cmd: string) => {
    let targetId = "";
    if (cmd.includes("ai hub") || cmd.includes("playground") || cmd.includes("voice twin")) targetId = "ai-hub";
    else if (cmd.includes("project") || cmd.includes("aegis") || cmd.includes("veylix")) targetId = "projects";
    else if (cmd.includes("experience") || cmd.includes("internship")) targetId = "experience";
    else if (cmd.includes("skill") || cmd.includes("tech")) targetId = "skills";
    else if (cmd.includes("achievement") || cmd.includes("certificate")) targetId = "achievements";
    else if (cmd.includes("contact") || cmd.includes("hire") || cmd.includes("email")) targetId = "contact";
    else if (cmd.includes("home") || cmd.includes("top")) targetId = "home";

    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setTranscript(`Navigated to #${targetId}!`);
      }
    }
  };

  if (!supported) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
      <div className="bg-gray-950/90 border border-blue-500/30 rounded-full px-3.5 py-2 backdrop-blur-xl shadow-xl flex items-center gap-3">
        <button
          onClick={startListening}
          className={`p-2 rounded-full transition-all ${
            isListening
              ? "bg-red-600 text-white animate-pulse"
              : "bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/40"
          }`}
          title="Click and say: 'Show Projects', 'Show AI Hub', 'Show Experience'"
        >
          {isListening ? <FiMicOff size={16} /> : <FiMic size={16} />}
        </button>

        <span className="text-[11px] font-semibold text-gray-300 pr-2">
          {transcript || "Voice Nav: Say 'Show Projects'"}
        </span>
      </div>
    </div>
  );
}
