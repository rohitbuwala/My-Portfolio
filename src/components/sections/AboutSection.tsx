import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl hidden dark:block"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl hidden dark:block"></div>
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">About</p>
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5"
          >
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden glass-card p-1">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src="/rohit123.jpeg"
                    alt="Rohit Buwala"
                    className="w-full h-full object-cover object-[25%_center]"
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-accent rounded-full blur-3xl opacity-30 pointer-events-none"></div>
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-primary rounded-full blur-3xl opacity-30 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-3/5"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Full Stack Developer building production applications
            </h3>
            <p className="text-foreground/60 mb-5 leading-relaxed">
              I build full-stack web applications using Next.js, React, TypeScript, Node.js, and MongoDB. My work spans the complete development lifecycle — from designing database schemas and REST APIs to implementing authentication systems and deploying to production on Vercel.
            </p>
            <p className="text-foreground/60 mb-5 leading-relaxed">
              My portfolio includes Ujjain AutoSeva, an auto rickshaw booking platform with admin dashboards, payment processing, and email notifications; and AI Career Coach, an AI-guided career platform with personalized user dashboards. Both are production applications serving real users.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              I focus on system architecture, user experience, and writing maintainable code. Each project is approached with attention to scalability, authentication flows, API design, and database performance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
