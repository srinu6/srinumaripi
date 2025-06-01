"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { personalData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube,
  Send
} from "lucide-react";

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, this would handle form submission
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Contact Me"
          subtitle="Get in touch for opportunities or collaborations"
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Get In Touch</h3>
            <p className="text-muted-foreground">
              I'm currently open to freelance opportunities, collaborations, and 
              interesting projects. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>

            <div className="space-y-4 mt-8">
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <Link 
                      href={`mailto:${personalData.email}`} 
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {personalData.email}
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <Link 
                      href={`tel:${personalData.phone.replace(/\D/g, '')}`} 
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {personalData.phone}
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <span className="font-medium">{personalData.location}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href={personalData.socialLinks.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={personalData.socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={personalData.socialLinks.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={personalData.socialLinks.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject of your message"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}