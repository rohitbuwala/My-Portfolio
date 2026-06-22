import { motion } from "framer-motion";
import { ArrowDown, FileDown, MessageSquare, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative pt-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              Available for Full-Time Opportunities
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Rohit Buwala</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-6 font-medium">
              Full Stack Developer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              I build production-grade web applications with modern
              technologies. Specializing in{" "}
              <span className="text-foreground/90 font-medium">
                Next.js, React, TypeScript, Node.js, and MongoDB
              </span>
              . Focused on creating scalable, user-friendly solutions that
              solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <a
              href="https://github.com/rohitbuwala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="GitHub Profile"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-buwala/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:rohitbuwala821@gmail.com"
              className="text-foreground/40 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16"
          >
            <a
              href="/Rohit's_Resume_Fullstack.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background text-sm sm:text-base"
            >
              <FileDown size={16} />
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sm:hidden">Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background text-sm sm:text-base"
            >
              <MessageSquare size={16} />
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary/50 text-foreground/80 hover:text-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background text-sm sm:text-base"
            >
              <ExternalLink size={16} />
              <span className="hidden sm:inline">View Projects</span>
              <span className="sm:hidden">Projects</span>
            </a>
            <a
              href="https://github.com/rohitbuwala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary/50 text-foreground/80 hover:text-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background text-sm sm:text-base"
            >
              <Github size={16} />
              <span className="hidden sm:inline">GitHub</span>
              <span className="sm:hidden">GitHub</span>
              <ExternalLink size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto"
          >
            <div className="glass-card rounded-xl p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-1">5+</div>
              <div className="text-xs sm:text-sm text-foreground/60 font-medium">Full Stack Projects</div>
            </div>
            <div className="glass-card rounded-xl p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-1">2</div>
              <div className="text-xs sm:text-sm text-foreground/60 font-medium">Production Deployments</div>
            </div>
            <div className="glass-card rounded-xl p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-1">15+</div>
              <div className="text-xs sm:text-sm text-foreground/60 font-medium">Technologies</div>
            </div>
            <div className="glass-card rounded-xl p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-1">B.Tech</div>
              <div className="text-xs sm:text-sm text-foreground/60 font-medium">IT Graduate</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#what-i-build"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/40 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        aria-label="Scroll to services section"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
