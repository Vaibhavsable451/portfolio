import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDown, FiVolume2, FiVolumeX } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Load Noupe chatbot script
    const script = document.createElement("script");
    script.src =
      "https://www.noupe.com/embed/019d77342f27738d9a33f696dc8d6830006c.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      setShowTooltip(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 z-0" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
              <span className="block text-2xl md:text-3xl font-medium text-gray-400 mb-2">Hi, I&apos;m</span>
              <span className="text-blue-400 drop-shadow-2xl">Vaibhav Sable</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white/90 mb-6">
              Generative AI Developer

            </h2>
           <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
  Specializing in <span className="text-blue-400">LLMs · Generative AI · Agentic AI · RAG systems</span> and <span className="text-blue-400">AI automation workflows</span>.
  I build intelligent AI-powered applications using tools like LangChain, n8n, and LLM APIs to automate real-world tasks and improve productivity.
  Proven experience in developing Multi-Agent systems, RAG-based chatbots, and scalable AI-driven solutions.
</p>

            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-2xl transition-all hover:scale-105 shadow-xl shadow-yellow-500/20"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 border border-white/20 hover:border-yellow-500 text-white hover:text-yellow-500 font-bold rounded-2xl transition-all backdrop-blur-sm"
                >
                  View My Work
                </a>
              </div>


            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-[380px] md:w-[350px] md:h-[460px] mx-auto group">
              {/* Tooltip prompt */}
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                    exit={{ opacity: 0, y: -10, scale: 0.9, x: "-50%" }}
                    className="absolute -top-14 left-1/2 z-20 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-sm font-bold rounded-2xl shadow-xl shadow-yellow-500/20 whitespace-nowrap flex items-center gap-2 border border-yellow-400 cursor-pointer"
                    onClick={() => toggleMute()}
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-900"></span>
                    </span>
                    Click to hear my voice! 🔊
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Rounded Rectangular Video Container with Premium Border */}
              <div 
                onClick={() => toggleMute()}
                className="w-full h-full rounded-[2.5rem] p-[3px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-[0_0_30px_rgba(59,130,246,0.2)] cursor-pointer relative"
              >
                <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-gray-950 relative">
                  <video
                    ref={videoRef}
                    src="/Portfoliofd.mp4"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover select-none"
                  />

                  {/* Glassmorphic hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-semibold tracking-wider uppercase shadow-lg">
                      {isMuted ? "Unmute Voice" : "Mute Voice"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating control button */}
              <motion.button
                onClick={(e) => toggleMute(e)}
                className="absolute bottom-4 right-4 z-20 p-3 bg-gray-900/90 hover:bg-gray-800 border border-gray-700/80 rounded-full text-white shadow-xl backdrop-blur-md cursor-pointer flex items-center justify-center hover:border-yellow-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={isMuted ? "Unmute intro video" : "Mute intro video"}
              >
                {isMuted ? (
                  <FiVolumeX size={20} className="text-gray-400" />
                ) : (
                  <FiVolume2 size={20} className="text-yellow-400 animate-pulse" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors"
          >
            <span className="mb-2">Scroll Down</span>
            <FiArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
