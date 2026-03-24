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
      liveUrl: 'https://ecommerce-multivendor-yu62.onrender.com/',
      frontendUrl: 'https://ecommerce-multivendor-yu62.onrender.com/',
      backendUrl: 'https://ecommerce-multivendor-yu62.onrender.com/',
    },
    {
      id: 2,
      title: 'Employee Management System',
      description: 'A full-stack Employee Management System built to efficiently manage employee records using complete CRUD operations. The application enables administrators to create, view, update, and delete employee details through a clean and responsive user interface. The frontend is deployed on Vercel and the backend is on Render, following modern cloud deployment practices with secure REST API communication.',
      image: '/employee.png',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API', 'Postman', 'AI Assistant'],
      githubUrl: 'https://github.com/Vaibhavsable451/Employee-Management-System.git',
      frontendUrl: 'https://employee-management-system-blond-eight.vercel.app/',
      backendUrl: 'https://employee-management-system-1-dg6r.onrender.com/',
      liveUrl: 'https://employee-management-system-blond-eight.vercel.app/'
    },
    {
      id: 3,
      title: 'AI-Powered Fitness App',
      description: 'A full-stack AI-driven fitness application built with Spring Boot microservices, Kafka, Keycloak, and React. Features include user activity tracking, AI-powered recommendations, event-driven communication, and secure OAuth2 authentication.',
      image: '/fitness-app.png',
      technologies: ['Java', 'Spring Boot', 'Kafka', 'Keycloak', 'OAuth2', 'React', 'MongoDB', 'MySQL'],
      githubUrl: 'https://github.com/Vaibhavsable451/AI-Powered-Fitness-App-With-Spring-Boot-Microservices'
    }, {
      id: 4,
      title: 'KairoAI Chatbot',
      description: 'KairoAI Chatbot is a fast, intelligent AI-powered chatbot that delivers real-time, accurate responses using modern AI APIs. It supports secure OTP-based authentication, multimodal inputs (text + image), and voice-enabled replies, all within a sleek and responsive UI. Both the frontend and backend are deployed on Vercel.',
      image: '/ai.mp4',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Groq API'],
      githubUrl: 'https://github.com/Vaibhavsable451/Ai-Chatbot.git',
      frontendUrl: 'https://pl-tawny-one.vercel.app/',
      backendUrl: 'https://pl-tawny-one.vercel.app/',
      liveUrl: 'https://pl-tawny-one.vercel.app/'
    }, 
    
