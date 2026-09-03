"use client";

import { useEffect } from "react";

export default function NoupeChatbotPopup() {
  useEffect(() => {
    // 1. Inject official Noupe AI Chatbot script
    const scriptId = "noupe-chatbot-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.noupe.com/embed/019eff5b3747779da2c82804a17257f7c890.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // 2. Automatically open Noupe's real circular chatbot widget on page load
    let attempts = 0;
    const maxAttempts = 40; // Try for 20 seconds as script loads

    const autoOpenRealNoupe = () => {
      attempts++;

      // Query Noupe widget elements inserted into DOM
      const noupeElements = document.querySelectorAll<HTMLElement>(
        'iframe[src*="noupe"], [id*="noupe"], [class*="noupe"], [id*="chat"], [class*="chat"]'
      );

      let clicked = false;

      noupeElements.forEach((el) => {
        try {
          el.click();
          el.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
          clicked = true;
        } catch {
          // ignore error
        }
      });

      // Fallback: search for any fixed circular button in bottom-right corner
      if (!clicked) {
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
            noupeCircle.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
          } catch {
            // ignore
          }
        }
      }

      if (attempts >= maxAttempts) {
        clearInterval(timer);
      }
    };

    const timer = setInterval(autoOpenRealNoupe, 500);

    return () => clearInterval(timer);
  }, []);

  // Return null so no custom blocking overlay obscures Noupe's real chatbot window
  return null;
}
