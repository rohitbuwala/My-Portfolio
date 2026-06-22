import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { achievements } from "../../data/experience";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 md:py-32 relative">
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
          <p className="section-subtitle">Achievements</p>
          <h2 className="section-title">
            Key <span className="gradient-text">Accomplishments</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={item.project}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="glass-card-hover rounded-xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4"
            >
              <div className="mt-0.5 shrink-0">
                <CheckCircle2 size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">{item.project}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
