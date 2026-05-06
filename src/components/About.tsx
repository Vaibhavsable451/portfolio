import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiMonitor, FiCpu } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
// ... (omitted for brevity in prompt match, but I will include relevant context)
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
I’m an MCA postgraduate and a Java Backend Developer with hands-on experience building scalable applications using Java, Spring Boot, and microservices architecture.

I focus on designing efficient REST APIs, improving backend performance, and developing systems that are secure and maintainable. I also have experience with frontend technologies, allowing me to contribute across the full stack when needed.

I’m currently seeking Java Developer roles where I can apply my backend skills to build reliable, high-performance systems and grow in a fast-paced engineering environment.
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
I’m an MCA postgraduate and a Java Backend Developer with hands-on experience building applications using Java, Spring Boot, and REST APIs.

I focus on developing scalable backend systems, working with clean architecture, and ensuring performance and security. I also have a basic understanding of frontend technologies to support full application development.

I’m currently seeking Java Developer roles where I can apply my backend skills and grow in Java and microservices-based environments.
</p>

            <p className="text-gray-300">
              I&apos;m a quick learner, highly motivated, and passionate about writing clean, efficient code. 
              I&apos;m excited to start my professional journey and contribute to meaningful projects while continuing to grow my skills.
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
                icon={<FiCode />}
                title="Backend Development"
                description="Java, Spring Boot, RESTful APIs, Microservices, Hibernate, and server-side application development."
              />
             <FeatureCard 
      icon={<FiMonitor />}
           title="Frontend Development"
  description="HTML5, CSS3, JavaScript, and React.js for building responsive, interactive, and user-friendly web interfaces."
/>

              <FeatureCard 
                icon={<FiDatabase />}
                title="Database"
                description="MySQL, Database Design, SQL Queries, and Data Modeling for efficient data management."
              />
              <FeatureCard 
  icon={<FiCpu />}
  title="AI Automation (n8n)"
  description="Workflow automation using n8n with AI integrations, API orchestration, webhooks, and automated data processing."
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
