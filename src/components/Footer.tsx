import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">AI Engineer Portfolio</h3>

            <p className="text-gray-400 mb-4 max-w-md">
              A showcase of my work in Generative AI, LLM applications, RAG systems, and Agentic AI workflows.
              I build intelligent, scalable AI-powered applications and automation systems using modern AI technologies.
            </p>

            <p className="flex items-center text-gray-400">
              Built with <FiHeart className="mx-1 text-red-500" /> using Next.js, React, and AI tools
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="#experience" className="text-gray-400 hover:text-white">Experience</Link></li>
              <li><Link href="#skills" className="text-gray-400 hover:text-white">Skills</Link></li>
              <li><Link href="#projects" className="text-gray-400 hover:text-white">Projects</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Email</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} AI Engineer Portfolio. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;