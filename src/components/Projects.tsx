import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiPlay, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  poster?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
}

const Projects = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setIsClient(true);
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleVideoToggle = (videoUrl?: string) => {
    if (videoUrl) {
      setSelectedVideo(videoUrl);
      setShowVideo(true);
    } else {
      setSelectedVideo(null);
      setShowVideo(false);
    }
    document.body.style.overflow = videoUrl ? 'hidden' : 'auto';
  };
  const projects: Project[] = [
    {
      id: 1,
      title: 'Multivendor ecommerce platform',
      description: 'A full-stack e-commerce platform with multi-role support (Admin, Seller, User) featuring JWT authentication, OTP verification, and responsive MUI/Tailwind design. Includes AI chatbot support and integrates Stripe/Razorpay payments.',
      image: '/muti vendor ecommerce platform.png',
      technologies: ['Spring Boot', 'React', 'TypeScript', 'Redux Toolkit', 'MySQL', 'JWT', 'Tailwind CSS', 'MUI', 'Formik', 'Axios', 'Stripe', 'Razorpay', 'Gemini API'],
      githubUrl: 'https://github.com/Vaibhavsable451/Ecommerce_multivendor.git',
      liveUrl: 'https://ecommerce-multivendor-37j4.onrender.com/',
      frontendUrl: 'https://ecommerce-multivendor-37j4.onrender.com/',
      backendUrl: 'https://ecommerce-multivendor-37j4.onrender.com/',
    },
    {
      id: 2,
      title: 'Employee Management System',
      description: 'A full-stack Employee Management System built to efficiently manage employee records using complete CRUD operations. The application enables administrators to create, view, update, and delete employee details through a clean and responsive user interface. The frontend and backend are deployed on Render as separate services, following modern cloud deployment practices with secure REST API communication. This project demonstrates strong full-stack development skills, RESTful API design, and real-world deployment experience.',
      image: '/employee.png',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API', 'Postman', 'AI Assistant'],
      githubUrl: 'https://github.com/Vaibhavsable451/Employee-Management-System.git',
      frontendUrl: 'https://employee-management-system-1-dg6r.onrender.com/',
      backendUrl: 'https://employee-management-system-1-dg6r.onrender.com/',
      liveUrl: 'https://employee-management-system-1-dg6r.onrender.com/'
    },
    {
      id: 3,
      title: 'AI-Powered Fitness App',
      description: 'A full-stack AI-driven fitness application built with Spring Boot microservices, Kafka, Keycloak, and React. Features include user activity tracking, AI-powered recommendations, event-driven communication, and secure OAuth2 authentication.',
      image: '/fitness-app.png',
      technologies: ['Java', 'Spring Boot', 'Kafka', 'Keycloak', 'OAuth2', 'React', 'MongoDB', 'MySQL'],
      githubUrl: 'https://github.com/Vaibhavsable451/AI-Powered-Fitness-App-With-Spring-Boot-Microservices'
    },    {
      id: 4,
      title: 'KairoAI Chatbot',
      description: 'KairoAI Chatbot is a fast, intelligent AI-powered chatbot that delivers real-time, accurate responses using modern AI APIs. It supports secure OTP-based authentication, multimodal inputs (text + image), and voice-enabled replies, all within a sleek and responsive UI. The frontend (HTML/CSS/JavaScript) is deployed on Render and the backend (Node.js) on Vercel.',
      image: '/ai.mp4',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Groq API'],
      githubUrl: 'https://github.com/Vaibhavsable451/Ai-Chatbot.git',
      frontendUrl: 'https://kairochatbot.onrender.com/',
      backendUrl: 'https://kairochatbot.onrender.com/',
      liveUrl: 'https://kairochatbot.onrender.com/'
    },






    
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={isClient ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project showcases different skills and technologies.
          </p>
        </motion.div>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col w-full ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-4 md:gap-10 items-center`}
            >
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-lg shadow-lg group mx-auto max-w-2xl" onClick={() => project.image?.endsWith('.mp4') && handleVideoToggle(project.image)}>
                <div className="relative aspect-video w-full overflow-hidden bg-gray-700">
                  {project.images ? (
                    <div className="relative w-full h-full">
                      {project.images.map((img, idx) => (
                        <div 
                          key={idx} 
                          className={`absolute inset-0 transition-opacity duration-500 ${idx === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                        >
                          <Image
                            src={img}
                            alt={`${project.title} ${idx + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      {isClient && project.image?.endsWith('.mp4') ? (
                        <div className="relative w-full h-full">
                          <video 
                            className="w-full h-full object-cover"
                            src={project.image}
                            poster={project.poster || '/ai.png'}
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        </div>
                      ) : (
                        <Image
                          src={project.image || ''}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: 'cover' }}
                          className={`transition-transform duration-500 group-hover:scale-110 ${project.image?.endsWith('.mp4') ? 'cursor-pointer' : ''}`}
                          priority={index < 2}
                        />
                      )}
                      {project.image?.endsWith('.mp4') && (
                        <div 
                          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVideoToggle(project.image);
                          }}
                        >
                          <div className="p-3 bg-gray-800/80 rounded-full">
                            <FiPlay className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-end space-x-4">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            <FiGithub size={24} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            <FiExternalLink size={24} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-900 text-blue-200 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2.5 h-10 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 transition-colors font-medium whitespace-nowrap"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  )}
                  {project.backendUrl && (
                    <span
                      className="flex items-center justify-center px-4 py-2.5 h-10 rounded-lg bg-yellow-600/20 text-yellow-500 border border-yellow-600/50 font-medium whitespace-nowrap cursor-default"
                    >
                      Backend (Render)
                    </span>
                  )}
                  {project.frontendUrl && (
                    <span
                      className="flex items-center justify-center px-4 py-2.5 h-10 rounded-lg bg-yellow-600/20 text-yellow-500 border border-yellow-600/50 font-medium whitespace-nowrap cursor-default"
                    >
                      Frontend (Render)
                    </span>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2.5 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors whitespace-nowrap"
                    >
                      <FiGithub className="mr-2" /> View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      
      {/* Video Modal */}
      {showVideo && selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => handleVideoToggle()}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              handleVideoToggle();
            }}
          >
            <FiX className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl" onClick={e => e.stopPropagation()}>
            <video 
              src={selectedVideo}
              controls 
              autoPlay 
              className="w-full rounded-lg shadow-2xl"
              key={selectedVideo}
            />
          </div>
        </div>
      )}
    </div>
  </section>
  );
};

export default Projects;
