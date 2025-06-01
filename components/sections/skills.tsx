"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillsData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Skills() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technical proficiencies and specialized knowledge areas"
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="mt-16"
        >
          <Tabs defaultValue={skillsData[0].category.toLowerCase()} className="w-full">
            <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${skillsData.length}, minmax(0, 1fr))` }}>
              {skillsData.map((category) => (
                <TabsTrigger 
                  key={category.category} 
                  value={category.category.toLowerCase()}
                  className="text-sm sm:text-base"
                >
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillsData.map((category) => (
              <TabsContent 
                key={category.category} 
                value={category.category.toLowerCase()}
                className="mt-8"
              >
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-6">{category.category} Skills</h3>
                    <div className="space-y-6">
                      {category.skills.map((skill, index) => (
                        <motion.div 
                          key={skill.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Additional Skills and Tools */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <Card className="bg-muted/50">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </CardContent>
          </Card>
          <Card className="bg-muted/50">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </CardContent>
          </Card>
          <Card className="bg-muted/50">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Coding</div>
            </CardContent>
          </Card>
          <Card className="bg-muted/50">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Team Lead Roles</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}