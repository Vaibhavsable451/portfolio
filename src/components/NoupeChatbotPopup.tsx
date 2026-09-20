"use client";

import { useEffect } from "react";

export default function NoupeChatbotPopup() {
  useEffect(() => {
    // 1. Inject official Noupe AI Chatbot script if not present
    const scriptId = "noupe-chatbot-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.noupe.com/embed/01a0bdc35be070008f7aef341a71d0456cbc.js";
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
        (iframe) => iframe.src.includes("noupe") || iframe.src.includes("01a0bdc35be070008f7aef341a71d0456cbc") || iframe.id.includes("noupe") || iframe.className.includes("noupe")
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

      // Target strictly Noupe chatbot elements in DOM (excluding script tags)
      const noupeTargets = Array.from(
        document.querySelectorAll<HTMLElement>(
          'iframe[src*="noupe"], [id*="noupe"], [class*="noupe"]'
        )
      ).filter((el) => el.tagName !== "SCRIPT" && el.id !== scriptId);

      noupeTargets.forEach((target) => {
        try {
          target.click();
          const evt = new MouseEvent("click", { bubbles: true, cancelable: true, view: window });
          target.dispatchEvent(evt);
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
