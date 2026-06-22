export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
  features?: string[];
  challenges?: string[];
  highlights?: string[];
  problem?: string;
  solution?: string;
  impact?: string;
}

const ujjainSvg = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310B981'/%3E%3Cstop offset='100%25' style='stop-color:%235CE1E6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23g)'/%3E%3Ctext x='400' y='215' font-family='Inter, sans-serif' font-size='32' font-weight='700' fill='white' text-anchor='middle' dominant-baseline='middle'%3EUjjain AutoSeva%3C/text%3E%3Ctext x='400' y='260' font-family='Inter, sans-serif' font-size='16' font-weight='400' fill='rgba(255,255,255,0.7)' text-anchor='middle' dominant-baseline='middle'%3EAuto Rickshaw Booking Platform%3C/text%3E%3C/svg%3E";

const aiCoachSvg = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%235CE1E6'/%3E%3Cstop offset='100%25' style='stop-color:%2372F2B9'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23g)'/%3E%3Ctext x='400' y='215' font-family='Inter, sans-serif' font-size='32' font-weight='700' fill='white' text-anchor='middle' dominant-baseline='middle'%3EAI Career Coach%3C/text%3E%3Ctext x='400' y='260' font-family='Inter, sans-serif' font-size='16' font-weight='400' fill='rgba(255,255,255,0.7)' text-anchor='middle' dominant-baseline='middle'%3EAI-Powered Career Guidance%3C/text%3E%3C/svg%3E";

export const projects: Project[] = [
  {
    id: "ujjain-autoseva",
    title: "Ujjain AutoSeva",
    description:
      "A full-service auto rickshaw booking platform for Ujjain city with admin dashboard, booking management, custom tour packages, and email notifications.",
    longDescription:
      "Ujjain AutoSeva is a production-grade booking platform that connects passengers with auto rickshaw drivers in Ujjain. The platform features user authentication, real-time booking management, an admin dashboard for fleet management, custom tour package creation, and automated email notifications via Resend. Built with Next.js and MongoDB, it handles the complete booking lifecycle from request to completion.",
    image: "/ujjain.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "NextAuth",
      "Resend",
      "Razorpay",
      "Tailwind CSS",
    ],
    github: "https://github.com/rohitbuwala/ujjain-autoseva",
    live: "https://ujjain-autoseva.in/",
    featured: true,
    features: [
      "User authentication with NextAuth",
      "Admin dashboard for managing bookings and drivers",
      "Custom tour package creation and management",
      "Email notifications via Resend",
      "Responsive design for mobile and desktop",
      "MongoDB integration for data persistence",
    ],
    challenges: [
      "Implementing role-based access control for admin vs. regular users",
      "Building a booking system that handles real-time availability",
      "Integrating email notifications without blocking the main thread",
    ],
    highlights: [
      "Production deployment handling real users",
      "Full-stack architecture with Next.js API routes",
      "Complete authentication flow with NextAuth",
    ],
    problem:
      "Visitors to Ujjain, a major pilgrimage city, had no centralized way to book auto rickshaws. They relied on haggling with drivers at stands, with no pricing transparency, no advance booking, and no accountability.",
    solution:
      "Built a full-stack booking platform where users can register, browse available vehicles, book rides in advance, and manage custom tour packages. Admins get a dashboard to manage drivers, bookings, and payments. Email notifications keep everyone informed at every step.",
    impact:
      "The platform provides a reliable, transparent booking experience for thousands of visitors while giving local auto drivers a digital presence and steady stream of bookings through the admin-managed dispatch system.",
  },
  {
    id: "ai-career-coach",
    title: "AI Career Coach",
    description:
      "An AI-powered career guidance platform that provides personalized career advice, skill assessments, and job market insights.",
    longDescription:
      "AI Career Coach leverages artificial intelligence to help users navigate their career path. The platform offers personalized career recommendations, skill gap analysis, resume tips, and interview preparation. Built with a modern stack and featuring a clean dashboard interface.",
    image: "/aicc.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "AI Integration",
      "Tailwind CSS",
      "Authentication",
    ],
    github: "https://github.com/rohitbuwala/ai-career-coach",
    live: "https://aicareercoach.vercel.app/",
    featured: true,
    features: [
      "AI-powered career recommendations",
      "Personalized dashboard for users",
      "Skill assessment and gap analysis",
      "Interview preparation resources",
      "User authentication and profile management",
    ],
    problem:
      "Job seekers and career switchers often lack access to personalized career guidance. Generic advice doesn't account for individual skills, experience, and market conditions.",
    solution:
      "Developed an AI-driven platform that analyzes user profiles and provides tailored career recommendations, skill gap analysis, and actionable steps. The dashboard presents all insights in a clean, intuitive interface.",
    impact:
      "Users get personalized career roadmaps that would otherwise require expensive career counseling sessions, democratizing access to quality career guidance.",
  },
  {
    id: "ibuiltthis",
    title: "iBuiltThis – Share & Explore Projects",
    description:
      "A platform for developers to showcase their work, gain visibility, and learn from other creators. Features a clean UI and responsive design.",
    image: "/iblt.png",
    tags: [
      "Next.js",
      "React",
      "Clerk",
      "NeonDB",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
    ],
    github: "https://github.com/rohitbuwala/ibuiltthis-app",
    live: "https://ibuiltthis-lab.vercel.app/",
    featured: false,
  },
  {
    id: "streamfy",
    title: "Streamfy – Chat & Video Calling App",
    description:
      "A real-time chat and video calling application with a MERN stack backend. Features instant messaging and peer-to-peer video calls.",
    image: "/st.png",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/rohitbuwala/Streamify",
    live: "https://streamify-2vyr.onrender.com/login",
    featured: false,
  },
  {
    id: "gaming-web",
    title: "Gaming Web",
    description:
      "A responsive gaming store with product filtering, cart functionality, and checkout process. Built with React and Redux for state management.",
    image: "/gam.png",
    tags: ["React", "Tailwind CSS", "Redux"],
    github: "https://github.com/rohitbuwala/award-winning",
    live: "https://award-w.vercel.app/",
    featured: false,
  },
  {
    id: "trending-movies",
    title: "Trending Movies",
    description:
      "A movie discovery platform that allows users to explore trending movies, view details, and add them to a watchlist.",
    image: "/mov.png",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/rohitbuwala/trend-movies",
    live: "https://trendmovies.vercel.app/",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
