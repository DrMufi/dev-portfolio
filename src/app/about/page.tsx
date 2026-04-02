"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, Award, Download, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo, experience, education } from "@/data/portfolio";
import { AnimatedSection, StaggerContainer, StaggerItem, FadeIn } from "@/components/layout/animations";
import { cn } from "@/lib/utils";

const strengths = [
  { title: "Problem Solving", description: "Breaking down complex challenges into elegant solutions" },
  { title: "Architecture", description: "Designing scalable systems with clean patterns" },
  { title: "Performance", description: "Optimizing for speed and user experience" },
  { title: "Collaboration", description: "Working seamlessly with teams and stakeholders" },
  { title: "Learning", description: "Continuously exploring new technologies and techniques" },
  { title: "Ownership", description: "Taking responsibility for delivering excellence" },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <StaggerItem>
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl opacity-20 blur-3xl" />
                  <div className="relative w-full h-full rounded-3xl glass flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-5xl font-bold text-background">MM</span>
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-2">{personalInfo.name}</h3>
                      <p className="text-muted-foreground">{personalInfo.role}</p>
                      <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{personalInfo.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{personalInfo.stats.yearsExperience}+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">{personalInfo.stats.projectsCompleted}+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge variant="glow" className="mb-4">About Me</Badge>
                  <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                    Building <span className="text-gradient">Digital Experiences</span> That Matter
                  </h1>
                </motion.div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m a {personalInfo.stats.yearsExperience}+ year experienced full-stack developer with a passion for creating 
                  exceptional digital experiences. My journey began with a curiosity for how things work on the web, 
                  and it has evolved into a career dedicated to building performant, scalable, and beautiful applications.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Throughout my career, I&apos;ve had the privilege of working with startups, agencies, and enterprise 
                  clients, contributing to over {personalInfo.stats.projectsCompleted} successful projects. I specialize in the modern 
                  JavaScript ecosystem—React, Next.js, TypeScript—and have expanded into AI integration, 3D experiences, 
                  and cloud architecture.
                </p>

                <div className="flex gap-4 pt-4">
                  <Button className="glow-primary">
                    <Download className="w-4 h-4" />
                    Download CV
                  </Button>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                My <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A timeline of my professional experience and growth.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <AnimatedSection key={exp.id} delay={index * 0.1}>
                  <div className={cn(
                    "flex items-center gap-8",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}>
                    <div className={cn(
                      "flex-1",
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    )}>
                      <Card className={cn(
                        "p-6 hover:border-primary/30 transition-colors",
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      )}>
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                        <p className="text-secondary font-medium mb-3">{exp.company}</p>
                        <p className="text-muted-foreground text-sm">{exp.description}</p>
                      </Card>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(0,240,255,0.5)] z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Core <span className="text-gradient">Strengths</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The mindset and skills that drive my work.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <AnimatedSection key={strength.title} delay={index * 0.1}>
                <Card hover className="h-full">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{strength.title}</h3>
                  <p className="text-muted-foreground text-sm">{strength.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="text-gradient">Education</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <AnimatedSection key={edu.id} delay={index * 0.1}>
                <Card className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>{edu.year}</span>
                      <Badge variant="outline">{edu.focus}</Badge>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <Card variant="gradient" className="p-12">
              <h2 className="text-3xl font-display font-bold mb-4">
                Ready to <span className="text-gradient">Collaborate</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let&apos;s discuss how I can help bring your project to life.
              </p>
              <Button size="lg" className="glow-primary">
                Get In Touch
              </Button>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}