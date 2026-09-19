"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiEye, FiX, FiShield, FiExternalLink, FiChevronLeft, FiChevronRight, FiFilter, FiSearch } from 'react-icons/fi';
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
    image: '/Full Stack Java Development.png',
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
    image: '/MERN Stack Front To Back Full Stack React, Redux & Node.js Specialization.png',
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
    image: '/Mern Stack.png',
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

const categories = ['All', 'Generative AI', 'Full Stack Java', 'Backend Engineering', 'Frontend Engineering', 'Data Analytics', 'Cloud Computing', 'Full Stack MERN', 'Software Engineering', 'Verified Screenshots'];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCertificates = certificatesList.filter((cert) => {
    const matchesTab = activeTab === 'All' || cert.category === activeTab;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const openCert = (cert: Certificate) => {
    setSelectedCert(cert);
  };

  const closeCert = () => {
    setSelectedCert(null);
  };

  const navigateCert = (direction: 'next' | 'prev') => {
    if (!selectedCert) return;
    const currentList = filteredCertificates.length > 0 ? filteredCertificates : certificatesList;
    const currentIndex = currentList.findIndex((c) => c.id === selectedCert.id);
    let newIndex: number;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % currentList.length;
    } else {
      newIndex = (currentIndex - 1 + currentList.length) % currentList.length;
    }
    setSelectedCert(currentList[newIndex]);
  };

  return (
    <section id="certificates" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-4 text-sm font-semibold">
            <FiShield className="text-amber-400" /> Verified Credentials & Screenshots
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            📜 Verified Certifications & Credentials
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            High-resolution certificate documents and uploaded verification snapshots covering Generative AI, Cloud Computing, Full Stack Web Development, and Data Science.
          </p>
        </motion.div>

        {/* Search & Filter Controls */}
        <div className="mb-10 max-w-6xl mx-auto space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search certificates by title, issuer, category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-sm transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs bg-gray-800 text-gray-400 hover:text-white px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                  activeTab === cat
                    ? 'bg-amber-400 text-gray-950 border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-gray-900 text-gray-300 border-gray-800 hover:border-gray-700 hover:text-white'
                }`}
              >
                {cat}
                {cat === 'All' ? ` (${certificatesList.length})` : ''}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Counter */}
        <div className="text-center text-xs text-amber-400/80 mb-8 font-mono">
          Showing {filteredCertificates.length} of {certificatesList.length} total verified certificates & screenshots
        </div>

        {/* Certificate Cards Grid */}
        {filteredCertificates.length === 0 ? (
          <div className="text-center py-16 bg-gray-900/50 rounded-2xl border border-gray-800 max-w-xl mx-auto">
            <FiAward className="w-12 h-12 text-amber-400/40 mx-auto mb-3" />
            <p className="text-gray-300 font-semibold mb-1">No certificates match your filter</p>
            <p className="text-xs text-gray-500">Try changing your search query or selecting &quot;All&quot;</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openCert(cert)}
                className="bg-gray-900/90 rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl group cursor-pointer flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] bg-gray-950 border-b border-gray-800/80 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={index < 6}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gray-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <span className="px-4 py-2 bg-amber-400 text-gray-950 text-xs font-bold rounded-full shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <FiEye className="text-sm" /> Inspect Full Document
                    </span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] px-2.5 py-0.5 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/30 font-semibold truncate max-w-[60%]">
                        {cert.category}
                      </span>
                      <span className="text-[11px] text-gray-400 font-medium truncate max-w-[40%]">{cert.issuer}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    {cert.description && (
                      <p className="text-gray-400 text-xs mb-4 leading-relaxed line-clamp-2">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  <button className="w-full py-2 px-3 bg-amber-400/10 hover:bg-amber-400 text-amber-400 hover:text-gray-950 font-bold rounded-xl border border-amber-400/30 transition-all duration-200 flex items-center justify-center gap-2 text-xs mt-2">
                    <FiEye className="text-xs" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* High-Resolution Full Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCert}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900">
                <div className="flex items-center gap-3 pr-4 overflow-hidden">
                  <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/30 shrink-0">
                    <FiAward className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <h3 className="text-base md:text-lg font-bold text-white truncate">{selectedCert.title}</h3>
                    <p className="text-xs text-gray-400">{selectedCert.issuer} • {selectedCert.category}</p>
                  </div>
                </div>
                <button
                  onClick={closeCert}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Full Certificate Document Display */}
              <div className="flex-grow relative bg-gray-950 p-2 min-h-[60vh] max-h-[72vh] flex items-center justify-center">
                <div className="relative w-full h-full min-h-[50vh]">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 80vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-gray-800 bg-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <span className="text-gray-400">Official verified certificate document</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigateCert('prev')}
                    className="px-3.5 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg font-medium transition-colors flex items-center gap-1 border border-gray-700 cursor-pointer"
                  >
                    <FiChevronLeft /> Previous
                  </button>
                  <button
                    onClick={() => navigateCert('next')}
                    className="px-3.5 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg font-medium transition-colors flex items-center gap-1 border border-gray-700 cursor-pointer"
                  >
                    Next <FiChevronRight />
                  </button>
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold rounded-lg transition-colors flex items-center gap-1 shadow-sm"
                  >
                    <FiExternalLink /> Open High-Res File
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
