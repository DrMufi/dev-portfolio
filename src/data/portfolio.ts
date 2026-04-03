export const personalInfo = {
  name: "Muhammad Mustafa",
  role: "Full-Stack Developer & Software Engineer",
  tagline: "Building robust software solutions that drive business growth",
  email: "mustafashabir645@gmail.com",
  location: "Islamabad, Pakistan",
  availability: "Available for freelance & full-time opportunities",
  social: {
    github: "https://github.com/muhammadmustafa",
    linkedin: "https://linkedin.com/in/muhammadmustafa",
    twitter: "https://twitter.com/muhammadmustafa",
  },
  stats: {
    projectsCompleted: 35,
    yearsExperience: 7,
    technologies: 30,
    clients: 20,
  },
};

export const experience = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "Freelance & Agency Work",
    period: "2019 - Present",
    description: "Developing web applications, desktop software, and business automation solutions for clients worldwide. Specialized in WordPress development for 7+ years.",
  },
  {
    id: 2,
    role: "WordPress Developer",
    company: "Various Clients",
    period: "2019 - Present",
    description: "Built 30+ custom WordPress themes and plugins. Created e-commerce sites, membership platforms, LMS systems, and business websites.",
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Tech Solutions",
    period: "2022 - Present",
    description: "Building enterprise web applications, desktop tools, and automating business processes for small to medium businesses.",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Software Engineering",
    school: "International Islamic University Islamabad (IIUI)",
    year: "2025",
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
    { name: "HTML5/CSS3", level: 98, icon: "🌐" },
    { name: "Framer Motion", level: 85, icon: "✨" },
    { name: "Redux/Zustand", level: 88, icon: "📦" },
    { name: "JavaScript", level: 95, icon: "📜" },
  ],
  backend: [
    { name: "Node.js", level: 90, icon: "🟢" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "PostgreSQL", level: 85, icon: "🐘" },
    { name: "GraphQL", level: 80, icon: "◼️" },
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "Express.js", level: 90, icon: "🚀" },
    { name: "REST API", level: 95, icon: "🔗" },
    { name: "Firebase", level: 82, icon: "🔥" },
  ],
  wordpress: [
    { name: "Custom Themes", level: 98, icon: "🎯" },
    { name: "Plugin Development", level: 95, icon: "🧩" },
    { name: "WooCommerce", level: 92, icon: "🛒" },
    { name: "Elementor/Divi", level: 90, icon: "📐" },
    { name: "WordPress CMS", level: 98, icon: "📝" },
    { name: "Advanced Custom Fields", level: 88, icon: "⚙️" },
    { name: "WP REST API", level: 85, icon: "🔌" },
    { name: "Membership Sites", level: 85, icon: "👥" },
  ],
  desktop: [
    { name: "Electron", level: 85, icon: "💻" },
    { name: "C#/.NET", level: 80, icon: "🎪" },
    { name: "Python GUI", level: 75, icon: "🖥️" },
    { name: "SQLite", level: 80, icon: "💾" },
  ],
  automation: [
    { name: "Python Automation", level: 85, icon: "🤖" },
    { name: "Selenium", level: 80, icon: "🕸️" },
    { name: "API Integration", level: 90, icon: "🔄" },
    { name: "Zapier/Make", level: 85, icon: "⚡" },
    { name: "Business Logic", level: 90, icon: "📊" },
  ],
  devops: [
    { name: "Docker", level: 85, icon: "🐳" },
    { name: "AWS", level: 75, icon: "☁️" },
    { name: "CI/CD", level: 85, icon: "⚡" },
    { name: "Vercel", level: 90, icon: "▲" },
    { name: "Nginx", level: 75, icon: "🌊" },
  ],
  tools: [
    { name: "Git", level: 95, icon: "📂" },
    { name: "Figma", level: 85, icon: "🎯" },
    { name: "VS Code", level: 98, icon: "💻" },
    { name: "Linux", level: 80, icon: "🐧" },
    { name: "Postman", level: 90, icon: "📮" },
    { name: "Webpack/Vite", level: 82, icon: "📦" },
  ],
  ai: [
    { name: "OpenAI API", level: 80, icon: "🤖" },
    { name: "LangChain", level: 70, icon: "⛓️" },
    { name: "AI Integration", level: 75, icon: "🧠" },
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
    name: "Coming Soon",
    role: "Seeking First Clients",
    company: "",
    quote: "Building my portfolio with quality work. Contact me to be my first testimonial!",
    avatar: "",
  },
  {
    id: 2,
    name: "Available for Projects",
    role: "Open to Collaborate",
    company: "",
    quote: "Let's work together to bring your ideas to life with modern technologies.",
    avatar: "",
  },
];

export const blogPosts = [
  {
    id: 1,
    slug: "coming-soon",
    title: "More Content Coming Soon",
    excerpt: "I'm working on sharing my knowledge and experiences. Stay tuned for articles on web development, AI, and best practices.",
    category: "Updates",
    date: "2024-01-01",
    readTime: "1 min read",
    content: `
## More Content Coming Soon!

I'm currently working on writing helpful articles about:

- Web Development Best Practices
- AI Integration Techniques
- Performance Optimization
- Modern Tech Stack Insights

Stay tuned for regular updates as I share my knowledge and experiences in the tech industry.
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