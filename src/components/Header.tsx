import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#certificates">Certificates</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900 shadow-lg"
        >
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileNavLink>
              <MobileNavLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileNavLink>
              <MobileNavLink href="#certificates" onClick={() => setIsOpen(false)}>Certificates</MobileNavLink>
              <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="text-gray-200 hover:text-blue-400 font-medium transition-colors"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => {
  return (
    <Link 
      href={href} 
      className="text-gray-200 hover:text-blue-400 font-medium transition-colors block py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;
