export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  status: string;
}

export const experience: Experience[] = [
  {
    title: "Independent Full Stack Developer",
    organization: "Self-employed",
    period: "2022 - Present",
    description: [
      "Built and deployed Ujjain AutoSeva, a production-grade auto rickshaw booking platform with Next.js, MongoDB, NextAuth authentication, admin dashboard, Razorpay payments, and Resend email notifications",
      "Developed AI Career Coach, an AI-powered career guidance platform with personalized recommendations, skill gap analysis, and user dashboard",
      "Created iBuiltThis, a developer project showcase platform used by multiple developers to share their work publicly",
      "Designed and implemented full-stack applications with REST APIs, database schemas, authentication flows, and responsive frontends",
      "Integrated third-party services including Resend (transactional email), Razorpay (payment processing), and Cloudinary (media management)",
      "Deployed and managed production applications on Vercel with custom domains, environment configuration, and CI/CD pipelines",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Technology in Information Technology",
    school: "RGPV",
    period: "2022 - 2026",
    status: "Graduated June 2026",
  },
];

export const achievements = [
  {
    project: "Ujjain AutoSeva",
    description:
      "Built and deployed a production auto rickshaw booking platform with authentication, admin dashboard, payment integration, and email notifications",
  },
  {
    project: "AI Career Coach",
    description:
      "Developed an AI-powered career guidance platform with personalized user dashboards and skill assessment",
  },
  {
    project: "iBuiltThis",
    description:
      "Created a developer project showcase platform for sharing and discovering projects publicly",
  },
  {
    project: "System Design",
    description:
      "Designed authentication systems, REST APIs, database architectures, and admin dashboards for multiple production applications",
  },
  {
    project: "Tech Integrations",
    description:
      "Integrated payments (Razorpay), email (Resend), media (Cloudinary), and auth (NextAuth) services across applications",
  },
  {
    project: "Production Deployment",
    description:
      "End-to-end deployment on Vercel with custom domains, environment variables, and CI/CD workflows",
  },
];
