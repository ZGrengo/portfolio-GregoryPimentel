export interface Skill {
  id: string
  name: string
  category: "frontend" | "backend" | "database" | "other"
  icon?: string
  isCore?: boolean
}

export const skills: Skill[] = [
  // Frontend
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    isCore: true
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    isCore: true
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    isCore: true
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend"
  },
  {
    id: "shadcn",
    name: "shadcn/ui",
    category: "frontend"
  },
  {
    id: "socketio-client",
    name: "Socket.IO (Client)",
    category: "frontend"
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    category: "frontend"
  },
  {
    id: "websockets",
    name: "WebSockets",
    category: "frontend"
  },
  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    isCore: true
  },
  {
    id: "express",
    name: "Express",
    category: "backend"
  },
  {
    id: "socketio-server",
    name: "Socket.IO (Server)",
    category: "backend"
  },
  {
    id: "php",
    name: "PHP",
    category: "backend"
  },
  // Databases
  {
    id: "mysql",
    name: "MySQL",
    category: "database"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database"
  },
  // Other
  {
    id: "monorepo",
    name: "Monorepo",
    category: "other"
  },
  {
    id: "client-server-types",
    name: "Client–server communication",
    category: "other"
  },
  {
    id: "server-authoritative",
    name: "Server-authoritative logic",
    category: "other"
  },
  {
    id: "zod",
    name: "Zod",
    category: "other"
  },
  {
    id: "html",
    name: "HTML",
    category: "other"
  },
  {
    id: "css",
    name: "CSS",
    category: "other"
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "other"
  }
]

export const skillsByCategory = {
  frontend: skills.filter(s => s.category === "frontend"),
  backend: skills.filter(s => s.category === "backend"),
  database: skills.filter(s => s.category === "database"),
  other: skills.filter(s => s.category === "other")
}

