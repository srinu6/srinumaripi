"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectsData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

type ProjectFilter = "all" | "featured" | "web" | "app" | "other";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  // Filter projects based on selected filter
  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    if (filter === "web") return project.tags.some(tag => 
      ["React", "Next.js", "HTML", "CSS", "JavaScript"].includes(tag));
    if (filter === "app") return project.tags.some(tag => 
      ["React Native", "Flutter", "Mobile", "App"].includes(tag));
    return !project.tags.some(tag => 
      ["React", "Next.js", "HTML", "CSS", "JavaScript", "React Native", "Flutter", "Mobile", "App"].includes(tag));
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Projects"
          subtitle="Check out some of my recent work and contributions"
          align="center"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
          <Button 
            variant={filter === "all" ? "default" : "outline"} 
            onClick={() => setFilter("all")}
            className="min-w-24"
          >
            All
          </Button>
          <Button 
            variant={filter === "featured" ? "default" : "outline"} 
            onClick={() => setFilter("featured")}
            className="min-w-24"
          >
            Featured
          </Button>
          <Button 
            variant={filter === "web" ? "default" : "outline"} 
            onClick={() => setFilter("web")}
            className="min-w-24"
          >
            Web
          </Button>
          <Button 
            variant={filter === "app" ? "default" : "outline"} 
            onClick={() => setFilter("app")}
            className="min-w-24"
          >
            Apps
          </Button>
          <Button 
            variant={filter === "other" ? "default" : "outline"} 
            onClick={() => setFilter("other")}
            className="min-w-24"
          >
            Other
          </Button>
        </div>

        {/* Projects Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex"
            >
              <Card className="overflow-hidden h-full flex flex-col border border-border">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="flex-grow pt-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0 pb-6">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      Live <ExternalLink className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Button */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}