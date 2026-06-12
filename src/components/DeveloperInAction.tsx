import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

const DeveloperInAction = () => {
  return (
    <section id="developer-in-action" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🤖 AI Engineer in Action
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="space-y-6 text-gray-300 text-lg">

              <p>
                I design and build AI-powered applications using LLMs, Agentic AI systems, and Retrieval-Augmented Generation (RAG) pipelines.
              </p>

              <p>
                My focus is on developing intelligent systems that automate workflows, extract insights from data, and solve real-world problems using Generative AI.
              </p>

              <p>
                I continuously explore modern AI frameworks like LangChain, LangGraph, and n8n to build scalable and production-ready AI solutions.
              </p>

              <hr className="border-gray-700 my-8" />

              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  🧠 What I Work On
                </h3>

                <ul className="space-y-4">

                  <li className="flex items-center gap-3">
                    <FiCheckCircle className="text-blue-500 text-xl" />
                    <span>LLM-based Applications (OpenAI, Gemini, Claude)</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <FiCheckCircle className="text-blue-500 text-xl" />
                    <span>Agentic AI Systems & Multi-Agent Workflows</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <FiCheckCircle className="text-blue-500 text-xl" />
                    <span>RAG Pipelines with Vector Databases</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <FiCheckCircle className="text-blue-500 text-xl" />
                    <span>AI Automation (n8n, APIs, Workflows)</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <FiCheckCircle className="text-blue-500 text-xl" />
                    <span>Prompt Engineering & Context Optimization</span>
                  </li>

                </ul>
              </div>

            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700">
              <Image
                src="/office.png"
                alt="AI Engineer in Action"
                width={800}
                height={600}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DeveloperInAction;