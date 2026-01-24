import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Load Noupe chatbot script
    const script = document.createElement("script");
    script.src =
      "https://www.noupe.com/embed/019a9671388271df81b8562be216dc05102c.js";
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="block">Hi, I&apos;m</span>
              <span className="text-blue-400">
                Vaibhav Sable
              </span>
              <span className="block text-2xl md:text-3xl text-gray-300 mt-4">
               Software Engineer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Software Engineer skilled in building efficient, scalable, and user-friendly applications using Java and React.js, specializing in high-performance backend solutions and responsive user interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 font-medium rounded-full transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
              <Image
                src="/profile.png"
                alt="Profile Photo"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
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
