"use client";

import { motion } from 'framer-motion';
import { FiExternalLink, FiAward, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import { SiCodechef, SiCodeforces, SiLeetcode } from 'react-icons/si';

interface Achievement {
  id: string;
  platform: string;
  username: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badgeBg: string;
  badgeText: string;
  stats: { label: string; value: string }[];
  description: string;
  highlight: string;
}

const achievementsData: Achievement[] = [
  {
    id: 'leetcode',
    platform: 'LeetCode',
    username: 'vaibhavsable122',
    url: 'https://leetcode.com/u/vaibhavsable122/',
    icon: SiLeetcode,
    color: 'from-amber-500 to-yellow-600',
    badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    badgeText: '200+ Solved',
    stats: [
      { label: 'Problems Solved', value: '200+' },
      { label: 'Domains', value: 'DSA, SQL, Python, Java' },
      { label: 'Focus', value: 'Interview Prep & Optimization' },
    ],
    description:
      'LeetCode profile showcasing consistent coding practice with 200+ solved problems across Data Structures & Algorithms, SQL, Python, and Java. Focused on strengthening problem-solving skills, optimizing solutions, and preparing for technical interviews through regular competitive programming practice.',
    highlight: '200+ Problems Solved across DSA, SQL & OOP',
  },
  {
    id: 'codeforces',
    platform: 'Codeforces',
    username: 'vaibhavsable150',
    url: 'https://codeforces.com/profile/vaibhavsable150',
    icon: SiCodeforces,
    color: 'from-blue-500 to-indigo-600',
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    badgeText: 'CP Journey Started',
    stats: [
      { label: 'Milestone', value: 'First Problem Solved ✅' },
      { label: 'Problem 2250A', value: 'Threshold Movement' },
      { label: 'Language', value: 'Python 3' },
    ],
    description:
      'Started my Competitive Programming journey! Solved my first Codeforces problem (2250A - Threshold Movement in Python 3). This milestone helped me improve my algorithmic thinking, problem-solving approach, and Data Structures & Algorithms skills.',
    highlight: 'Solved 2250A - Threshold Movement (Python 3)',
  },
  {
    id: 'codechef',
    platform: 'CodeChef',
    username: 'vaibhavsable',
    url: 'https://www.codechef.com/users/vaibhavsable',
    icon: SiCodechef,
    color: 'from-amber-700 to-orange-600',
    badgeBg: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    badgeText: '73% Skill Score',
    stats: [
      { label: 'Problems Solved', value: '41+' },
      { label: 'Python Skill Test', value: '73% Score' },
      { label: 'Core Skills', value: 'DSA & Python' },
    ],
    description:
      'Solved 41+ coding problems on CodeChef, achieved a 73% Python Skill Test score, and strengthened Data Structures & Algorithms (DSA), Python programming, and problem-solving skills through consistent coding practice.',
    highlight: '73% Python Skill Test & 41+ Problems Solved',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-4 text-sm font-semibold">
            <FiAward className="text-amber-400" /> Competitive Programming & Badges
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🏆 Coding Achievements & Profiles
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Consistent coding practice across LeetCode, CodeChef, and Codeforces to strengthen Data Structures, Algorithms, and AI problem-solving logic.
          </p>
        </motion.div>

        {/* Platform Cards Grid - 3 cards side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {achievementsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-gray-800/90 rounded-2xl p-6 border border-gray-700/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl group hover:-translate-y-1"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gray-900 rounded-xl text-amber-400 border border-gray-700 group-hover:border-amber-400/50 transition-colors">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.platform}</h3>
                        <p className="text-xs text-gray-400">@{item.username}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full border font-semibold ${item.badgeBg}`}>
                      {item.badgeText}
                    </span>
                  </div>

                  {/* URL preview display */}
                  <div className="mb-4 p-2 bg-gray-900/80 rounded-lg border border-gray-700/60 flex items-center justify-between text-xs text-amber-300/90 font-mono overflow-hidden">
                    <span className="truncate mr-2">{item.url}</span>
                    <FiExternalLink className="shrink-0 text-amber-400" />
                  </div>

                  {/* Highlight */}
                  <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-amber-400 bg-amber-400/10 p-2 rounded-lg border border-amber-400/20">
                    <FiCheckCircle className="shrink-0 text-amber-400" />
                    <span>{item.highlight}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-gray-900/60 rounded-xl border border-gray-700/50 mb-6 text-center">
                    {item.stats.map((st, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-xs font-bold text-white truncate">{st.value}</span>
                        <span className="text-[10px] text-gray-400 truncate">{st.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Yellow Action Button */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 text-sm cursor-pointer"
                >
                  <span>Visit {item.platform} Profile</span>
                  <FiExternalLink className="text-base" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* AI Aspirations & Mindset Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800 via-gray-800/95 to-gray-800 rounded-2xl p-8 border border-amber-500/30 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/30 text-2xl shrink-0 mt-1">
                🤖
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Building strong AI & Problem-Solving Fundamentals
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed max-w-4xl">
                  As an aspiring AI Engineer, I am continuously strengthening my programming fundamentals, optimizing my problem-solving skills, and building a strong foundation for developing intelligent AI solutions. Excited to solve more problems, learn new technologies, and grow as an AI Engineer.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <a
                href="https://leetcode.com/u/vaibhavsable122/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold rounded-xl transition-all duration-200 inline-flex items-center gap-2 shadow-lg shadow-amber-500/20 text-sm"
              >
                <FiTrendingUp className="text-base" />
                <span>Track Coding Journey</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
