import { motion } from "framer-motion";
import { skills, skillCategories } from "../../data/skills";
import { useState, useCallback } from "react";

const categorySpotlightColor: Record<string, string> = {
  frontend: "rgba(155, 109, 255,",
  backend: "rgba(255, 97, 216,",
  database: "rgba(114, 242, 185,",
  tools: "rgba(255, 209, 102,",
  additional: "rgba(92, 225, 230,",
};

const SkillCard = ({
  skill,
  index,
  spotlightColor,
}: {
  skill: { name: string; icon?: string };
  index: number;
  spotlightColor: string;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-xl p-4 sm:p-5 cursor-default transition-all duration-500 hover:border-white/15"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, ${spotlightColor}0.12, transparent 60%)`,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: `inset 0 0 24px ${spotlightColor}0.08, 0 0 24px ${spotlightColor}0.04`,
        }}
      />

      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/[0.04] to-transparent" />

      <div className="relative z-10 flex items-center gap-3 sm:gap-4">
        {skill.icon && (
          <span className="text-lg sm:text-xl shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-secondary/60 font-bold border border-white/5 group-hover:border-white/10 group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:[text-shadow:0_0_20px_currentColor]">
            {skill.icon}
          </span>
        )}
        <span className="text-sm sm:text-base font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-neon-purple/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-neon-blue/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Skills & Expertise</p>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="space-y-10 max-w-5xl mx-auto">
          {Object.entries(skillCategories).map(([key, category]) => {
            const categorySkills = skills.filter((s) => s.category === key);
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground/90">
                    {category.label}
                  </h3>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {categorySkills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={index}
                      spotlightColor={categorySpotlightColor[key]}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
