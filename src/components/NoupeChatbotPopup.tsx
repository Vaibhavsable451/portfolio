"use client";

import React, { useState, useEffect } from "react";
import { IoChatbubblesOutline, IoCloseOutline, IoSparkles, IoColorWandOutline } from "react-icons/io5";

export default function NoupeChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show popup automatically after 1.5 seconds
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("noupe_popup_dismissed");
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    setIsDismissed(true);
    sessionStorage.setItem("noupe_popup_dismissed", "true");
  };

  const handleTriggerNoupe = () => {
    // Try to click Noupe chatbot widget if present in DOM
    const noupeLauncher = document.querySelector<HTMLElement>(
      'iframe[src*="noupe"], [id*="noupe"], [class*="noupe"]'
    );
    if (noupeLauncher) {
      noupeLauncher.click();
    } else {
      // Fallback: find any fixed floating element at bottom right
      const elements = Array.from(document.querySelectorAll("iframe, button, div"));
      const floatingElement = elements.find((el) => {
        const style = window.getComputedStyle(el);
        return (
          style.position === "fixed" &&
          style.bottom !== "auto" &&
          style.right !== "auto"
        );
      });
      if (floatingElement && floatingElement instanceof HTMLElement) {
        floatingElement.click();
      }
    }
  };

  if (isDismissed) return null;

  return (
    <div
      style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 9999 }}
      className="flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Popup Bubble */}
      {isOpen && (
        <div
          className="relative overflow-hidden rounded-2xl text-white w-80"
          style={{
            border: "1px solid rgba(6,182,212,0.3)",
            background: "rgba(15,23,42,0.97)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.6), 0 0 40px rgba(6,182,212,0.1)",
            backdropFilter: "blur(20px)",
            animation: "noupeFadeIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both",
          }}
        >
          {/* Ambient Glow */}
          <div
            style={{
              position: "absolute", top: "-40px", right: "-40px",
              width: "120px", height: "120px",
              background: "radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute", bottom: "-40px", left: "-40px",
              width: "120px", height: "120px",
              background: "radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Header */}
          <div
            className="flex items-center justify-between px-4 pt-4 pb-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div
                className="relative flex items-center justify-center rounded-xl"
                style={{
                  width: "38px", height: "38px",
                  background: "linear-gradient(135deg, #06b6d4, #2563eb)",
                  boxShadow: "0 4px 15px rgba(6,182,212,0.4)",
                  flexShrink: 0,
                }}
              >
                <IoColorWandOutline style={{ fontSize: "20px", color: "white" }} />
                {/* Online pulse */}
                <span
                  style={{
                    position: "absolute", top: "-3px", right: "-3px",
                    width: "12px", height: "12px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      width: "12px", height: "12px",
                      borderRadius: "50%",
                      background: "#10b981",
                      opacity: 0.75,
                      animation: "noupePing 1.5s cubic-bezier(0,0,0.2,1) infinite",
                    }}
                  />
                  <span
                    style={{
                      width: "10px", height: "10px",
                      borderRadius: "50%",
                      background: "#10b981",
                      border: "2px solid rgba(15,23,42,0.97)",
                      position: "relative",
                    }}
                  />
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span style={{ fontWeight: 700, fontSize: "14px", color: "#f1f5f9" }}>NOUPE AI</span>
                  <span
                    className="flex items-center gap-1"
                    style={{
                      padding: "2px 8px",
                      borderRadius: "999px",
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.25)",
                      fontSize: "10px",
                      color: "#34d399",
                      fontWeight: 600,
                    }}
                  >
                    <IoSparkles style={{ fontSize: "10px" }} /> Online
                  </span>
                </div>
                <p style={{ fontSize: "11px", color: "#94a3b8", marginTop: "1px" }}>
                  Virtual Portfolio Assistant
                </p>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              title="Close"
              style={{
                padding: "6px",
                borderRadius: "8px",
                background: "transparent",
                border: "none",
                color: "#94a3b8",
                cursor: "pointer",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLButtonElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8";
              }}
            >
              <IoCloseOutline style={{ fontSize: "18px" }} />
            </button>
          </div>

          {/* Message */}
          <div className="px-4 py-3">
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "12px",
                padding: "12px 14px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p style={{ fontSize: "13.5px", color: "#e2e8f0", lineHeight: "1.6", margin: 0 }}>
                👋 <strong>I am NOUPE!</strong> Any type of information ask me —
                I am answering <span style={{ color: "#06b6d4" }}>now</span>! 🚀
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="px-4 pb-4 flex gap-2">
            <button
              onClick={handleTriggerNoupe}
              className="flex items-center justify-center gap-2"
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #06b6d4, #2563eb)",
                border: "none",
                color: "white",
                fontWeight: 600,
                fontSize: "12.5px",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(6,182,212,0.3)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.02)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 25px rgba(6,182,212,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(6,182,212,0.3)";
              }}
            >
              <IoChatbubblesOutline style={{ fontSize: "15px" }} />
              Ask Me Anything
            </button>
            <button
              onClick={handleDismiss}
              style={{
                padding: "10px 14px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8",
                fontSize: "12.5px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLButtonElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8";
              }}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Compact re-open button when popup is closed */}
      {!isOpen && !isDismissed && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2"
          style={{
            padding: "12px 18px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #06b6d4, #2563eb)",
            border: "none",
            color: "white",
            cursor: "pointer",
            boxShadow: "0 8px 30px rgba(6,182,212,0.4)",
            transition: "all 0.3s",
            fontSize: "13px",
            fontWeight: 600,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          <span
            style={{
              width: "8px", height: "8px",
              borderRadius: "50%",
              background: "#10b981",
              animation: "noupePing 1.5s cubic-bezier(0,0,0.2,1) infinite",
              display: "inline-block",
            }}
          />
          <IoColorWandOutline style={{ fontSize: "18px" }} />
          Ask NOUPE AI
        </button>
      )}

      {/* Keyframe animations injected via style tag */}
      <style>{`
        @keyframes noupeFadeIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes noupePing {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
