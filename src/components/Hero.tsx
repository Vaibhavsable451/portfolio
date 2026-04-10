import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowDown, FiGlobe } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelopeOpenText } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useEffect } from "react";

const Hero = () => {
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
              Full Stack Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Specializing in <span className="text-blue-400">Java · Spring Boot · Microservices</span> and <span className="text-blue-400">React.js</span>. 
              I architect secure, high-performance backend systems and build intuitive, responsive frontends. 
              Proven track record of delivering 20+ production APIs and AI-driven solutions.
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

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vaibhav-sable-59b56827a/" },
                  { icon: FaGithub, label: "GitHub", href: "https://github.com/Vaibhavsable451" },
                  { icon: FaFileAlt, label: "Resume", href: "https://drive.google.com/file/d/1ZJL6RivMiZ0Zzq7IKmV4OPhU6aQa4OsQ/view?usp=sharing" },
                  { icon: FiGlobe, label: "Portfolio", href: "https://vaibhavsable-klzmwv1.gamma.site/" },
                  { icon: SiLeetcode, label: "LeetCode", href: "https://leetcode.com/u/vaibhavsable122/" },
                  { icon: FaEnvelopeOpenText, label: "Cover Letter", href: "https://drive.google.com/file/d/1maTsxXwWSjsvD2IeSiq08UpIIXeGLXpx/edit" },
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(234, 179, 8, 0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 hover:border-yellow-500/50 text-gray-300 hover:text-white rounded-xl transition-all backdrop-blur-md"
                  >
                    <item.icon className="text-yellow-500 text-xl" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.a>
                ))}
              </div>
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
