"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo, projects, skills } from "@/data/portfolio";
import { AnimatedSection, StaggerContainer, StaggerItem, FadeIn } from "@/components/layout/animations";

const HeroCanvas = dynamic(() => import("@/components/3d/hero-canvas").then(mod => mod.HeroCanvas), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />,
});

export default function Home() {
  return (
    <div className="relative">
      <HeroCanvas />

      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-radial" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <StaggerContainer className="text-center max-w-4xl mx-auto">
            <StaggerItem>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">Available for freelance work</span>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                Hi, I&apos;m <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-2xl md:text-4xl text-muted-foreground mb-6">
                {personalInfo.role}
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {personalInfo.tagline}. Building pixel-perfect, performant, and scalable web applications with modern technologies.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/projects">
                  <Button size="lg" className="group">
                    View My Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </StaggerItem>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {[
                { value: personalInfo.stats.projectsCompleted, label: "Projects" },
                { value: personalInfo.stats.yearsExperience, label: "Years Exp." },
                { value: personalInfo.stats.technologies, label: "Technologies" },
                { value: personalInfo.stats.clients, label: "Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}+</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A selection of my recent work spanning full-stack development, AI integration, and design.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <Link href={`/projects/${project.slug}`}>
                  <Card hover className="h-full group cursor-pointer" style={{ borderColor: project.color + '30' }}>
                    <div
                      className="h-48 rounded-lg mb-4 relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)` }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code2 className="w-12 h-12 opacity-30" style={{ color: project.color }} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <Badge variant="glow" className="mb-3" style={{ '--primary': project.color } as React.CSSProperties}>
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 rounded bg-border/50 text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="group">
                View All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                My <span className="text-gradient">Expertise</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technologies I work with to bring ideas to life.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Code2, title: "Frontend", skills: skills.frontend.slice(0, 3).map(s => s.name) },
              { icon: Palette, title: "Design", skills: ["Figma", "UI/UX", "Prototyping"] },
              { icon: Sparkles, title: "Backend", skills: skills.backend.slice(0, 3).map(s => s.name) },
              { icon: Sparkles, title: "DevOps", skills: skills.devops.slice(0, 3).map(s => s.name) },
            ].map((category, index) => (
              <AnimatedSection key={category.title} delay={index * 0.1}>
                <Card className="text-center">
                  <category.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/skills">
              <Button variant="outline" size="lg" className="group">
                View All Skills
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let&apos;s Build Something <span className="text-gradient">Amazing</span> Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how I can help bring your vision to life.
            </p>
            <Link href="/contact">
              <Button size="lg" className="glow-primary">
                Start a Conversation
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}