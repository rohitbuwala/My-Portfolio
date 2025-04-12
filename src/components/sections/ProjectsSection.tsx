
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Gaming - Web",
    description: "A fully responsive gaming website with product filtering, cart functionality, and checkout process.",
    image: "/gam.png",
    tags: ["React", "Tailwind CSS", "Redux", "Gsap"],
    github: "https://github.com/rohitbuwala/award-winning",
    live: "https://award-w.vercel.app/",
  },
  {
    title: "Tranding Movies",
    description: "A movie discovery platform that allows users to explore trending movies, view details, and add them to a watchlist.",
    image: "/mov.png",
    tags: ["React", "JavaScript", "Tailwind CSS",],
    github: "https://github.com/rohitbuwala/trend-movies",
    live: "https://trendmovies.vercel.app/",
  },
  {
    title: "Weather Dashboard",
    description: "A todos web that allows users to create, update, and delete tasks with a clean and modern interface.",
    image: "/todo.png",
    tags: ["React", "javascript", "TailWindCSS", ],
    github: "https://github.com/rohitbuwala/Todos",
    live: "https://todos-rose-iota.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with a modern design and animations.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden rounded-xl group"
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center space-x-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neon-purple/20 hover:bg-neon-purple/40 rounded-full p-3 transition-colors duration-300"
            aria-label="View GitHub Repository"
          >
            <Github size={20} />
          </a>
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neon-blue/20 hover:bg-neon-blue/40 rounded-full p-3 transition-colors duration-300"
            aria-label="View Live Demo"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-foreground/70 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-secondary/50 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-neon-green/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-neon-yellow/10 rounded-full filter blur-3xl"></div>
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem
            or explore new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
