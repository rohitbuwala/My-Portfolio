import { motion } from "framer-motion";
import { Globe, Shield, LayoutDashboard, Server, Brain, Calendar } from "lucide-react";

const services = [
  {
    icon: <Globe size={28} className="text-accent" />,
    title: "Full Stack Applications",
    description:
      "End-to-end web applications with frontend, backend, and database architecture built with Next.js, React, Node.js, and MongoDB.",
  },
  {
    icon: <Shield size={28} className="text-primary" />,
    title: "Authentication Systems",
    description:
      "Secure login, authorization, session management, and user workflows using NextAuth, JWT, and role-based access control.",
  },
  {
    icon: <LayoutDashboard size={28} className="text-emerald-400" />,
    title: "Admin Dashboards",
    description:
      "Management systems for data, users, bookings, and business operations with real-time analytics and reporting.",
  },
  {
    icon: <Server size={28} className="text-teal-400" />,
    title: "REST APIs",
    description:
      "Scalable API architecture and backend services with proper error handling, validation, and database integration.",
  },
  {
    icon: <Brain size={28} className="text-primary" />,
    title: "AI Powered Tools",
    description:
      "Applications using AI integrations and automation for personalized recommendations, content generation, and data analysis.",
  },
  {
    icon: <Calendar size={28} className="text-accent" />,
    title: "Booking Platforms",
    description:
      "Reservation, scheduling, and business workflow systems with real-time availability, payment processing, and notifications.",
  },
];

const ServicesSection = () => {
  return (
    <section id="what-i-build" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl hidden dark:block"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl hidden dark:block"></div>
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">What I Build</p>
          <h2 className="section-title">
            Services & <span className="gradient-text">Capabilities</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card-hover rounded-xl p-5 sm:p-6"
            >
              <div className="bg-primary/10 rounded-xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-5">
                {service.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
