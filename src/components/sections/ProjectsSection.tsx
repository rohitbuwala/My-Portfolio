import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, Lightbulb, Target, TrendingUp } from "lucide-react";
import { featuredProjects, otherProjects } from "../../data/projects";

const FeaturedProjectCard = ({ project }: { project: typeof featuredProjects[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md dark:bg-card dark:border-white/5 dark:hover:border-white/15"
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative overflow-hidden aspect-video md:aspect-auto md:h-full min-h-[200px] sm:min-h-[300px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 w-fit">
            Featured Project
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold mb-3">
            {project.title}
          </h3>

          <p className="text-foreground/60 mb-4 leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {project.problem && (
            <div className="mb-3">
              <div className="flex items-start gap-2">
                <Lightbulb size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-foreground/70 mb-0.5">Problem</p>
                  <p className="text-sm text-foreground/60 leading-relaxed">{project.problem}</p>
                </div>
              </div>
            </div>
          )}

          {project.solution && (
            <div className="mb-3">
              <div className="flex items-start gap-2">
                <Target size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-foreground/70 mb-0.5">Solution</p>
                  <p className="text-sm text-foreground/60 leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>
          )}

          {project.impact && (
            <div className="mb-4">
              <div className="flex items-start gap-2">
                <TrendingUp size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-foreground/70 mb-0.5">Impact</p>
                  <p className="text-sm text-foreground/60 leading-relaxed">{project.impact}</p>
                </div>
              </div>
            </div>
          )}

          {project.features && (
            <div className="mb-5">
              <h4 className="text-sm font-semibold text-foreground/80 mb-3">
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground/60"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-secondary/50 px-3 py-1 rounded-full text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground px-4 sm:px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border hover:border-primary/50 text-foreground/80 hover:text-primary px-4 sm:px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/10"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }: { project: typeof otherProjects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col rounded-xl overflow-hidden border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md dark:bg-card dark:border-white/5 dark:hover:border-primary/20"
    >
      <div className="absolute top-3 left-3 z-20 text-xs font-mono font-bold text-foreground/20 group-hover:text-primary/60 transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-background/80 hover:bg-background text-foreground/80 hover:text-foreground px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm transition-all duration-300 border border-border dark:border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Github size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-foreground/60 text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-secondary/50 px-2.5 py-0.5 rounded-full text-foreground/60"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs text-foreground/40">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0 pointer-events-none hidden dark:block">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Portfolio</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="text-foreground/60 mt-6 max-w-2xl mx-auto">
            Production applications built with modern web technologies.
            Each project represents real-world problem-solving and
            full-stack architecture decisions.
          </p>
        </motion.div>

        <div className="space-y-12 mb-16">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h3 className="text-xl font-semibold mb-2 text-foreground/70">
                Other Projects
              </h3>
              <div className="w-16 h-0.5 bg-primary/30 rounded-full mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/rohitbuwala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            View all projects on GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
