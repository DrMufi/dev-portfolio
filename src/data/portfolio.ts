export const personalInfo = {
  name: "Muhammad Mustafa",
  role: "Full-Stack Developer & UI/UX Designer",
  tagline: "Building digital experiences that inspire",
  email: "mustafashabir645@gmail.com",
  location: "Islamabad, Pakistan",
  availability: "Available for freelance work",
  social: {
    github: "https://github.com/muhammadmustafa",
    linkedin: "https://linkedin.com/in/muhammadmustafa",
    twitter: "https://twitter.com/muhammadmustafa",
  },
  stats: {
    projectsCompleted: 25,
    yearsExperience: 2,
    technologies: 20,
    clients: 10,
  },
};

export const experience = [
  {
    id: 1,
    role: "Full-Stack Developer (Freelance)",
    company: "Self-Employed",
    period: "2023 - Present",
    description: "Building modern web applications for clients worldwide. Working with React, Next.js, Node.js, and cloud technologies to deliver performant solutions.",
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "TechVenture",
    period: "2023",
    description: "Developed full-stack features using React and Node.js. Collaborated with senior developers and learned agile development practices.",
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Digital Creatives",
    period: "2022 - 2023",
    description: "Built responsive websites and web applications for various clients using modern JavaScript frameworks and CSS frameworks.",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Software Engineering",
    school: "National University of Sciences and Technology (NUST)",
    year: "2024",
    focus: "Software Engineering",
  },
];

export const skills = {
  frontend: [
    { name: "React/Next.js", level: 95, icon: "⚛️" },
    { name: "TypeScript", level: 90, icon: "🔷" },
    { name: "Tailwind CSS", level: 95, icon: "🎨" },
    { name: "Three.js/R3F", level: 80, icon: "🎮" },
    { name: "Vue.js", level: 75, icon: "💚" },
    { name: "Svelte", level: 70, icon: "🔥" },
    { name: "HTML5/CSS3", level: 95, icon: "🌐" },
    { name: "Framer Motion", level: 85, icon: "✨" },
    { name: "Redux/Zustand", level: 88, icon: "📦" },
    { name: "SASS/SCSS", level: 80, icon: "📝" },
  ],
  backend: [
    { name: "Node.js", level: 90, icon: "🟢" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "PostgreSQL", level: 85, icon: "🐘" },
    { name: "GraphQL", level: 80, icon: "◼️" },
    { name: "AWS", level: 75, icon: "☁️" },
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "Express.js", level: 90, icon: "🚀" },
    { name: "REST API", level: 90, icon: "🔗" },
    { name: "Firebase", level: 82, icon: "🔥" },
    { name: "Prisma", level: 78, icon: "🔺" },
  ],
  devops: [
    { name: "Docker", level: 85, icon: "🐳" },
    { name: "Kubernetes", level: 70, icon: "☸️" },
    { name: "CI/CD", level: 85, icon: "⚡" },
    { name: "Terraform", level: 70, icon: "🏗️" },
    { name: "AWS Cloud", level: 80, icon: "☁️" },
    { name: "Nginx", level: 75, icon: "🌊" },
    { name: "GitHub Actions", level: 85, icon: "🔧" },
    { name: "Vercel", level: 90, icon: "▲" },
  ],
  tools: [
    { name: "Git", level: 95, icon: "📂" },
    { name: "Figma", level: 85, icon: "🎯" },
    { name: "VS Code", level: 98, icon: "💻" },
    { name: "Linux", level: 80, icon: "🐧" },
    { name: "GitHub Actions", level: 85, icon: "⚙️" },
    { name: "Docker Compose", level: 80, icon: "🐋" },
    { name: "Postman", level: 90, icon: "📮" },
    { name: "Webpack/Vite", level: 82, icon: "📦" },
  ],
  ai: [
    { name: "OpenAI API", level: 85, icon: "🤖" },
    { name: "LangChain", level: 75, icon: "⛓️" },
    { name: "Vector Databases", level: 70, icon: "💾" },
    { name: "RAG Systems", level: 75, icon: "📚" },
    { name: "Machine Learning", level: 65, icon: "🧠" },
  ],
};

