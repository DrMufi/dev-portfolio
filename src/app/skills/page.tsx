"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Brain, Sparkles, Globe, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/animations";
import { cn } from "@/lib/utils";

const categories = [
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Server },
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
  "Svelte": "🔥",
  "HTML5/CSS3": "🌐",
  "Framer Motion": "✨",
  "Redux/Zustand": "📦",
  "SASS/SCSS": "📝",
  "Node.js": "🟢",
  "Python": "🐍",
  "PostgreSQL": "🐘",
  "GraphQL": "◼️",
  "AWS": "☁️",
  "MongoDB": "🍃",
  "Express.js": "🚀",
  "REST API": "🔗",
  "Firebase": "🔥",
  "Prisma": "🔺",
  "Docker": "🐳",
  "Kubernetes": "☸️",
  "CI/CD": "⚡",
  "Terraform": "🏗️",
  "AWS Cloud": "☁️",
  "Nginx": "🌊",
  "GitHub Actions": "🔧",
  "Vercel": "▲",
  "Git": "📂",
  "Figma": "🎯",
  "VS Code": "💻",
  "Linux": "🐧",
  "Docker Compose": "🐋",
  "Postman": "📮",
  "Webpack/Vite": "📦",
  "OpenAI API": "🤖",
  "LangChain": "⛓️",
  "Vector Databases": "💾",
  "RAG Systems": "📚",
  "Machine Learning": "🧠",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: skills.frontend,
    backend: skills.backend,
    devops: skills.devops,
    ai: skills.ai,
    tools: skills.tools,
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute inset-0 bg-radial" />
        
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge variant="glow" className="mb-4">Expertise</Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Skills & <span className="text-gradient">Technologies</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive overview of my technical skills and proficiency levels across different domains.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300",
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
                              className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
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
                      title: "Continuous Learning",
                      description: "I stay updated with the latest technologies and best practices in the industry.",
                    },
                    {
                      title: "Practical Application",
                      description: "Skills are honed through real-world projects and solving actual business problems.",
                    },
                    {
                      title: "Clean Code",
                      description: "I prioritize writing maintainable, well-documented, and performant code.",
                    },
                    {
                      title: "Performance",
                      description: "Every skill is applied with a focus on optimal performance and user experience.",
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => {
              const categorySkills = skillCategories[category.id as keyof typeof skillCategories];
              const avgLevel = Math.round(
                categorySkills.reduce((acc, s) => acc + s.level, 0) / categorySkills.length
              );

              return (
                <AnimatedSection key={category.id} delay={index * 0.1}>
                  <Card className="p-6 text-center hover:border-primary/30 transition-all group">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <category.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{category.label}</h3>
                    <div className="text-3xl font-bold text-gradient mb-2">{avgLevel}%</div>
                    <p className="text-xs text-muted-foreground">
                      {categorySkills.length} technologies
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
                Ready to leverage my skills for your next project? Let&apos;s talk.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
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