import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu, FiTool } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCode />,
      title: 'Programming & Core CS',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'DSA & Problem Solving', level: 85 },
        { name: 'OOP & DBMS', level: 80 },
      ],
    },
    {
      icon: <FiCpu />,
      title: 'AI / Machine Learning',
      skills: [
        { name: 'Generative AI', level: 90 },
        { name: 'LLMs (OpenAI, Gemini, Claude)', level: 90 },
        { name: 'Prompt Engineering', level: 85 },
        { name: 'RAG Systems', level: 90 },
        { name: 'AI Agents', level: 85 },
      ],
    },
    {
      icon: <FiDatabase />,
      title: 'Data & Backend',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'MySQL', level: 90 },
        { name: 'Vector Databases (Pinecone, FAISS)', level: 85 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      icon: <FiTool />,
      title: 'AI Tools & Frameworks',
      skills: [
        { name: 'LangChain', level: 90 },
        { name: 'LangGraph', level: 80 },
        { name: 'n8n Automation', level: 85 },
        { name: 'Groq API', level: 85 },
        { name: 'Git & GitHub', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI / GenAI Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Specialized in building LLM-powered applications, RAG systems, AI agents, and automation workflows using modern GenAI tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="text-blue-400 text-2xl mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-blue-600 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
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