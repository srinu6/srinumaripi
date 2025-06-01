"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about?tab=about" },
  { name: "Experience", path: "/#about?tab=experience" },
  { name: "Education", path: "/#about?tab=education" },
  { name: "Projects", path: "/#projects" },
  { name: "Contact", path: "/#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    
    // Extract the section ID and tab from the path
    const [section, query] = path.split('?');
    const sectionId = section.replace('/', '').replace('#', '');
    
    // Scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // If there's a tab parameter, dispatch a custom event
    if (query) {
      const params = new URLSearchParams(query);
      const tab = params.get('tab');
      if (tab) {
        // Dispatch a custom event for tab change
        const event = new CustomEvent('tabChange', { detail: { tab } });
        window.dispatchEvent(event);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Srinu Maripi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => handleNavigation(item.path)}
                className={pathname === item.path ? "text-primary" : ""}
              >
                {item.name}
              </Button>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </Button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}