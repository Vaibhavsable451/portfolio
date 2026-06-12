import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiMonitor, FiCpu } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">

        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I’m an AI Engineer focused on building LLM-powered applications, Agentic AI systems, and RAG-based solutions.
            I specialize in designing intelligent workflows using modern AI tools like LangChain, n8n, and LLM APIs to automate real-world tasks and improve productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              My Expertise
            </h3>

            <p className="text-gray-300 mb-6">
              I build end-to-end AI systems including Multi-Agent workflows, RAG pipelines, and automation solutions using LLMs.
              My focus is on combining backend engineering with AI systems to create scalable, production-ready applications.
            </p>

            <p className="text-gray-300">
              I am passionate about designing intelligent systems that integrate data, APIs, and AI models to solve real-world problems efficiently.
              I am currently seeking opportunities in AI Engineering and GenAI development roles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <FeatureCard
                icon={<FiCpu />}
                title="Generative AI & LLMs"
                description="Working with OpenAI, Gemini, Claude APIs, prompt engineering, and building LLM-powered applications."
              />

              <FeatureCard
                icon={<FiCpu />}
                title="Agentic AI Systems"
                description="Designing Multi-Agent workflows using LangChain, LangGraph, and autonomous AI systems."
              />

              <FeatureCard
                icon={<FiDatabase />}
                title="RAG & Vector Databases"
                description="Building Retrieval-Augmented Generation systems using Pinecone, FAISS, and embeddings."
              />

              <FeatureCard
                icon={<FiMonitor />}
                title="AI Automation (n8n)"
                description="Creating workflow automation systems integrating APIs, LLMs, and no-code AI pipelines."
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
      <div className="text-blue-400 mb-4 text-2xl">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default About;