
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-neon-pink/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-neon-purple/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-semibold mb-4">Want to know more about my experience?</h3>
            <p className="text-foreground/70 mb-8">
              Download my resume to learn more about my education, experience, and skills.
            </p>
            
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              <FileDown size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4 gradient-text">Education</h4>
            <div className="mb-8 border-l-2 border-primary/30 pl-6">
              <div className="relative mb-8">
                <div className="absolute -left-[29px] w-5 h-5 rounded-full bg-primary"></div>
                <h5 className="text-lg font-medium">Bachelor of Technology in Information Technology</h5>
                <p className="text-foreground/70">RGPV</p>
                <p className="text-sm text-foreground/50">2022 - Present</p>
              </div>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4 gradient-text">Experience</h4>
            <div className="border-l-2 border-primary/30 pl-6">
              <div className="relative mb-8">
                <div className="absolute -left-[29px] w-5 h-5 rounded-full bg-primary"></div>
                <h5 className="text-lg font-medium">Frontend Developer Intern</h5>
                <p className="text-foreground/70">Company Name</p>
                <p className="text-sm text-foreground/50">Jun 2023 - Aug 2023</p>
                <ul className="list-disc list-inside mt-2 text-foreground/70">
                  <li>Developed responsive user interfaces using React.js</li>
                  <li>Collaborated with designers to implement pixel-perfect designs</li>
                  <li>Optimized website performance and improved loading times</li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[29px] w-5 h-5 rounded-full bg-primary"></div>
                <h5 className="text-lg font-medium">Web Development Freelancer</h5>
                <p className="text-foreground/70">Self-employed</p>
                <p className="text-sm text-foreground/50">2022 - Present</p>
                <ul className="list-disc list-inside mt-2 text-foreground/70">
                  <li>Built custom websites for small businesses</li>
                  <li>Implemented responsive designs and modern UI components</li>
                  <li>Managed client relationships and project timelines</li>
                </ul>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