export const projects = [
  {
    id: 1,
    slug: "nexus-commerce",
    title: "NexusCommerce",
    category: "Full-stack",
    description: "A modern e-commerce platform with AI-powered product recommendations and real-time inventory management.",
    thumbnail: "/projects/nexus-commerce.jpg",
    color: "#00f0ff",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI API", "Stripe"],
    problem: "Traditional e-commerce platforms lacked personalization and struggled with inventory synchronization across multiple channels.",
    objectives: [
      "Create a personalized shopping experience using AI",
      "Implement real-time inventory tracking",
      "Build a seamless checkout flow",
      "Optimize for mobile-first users",
    ],
    challenges: [
      "Integrating OpenAI API for product recommendations without latency",
      "Handling concurrent inventory updates in real-time",
      "Optimizing image loading for thousands of products",
    ],
    solutions: [
      "Implemented a caching layer for AI recommendations with background refreshing",
      "Used WebSocket connections for real-time inventory updates",
      "Implemented lazy loading and image optimization with next/image",
    ],
    results: {
      metric1: "35% increase in conversion rate",
      metric2: "50% reduction in page load time",
      metric3: "2x improvement in average order value",
      metric4: "99.9% uptime achieved",
    },
    liveUrl: "https://nexuscommerce.demo",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    slug: "secure-vault",
    title: "SecureVault",
    category: "Security",
    description: "A zero-knowledge end-to-end encrypted password manager with biometric authentication.",
    thumbnail: "/projects/secure-vault.jpg",
    color: "#ff00aa",
    techStack: ["React Native", "Node.js", "MongoDB", "Web Crypto API", "Biometrics"],
    problem: "Existing password managers had security vulnerabilities and required users to trust the service provider with their data.",
    objectives: [
      "Build a truly zero-knowledge encryption system",
      "Implement biometric authentication for mobile",
      "Create a cross-platform solution",
    ],
    challenges: [
      "Implementing secure key derivation on mobile devices",
      "Ensuring cryptographic security without performance issues",
      "Cross-platform synchronization with encryption",
    ],
    solutions: [
      "Used Web Crypto API with Argon2 for key derivation",
      "Implemented AES-256-GCM for encryption",
      "Created a secure sync protocol with zero-knowledge verification",
    ],
    results: {
      metric1: "Zero security breaches in 2 years",
      metric2: "100,000+ active users",
      metric3: "4.9 star rating on app stores",
      metric4: "50ms average encryption time",
    },
    liveUrl: "https://securevault.demo",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    slug: "data-stream",
    title: "DataStream",
    category: "Web",
    description: "A real-time analytics dashboard for visualizing large-scale data streams with interactive charts.",
    thumbnail: "/projects/data-stream.jpg",
    color: "#7b2fff",
    techStack: ["React", "D3.js", "WebSocket", "Redis", "Python"],
    problem: "Business teams needed real-time insights from millions of data points but existing tools were too slow and complex.",
    objectives: [
      "Process millions of events per second",
      "Create intuitive visualizations",
      "Enable custom dashboard creation",
    ],
    challenges: [
      "Handling WebSocket connections for thousands of concurrent users",
      "Aggregating data in real-time without lag",
      "Creating responsive charts with large datasets",
    ],
    solutions: [
      "Implemented WebSocket connection pooling and load balancing",
      "Used Redis Streams for event processing",
      "Optimized D3.js rendering with canvas for large datasets",
    ],
    results: {
      metric1: "1M+ events processed per second",
      metric2: "60% faster decision making",
      metric3: "95% user satisfaction rate",
      metric4: "40% reduction in infrastructure costs",
    },
    liveUrl: "https://datastream.demo",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    slug: "ai-chatbot",
    title: "AI Chatbot",
    category: "AI",
    description: "An intelligent customer support chatbot powered by LLMs with custom knowledge base integration.",
    thumbnail: "/projects/ai-chatbot.jpg",
    color: "#00ff88",
    techStack: ["Next.js", "OpenAI", "LangChain", "Vector DB", "Slack"],
    problem: "Customer support was overwhelmed with repetitive queries, leading to long wait times and poor customer satisfaction.",
    objectives: [
      "Automate 70% of support queries",
      "Provide accurate, context-aware responses",
      "Integrate with existing support tools",
    ],
    challenges: [
      "Handling ambiguous customer queries",
      "Ensuring data privacy while using LLM APIs",
      "Reducing response latency",
    ],
    solutions: [
      "Implemented RAG with custom knowledge base",
      "Added prompt engineering for consistent responses",
      "Created caching layer for common queries",
    ],
    results: {
      metric1: "75% automation of support tickets",
      metric2: "90% accuracy in responses",
      metric3: "60% reduction in support costs",
      metric4: "平均 response time: 2 seconds",
    },
    liveUrl: "https://aichatbot.demo",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    slug: "devflow",
    title: "DevFlow",
    category: "DevOps",
    description: "A CI/CD automation platform that simplifies deployment workflows for development teams.",
    thumbnail: "/projects/devflow.jpg",
    color: "#ffaa00",
    techStack: ["React", "Go", "Kubernetes", "GitHub API", "Docker"],
    problem: "DevOps teams spent too much time on manual deployment processes and lacked visibility into pipeline status.",
    objectives: [
      "Reduce deployment time by 80%",
      "Provide visual pipeline management",
      "Integrate with GitHub workflows",
    ],
    challenges: [
      "Managing Kubernetes clusters at scale",
      "Creating intuitive UI for complex pipelines",
      "Handling parallel job execution",
    ],
    solutions: [
      "Built custom Kubernetes operator for deployments",
      "Implemented real-time log streaming",
      "Created visual pipeline builder with drag-and-drop",
    ],
    results: {
      metric1: "85% faster deployments",
      metric2: "Zero deployment failures in 6 months",
      metric3: "3x productivity improvement",
      metric4: "50+ enterprise customers",
    },
    liveUrl: "https://devflow.demo",
    githubUrl: "https://github.com",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp",
    quote: "Mustafa delivered beyond our expectations. The attention to detail and innovative solutions transformed our product.",
    avatar: "/testimonials/sarah.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    quote: "Working with Mustafa was a game-changer. Their full-stack expertise and design sensibility created something truly special.",
    avatar: "/testimonials/michael.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Lead Developer",
    company: "Digital Agency",
    quote: "Mustafa's code quality is exceptional. Clean, well-documented, and scalable. A true professional to work with.",
    avatar: "/testimonials/emily.jpg",
  },
];

