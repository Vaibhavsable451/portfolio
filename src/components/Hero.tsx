import { motion } from "framer-motion";
import { FiArrowDown, FiVolume2, FiVolumeX } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true); // starts muted — required for autoplay

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      videoRef.current.volume = 1.0;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Automatically start the background video on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay was prevented or failed:", err);
      });
    }
  }, []);

  useEffect(() => {
    // Load Noupe chatbot script
    const script = document.createElement("script");
    script.src =
      "https://www.noupe.com/embed/019eff5b3747779da2c82804a17257f7c890.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/AiEnginner.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Premium Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/60 to-gray-950 z-10" />

      {/* Floating Ambient Glow Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]" />
      </div>

      {/* Main Content Card */}
      <div className="w-full px-4 md:px-10 z-20 flex justify-start">
        <motion.div
          className="max-w-xl w-full text-center md:text-left bg-gray-950/40 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] ml-2 md:ml-6 lg:ml-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-xl md:text-2xl font-medium text-blue-400 mb-2 tracking-wide uppercase">
              Hi, I&apos;m
            </span>
            <span className="bg-gradient-to-r from-white via-gray-100 to-blue-400 bg-clip-text text-transparent">
              Vaibhav Sable
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-bold text-blue-400/90 mb-6 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI Engineer
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Specializing in{" "}
            <span className="text-white font-semibold">
              LLMs · Generative AI · Agentic AI · RAG systems
            </span>{" "}
            and{" "}
            <span className="text-white font-semibold">
              AI automation workflows
            </span>
            . I build intelligent AI-powered applications using tools like
            LangChain, n8n, and LLM APIs to automate real-world tasks and
            improve productivity.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-2xl transition-all hover:scale-105 shadow-xl shadow-yellow-500/20"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border border-white/20 hover:border-yellow-500 text-white hover:text-yellow-500 font-bold rounded-2xl transition-all backdrop-blur-sm hover:bg-white/5"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors"
        >
          <span className="mb-2 text-xs font-semibold tracking-widest uppercase">
            Scroll Down
          </span>
          <FiArrowDown size={22} className="animate-bounce" />
        </a>
      </motion.div>

      {/* 🔊 Mute / Unmute Toggle Button — Below navbar, right side */}
      <motion.button
        id="hero-mute-toggle"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        onClick={toggleMute}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute top-20 right-6 z-40 flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-black/60 border-2 border-white/30 backdrop-blur-md text-white hover:bg-blue-600/80 hover:border-blue-400 hover:scale-105 transition-all duration-300 group shadow-2xl"
      >
        {/* Pulsing ring when unmuted */}
        {!isMuted && (
          <span className="absolute inset-0 rounded-2xl border-2 border-blue-400 animate-ping opacity-50" />
        )}
        {isMuted ? (
          <FiVolumeX size={26} className="text-gray-200 group-hover:text-white" />
        ) : (
          <FiVolume2 size={26} className="text-blue-300" />
        )}
        <span className="text-sm font-bold tracking-wider uppercase">
          {isMuted ? "🔇 Sound Off" : "🔊 Sound On"}
        </span>
      </motion.button>
    </section>
  );
};

export default Hero;
