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
    },
    {
      id: 2, 
      title: 'Maze Bank Desktop Application',
      description: 'A desktop banking application built with JavaFX that provides features like account management, transactions, income and expenses summary, and secure money transfer. The application includes a modern responsive UI, real-time account updates, and profile management for users.',
      images: ['/javafx.png', '/javafx2.png'],
      technologies: ['Java', 'JavaFX', 'Scene Builder', 'CSS', 'FXML'],
      githubUrl: 'https://github.com/Vaibhavsable451/MazeBank.git',
    },
    {
  id: 3,
  title: 'Employee Management System',
  description:
    'A full-stack Employee Management System upgraded with an intelligent AI Assistant powered by Google Gemini API. The AI agent enables HR admins to ask natural language questions such as “Who joined this month?”, “Show employees with pending appraisals”, or “List all developers in the Pune branch.” It automates data retrieval, report summaries, and smart insights directly from the database. The system uses React (Hooks) for the frontend, Spring Boot for RESTful APIs, and MySQL for storage, with Postman for API validation and testing.',
  image: '/employee.png',
  technologies: [
    'Java',
    'Spring Boot',
    'React',
    'React Hooks',
    'MySQL',
    'REST API',
    'Postman',
    'Google Gemini API',
    'AI Assistant'
  ],
  githubUrl: 'https://github.com/Vaibhavsable451/Employee-Management-System.git'
},
    {
      id: 4,
      title: 'Production-Ready SaaS POS Platform',
      description: 'A production-ready SaaS Point of Sale (POS) system featuring both light and dark themes. The platform includes two main interfaces: Order of Sales (OOS) and Point of Sale (POS), each with dedicated light and dark mode options. The theme toggle allows users to switch between modes based on their lighting conditions and preferences, ensuring optimal visibility and reduced eye strain during extended use.',
      images: ['/oos.png', '/pos.png'],
      technologies: [
        'React', 
        'Shadcn UI', 
        'Tailwind CSS', 
        'Redux Toolkit', 
        'Spring Boot', 
        'JPA/Hibernate', 
        'MySQL',
        'JWT Auth & RBAC',
        'Stripe',
        'Razorpay',
        'Cloudinary',
        'Axios'
      ]
    },
    {
      id: 5,
      title: 'AI-Powered Fitness App with Spring Boot Microservices',
      description: 'A full-stack AI-driven fitness application built with Spring Boot, Kafka, Keycloak, OAuth2, and React/Angular. Features include user management, activity tracking, AI-powered recommendations, event-driven communication, service discovery, API gateway, and secure authentication — a real-world enterprise-grade project for learning and resumes.',
      image: '/fitness-app.png',
      technologies: ['Java', 'Spring Boot', 'Kafka', 'Keycloak', 'OAuth2', 'React', 'Angular', 'MongoDB', 'MySQL', 'REST API'],
      githubUrl: 'https://github.com/Vaibhavsable451/AI-Powered-Fitness-App-With-Spring-Boot-Microservices'
    },
    {
      id: 6,
      title: 'AI Chat Agent with Groq & n8n',
      description: 'Developed an AI-powered chat agent using Groq AI models integrated with n8n for workflow automation. Implemented real-time chat response handling with context-aware processing. Created a simple yet effective memory system within n8n to maintain conversation context without Python dependencies. The solution features seamless integration of AI model APIs and custom workflow automation for efficient chat processing.',
      image: '/AiAgent.png',
      technologies: ['Groq AI', 'n8n', 'API Integration', 'Workflow Automation', 'JavaScript', 'Chat Processing']
    },
    {
      id: 7,
      title: 'AI-Powered Automated Image Editor Agent | Fal AI Nano-Banana + n8n',
      description: 'Created a fully automated image editor agent that executes end-to-end workflows in n8n. The solution can open forms, accept prompts & image uploads, process images using the Nano Banana model, and deliver AI-edited results seamlessly. Features a user-friendly interface for submitting editing requests and viewing processed images.',
      image: '/aiagent.mp4',
      technologies: ['n8n', 'Fal AI', 'Nano Banana Model', 'Workflow Automation', 'Image Processing', 'API Integration']
    },

    {id: 8,
      title: 'AI Chatbot Assistant',
      description: 'An intelligent and fully interactive chatbot built using HTML, CSS, and JavaScript, integrating Groq, Gemini, and APIs for ultra-fast, accurate responses. The system supports real-time messaging, text + image input, and includes AI voice features for speaking replies aloudThe UI includes 8 modern themes (Dark, Light, Neon, Sunset, Ocean, Forest, Purple, Minimal),  a clean, responsive interface designed for a personal AI assistant experience. The chatbot delivers contextual answers, executes searches, explains results, and adapts based on user interactionsAdvanced features include optional subscription-style premium modes like higher message limits, fast GROQ inference, and AI voice output, enhancing the overall user engagement and assistant-like behavior.The project is fully deployed on Netlify, enabling fast global access, seamless hosting, and automatic CI/CD deployment from GitHub for smooth updates.',
      image: '/ai.mp4',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Gemini API', 'Groq API'],
      githubUrl: 'https://github.com/Vaibhavsable451/AiChatbotProject.git'
    },
    { 
      id: 9,
      title: 'Job Hunter AI: Automated Job Hunting with n8n Workflow',
      description: 'Job Hunter automatically scrapes or fetches job listings (e.g., from LinkedIn), extracts relevant data, uses Gemini AI to analyze them, stores the refined job list in Google Sheets, and sends Telegram notifications with top job opportunities — all on a recurring schedule.',
      image: '/Hunter.mp4',
      poster:'/Jobhunter.png',
      technologies: ['n8n', 'Google Gemini', 'Google Sheets', 'Google Drive', 'HTTP Request', 'HTML Extract', 'JavaScript', 'Telegram', 'Schedule Trigger']
    },
    {
      id: 10,
      title: 'AI-Powered Conversational Chatbot (AgentX)',
      description: 'Developed and deployed "Friday," a custom AI assistant powered by AgentX and Google Gemini 2.5 Pro enabling seamless integration with websites and chat applications—without the need for coding. Achieved a 30% increase in user engagement and reduced response latency by 40% through optimized agent concurrency. Implemented real-time analytics to enhance engagement, reliability, and API efficiency.',
      image: '/AGENTXFRIDAy.mp4',
      poster: '/AGENTXFRIDAy.png',
      technologies: ['AgentX', 'Google Gemini 2.5 Pro', 'Real-time Analytics', 'API Integration']
    },
    {
  id: 11,
  title: 'AI-Powered Chatbot Integration (CertifyPro)',
  description: `Built and integrated an AI chatbot “Nathan” for an online course website using Google Gemini AI and n8n. The bot offers 24/7 support, answers FAQs, retrieves course info from Google Sheets, and logs user queries automatically, reducing manual handling by 90% and boosting engagement.`,
  image: '/Course.mp4',
  poster: '/CertifyPro.png',
  technologies: ['React.js', 'JavaScript', 'HTML', 'CSS', 'n8n', 'Google Gemini', 'Google Sheets']
},
{
  id: 12,
  title: 'Astra AI – Intelligent Conversational Assistant',
  description: `I developed Astra AI, an intelligent conversational chatbot that delivers fast, accurate, and interactive responses through a sleek, futuristic, fully responsive interface. It includes eight beautiful themes, multilingual support (English, Marathi, Hindi), and secure encrypted chat handling. Astra AI integrates Groq and Google Gemini APIs using protected API keys, provides chat history with view/delete options, and supports quick “New Chat” creation. It also features polished authentication flows (Sign Up / Sign In) with SQL-based storage for users, sessions, and security. Built using React/Next.js and Tailwind, Astra AI is a production-ready, highly customizable assistant designed for productivity, creativity, and everyday use.`,
  image: '/AstraAI.mp4',
  poster: '/AstraAI.png',
  technologies: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Groq', 'Google Gemini', 'SQL'],
  githubUrl: 'https://github.com/Vaibhavsable451/Astra-AI-Intelligent-Conversational-Assistant.git'
}





    
    
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
                            poster={project.poster || (project.id === 7 ? '/agent.png' : '/ai.png')}
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
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-blue-400 transition-colors"
                    >
                      <FiGithub className="mr-2" /> View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-blue-400 transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
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
