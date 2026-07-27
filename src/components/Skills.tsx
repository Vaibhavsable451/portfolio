import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiCpu, 
  FiTerminal, 
  FiCloud, 
  FiServer, 
  FiActivity, 
  FiSearch, 
  FiBarChart2, 
  FiShield, 
  FiTrendingUp 
} from 'react-icons/fi';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'AI & Generative AI',
      skills: [
        'Generative AI',
        'Large Language Models (LLMs)',
        'Prompt Engineering',
        'AI Agents',
        'Agentic AI',
        'Multi-Agent Systems',
        'Tool Calling / Function Calling',
        'RAG (Retrieval-Augmented Generation)',
        'AI Workflows',
        'LLM Application Development',
        'AI Automation'
      ]
    },
    {
      title: 'AI Frameworks & Orchestration',
      skills: [
        'LangChain',
        'LangGraph',
        'CrewAI',
        'AutoGen',
        'LlamaIndex',
        'n8n',
        'Model Context Protocol (MCP)'
      ]
    },
    {
      title: 'RAG & Knowledge Systems',
      skills: [
        'Pinecone',
        'FAISS',
        'Vector Databases',
        'Embeddings',
        'Semantic Search',
        'Hybrid Search',
        'Document Processing',
        'Chunking & Retrieval',
        'Reranking',
        'Knowledge Bases'
      ]
    },
    {
      title: 'Machine Learning & Data Science',
      skills: [
        'Machine Learning',
        'Supervised Learning',
        'Unsupervised Learning',
        'Feature Engineering',
        'Model Evaluation',
        'Data Preprocessing',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Statistics'
      ]
    },
    {
      title: 'Programming',
      skills: [
        'Python',
        'Java',
        'JavaScript',
        'TypeScript',
        'SQL'
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        'FastAPI',
        'Flask',
        'Spring Boot',
        'REST APIs',
        'Microservices',
        'SQLAlchemy',
        'JWT Authentication',
        'OAuth2',
        'API Integration'
      ]
    },
    {
      title: 'Databases',
      skills: [
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'SQL',
        'NoSQL',
        'Redis'
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        'AWS',
        'GCP',
        'Docker',
        'Kubernetes',
        'CI/CD',
        'GitHub Actions',
        'Jenkins'
      ]
    },
    {
      title: 'MLOps & AI Operations',
      skills: [
        'MLflow',
        'Model Tracking',
        'Model Deployment',
        'Model Monitoring',
        'AI Observability',
        'Prometheus',
        'Grafana'
      ]
    },
    {
      title: 'AI Evaluation & Reliability',
      skills: [
        'AI Evaluation (RAGAS, LangSmith)',
        'LLM Evaluation',
        'RAG Evaluation',
        'Prompt Evaluation',
        'Hallucination Detection',
        'Guardrails',
        'AI Safety',
        'Confidence Scoring',
        'Human-in-the-Loop',
        'AI Monitoring',
        'Tracing & Observability'
      ]
    },
    {
      title: 'Developer Tools',
      skills: [
        'Git',
        'GitHub',
        'Postman',
        'VS Code',
        'IntelliJ IDEA',
        'Jupyter Notebook',
        'Linux'
      ]
    }
  ];

  const getIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'AI & Generative AI':
        return <FiCpu className="w-5 h-5" />;
      case 'AI Frameworks & Orchestration':
        return <FiActivity className="w-5 h-5" />;
      case 'RAG & Knowledge Systems':
        return <FiSearch className="w-5 h-5" />;
      case 'Machine Learning & Data Science':
        return <FiBarChart2 className="w-5 h-5" />;
      case 'Programming':
        return <FiCode className="w-5 h-5" />;
      case 'Backend & APIs':
        return <FiServer className="w-5 h-5" />;
      case 'Databases':
        return <FiDatabase className="w-5 h-5" />;
      case 'Cloud & DevOps':
        return <FiCloud className="w-5 h-5" />;
      case 'MLOps & AI Operations':
        return <FiTrendingUp className="w-5 h-5" />;
      case 'AI Evaluation & Reliability':
        return <FiShield className="w-5 h-5" />;
      case 'Developer Tools':
        return <FiTerminal className="w-5 h-5" />;
      default:
        return <FiCpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            SKILLS & EXPERTISE
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive tech stack and specialized knowledge in building next-generation AI, cloud-native backends, and reliable data pipelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/10 transform-gpu transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-800">
                <div className="p-2.5 bg-blue-950/80 text-blue-400 rounded-xl border border-blue-900/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  {getIcon(category.title)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gray-800/80 hover:bg-blue-950/40 hover:text-blue-300 hover:border-blue-800/60 text-gray-300 text-xs font-semibold rounded-lg border border-gray-700/30 transition-all duration-200 cursor-default shadow-sm hover:shadow-md transform hover:scale-[1.03]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;