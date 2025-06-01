"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { personalData, experienceData, educationData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Briefcase, 
  GraduationCap, 
  User, 
  Award, 
  CheckCircle 
} from "lucide-react";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Learn more about my background, experience, and qualifications."
          align="center"
        />

        <div className="mt-16">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Experience</span>
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={fadeIn}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                  <p className="text-muted-foreground mb-4">
                    I'm a Senior Software Engineer with a passion for creating elegant, efficient, and user-friendly web applications. With several years of industry experience, I specialize in full-stack development using modern technologies.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Beyond coding, I'm dedicated to sharing knowledge through my content creation platform, Rowdy Coders, where I publish tutorials, tips, and insights about web development and programming best practices.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">5+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">20+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">50+</div>
                      <div className="text-sm text-muted-foreground">Tutorial Videos</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">3</div>
                      <div className="text-sm text-muted-foreground">Major Websites</div>
                    </div>
                  </div>
                </div>
                
                {/* Image or Visual Element */}
                <div className="relative h-96 rounded-xl overflow-hidden border border-border">
                  <Image 
                    src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Developer coding"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                variants={fadeIn}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
                
                <div className="space-y-6">
                  {experienceData.map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeIn}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-border"
                    >
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary -translate-x-1/2 flex items-center justify-center">
                        <Briefcase className="h-3 w-3 text-primary" />
                      </div>
                      
                      <Card className="overflow-hidden">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <CardTitle className="text-xl">{item.position}</CardTitle>
                            <span className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-md">
                              {item.duration}
                            </span>
                          </div>
                          <p className="text-muted-foreground">{item.company}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">{item.description}</p>
                          <h4 className="font-medium mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={fadeIn}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold mb-6">Education & Certifications</h3>
                
                <div className="space-y-6">
                  {educationData.map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeIn}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-border"
                    >
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary -translate-x-1/2 flex items-center justify-center">
                        <GraduationCap className="h-3 w-3 text-primary" />
                      </div>
                      
                      <Card className="overflow-hidden">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <CardTitle className="text-xl">{item.degree}</CardTitle>
                            <span className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-md">
                              {item.duration}
                            </span>
                          </div>
                          <p className="text-muted-foreground">{item.institution}</p>
                        </CardHeader>
                        <CardContent>
                          <p>{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                
                {/* Certifications Section */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-4">Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 flex items-center gap-3">
                        <Award className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-medium">AWS Certified Developer</h4>
                          <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 flex items-center gap-3">
                        <Award className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-medium">Professional Frontend Developer</h4>
                          <p className="text-sm text-muted-foreground">Meta</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 flex items-center gap-3">
                        <Award className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-medium">MongoDB Certified Developer</h4>
                          <p className="text-sm text-muted-foreground">MongoDB University</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}