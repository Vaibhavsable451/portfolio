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

    // 2. Auto-open Noupe's real chatbot widget on page load
    let hasOpened = false;
    let attempts = 0;
    const maxAttempts = 40; // 20 seconds max

    const openNoupeWidget = () => {
      attempts++;

      // Check if Noupe iframe is present in DOM
      const noupeIframes = Array.from(document.querySelectorAll<HTMLIFrameElement>("iframe"));
      const noupeIframe = noupeIframes.find(
        (iframe) => iframe.src.includes("noupe") || iframe.id.includes("noupe") || iframe.className.includes("noupe")
      );

      if (noupeIframe) {
        // If iframe is already expanded into full chat view (> 200px), stop attempting
        if (noupeIframe.offsetHeight > 200 || noupeIframe.offsetWidth > 200) {
          hasOpened = true;
          clearInterval(timer);
          return;
        }

        // Try postMessage to expand Noupe chat inside iframe
        try {
          noupeIframe.contentWindow?.postMessage({ type: "open" }, "*");
          noupeIframe.contentWindow?.postMessage({ action: "open" }, "*");
          noupeIframe.contentWindow?.postMessage("open", "*");
        } catch {
          // ignore
        }
      }

      // Find visible launcher elements (EXCLUDING SCRIPT tags!)
      const allElements = Array.from(
        document.querySelectorAll<HTMLElement>(
          'iframe, button, div[id*="noupe"], div[class*="noupe"], div[id*="chat"], div[class*="chat"], a'
        )
      );

      const launchers = allElements.filter((el) => {
        if (el.tagName === "SCRIPT" || el.id === scriptId) return false;
        const style = window.getComputedStyle(el);
        const isFixed = style.position === "fixed" || style.position === "absolute";
        const rightPx = parseInt(style.right, 10);
        const bottomPx = parseInt(style.bottom, 10);
        const isBottomRight = (!isNaN(rightPx) && rightPx < 120) || (!isNaN(bottomPx) && bottomPx < 120);
        return isFixed || isBottomRight || el.id.toLowerCase().includes("noupe") || el.className.toString().toLowerCase().includes("noupe");
      });

      launchers.forEach((el) => {
        try {
          el.click();
          el.parentElement?.click();
          const evt = new MouseEvent("click", { bubbles: true, cancelable: true, view: window });
          el.dispatchEvent(evt);
        } catch {
          // ignore
        }
      });

      // Try window API methods if provided by Noupe script
      try {
        const win = window as any;
        if (win.Noupe && typeof win.Noupe.open === "function") win.Noupe.open();
        if (win.noupe && typeof win.noupe.open === "function") win.noupe.open();
        if (win.NoupeChat && typeof win.NoupeChat.open === "function") win.NoupeChat.open();
      } catch {
        // ignore
      }

      if (hasOpened || attempts >= maxAttempts) {
        clearInterval(timer);
      }
    };

    const timer = setInterval(openNoupeWidget, 500);

    return () => clearInterval(timer);
  }, []);

  return null;
}
