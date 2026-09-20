"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShield } from 'react-icons/fi';
import Image from 'next/image';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: string;
  image: string;
  description?: string;
}

const certificatesList: Certificate[] = [
  // Primary Named Certificates
  {
    id: 'google-genai',
    title: 'Google Cloud Gen AI Academy APAC 2026 (Cohort 2)',
    issuer: 'Google Cloud & Hack2skill',
    category: 'Generative AI',
    image: '/GENAI.jpg',
    description: 'Hands-on learning focused on building real-world AI solutions powered by data, analytics, and intelligent systems on Google Cloud.',
  },
  {
    id: 'genai-software-dev',
    title: 'Generative AI in Software Development',
    issuer: 'Amazon / Coursera Specialization',
    category: 'Generative AI',
    image: '/Generative AI in Software Development.png',
    description: 'Specialized training in applying Generative AI, LLMs, prompt engineering, and RAG architectures in software development.',
  },
  {
    id: 'java-fullstack',
    title: 'Full Stack Java Development',
    issuer: 'Profound Edutech / Simplilearn',
    category: 'Full Stack Java',
    image: '/Screenshot 2026-09-20 005335.png',
    description: 'Comprehensive certification in Java, Spring Boot, REST APIs, Microservices, React, and MySQL database management.',
  },
  {
    id: 'meta-backend',
    title: 'Meta Back-End Developer Certificate',
    issuer: 'Meta / Coursera',
    category: 'Backend Engineering',
    image: '/Meta Back-End Developer-1.png',
    description: 'Professional certification covering Python, Django, APIs, Databases, Git, and System Design for backend development.',
  },
  {
    id: 'meta-frontend',
    title: 'Meta Front-End Developer Certificate',
    issuer: 'Meta / Coursera',
    category: 'Frontend Engineering',
    image: '/Meta Front-End Developer-1.png',
    description: 'Professional certification covering React.js, Advanced JavaScript, UX/UI Design, and Web Development Best Practices.',
  },
  {
    id: 'google-analytics',
    title: 'Google Data Analytics Certificate',
    issuer: 'Google / Coursera',
    category: 'Data Analytics',
    image: '/Google Data Analytics.png',
    description: 'Professional data analytics credential focusing on R, SQL, Tableau, data cleaning, and statistical case study analysis.',
  },
  {
    id: 'google-analytics-capstone',
    title: 'Google Data Analytics Capstone: Case Study',
    issuer: 'Google / Coursera',
    category: 'Data Analytics',
    image: '/Google Data Analytics Capstone Complete a Case-1.png',
    description: 'Completed comprehensive capstone project analyzing real-world complex datasets and publishing actionable insights.',
  },
  {
    id: 'aws-fundamentals',
    title: 'AWS Cloud Fundamentals',
    issuer: 'Amazon Web Services',
    category: 'Cloud Computing',
    image: '/AWS Fundamentals-1.png',
    description: 'Cloud architecture fundamentals covering AWS Core Services, IAM Security, EC2, S3, and Cloud Deployment.',
  },
  {
    id: 'mern-specialization',
    title: 'MERN Stack Specialization',
    issuer: 'Coursera / Udemy',
    category: 'Full Stack MERN',
    image: '/Screenshot 2026-09-20 005303.png',
    description: 'Full stack development specialization covering MongoDB, Express.js, React.js, Redux, Node.js, and JWT Authentication.',
  },
  {
    id: 'mongodb',
    title: 'Introduction to MongoDB',
    issuer: 'MongoDB University',
    category: 'NoSQL Database',
    image: '/Introduction to MongoDB-1.png',
    description: 'Document database fundamentals, indexing, aggregation pipelines, and MongoDB Atlas cloud deployment.',
  },
  {
    id: 'hackerrank-swe',
    title: 'Software Engineer Certification',
    issuer: 'HackerRank',
    category: 'Software Engineering',
    image: '/HackerRank Software Enginieer.png',
    description: 'Verified assessment covering Data Structures, Algorithms, Problem Solving, and Software Development logic.',
  },
  {
    id: 'ai-ml-internship',
    title: 'AI & ML Virtual Internship',
    issuer: 'AICTE & Industry Partner',
    category: 'AI & Machine Learning',
    image: '/ai ml virtual internship.png',
    description: 'Virtual internship certification in machine learning algorithms, model training, feature engineering, and Python analytics.',
  },
  {
    id: 'cloud-internship',
    title: 'Cloud Virtual Internship',
    issuer: 'AWS & AICTE',
    category: 'Cloud Computing',
    image: '/cloud virtual internship.png',
    description: 'Hands-on cloud virtual internship focusing on cloud infrastructure, containerization, and AWS cloud management.',
  },
  {
    id: 'ds-master-internship',
    title: 'Data Science Master Virtual Internship',
    issuer: 'AICTE & Industry Partner',
    category: 'Data Analytics',
    image: '/data sceinse master virtual intership.png',
    description: 'Comprehensive virtual internship mastering data preprocessing, exploratory data analysis, machine learning pipelines, and Python.',
  },
  {
    id: 'coding-interview-prep',
    title: 'Coding Interview Preparation',
    issuer: 'Coursera / Meta',
    category: 'Software Engineering',
    image: '/Coding Interview Preparation-1.png',
    description: 'Advanced problem-solving, data structures, algorithms time/space complexity optimization, and tech interview strategies.',
  },
  {
    id: 'bootstrap-cert',
    title: 'Bootstrap & Responsive UI Certification',
    issuer: 'FreeCodeCamp / Coursera',
    category: 'Frontend Engineering',
    image: '/Bootstrap.png',
    description: 'Responsive web design, modern UI frameworks, grid systems, mobile-first design patterns, and CSS styling.',
  },
  {
    id: 'mern-stack-cert',
    title: 'MERN Stack Web Development',
    issuer: 'Udemy / Coursera',
    category: 'Full Stack MERN',
    image: '/Screenshot 2026-09-20 005324.png',
    description: 'Complete hands-on certification building scalable web applications using React, Node.js, Express, and MongoDB.',
  },
  {
    id: 'web-dev-intro',
    title: 'Introduction to Web Development',
    issuer: 'Coursera / IBM',
    category: 'Frontend Engineering',
    image: '/introduction web devlopment.png',
    description: 'Foundational web development principles covering HTML5, CSS3, JavaScript, web accessibility, and modern tools.',
  },
  {
    id: 'job-simulation-1',
    title: 'Software Engineering Job Simulation',
    issuer: 'Forage / J.P. Morgan',
    category: 'Software Engineering',
    image: '/job simulation.png',
    description: 'Completed practical software engineering task simulation including financial data visualization and system maintenance.',
  },
  {
    id: 'job-simulation-2',
    title: 'Advanced Software Engineering Simulation',
    issuer: 'Forage / Lyft & Walmart',
    category: 'Software Engineering',
    image: '/job simulations.png',
    description: 'Refactoring codebase, implementing architectural design patterns, unit testing, and backend service optimization.',
  },
  {
    id: 'anudip-cert',
    title: 'Anudip Foundation IT & Career Program',
    issuer: 'Anudip Foundation',
    category: 'Full Stack Java',
    image: '/anudip.jpg',
    description: 'Professional training in IT skills, Java development, communication, software fundamentals, and team collaboration.',
  },
  {
    id: 'javatech-cert',
    title: 'Java Technology & Enterprise Systems',
    issuer: 'Profound Edutech',
    category: 'Full Stack Java',
    image: '/Screenshot 2026-09-20 005351.png',
    description: 'Enterprise Java technologies including JDBC, Servlets, JSP, Hibernate, Spring, and database design.',
  },
  {
    id: 'google-verified',
    title: 'Google Career Certificate Verified Credential',
    issuer: 'Google',
    category: 'Data Analytics',
    image: '/Google.png',
    description: 'Verified credential issued by Google recognizing mastery in data analytics tools and problem-solving methodologies.',
  },

  // Screenshot Certificates (Newly Uploaded)
  {
    id: 'screenshot-005303',
    title: 'Verified Certificate Document #1',
    issuer: 'Industry Certification Body',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005303.png',
    description: 'High-resolution official certificate document uploaded to public media repository.',
  },
  {
    id: 'screenshot-005324',
    title: 'Verified Certificate Document #2',
    issuer: 'Professional Training Partner',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005324.png',
    description: 'Official credential document showcasing technical mastery and project completions.',
  },
  {
    id: 'screenshot-005335',
    title: 'Verified Certificate Document #3',
    issuer: 'Cloud & AI Academy',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005335.png',
    description: 'Verified cloud infrastructure and AI learning track completion document.',
  },
  {
    id: 'screenshot-005351',
    title: 'Verified Certificate Document #4',
    issuer: 'Technical Certification Authority',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005351.png',
    description: 'Verified credential image demonstrating software engineering proficiency.',
  },
  {
    id: 'screenshot-005449',
    title: 'Verified Certificate Document #5',
    issuer: 'Educational Institute',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005449.png',
    description: 'Official verified certificate image from public documents directory.',
  },
  {
    id: 'screenshot-005521',
    title: 'Verified Certificate Document #6',
    issuer: 'Global Learning Partner',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005521.png',
    description: 'High-definition certificate document covering specialized development topics.',
  },
  {
    id: 'screenshot-005641',
    title: 'Verified Certificate Document #7',
    issuer: 'Tech Academy',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005641.png',
    description: 'Verified technical achievement screenshot document in crisp resolution.',
  },
  {
    id: 'screenshot-005651',
    title: 'Verified Certificate Document #8',
    issuer: 'Online Learning Platform',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005651.png',
    description: 'Verified course completion certificate screenshot.',
  },
  {
    id: 'screenshot-005702',
    title: 'Verified Certificate Document #9',
    issuer: 'Industry Assessor',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005702.png',
    description: 'Official assessment badge & certificate document.',
  },
  {
    id: 'screenshot-005759',
    title: 'Verified Certificate Document #10',
    issuer: 'Developer Certification Board',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005759.png',
    description: 'High-resolution credential snapshot uploaded to public repository.',
  },
  {
    id: 'screenshot-005809',
    title: 'Verified Certificate Document #11',
    issuer: 'AICTE Partner',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005809.png',
    description: 'Virtual internship certificate snapshot document.',
  },
  {
    id: 'screenshot-005822',
    title: 'Verified Certificate Document #12',
    issuer: 'Specialization Provider',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005822.png',
    description: 'Verified specialization track credential document.',
  },
  {
    id: 'screenshot-005856',
    title: 'Verified Certificate Document #13',
    issuer: 'Cloud & AI Program',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005856.png',
    description: 'Verified AI engineering certificate snapshot.',
  },
  {
    id: 'screenshot-005926',
    title: 'Verified Certificate Document #14',
    issuer: 'Technical Training Organization',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005926.png',
    description: 'Official verified certificate screenshot document.',
  },
  {
    id: 'screenshot-005938',
    title: 'Verified Certificate Document #15',
    issuer: 'Full Stack Academy',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 005938.png',
    description: 'Verified web development credential snapshot document.',
  },
  {
    id: 'screenshot-006007',
    title: 'Verified Certificate Document #16',
    issuer: 'Certification Authority',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 010007.png',
    description: 'Verified credential screenshot document.',
  },
  {
    id: 'screenshot-006028',
    title: 'Verified Certificate Document #17',
    issuer: 'Global Tech Institute',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 010028.png',
    description: 'High-resolution official credential screenshot.',
  },
  {
    id: 'screenshot-006043',
    title: 'Verified Certificate Document #18',
    issuer: 'Meta / Coursera Academy',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 010043.png',
    description: 'Verified course completion certificate document.',
  },
  {
    id: 'screenshot-006112',
    title: 'Verified Certificate Document #19',
    issuer: 'Google Cloud Platform',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 010112.png',
    description: 'Verified Google Cloud training achievement credential.',
  },
  {
    id: 'screenshot-006123',
    title: 'Verified Certificate Document #20',
    issuer: 'Software Engineering Body',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 010123.png',
    description: 'Verified software design and implementation credential.',
  },
  {
    id: 'screenshot-006134',
    title: 'Verified Certificate Document #21',
    issuer: 'DevOps & Cloud Council',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 010134.png',
    description: 'Verified cloud infrastructure certification snapshot.',
  },
  {
    id: 'screenshot-006229',
    title: 'Verified Certificate Document #22',
    issuer: 'Advanced Learning Academy',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 010229.png',
    description: 'Official verified credential image.',
  },
  {
    id: 'screenshot-006302',
    title: 'Verified Certificate Document #23',
    issuer: 'Artificial Intelligence Institute',
    category: 'Verified Screenshots',
    image: '/Screenshot 2026-09-20 010302.png',
    description: 'Verified Deep Learning & Neural Networks completion credential.',
  },
];

