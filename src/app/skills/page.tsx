"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Brain, Globe, Layout, Monitor, Cpu, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/animations";
import { cn } from "@/lib/utils";

const categories = [
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Server },
  { id: "wordpress", label: "WordPress", icon: Layout },
  { id: "desktop", label: "Desktop Apps", icon: Monitor },
  { id: "automation", label: "Automation", icon: Zap },
  { id: "devops", label: "DevOps", icon: Database },
  { id: "ai", label: "AI/ML", icon: Brain },
  { id: "tools", label: "Tools", icon: Wrench },
];

const skillIcons: Record<string, string> = {
  "React/Next.js": "⚛️",
  "TypeScript": "🔷",
  "Tailwind CSS": "🎨",
  "Three.js/R3F": "🎮",
  "Vue.js": "💚",
  "HTML5/CSS3": "🌐",
  "Framer Motion": "✨",
  "Redux/Zustand": "📦",
  "JavaScript": "📜",
  "Node.js": "🟢",
  "Python": "🐍",
  "PostgreSQL": "🐘",
  "GraphQL": "◼️",
  "MongoDB": "🍃",
  "Express.js": "🚀",
  "REST API": "🔗",
  "Firebase": "🔥",
  "Custom Themes": "🎯",
  "Plugin Development": "🧩",
  "WooCommerce": "🛒",
  "Elementor/Divi": "📐",
  "WordPress CMS": "📝",
  "Advanced Custom Fields": "⚙️",
  "WP REST API": "🔌",
  "Membership Sites": "👥",
  "Electron": "💻",
  "C#/.NET": "🎪",
  "Python GUI": "🖥️",
  "SQLite": "💾",
  "Python Automation": "🤖",
  "Selenium": "🕸️",
  "API Integration": "🔄",
  "Zapier/Make": "⚡",
  "Business Logic": "📊",
  "Docker": "🐳",
  "AWS": "☁️",
  "CI/CD": "⚡",
  "Vercel": "▲",
  "Nginx": "🌊",
  "Git": "📂",
  "Figma": "🎯",
  "VS Code": "💻",
  "Linux": "🐧",
  "Postman": "📮",
  "Webpack/Vite": "📦",
  "OpenAI API": "🤖",
  "LangChain": "⛓️",
  "AI Integration": "🧠",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: skills.frontend,
    backend: skills.backend,
    wordpress: skills.wordpress,
    desktop: skills.desktop,
    automation: skills.automation,
    devops: skills.devops,
    ai: skills.ai,
    tools: skills.tools,
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial" />
        
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge variant="glow" className="mb-4">Expertise</Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Skills & <span className="text-gradient">Technologies</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                7+ years of experience across web development, WordPress, desktop applications, and business automation.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground glow-primary"
                      : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  )}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <StaggerContainer>
              {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
                <StaggerItem key={skill.name}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <Card className="p-4 hover:border-primary/30 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                          {skillIcons[skill.name] || "💻"}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold">{skill.name}</h3>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8, delay: index * 0.1 }}
                              className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection delay={0.3}>
              <Card className="p-8 h-full">
                <h3 className="text-2xl font-display font-bold mb-6">
                  About My <span className="text-gradient">Skills</span>
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "7+ Years WordPress Experience",
                      description: "Built 30+ custom themes, plugins, WooCommerce stores, and membership sites.",
                    },
                    {
                      title: "Full-Stack Development",
                      description: "Modern web applications with React, Next.js, Node.js, and cloud technologies.",
                    },
                    {
                      title: "Desktop Applications",
                      description: "Cross-platform desktop apps using Electron and Python for business needs.",
                    },
                    {
                      title: "Business Automation",
                      description: "Streamlining workflows and automating repetitive tasks for businesses.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4">
                Skills <span className="text-gradient">Overview</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => {
              const categorySkills = skillCategories[category.id as keyof typeof skillCategories];
              const avgLevel = Math.round(
                categorySkills.reduce((acc, s) => acc + s.level, 0) / categorySkills.length
              );

              return (
                <AnimatedSection key={category.id} delay={index * 0.05}>
                  <Card className="p-4 text-center hover:border-primary/30 transition-all group">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold mb-1">{category.label}</h3>
                    <div className="text-lg font-bold text-gradient mb-1">{avgLevel}%</div>
                    <p className="text-xs text-muted-foreground">
                      {categorySkills.length} skills
                    </p>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <Card variant="gradient" className="p-12">
              <h2 className="text-3xl font-display font-bold mb-4">
                Let&apos;s <span className="text-gradient">Collaborate</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                With 35+ projects completed and 7 years of experience, I can bring your vision to reality.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
              >
                Get In Touch
              </a>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}