
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ResumeSection from "../components/sections/ResumeSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Check for a saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    
    // Set default theme to dark mode if no preference is found
    if (!savedTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
