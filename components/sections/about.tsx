"use client";

import React, { useState, useEffect } from "react";
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
import { useSearchParams, usePathname } from "next/navigation";
import { Suspense } from "react";

function AboutContent() {
  const [activeTab, setActiveTab] = useState("about");
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    // Handle URL parameters
    const tab = searchParams.get("tab");
    if (tab === "about" || tab === "experience" || tab === "education") {
      setActiveTab(tab);
    }

    // Handle custom tab change event
    const handleTabChange = (event: CustomEvent) => {
      const { tab } = event.detail;
      if (tab === "about" || tab === "experience" || tab === "education") {
        setActiveTab(tab);
      }
    };

    window.addEventListener("tabChange", handleTabChange as EventListener);
    return () => {
      window.removeEventListener("tabChange", handleTabChange as EventListener);
    };
  }, [searchParams]);

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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Who I Am</h3>
                  <p className="text-muted-foreground">
                    {personalData.about}
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
              </div>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience" className="space-y-8">
              <div className="space-y-6">
                {experienceData.map((experience, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle>{experience.position}</CardTitle>
                          <p className="text-muted-foreground">{experience.company}</p>
                          <p className="text-sm text-muted-foreground">{experience.duration}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{experience.description}</p>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="space-y-8">
              <div className="space-y-6">
                {educationData.map((education, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle>{education.degree}</CardTitle>
                          <p className="text-muted-foreground">{education.institution}</p>
                          <p className="text-sm text-muted-foreground">{education.duration}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{education.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutContent />
    </Suspense>
  );
}