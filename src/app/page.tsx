"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Palette, Mail, MapPin, Globe, Rocket, Lightbulb, CheckCircle, Layout, Monitor, Zap, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo, projects, skills } from "@/data/portfolio";
import { AnimatedSection, StaggerContainer, StaggerItem, FadeIn } from "@/components/layout/animations";

const HeroCanvas = dynamic(() => import("@/components/3d/hero-canvas").then(mod => mod.HeroCanvas), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-slate-900 to-indigo-500/10" />,
});

export default function Home() {
  return (
    <div className="relative">
      <HeroCanvas />

      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-radial" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">{personalInfo.availability}</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                Hi, I&apos;m <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
              </h1>

              <h2 className="text-2xl md:text-4xl text-muted-foreground mb-4">
                {personalInfo.role}
              </h2>

              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto lg:mx-0">
                {personalInfo.tagline}. Building pixel-perfect, performant, and scalable web applications with modern technologies.
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto lg:mx-0">
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
            </div>

            {/* Right Side - Profile Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full mx-auto lg:mx-0 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1">
                    <div className="w-full h-full rounded-full bg-background overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="text-6xl md:text-7xl font-bold text-gradient">MM</span>
                      </div>
                    </div>
                  </div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-green-500 border-4 border-background flex items-center justify-center"
                  >
                    <Sparkles className="w-6 h-6 text-background" />
                  </motion.div>
                </div>
                
                {/* Social Links - Desktop only */}
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden lg:block">
                  <div className="flex flex-col gap-3">
                    <a 
                      href={personalInfo.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all group"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href={personalInfo.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all group"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: Code2, title: "Frontend", skills: skills.frontend.slice(0, 4).map(s => s.name) },
              { icon: Rocket, title: "Backend", skills: skills.backend.slice(0, 4).map(s => s.name) },
              { icon: Layout, title: "WordPress", skills: skills.wordpress.slice(0, 4).map(s => s.name) },
              { icon: Monitor, title: "Desktop", skills: skills.desktop.slice(0, 4).map(s => s.name) },
              { icon: Zap, title: "Automation", skills: skills.automation.slice(0, 4).map(s => s.name) },
              { icon: Database, title: "DevOps", skills: skills.devops.slice(0, 4).map(s => s.name) },
            ].map((category, index) => (
              <AnimatedSection key={category.title} delay={index * 0.1}>
                <Card className="text-center hover:border-primary/30 transition-all group">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2">{category.title}</h3>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {category.skills.slice(0, 2).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-[10px] px-1.5 py-0.5">{skill}</Badge>
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
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge variant="glow" className="mb-4">Services</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                What I <span className="text-gradient">Offer</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional services tailored to bring your vision to life with modern technologies.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Web Development",
                description: "Custom websites and web applications built with React, Next.js, and modern technologies.",
                features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern Tech Stack"],
                price: "From $500",
              },
              {
                icon: Rocket,
                title: "Full-Stack Solutions",
                description: "End-to-end development from frontend to backend with clean architecture.",
                features: ["API Development", "Database Design", "Cloud Deployment", "Authentication"],
                price: "From $1,000",
              },
              {
                icon: Lightbulb,
                title: "UI/UX Design",
                description: "User-centered design that converts visitors into customers.",
                features: ["Wireframes", "Prototypes", "Design System", "Figma"],
                price: "From $300",
              },
            ].map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Card className="p-6 h-full hover:border-primary/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border">
                    <span className="text-lg font-bold text-gradient">{service.price}</span>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="group">
                Discuss Your Project
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