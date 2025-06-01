import React from "react";
import Link from "next/link";
import { personalData } from "@/lib/data";
import { Github, Linkedin, Twitter, Youtube, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              {personalData.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground max-w-xs">
              {personalData.about.substring(0, 120)}...
            </p>
            <div className="flex space-x-3">
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#content" className="text-muted-foreground hover:text-primary transition-colors">
                Content
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <a href={`mailto:${personalData.email}`} className="hover:text-primary transition-colors">
                  {personalData.email}
                </a>
              </div>
              <div className="flex items-center text-muted-foreground">
                <ExternalLink className="h-4 w-4 mr-2" />
                <a href={personalData.socialLinks.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  rowdycoders.com
                </a>
              </div>
            </div>
            <Button asChild>
              <Link href="#contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} {personalData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}