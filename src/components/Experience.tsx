
import { motion } from 'framer-motion';
import {
  FiBriefcase,
  FiCalendar,
  FiGithub,
  FiExternalLink,
  FiAward,
  FiFolder
} from 'react-icons/fi';
import Image from 'next/image';

interface ProjectPreview {
  title: string;
  image: string;
  description?: string;
  technologies?: string[];
  poster?: string;
  githubUrl?: string;
  liveUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
}

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
  certificates?: {
    name: string;
    url: string;
  }[];
  githubUrl?: string;
  portfolioUrl?: string;
  projectImage?: string;
  projectPoster?: string;
  projects?: ProjectPreview[];
}

// Reusable image/video preview component
interface MediaPreviewProps {
  src: string;
  alt: string;
  poster?: string;
}

const MediaPreview = ({
  src,
  alt,
  poster
}: MediaPreviewProps) => {
  const isVideo = src.toLowerCase().endsWith('.mp4');

  if (isVideo) {
    return (
      <video
        src={src}
        poster={poster}
        controls
        muted
        playsInline
        preload="metadata"
        aria-label={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover transition-transform duration-500 hover:scale-105"
    />
  );
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    // =====================================================
    // 1. GENERATIVE AI INTERN - CODOMAX
    // =====================================================
    {
      id: 1,
      position: 'Generative AI Intern',
      company: 'Codomax Digital Solutions',
      location: 'Remote',
      duration: 'Oct 2026 - Nov 2026',

      description: [
        'Selected for a 28-day Generative AI internship at Codomax Digital Solutions, focusing on practical GenAI concepts, LLM application development, RAG systems, and AI agent workflows.',

        'Explored Generative AI fundamentals, Large Language Models (LLMs), Transformers, and Responsible AI.',

        'Applied Prompt Engineering techniques, including zero-shot and few-shot prompting.',

        'Developed an AI Chat Application using LLM APIs, conversation history, and custom instructions.',

        'Built a Retrieval-Augmented Generation (RAG) application using embeddings, vector databases, and semantic search.',

        'Explored AI Agents, tool calling, memory, and multi-step automation workflows.',

        'Developed a GenAI Capstone Project integrating LLM APIs, Prompt Engineering, RAG, and AI Agents.',

        'Submitted GitHub repositories, technical documentation, and project deliverables for evaluation; all module submissions successfully approved.'
      ],

      skills: [
        'Generative AI',
        'Python',
        'LLMs',
        'Prompt Engineering',
        'RAG',
        'LangChain',
        'Vector Databases',
        'Embeddings',
        'Semantic Search',
        'AI Agents',
        'Tool Calling',
        'Conversation Memory',
        'LLM APIs',
        'Transformers',
        'Responsible AI',
        'GitHub'
      ],

      projects: [
        {
          title: 'GenAI Capstone Project',

          description:
            'Developed a Generative AI capstone integrating LLM APIs, prompt engineering, RAG, and AI agent workflows.',

          technologies: [
            'Python',
            'Generative AI',
            'LLM APIs',
            'RAG',
            'AI Agents',
            'Prompt Engineering'
          ],

          image: '/JOBSS.mp4',
          poster: '/COP.png',

          githubUrl:
            'https://github.com/Vaibhavsable451/genai-capstone-projectCAstonr1.git',

          liveUrl:
            'https://techtaru-digital-taskgit-2hv2e657ibivscgkve4fgf.streamlit.app/'
        },

        {
          title: 'AI-Powered Digital Task Automation',

          description:
            'Developed an AI-powered application demonstrating practical AI workflow automation and interactive Streamlit deployment.',

          technologies: [
            'Python',
            'Streamlit',
            'Generative AI',
            'LLMs'
          ],

          image: '/Task1.mp4',
          poster: '/Yellow.png',

          githubUrl:
            'https://github.com/Vaibhavsable451/techtaru-digital-task.git',

          liveUrl:
            'https://techtaru-digital-taskgit-2hv2e657ibivscgkve4fgf.streamlit.app/'
        },

        {
          title: 'AI Agent with Tools',

          description:
            'Built an AI agent capable of understanding user requests and routing tasks to specialized Python tools through function calling.',

          technologies: [
            'Python',
            'OpenAI Function Calling',
            'LangChain Agents',
            'Tool Calling'
          ],

          image: '/Task2.mp4',
          poster: '/red2.png',

          githubUrl:
            'https://github.com/Vaibhavsable451/techtaru-digital-task.git',

          liveUrl:
            'https://techtaru-digital-task2-488xufcp8jlb8xbqhxs5il.streamlit.app/'
        },

        {
          title: 'Data Extraction Bot',

          description:
            'Developed an LLM-powered data extraction application that transforms unstructured text, such as resumes and invoices, into structured JSON outputs with validation.',

          technologies: [
            'Python',
            'Pydantic',
            'OpenAI Structured Outputs',
            'FastAPI',
            'LLMs'
          ],

          image: '/Task1.mp4',
          poster: '/Blue3.png',

          liveUrl:
            'https://techtaru-digital-task3-k8wk74cx8g6d9jcb5qmo8v.streamlit.app/'
        }
      ],

      githubUrl:
        'https://github.com/Vaibhavsable451',

      portfolioUrl:
        'https://portfolio-wheat-six-apdmu7v0c7.vercel.app/'
    },

    // =====================================================
    // 2. SELF-DIRECTED AI ENGINEERING PROJECTS
    // =====================================================
    {
      id: 2,
      position: 'AI Engineer (Self-Directed Projects)',
      company: 'Self-Employed',
      location: 'Remote',
      duration: 'Jan 2026 - Oct 2026',

      description: [
        'Independently designed, developed, and deployed 64+ hands-on AI projects spanning Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG), AI Governance, Observability, and MLOps.',

        'Built multi-agent AI platforms using LangGraph and LangChain, including an Enterprise AI Customer Support Platform with confidence-based escalation, deployed on AWS EC2 using K3s.',

        'Developed advanced RAG pipelines using Pinecone and Sentence Transformers, implementing document chunking, embeddings, semantic search, and grounded response generation.',

        'Implemented enterprise AI governance controls using Presidio for PII redaction, prompt-injection detection, hallucination checks, and explainable 0-100 risk scoring in AegisAI and NeuraGuard.',

        'Developed secure backend services using FastAPI, JWT authentication, RBAC, and MySQL.',

        'Containerized and deployed AI applications using Docker, Kubernetes, and GitHub Actions CI/CD.',

        'Integrated MLflow for model evaluation and monitoring, agent observability, and human-in-the-loop approval workflows.',

        'Published project source code on GitHub and maintained a portfolio showcasing deployed AI engineering projects.'
      ],

      skills: [
        'Python',
        'Generative AI',
        'Agentic AI',
        'LangChain',
        'LangGraph',
        'Retrieval-Augmented Generation (RAG)',
        'Pinecone',
        'Sentence Transformers',
        'FastAPI',
        'Machine Learning',
        'AI Governance',
        'Presidio',
        'Prompt Injection Detection',
        'Hallucination Detection',
        'MLflow',
        'MLOps',
        'Docker',
        'Kubernetes',
        'AWS EC2',
        'K3s',
        'GitHub Actions',
        'MySQL',
        'JWT',
        'RBAC',
        'Observability'
      ],

      githubUrl:
        'https://github.com/Vaibhavsable451',

      portfolioUrl:
        'https://portfolio-wheat-six-apdmu7v0c7.vercel.app/'
    },

    // =====================================================
    // 3. DATA SCIENCE INTERN
    // =====================================================
    {
      id: 3,
      position: 'Data Science Intern',
      company: 'Internship Studio',
      location: 'Remote',
      duration: 'Jun 2025 - Dec 2025',

      description: [
        'Successfully completed a remote internship focused on data science and analytics, designing and implementing data pipelines that improved processing efficiency by 25%.',

        'Developed COVID-19 Data Analysis Using Python: Conducted exploratory data analysis (EDA), data cleaning, duplicate removal, date-time processing, aggregation, and feature engineering to identify trends across continents.',

        'Created advanced visualizations including histograms, scatter plots, pair plots, and bar charts using Matplotlib and Seaborn to communicate insights.',

        'Collaborated with teams to deliver data-driven insights and statistical analysis for business decision-making.'
      ],

      skills: [
        'Python',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
        'Data Analysis',
        'Exploratory Data Analysis',
        'Machine Learning',
        'Power BI',
        'SQL',
        'Statistics',
        'Microsoft Excel',
        'Artificial Intelligence'
      ],

      certificates: [
        {
          name: 'Data Science Internship Certificate',

          url:
            'https://drive.google.com/file/d/1qIMD9toS7GdY7eTcZZ10WJ90IKcdQHL2/view'
        },

        {
          name: 'Data Science Completion Certificate',

          url:
            'https://drive.google.com/file/d/1ChxqA1_miqufHrPfMEpJmNVRO0hihqnj/view'
        }
      ],

      githubUrl:
        'https://github.com/Vaibhavsable451/Project-Internship',

      projectImage: '/covid_analysis.png'
    },

    // =====================================================
    // 4. JAVA DEVELOPER INTERN
    // =====================================================
    {
      id: 4,
      position: 'Java Developer Intern',
      company: 'Profound Edutech Private Limited',
      location: 'Pune, Maharashtra, India',
      duration: 'Feb 2025 - Sep 2025',

      description: [
        'Completed an internship focused on Java and Advanced Java technologies.',

        'Worked on real-world projects using Spring Boot, React, MySQL, MongoDB, REST APIs, JavaScript, TypeScript, and Node.js.',

        'Demonstrated punctuality, dedication, and problem-solving skills.'
      ],

      skills: [
        'Java',
        'Spring Boot',
        'React',
        'TypeScript',
        'Redux Toolkit',
        'MySQL',
        'MongoDB',
        'REST APIs',
        'JWT',
        'Stripe',
        'Razorpay',
        'Gemini API',
        'Node.js',
        'JavaScript',
        'Tailwind CSS',
        'MUI',
        'Spring AI',
        'Kafka',
        'Keycloak',
        'OAuth2'
      ],

      certificates: [
        {
          name: 'Java Developer Internship Certificate',

          url:
            'https://drive.google.com/file/d/19fhIbVj94Q9v58jYKvuE3QvEpZqWyUAb/view'
        }
      ],

      projects: [
        {
          title: 'Multivendor Ecommerce Platform',

          image: '/muti vendor ecommerce platform.png',

          githubUrl:
            'https://github.com/Vaibhavsable451/Ecommerce_multivendor',

          liveUrl:
            'https://ecommerce-multivendor-1.onrender.com/',

          frontendUrl:
            'https://ecommerce-multivendor-yu62.onrender.com/',

          backendUrl:
            'https://ecommerce-multivendor-yu62.onrender.com/'
        },

        {
          title: 'Employee Management System',

          image: '/employee.png',

          githubUrl:
            'https://github.com/Vaibhavsable451/Employee-Management-System',

          liveUrl:
            'https://employee-management-system-blond-eight.vercel.app/',

          frontendUrl:
            'https://employee-management-system-blond-eight.vercel.app/',

          backendUrl:
            'https://employee-management-system-1-dg6r.onrender.com/'
        },

        {
          title: 'AI Resume Match & Job Recommender',

          image: '/resume-analyzer.png',

          githubUrl:
            'https://github.com/Vaibhavsable451/Resume-Anlayzer',

          liveUrl:
            'https://resume-anlayzer.onrender.com/'
        },

        {
          title: 'AI-Powered Fitness App',

          image: '/fitness-app.png',

          githubUrl:
            'https://github.com/Vaibhavsable451/AI-Powered-Fitness-App-With-Spring-Boot-Microservices'
        }
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-800"
    >
      <div className="container mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            EXPERIENCE
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My professional experience, AI engineering projects,
            and technical expertise in software development.
          </p>
        </motion.div>

        {/* EXPERIENCE TIMELINE */}
        <div className="relative">

          {/* TIMELINE LINE */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-900" />

          <div className="space-y-12">

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                } relative`}
              >

                {/* TIMELINE DOT */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-gray-800 z-10" />

                {/* EXPERIENCE CONTENT */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0
                      ? 'md:pr-12'
                      : 'md:pl-12'
                  } pl-8 md:pl-0`}
                >

                  <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">

                    {/* POSITION */}
                    <div className="flex items-center mb-2">

                      <FiBriefcase className="text-blue-400 mr-2 flex-shrink-0" />

                      <h3 className="text-xl font-bold text-white">
                        {exp.position}
                      </h3>

                    </div>

                    {/* COMPANY AND DURATION */}
                    <div className="mb-4">

                      <h4 className="text-lg font-semibold text-gray-300">
                        {exp.company}
                      </h4>

                      <div className="flex flex-wrap items-center text-gray-400 text-sm mt-1 gap-y-2">

                        <span className="mr-3">
                          {exp.location}
                        </span>

                        <div className="flex items-center">

                          <FiCalendar className="mr-1" />

                          <span>{exp.duration}</span>

                        </div>

                      </div>

                    </div>

                    {/* EXPERIENCE DESCRIPTION */}
                    <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">

                      {exp.description.map((item, i) => (
                        <li key={i}>
                          {item}
                        </li>
                      ))}

                    </ul>

                    {/* TECHNICAL SKILLS */}
                    <div className="flex flex-wrap gap-2">

                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-900 text-blue-200 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                    {/* EXPERIENCE PROJECT IMAGE */}
                    {exp.projectImage && (
                      <div className="mt-4 relative aspect-video w-full overflow-hidden rounded-lg border border-gray-700">

                        <MediaPreview
                          src={exp.projectImage}
                          alt={`${exp.company} Project Preview`}
                          poster={exp.projectPoster}
                        />

                      </div>
                    )}

                    {/* PROJECTS SECTION */}
                    {exp.projects && exp.projects.length > 0 && (
                      <div className="mt-5">

                        <div className="flex items-center mb-3">

                          <FiFolder className="w-4 h-4 mr-2 text-blue-400" />

                          <h5 className="text-sm font-bold text-white">
                            Featured Projects
                          </h5>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                          {exp.projects.map((proj, pi) => (
                            <div
                              key={pi}
                              className="bg-gray-800 border border-gray-600 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
                            >

                              {/* PROJECT MEDIA */}
                              <div className="relative aspect-video w-full overflow-hidden">

                                <MediaPreview
                                  src={proj.image}
                                  alt={proj.title}
                                  poster={proj.poster}
                                />

                              </div>

                              {/* PROJECT DETAILS */}
                              <div className="p-3">

                                <p className="text-white text-sm font-semibold mb-2">
                                  {proj.title}
                                </p>

                                {/* PROJECT DESCRIPTION */}
                                {proj.description && (
                                  <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                                    {proj.description}
                                  </p>
                                )}

                                {/* PROJECT TECHNOLOGIES */}
                                {proj.technologies &&
                                  proj.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mb-3">

                                      {proj.technologies.map((tech, ti) => (
                                        <span
                                          key={ti}
                                          className="px-2 py-1 bg-blue-900/60 text-blue-200 text-xs rounded"
                                        >
                                          {tech}
                                        </span>
                                      ))}

                                    </div>
                                  )}

                                {/* PROJECT LINKS */}
                                <div className="flex flex-wrap gap-2">

                                  {proj.liveUrl && (
                                    <a
                                      href={proj.liveUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center px-2.5 py-1 bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-xs font-semibold rounded transition-colors"
                                    >
                                      <FiExternalLink className="w-3 h-3 mr-1" />
                                      Live Demo
                                    </a>
                                  )}

                                  {proj.frontendUrl && (
                                    <a
                                      href={proj.frontendUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center px-2.5 py-1 bg-purple-600/20 text-purple-300 border border-purple-600/50 text-xs font-semibold rounded hover:bg-purple-600/30"
                                    >
                                      Frontend
                                    </a>
                                  )}

                                  {proj.backendUrl && (
                                    <a
                                      href={proj.backendUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center px-2.5 py-1 bg-green-600/20 text-green-300 border border-green-600/50 text-xs font-semibold rounded hover:bg-green-600/30"
                                    >
                                      Backend
                                    </a>
                                  )}

                                  {proj.githubUrl && (
                                    <a
                                      href={proj.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center px-2.5 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs font-semibold rounded transition-colors"
                                    >
                                      <FiGithub className="w-3 h-3 mr-1" />
                                      Code
                                    </a>
                                  )}

                                </div>

                              </div>

                            </div>
                          ))}

                        </div>

                      </div>
                    )}

                    {/* CERTIFICATES AND SOURCE CODE */}
                    {(
                      (exp.certificates && exp.certificates.length > 0) ||
                      exp.githubUrl ||
                      exp.portfolioUrl
                    ) && (
                      <div className="mt-4 pt-4 border-t border-gray-700 space-y-4">

                        {/* CERTIFICATES */}
                        {exp.certificates &&
                          exp.certificates.length > 0 && (
                            <div>

                              <div className="flex items-center mb-3">

                                <FiAward className="w-4 h-4 mr-2 text-yellow-500" />

                                <h5 className="text-sm font-bold text-white">
                                  Certificates
                                </h5>

                              </div>

                              <div className="flex flex-wrap gap-3">

                                {exp.certificates.map((cert, i) => (
                                  <a
                                    key={i}
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                                  >

                                    <FiAward className="w-4 h-4 mr-2" />

                                    {cert.name}

                                    <FiExternalLink className="w-3.5 h-3.5 ml-2" />

                                  </a>
                                ))}

                              </div>

                            </div>
                          )}

                        {/* GITHUB REPOSITORY */}
                        {exp.githubUrl && (
                          <div>

                            <div className="flex items-center mb-3">

                              <FiGithub className="w-4 h-4 mr-2 text-yellow-500" />

                              <h5 className="text-sm font-bold text-white">
                                Project Source Code
                              </h5>

                            </div>

                            <a
                              href={exp.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-sm font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                            >

                              <FiGithub className="w-4 h-4 mr-2" />

                              GitHub Repository

                              <FiExternalLink className="w-3.5 h-3.5 ml-2" />

                            </a>

                          </div>
                        )}

                        {/* PORTFOLIO */}
                        {exp.portfolioUrl && (
                          <div>

                            <a
                              href={exp.portfolioUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300"
                            >

                              <FiExternalLink className="w-4 h-4 mr-2" />

                              View Portfolio

                            </a>

                          </div>
                        )}

                      </div>
                    )}

                  </div>

                </div>

                {/* EMPTY SPACE FOR ALTERNATING TIMELINE */}
                <div className="md:w-1/2" />

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
