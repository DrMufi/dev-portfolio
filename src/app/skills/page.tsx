"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress";
import { skills } from "@/data/portfolio";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/animations";
import { cn } from "@/lib/utils";

const categories = [
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Server },
  { id: "devops", label: "DevOps", icon: Database },
  { id: "tools", label: "Tools", icon: Wrench },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: skills.frontend,
    backend: skills.backend,
    devops: skills.devops,
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
                  <Card className="p-6 hover:border-primary/30 transition-all">
                    <ProgressBar 
                      value={skill.level} 
                      label={skill.name}
                      delay={index * 0.1}
                    />
                  </Card>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const categorySkills = skillCategories[category.id as keyof typeof skillCategories];
              const avgLevel = Math.round(
                categorySkills.reduce((acc, s) => acc + s.level, 0) / categorySkills.length
              );

              return (
                <AnimatedSection key={category.id} delay={index * 0.1}>
                  <Card className="p-6 text-center hover:border-primary/30 transition-all">
                    <category.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
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