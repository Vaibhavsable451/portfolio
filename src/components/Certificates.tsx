import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  // Dynamically generate certificates from all .png images in the public folder
const certificateImages = [
  'hackerRanK.png',
  'HackerRank Software Enginieer.png',
  'Google.png',
 'Full Stack Java Development.png',
  'anudip.jpg',
  'profound.png',
  'AWS Fundamentals-1.png',
  'Bootstrap.png',
  'Coding Interview Preparation-1.png',
  'Generative AI in Software Development.png',
  'Google Data Analytics Capstone Complete a Case-1.png',
  'Google Data Analytics.png',
  'Introduction to MongoDB-1.png',
  'MERN Stack Front To Back Full Stack React, Redux & Node.js Specialization.png',
  'Mern Stack.png',
  'Meta Back-End Developer-1.png',
  'Meta Front-End Developer-1.png',
  'ai ml virtual internship.png',
  'cloud virtual internship.png',
  'data sceinse master virtual intership.png',
  'data sceinse.png',
  'data sciense.png',
  'introduction web devlopment.png',
  'job simulation.png',
  'job simulations.png',
];

const certificates: Certificate[] = certificateImages.map((filename, idx) => {
  // Generate a clean title from the filename
  const name = filename.replace(/[-_]/g, ' ').replace(/\.png$/i, '').replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    id: idx + 1,
    title: name,
    issuer: 'Certificate', // Placeholder, can be customized
    date: '', // Optionally add date if needed
    image: `/${filename}`,
    description: '', // Optionally add description
  };
});

  const openCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  const navigateCertificate = (direction: 'next' | 'prev') => {
    if (!selectedCertificate) return;
    
    const currentIndex = certificates.findIndex(cert => cert.id === selectedCertificate.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % certificates.length;
    } else {
      newIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    }
    
    setSelectedCertificate(certificates[newIndex]);
  };

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
// ...
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Certificates
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Professional certifications that demonstrate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openCertificate(certificate)}
            >
              <div className="relative h-48 w-full">
  {/* Logo overlay */}
  <div className="absolute top-2 left-2 z-10 bg-white/80 rounded-full p-1 shadow">
    {/* Simple certificate SVG icon */}
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="16" rx="2" fill="#2563eb"/>
      <rect x="6" y="7" width="12" height="2" rx="1" fill="#fff"/>
      <rect x="6" y="11" width="8" height="2" rx="1" fill="#fff"/>
      <circle cx="18" cy="17" r="2" fill="#fff"/>
      <circle cx="18" cy="17" r="1" fill="#2563eb"/>
    </svg>
  </div>
  <Image
    src={certificate.image}
    alt={certificate.title}
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{certificate.title}</h3>
                <p className="text-gray-300 mb-4">{certificate.issuer}</p>
                <div className="flex flex-col space-y-3">
                  {certificate.date && (
                    <span className="text-sm text-gray-400">{certificate.date}</span>
                  )}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openCertificate(certificate);
                    }}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    View Certificate
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-800 rounded-lg max-w-6xl w-full max-h-[95vh] overflow-hidden relative flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h3 className="text-2xl font-bold text-white truncate pr-4">
                  {selectedCertificate.title}
                </h3>
                <button 
                  onClick={closeCertificate}
                  className="text-gray-400 hover:text-gray-200 p-1 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              {/* Certificate Content */}
              <div className="flex-grow overflow-auto relative">
                <div className="relative h-[70vh] w-full">
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    style={{ objectFit: 'contain' }}
                    priority
                    quality={100}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-700 bg-gray-800">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="text-gray-300">
                      <span className="font-medium">Issuer:</span> {selectedCertificate.issuer}
                    </p>
                    {selectedCertificate.date && (
                      <p className="text-gray-300">
                        <span className="font-medium">Date:</span> {selectedCertificate.date}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => navigateCertificate('prev')}
                      className="px-4 py-2 flex items-center justify-center bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
                    >
                      <FiChevronLeft className="mr-1" /> Previous
                    </button>
                    <button 
                      onClick={() => navigateCertificate('next')}
                      className="px-4 py-2 flex items-center justify-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Next <FiChevronRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
