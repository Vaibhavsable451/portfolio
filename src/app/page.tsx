"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import AiInnovationHub from "../components/AiInnovationHub";
import About from "../components/About";
import DeveloperInAction from "../components/DeveloperInAction";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NoupeChatbotPopup from "../components/NoupeChatbotPopup";
import VoiceCommandNav from "../components/VoiceCommandNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <AiInnovationHub />
      <About />
      <DeveloperInAction />
      <Experience />
      <Skills />
      <Achievements />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
      <NoupeChatbotPopup />
      <VoiceCommandNav />
    </div>
  );
}