const Certificates = () => {
  const slides = certificatesList;
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0); // resets progress bar
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance every 2 seconds — NO click, NO button
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setKey((k) => k + 1);
    }, 2000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cert = slides[index];

  return (
    <section id="certificates" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background blobs for depth */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ── HEADING ── */}
      <div className="container mx-auto px-6 relative z-10 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-4 text-sm font-semibold">
          <FiShield className="text-amber-400" /> Verified Credentials
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          📜 Verified Certifications &amp; Credentials
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-4 rounded-full" />
        <p className="text-gray-400 text-base max-w-2xl mx-auto">
          {slides.length} verified certificates — auto-displaying every 2 seconds
        </p>
      </div>

      {/* ── STUNNING FULL-VIEW CERTIFICATE DISPLAY CARD ── */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <div className="relative rounded-3xl overflow-hidden bg-gray-900/90 border border-gray-800 shadow-2xl backdrop-blur-xl">
          
          {/* Top Info Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-950/80 z-20 relative">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-300 text-xs font-bold tracking-wider uppercase">AUTO PLAY</span>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-800 text-amber-400 border border-gray-700">
                {cert.category}
              </span>
            </div>

            <div className="text-xs font-mono font-bold text-gray-400 bg-gray-800/80 px-3 py-1.5 rounded-full border border-gray-700">
              {index + 1} <span className="text-gray-600">/</span> {slides.length}
            </div>
          </div>

          {/* Certificate Image Frame */}
          <div className="relative w-full h-[55vh] md:h-[65vh] min-h-[400px] max-h-[680px] bg-gray-950 flex items-center justify-center overflow-hidden">
            {/* Ambient Blurred Background Layer (No plain white bars) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`blur-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.25 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={cert.image}
                  alt=""
                  fill
                  className="object-cover blur-3xl"
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>

            {/* Crisp Uncropped Main Certificate Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${index}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="absolute inset-0 p-4 md:p-8 flex items-center justify-center"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-contain object-center drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-800 relative z-20">
            <motion.div
              key={key}
              className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'linear' }}
            />
          </div>

          {/* Dedicated Bottom Details Panel (Zero image overlap!) */}
          <div className="p-6 md:p-8 bg-gray-900 border-t border-gray-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-amber-400 font-semibold text-sm">
                    Issued by: {cert.issuer}
                  </p>
                  {cert.description && (
                    <p className="text-gray-400 text-xs md:text-sm mt-2 max-w-4xl leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <span className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs flex items-center gap-1.5">
                    <FiShield className="text-amber-400" /> Verified Credential
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="pt-6 pb-2 flex items-center justify-center flex-wrap gap-1.5">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === index ? 'w-6 h-2 bg-amber-400' : 'w-2 h-2 bg-gray-700'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 pb-4">
          Showing certificate {index + 1} of {slides.length} · auto-advances every 2 seconds
        </p>
      </div>
    </section>
  );
};

export default Certificates;
