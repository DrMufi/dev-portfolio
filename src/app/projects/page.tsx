"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, ExternalLink, GitBranch } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/animations";

const categories = ["All", "Full-stack", "Web", "Security", "AI", "DevOps"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute inset-0 bg-radial" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge variant="glow" className="mb-4">Portfolio</Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Featured <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A collection of projects showcasing my expertise in full-stack development, 
                AI integration, security, and modern web technologies.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground glow-primary"
                      : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <Card 
                      hover 
                      className="h-full group cursor-pointer overflow-hidden"
                      style={{ borderColor: project.color + '40' }}
                    >
                      <div 
                        className="h-56 relative overflow-hidden"
                        style={{ 
                          background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` 
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Code2 
                            className="w-16 h-16 transition-transform duration-500 group-hover:scale-110" 
                            style={{ color: project.color, opacity: 0.3 }} 
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:text-primary transition-colors"
                          >
                            <GitBranch className="w-4 h-4" />
                          </a>
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <div className="p-6">
                        <Badge 
                          variant="default" 
                          className="mb-3"
                          style={{ 
                            backgroundColor: `${project.color}20`, 
                            color: project.color,
                            borderColor: `${project.color}40`
                          }}
                        >
                          {project.category}
                        </Badge>
                        
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span 
                              key={tech} 
                              className="text-xs px-2 py-1 rounded-full bg-border/50 text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-sm text-muted-foreground flex items-center gap-2">
                            View Case Study
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <Card variant="gradient" className="p-12">
              <h2 className="text-3xl font-display font-bold mb-4">
                Have a Project in <span className="text-gradient">Mind</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let&apos;s discuss how I can help bring your vision to life.
              </p>
              <Link href="/contact">
                <Button size="lg" className="glow-primary">
                  Start a Conversation
                </Button>
              </Link>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}