export const blogPosts = [
  {
    id: 1,
    slug: "building-scalable-react-apps",
    title: "Building Scalable React Applications in 2024",
    excerpt: "A comprehensive guide to architecture patterns, state management, and performance optimization for large React apps.",
    category: "Web Dev",
    date: "2024-01-15",
    readTime: "8 min read",
    content: `
## Introduction

Building scalable React applications requires careful planning and understanding of modern patterns...

### Key Principles

1. **Component Composition** - Build smaller, reusable components
2. **State Management** - Choose the right tool for your use case
3. **Performance** - Optimize re-renders and bundle size

## Architecture Patterns

Let's explore the most effective patterns for scaling React applications...
            `,
  },
  {
    id: 2,
    slug: "ai-integration-best-practices",
    title: "AI Integration Best Practices for Web Apps",
    excerpt: "Learn how to effectively integrate AI capabilities into your web applications while maintaining performance and privacy.",
    category: "AI",
    date: "2024-01-10",
    readTime: "6 min read",
    content: `
## Introduction

AI is revolutionizing web development...

### Integration Strategies

- Use caching for repeated queries
- Implement proper error handling
- Consider privacy implications
            `,
  },
  {
    id: 3,
    slug: "security-modern-web-apps",
    title: "Security Best Practices for Modern Web Applications",
    excerpt: "Essential security measures every developer should implement to protect their applications from common vulnerabilities.",
    category: "Security",
    date: "2024-01-05",
    readTime: "10 min read",
    content: `
## Introduction

Security is not an afterthought...

### Common Vulnerabilities

1. XSS Attacks
2. SQL Injection
3. CSRF
            `,
  },
  {
    id: 4,
    slug: "performance-optimization-guide",
    title: "The Complete Performance Optimization Guide",
    excerpt: "From Core Web Vitals to advanced optimization techniques, master the art of building fast web applications.",
    category: "Performance",
    date: "2023-12-28",
    readTime: "12 min read",
    content: `
## Introduction

Performance matters...

### Core Web Vitals

- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)
            `,
  },
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    price: "From $5,000",
    features: ["Responsive Design", "SEO Optimized", "CMS Integration", "Performance Optimized"],
  },
  {
    id: 2,
    title: "Full-Stack Solutions",
    description: "End-to-end development from frontend to backend infrastructure.",
    price: "From $10,000",
    features: ["API Development", "Database Design", "Cloud Deployment", "Security Audit"],
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centered design that converts visitors into customers.",
    price: "From $3,000",
    features: ["Wireframes", "Prototypes", "Design System", "User Testing"],
  },
];