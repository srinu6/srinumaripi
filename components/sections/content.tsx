"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { contentCreationData } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, PlayCircle, Clock, Calendar, ArrowRight } from "lucide-react";

export default function Content() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="content" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Content Creation"
          subtitle="Tutorials, articles, and educational resources I've created"
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
          <Tabs defaultValue="youtube" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="youtube" className="flex items-center gap-2">
                <PlayCircle className="h-4 w-4" />
                <span>YouTube</span>
              </TabsTrigger>
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Blog</span>
              </TabsTrigger>
            </TabsList>

            {/* YouTube Content */}
            <TabsContent value="youtube">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>About My Channel</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        {contentCreationData.youtube.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {contentCreationData.youtube.subscribers}
                          </div>
                          <div className="text-sm text-muted-foreground">Subscribers</div>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {contentCreationData.youtube.videos}
                          </div>
                          <div className="text-sm text-muted-foreground">Videos</div>
                        </div>
                      </div>
                      
                      <Button asChild className="w-full mt-4">
                        <Link 
                          href={contentCreationData.youtube.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Visit Channel
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold mb-4">Featured Videos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contentCreationData.youtube.featuredVideos.map((video, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden h-full flex flex-col">
                          <div className="relative h-40 w-full overflow-hidden">
                            <Image
                              src={video.thumbnail}
                              alt={video.title}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                              <PlayCircle className="h-12 w-12 text-white" />
                            </div>
                          </div>
                          <CardContent className="pt-4 flex-grow">
                            <h4 className="font-medium line-clamp-2">{video.title}</h4>
                          </CardContent>
                          <CardFooter className="pt-0">
                            <Button variant="ghost" size="sm" asChild className="ml-auto">
                              <Link href={video.url} target="_blank" rel="noopener noreferrer">
                                Watch <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Blog Content */}
            <TabsContent value="blog">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>About My Blog</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        {contentCreationData.blog.description}
                      </p>
                      
                      <div className="bg-muted p-4 rounded-lg mt-6">
                        <div className="text-2xl font-bold text-primary mb-1">
                          Rowdy Coders
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Technical articles and tutorials
                        </div>
                      </div>
                      
                      <Button asChild className="w-full mt-4">
                        <Link 
                          href={contentCreationData.blog.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Visit Blog
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold mb-4">Featured Articles</h3>
                  <div className="space-y-4">
                    {contentCreationData.blog.featuredPosts.map((post, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card>
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-lg">{post.title}</h4>
                              <Badge variant="outline" className="text-xs flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {post.date}
                              </Badge>
                            </div>
                            <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                              <Link href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                                Read Article <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}