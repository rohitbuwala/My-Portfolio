import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-xl font-bold gradient-text mb-2">
              Rohit<span className="text-primary">.dev</span>
            </p>
            <p className="text-sm text-foreground/50">
              Full Stack Developer
            </p>
            <p className="mt-1 text-sm text-foreground/50">
              Building production-grade web applications
              with Next.js, React, TypeScript, and Node.js.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground/70 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/50 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground/70 mb-3">
              Connect
            </h4>
            <div className="flex items-center gap-3 mb-3">
              <a
                href="https://github.com/rohitbuwala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-buwala/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:rohitbuwala821@gmail.com"
                className="text-foreground/50 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/rohitbuwala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-primary transition-colors text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="GitHub Profile"
              >
                <ExternalLink size={14} />
              </a>
            </div>
            <p className="text-xs text-foreground/40">
              Built with Next.js + TypeScript + Tailwind CSS
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-foreground/40">
            &copy; {new Date().getFullYear()} Rohit Buwala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
