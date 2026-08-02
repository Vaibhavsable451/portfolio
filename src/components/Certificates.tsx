"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiEye, FiX, FiShield, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
    category: 'Cloud & Infrastructure',
    image: '/cloud virtual internship.png',
    description: 'Hands-on cloud virtual internship focusing on cloud infrastructure, containerization, and AWS cloud management.',
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const openCert = (cert: Certificate) => {
    setSelectedCert(cert);
  };

  const closeCert = () => {
    setSelectedCert(null);
  };

  const navigateCert = (direction: 'next' | 'prev') => {
    if (!selectedCert) return;
    const currentIndex = certificatesList.findIndex((c) => c.id === selectedCert.id);
    let newIndex: number;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % certificatesList.length;
    } else {
      newIndex = (currentIndex - 1 + certificatesList.length) % certificatesList.length;
    }
    setSelectedCert(certificatesList[newIndex]);
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-4 text-sm font-semibold">
            <FiShield className="text-amber-400" /> Verified Credentials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            📜 Verified Certifications & Industry Credentials
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            High-resolution certificates in Generative AI, Cloud Computing, Full Stack Web Development, and Data Science. Click on any certificate to view the full document in crisp resolution.
          </p>
        </motion.div>

        {/* Large 2-Column Grid for ALL Certificates (Large, clear, uniform image sizes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesList.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
              viewport={{ once: true }}
              onClick={() => openCert(cert)}
              className="bg-gray-900/90 rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl group cursor-pointer flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Large, High-Visibility Aspect Ratio Certificate Container */}
              <div className="relative w-full aspect-[4/3] bg-gray-950 border-b border-gray-800/80">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                  priority={index < 4}
                />
                {/* Sleek Hover Overlay */}
                <div className="absolute inset-0 bg-gray-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-5 py-2.5 bg-amber-400 text-gray-950 text-xs font-bold rounded-full shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <FiEye className="text-base" /> Inspect Full Certificate Document
                  </span>
                </div>
              </div>

              {/* Certificate Details Footer */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/30 font-semibold">
                      {cert.category}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{cert.issuer}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors">
                    {cert.title}
                  </h3>
                  {cert.description && (
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                      {cert.description}
                    </p>
                  )}
                </div>

                <button className="w-full py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-xs shadow-md mt-2">
                  <FiEye className="text-sm" />
                  <span>Inspect Full Certificate</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
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
