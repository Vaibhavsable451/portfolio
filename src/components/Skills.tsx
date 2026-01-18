import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiTool } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCode />,
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        
      ],
    },
    {
      icon: <FiDatabase />,
      title: 'Databases',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'MySQL', level: 90 },
      
      ],
    },
    {
      icon: <FiLayout />,
      title: 'Frameworks & Libraries',
      skills: [
       
        { name: 'Spring Boot', level: 95 },
        { name: 'Spring MVC', level: 90 },
        { name: 'Spring Data JPA', level: 90 },
        { name: 'Hibernate (JPA)', level: 90 },
       
        { name: 'Microservices', level: 95 }
      ],
    },
    {
      icon: <FiTool />,
      title: 'Tools & Platforms',
      skills: [
       
        { name: 'Postman', level: 100 },
        { name: 'VS Code', level: 96 },
        { name: 'IntelliJ IDEA', level: 95 },
        { name: 'Spring Tool Suite', level: 95 },
        { name: 'Docker', level: 90},       
        { name: 'Apache Kafka', level: 92 }, 
        { name: 'Github', level: 95 }, 
      ],
    },
    {
      icon: <FiTool />,
      title: 'Artificial Intelligence & Automation',
      skills: [
        { name: 'AI Integration & Automation', level: 87 },
        { name: 'AI Agent Development(LangChain, Gemini API, OpenAI API)', level: 90 },
        { name: 'No-Code Workflow Automation (n8n)', level: 70 },
        
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
// ...
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of the skills I&apos;ve developed throughout my professional journey.
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
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
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
