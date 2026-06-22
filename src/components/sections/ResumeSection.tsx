import { motion } from "framer-motion";
import { FileDown, Calendar, GraduationCap, Briefcase } from "lucide-react";
import { experience, education } from "../../data/experience";

const TimelineItem = ({
  icon,
  title,
  subtitle,
  period,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative pl-7 sm:pl-8 pb-8 last:pb-0"
    >
      <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
      {index < (description.length > 0 ? experience.length + education.length - 1 : 0) && (
        <div className="absolute left-[9px] top-8 bottom-0 w-px bg-primary/20" />
      )}
      <div className="glass-card rounded-xl p-4 sm:p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="bg-primary/10 rounded-lg p-2 mt-0.5">
            {icon}
          </div>
          <div>
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-foreground/70 text-sm">{subtitle}</p>
            <div className="flex items-center gap-1.5 text-xs text-foreground/40 mt-1">
              <Calendar size={12} />
              <span>{period}</span>
            </div>
          </div>
        </div>
        {description.length > 0 && (
          <ul className="space-y-1.5 mt-2">
            {description.map((item) => (
              <li
                key={item}
                className="text-sm text-foreground/60 flex items-start gap-2"
              >
                <span className="text-primary mt-1 shrink-0">&#8226;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const ResumeSection = () => {
  const allItems = [
    ...experience.map((exp) => ({
      type: "experience" as const,
      icon: <Briefcase size={16} className="text-primary" />,
      title: exp.title,
      subtitle: exp.organization,
      period: exp.period,
      description: exp.description,
    })),
    ...education.map((edu) => ({
      type: "education" as const,
      icon: <GraduationCap size={16} className="text-primary" />,
      title: edu.degree,
      subtitle: edu.school,
      period: edu.period,
      description: [edu.status],
    })),
  ];

  return (
    <section id="resume" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl hidden dark:block"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl hidden dark:block"></div>
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Resume</p>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <motion.a
              href="/Rohit's_Resume_Fullstack.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base"
            >
              <FileDown size={18} />
              Download Full Resume (PDF)
            </motion.a>
          </div>

          <div className="space-y-0">
            {allItems.map((item, index) => (
              <TimelineItem
                key={`${item.type}-${index}`}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                period={item.period}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
