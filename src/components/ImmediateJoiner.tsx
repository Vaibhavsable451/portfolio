"use client";

import { motion } from "framer-motion";
import {
  FiMapPin,
  FiCheckCircle,
  FiZap,
  FiBriefcase,
  FiClock,
} from "react-icons/fi";

const cities = [
  { name: "Bangalore", state: "Karnataka" },
  { name: "Pune", state: "Maharashtra" },
  { name: "Mumbai", state: "Maharashtra" },
  { name: "Delhi", state: "NCR" },
  { name: "Hyderabad", state: "Telangana" },
  { name: "Chennai", state: "Tamil Nadu" },
  { name: "Gurgaon", state: "Haryana" },
];

const highlights = [
  {
    icon: FiZap,
    label: "Immediate Joiner",
    desc: "Available to join within 0–7 days of offer",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/30",
  },
  {
    icon: FiBriefcase,
    label: "Open to Opportunities",
    desc: "AI Engineer · GenAI Dev · ML Engineer · Full-Stack AI",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    icon: FiClock,
    label: "Notice Period",
    desc: "Zero notice period — ready to start immediately",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
];

const ImmediateJoiner = () => {
  return (
    <section
      id="immediate-joiner"
      className="py-20 bg-gray-950 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-emerald-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-5 shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400"></span>
            </span>
            Immediate Joiner · Open to Work
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
              Join Immediately
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-emerald-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            I am an <span className="text-white font-semibold">Immediate Joiner</span> with{" "}
            <span className="text-yellow-400 font-semibold">zero notice period</span>. Actively seeking
            AI Engineering roles across major Indian tech hubs.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`flex flex-col items-start p-6 rounded-2xl border backdrop-blur-sm ${item.bg} transition-all duration-300 shadow-lg`}
              >
                <div className={`mb-3 p-3 rounded-xl bg-gray-900/60 border border-gray-700/60`}>
                  <Icon className={`${item.color} text-2xl`} />
                </div>
                <h4 className="text-white font-bold text-lg mb-1">{item.label}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Cities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <FiMapPin className="text-blue-400 text-xl" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">Preferred Work Locations</h3>
              <p className="text-gray-400 text-sm">Open to on-site, hybrid &amp; remote across India</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cities.map((city, i) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06, y: -3 }}
                className="flex flex-col items-center justify-center gap-2 px-4 py-5 bg-gray-800/80 border border-gray-700/60 rounded-2xl hover:border-yellow-500/50 hover:bg-gray-800 transition-all duration-300 cursor-default shadow-md group"
              >
                <FiCheckCircle className="text-yellow-400 text-lg group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <p className="text-white font-bold text-sm">{city.name}</p>
                  <p className="text-gray-500 text-xs">{city.state}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Remote option note */}
          <div className="mt-8 flex items-center gap-3 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
            <FiCheckCircle className="text-emerald-400 text-xl shrink-0" />
            <p className="text-gray-300 text-sm">
              Also open to{" "}
              <span className="text-emerald-400 font-semibold">fully remote</span> and{" "}
              <span className="text-emerald-400 font-semibold">hybrid work arrangements</span>{" "}
              across India.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImmediateJoiner;
