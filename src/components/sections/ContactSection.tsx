import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  MapPin,
  Github,
  Linkedin,
  FileDown,
  Phone,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please correct the errors in the form",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xvgkdezo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setFormState({ name: "", email: "", message: "" });
        setIsSubmitted(true);
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-neon-green/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Contact</p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider" />
          <p className="text-foreground/60 mt-6 max-w-2xl mx-auto">
            I'm currently available for full-time opportunities as a Full Stack
            Developer. Whether you have a project idea, a role to discuss, or
            just want to connect — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-xl p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-4">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-foreground/60">Ujjain, M.P., India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href="mailto:rohitbuwala821@gmail.com"
                      className="text-sm text-foreground/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      rohitbuwala821@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-foreground/60">+91 7067274336</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-4">Links</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/rohitbuwala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  <Github size={18} />
                  <span className="text-sm">github.com/rohitbuwala</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rohit-buwala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  <Linkedin size={18} />
                  <span className="text-sm">linkedin.com/in/rohit-buwala</span>
                </a>
                <a
                  href="/Rohit's_Resume_Fullstack.pdf"
                  download
                  className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  <FileDown size={18} />
                  <span className="text-sm">Download Resume (PDF)</span>
                </a>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="text-sm font-semibold text-foreground">
                  Available for Full-Time Opportunities
                </span>
              </div>
              <p className="text-sm text-foreground/60">
                Based in India. Open to remote and on-site roles as a
                Full Stack Developer. Let's build something great together.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-xl p-6 sm:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 className="w-16 h-16 text-neon-green mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-foreground/60">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full bg-secondary/50 border ${
                        errors.name ? "border-destructive" : "border-border"
                      } rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 text-sm`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full bg-secondary/50 border ${
                        errors.email ? "border-destructive" : "border-border"
                      } rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 text-sm`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full bg-secondary/50 border ${
                        errors.message ? "border-destructive" : "border-border"
                      } rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 text-sm resize-none`}
                      placeholder="Tell me about your project or opportunity..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
