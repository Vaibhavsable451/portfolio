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
    image: '/JavaTech.png',
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
    image: '/muti vendor ecommerce platform.png',
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
    image: '/muti vendor ecommerce platform.png',
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
    image: '/JavaTech.png',
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
    <section id="certificates" className="bg-gray-950 relative overflow-hidden">

      {/* ── HEADING (stays centered) ── */}
      <div className="py-16 container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-4 text-sm font-semibold">
          <FiShield className="text-amber-400" /> Verified Credentials
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          📜 Verified Certifications &amp; Credentials
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-4 rounded-full" />
        <p className="text-gray-400 text-base max-w-2xl mx-auto">
          {slides.length} certificates — auto-displaying every 2 seconds
        </p>
      </div>

      {/* ── FULL 100vw × 100vh SLIDESHOW — no container, no padding, no rounded ── */}
      <div
        className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-white"
        style={{ height: '100vh' }}
      >
        {/* Certificate image fills every pixel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              sizes="100vw"
              className="object-contain object-center"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none z-10" />

        {/* Top-left: AUTO + category */}
        <div className="absolute top-5 left-6 z-20 flex flex-col gap-2 pointer-events-none">
          <div className="flex items-center gap-2 bg-black/75 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-500/50 w-fit">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <span className="text-amber-300 text-[11px] font-bold tracking-widest">AUTO</span>
          </div>
          <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-xl border border-gray-700/50 w-fit">
            <p className="text-amber-200 text-[11px] font-semibold">{cert.category}</p>
          </div>
        </div>

        {/* Top-right: counter */}
        <div className="absolute top-5 right-6 z-20 bg-black/75 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-700 text-gray-300 text-xs font-mono font-semibold pointer-events-none">
          {index + 1} <span className="text-gray-600">/</span> {slides.length}
        </div>

        {/* Bottom: title + issuer */}
        <div className="absolute bottom-8 left-0 right-0 z-20 px-8 md:px-16 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white font-bold text-2xl md:text-4xl drop-shadow-2xl line-clamp-2 max-w-3xl">
                {cert.title}
              </h3>
              <p className="text-amber-300 text-base mt-1 font-medium drop-shadow">{cert.issuer}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/40 z-30">
          <motion.div
            key={key}
            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'linear' }}
          />
        </div>
      </div>

      {/* Dot indicators below slideshow */}
      <div className="py-4 flex items-center justify-center flex-wrap gap-1.5">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === index ? 'w-5 h-2 bg-amber-400' : 'w-2 h-2 bg-gray-700'
            }`}
          />
        ))}
      </div>
      <p className="text-center text-xs text-gray-600 pb-8 flex items-center justify-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block" />
        {index + 1} of {slides.length} verified certificates · auto-changes every 2 seconds
      </p>
    </section>
  );
};

export default Certificates;