{
      id: 5,
      title: '3D Portfolio Website',
      description: 'Developed an interactive personal portfolio website with 3D-inspired visuals, responsive design, smooth animations, and modern UI to showcase projects and skills.',
      image: '/portfolio2.mp4',
      poster: '/portfolio2.png',
      technologies: ['HTML5','CSS3','JavaScript'],
      githubUrl: 'https://github.com/Vaibhavsable451/3d-Portfolio-Website.git',
      liveUrl: 'https://gentle-llama-ea079b.netlify.app/'

    },
    
    {
      id: 6,
      title: 'AI Recruitment Email Intelligence Agent',
      description: 'AI Recruitment Email Intelligence Agent is an automated workflow that fetches company emails from Gmail, classifies recruitment responses such as interview, selection, rejection, and offer emails using Groq LLM APIs, logs structured results into Google Sheets, and sends real-time alerts. Built using n8n workflow automation and LLM-powered classification, this system eliminates manual email tracking and improves job application management efficiency.',
      image: '/rdf.mp4',
      poster: '/rdf.png',
     technologies: [
'n8n',
'Groq LLM API',
'Gmail API',
'Google Sheets API',
'Workflow Automation',
'AI Email Classification',
'Google Cloud'
],
      githubUrl: 'https://github.com/Vaibhavsable451/AI-Recruitment-Email-Intelligence-Agent.git',

    },
    
    {
      id: 7,
      title: 'JOB FINDER AI AGENT',
      description: 'Job Finder AI Agent is an end-to-end AI-powered job automation system that intelligently searches LinkedIn jobs, evaluates them against a candidate’s resume using LLMs, generates personalized cover letters, and sends real-time Telegram alerts — eliminating manual job searching and repetitive applications. Built using n8n workflow automation, Groq LLM APIs, Google Sheets, and Telegram Bot integration, this system acts as a fully automated AI job discovery engine.',
      image: '/JobFinderAiAgent.mp4',
      poster: '/JobFinderAi.png',
      technologies: ['n8n', 'Groq LLM', 'AI Agent', 'Google Sheets', 'Telegram Bot','Google Cloud', 'Automation'],
      githubUrl: 'https://github.com/Vaibhavsable451/Job-Finder-AI-Agent.git',

    },
    {
      id: 8,
      title: "Spring AI Chatbot",
      description: "Built an AI chatbot application using Spring Boot, Spring AI, React.js, and Groq-powered LLMs to enable intelligent conversational responses through a modern web interface. Implemented frontend-backend integration, REST API communication, markdown and code response rendering, and a clean chat UI with conversation history support. Both the frontend and backend are deployed on Render.",
      image: "/pari.png",
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "Groq API",
        "LLM",
        "spring ai"
      ],
      githubUrl: "https://github.com/Vaibhavsable451/Spring-AI-Build-Generative-AI-application-.git",
      frontendUrl: 'https://spring-ai-build-generative-ai-application-g4x4.onrender.com/',
      backendUrl: 'https://spring-ai-build-generative-ai-application-g4x4.onrender.com/',
      liveUrl: 'https://spring-ai-build-generative-ai-application-g4x4.onrender.com/'
    },
    {
      id: 9,
      title: 'Job Mail AI Tracker',
      description: 'Job Mail AI Tracker is an n8n-powered automation workflow that automatically scans Gmail, uses Groq LLM to intelligently classify job emails as Rejection or Applied, labels them in Gmail, and logs every result to Google Sheets — building a real-time rejection and application tracker with zero manual effort.',
      image: '/ds.mp4',
      poster: '/ds.png',
      technologies: ['n8n', 'Groq LLM', 'Gmail API', 'Google Sheets', 'AI Classifier', 'Automation','Google Cloud'],


    },
     {
      id: 10,
      title: 'Job Finder AI Agent',
      description: 'Job Finder AI Agent is an n8n-powered end-to-end job automation system that scrapes live job listings via HTTP Request, filters the top 10 matches, merges them with your Google Docs resume, uses Groq LLM and Google Gemini to evaluate fit, generates personalized cover letter emails — and automatically sends them directly to hiring managers via Gmail with zero manual effort.',
      image: '/fddd.mp4',
      poster: '/fddd.png',
      technologies: ['n8n', 'Groq LLM', 'Google Gemini', 'Gmail API', 'Google Docs', 'Apify', 'Automation','Google Cloud'],


    },


   
    {
      id: 11,
      title: "JARVIS – Real-Time AI Personal Assistant",
      description: "A real-time AI personal assistant built with Python capable of executing system commands, answering queries, automating keyboard and mouse actions, managing files, and storing persistent memory. Designed with a modular architecture for extensibility and real-world automation use cases.",
      image: "/jarvis-ai.png",
      technologies: [
        "Python",
        "AsyncIO",
        "OpenAI API",
        "Gemini API",
        "Windows Automation",
        "Keyboard Automation",
        "Mouse Automation",
        "JSON Storage"
      ],
      githubUrl: "https://github.com/Vaibhavsable451/Advanced-Real-Time-AI-Personal-Assistant.git"
    },









  ];

  return (
    <section id="projects" className="py-20 bg-gray-950 overflow-hidden relative">
      {/* Background blobs for 3D depth feel */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
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
              <motion.div
                className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl shadow-2xl group mx-auto max-w-2xl border border-white/10 backdrop-blur-md bg-white/5 transform-gpu transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/50 hover:shadow-blue-500/20"
                whileHover={{ y: -5 }}
                onClick={() => project.image?.endsWith('.mp4') && handleVideoToggle(project.image)}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-gray-900/40">
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
                          style={{ objectFit: project.id === 6 ? 'contain' : 'cover' }}
                          className={`transition-transform duration-500 group-hover:scale-105 ${project.image?.endsWith('.mp4') ? 'cursor-pointer' : ''}`}
                          priority={index < 2 || project.id === 6}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-end space-x-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transform hover:scale-125 transition-all shadow-lg"
                          >
                            <FiGithub size={24} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transform hover:scale-125 transition-all shadow-lg"
                          >
                            <FiExternalLink size={24} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

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
                      className="flex items-center justify-center px-4 py-2.5 h-10 rounded-lg bg-green-600/20 text-green-400 border border-green-600/50 font-medium whitespace-nowrap cursor-default shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                    >
                      Backend ({project.id === 4 ? 'Vercel' : 'Render'})
                    </span>
                  )}
                  {project.frontendUrl && (
                    <span
                      className="flex items-center justify-center px-4 py-2.5 h-10 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-600/50 font-medium whitespace-nowrap cursor-default shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                    >
                      Frontend ({project.id === 2 || project.id === 4 ? 'Vercel' : 'Render'})
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
                muted
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
