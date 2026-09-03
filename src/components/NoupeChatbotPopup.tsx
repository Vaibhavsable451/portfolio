"use client";

import { useEffect } from "react";

export default function NoupeChatbotPopup() {
  useEffect(() => {
    // 1. Inject official Noupe AI Chatbot script if not present
    const scriptId = "noupe-chatbot-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.noupe.com/embed/019eff5b3747779da2c82804a17257f7c890.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // 2. Open Noupe's chatbot ONCE on page load (stops immediately after 1 click so it never toggles open/close)
    let hasOpened = false;
    let attempts = 0;
    const maxAttempts = 30; // Try for up to 15 seconds while script loads

    const timer = setInterval(() => {
      if (hasOpened) {
        clearInterval(timer);
        return;
      }

      attempts++;

      // Query Noupe launcher elements inserted into DOM
      const noupeElements = document.querySelectorAll<HTMLElement>(
        'iframe[src*="noupe"], [id*="noupe"], [class*="noupe"]'
      );

      if (noupeElements.length > 0) {
        noupeElements.forEach((el) => {
          try {
            el.click();
          } catch {
            // ignore
          }
        });
        hasOpened = true;
        clearInterval(timer);
        return;
      }

      // Fallback: search for any fixed circular button in bottom-right corner
      const elements = Array.from(document.querySelectorAll<HTMLElement>("div, iframe, button, a"));
      const noupeCircle = elements.find((el) => {
        const style = window.getComputedStyle(el);
        const isFixed = style.position === "fixed";
        const rightPx = parseInt(style.right, 10);
        const bottomPx = parseInt(style.bottom, 10);
        return (
          isFixed &&
          !isNaN(rightPx) && rightPx < 100 &&
          !isNaN(bottomPx) && bottomPx < 100 &&
          el.offsetWidth > 20 && el.offsetWidth < 120
        );
      });

      if (noupeCircle) {
        try {
          noupeCircle.click();
          hasOpened = true;
          clearInterval(timer);
          return;
        } catch {
          // ignore
        }
      }

      if (attempts >= maxAttempts) {
        clearInterval(timer);
      }
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return null;
}
