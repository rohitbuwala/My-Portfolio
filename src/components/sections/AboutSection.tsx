
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-neon-pink/10 rounded-full filter blur-3xl"></div>
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5"
          >
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden glass-card p-2">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-neon-purple/50 to-neon-blue/50">
                  <img 
                    src="/rohit123.jpeg"
                    alt="Rohit Buwala"
                    className="w-full h-full object-cover object-fit"
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-neon-blue rounded-full filter blur-3xl opacity-50"></div>
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-neon-pink rounded-full filter blur-3xl opacity-50"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-3/5"
          >
            <h3 className="text-2xl font-semibold mb-4">Hello there!</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              I'm Rohit Buwala, an IT undergraduate with a passion for creating beautiful 
              and functional web experiences. As a frontend developer, I enjoy turning complex 
              problems into simple, intuitive designs.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              My journey in web development started with HTML, CSS, and JavaScript, 
              and I've since expanded my toolkit to include modern frameworks like React.js. 
              I'm currently exploring the backend world with Node.js, Express, and MongoDB to 
              become a well-rounded full-stack developer.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or learning something new to enhance my skills.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
