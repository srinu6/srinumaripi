import { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Content from "@/components/sections/content";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { personalData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Srinu Maripi | Senior Software Engineer",
  description: "Senior Software Engineer with 5+ years of experience in React, React Native, and Full Stack Development. Building scalable web and mobile applications.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalData.name,
    jobTitle: personalData.title,
    url: "https://srinumaripi.tech",
    sameAs: [
      personalData.socialLinks.github,
      personalData.socialLinks.linkedin,
      personalData.socialLinks.twitter,
      personalData.socialLinks.youtube,
    ],
    email: personalData.email,
    telephone: personalData.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: personalData.location,
    },
    description: personalData.about,
    alumniOf: {
      "@type": "University",
      name: "National Institute of Technology, Srinagar",
    },
    knowsAbout: [
      "React",
      "React Native",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Web Development",
      "Mobile Development",
    ],
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <main className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Content />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}