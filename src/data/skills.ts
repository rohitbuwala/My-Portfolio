export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "additional";
  icon?: string;
}

export const skills: Skill[] = [
  { name: "React", category: "frontend", icon: "⚛️" },
  { name: "Next.js", category: "frontend", icon: "▲" },
  { name: "TypeScript", category: "frontend", icon: "TS" },
  { name: "JavaScript", category: "frontend", icon: "JS" },
  { name: "Tailwind CSS", category: "frontend", icon: "🌊" },
  { name: "Redux Toolkit", category: "frontend", icon: "🔄" },
  { name: "GSAP", category: "frontend", icon: "✨" },
  { name: "Node.js", category: "backend", icon: "🟢" },
  { name: "Express.js", category: "backend", icon: "⚡" },
  { name: "Next.js API Routes", category: "backend", icon: "🔄" },
  { name: "REST APIs", category: "backend", icon: "🔗" },
  { name: "Authentication", category: "backend", icon: "🔐" },
  { name: "NextAuth", category: "backend", icon: "🛡️" },
  { name: "JWT", category: "backend", icon: "🔑" },
  { name: "MongoDB", category: "database", icon: "🍃" },
  { name: "Mongoose", category: "database", icon: "📦" },
  { name: "PostgreSQL", category: "database", icon: "🐘" },
  { name: "NeonDB", category: "database", icon: "⚡" },
  { name: "Git", category: "tools", icon: "🔀" },
  { name: "GitHub", category: "tools", icon: "🐙" },
  { name: "Postman", category: "tools", icon: "📮" },
  { name: "Vercel", category: "tools", icon: "▲" },
  { name: "VS Code", category: "tools", icon: "💻" },
  { name: "Resend", category: "additional", icon: "📧" },
  { name: "Razorpay", category: "additional", icon: "💳" },
  { name: "Cloudinary", category: "additional", icon: "☁️" },
  { name: "Zod", category: "additional", icon: "✅" },
  { name: "Prisma", category: "additional", icon: "📐" },
];

export const skillCategories: Record<
  Skill["category"],
  { label: string; color: string }
> = {
  frontend: {
    label: "Frontend",
    color: "from-neon-cyan to-neon-teal",
  },
  backend: {
    label: "Backend",
    color: "from-neon-teal to-neon-emerald",
  },
  database: {
    label: "Database",
    color: "from-neon-green to-neon-cyan",
  },
  tools: {
    label: "Tools",
    color: "from-neon-yellow to-neon-emerald",
  },
  additional: {
    label: "Additional",
    color: "from-neon-teal to-neon-cyan",
  },
};
