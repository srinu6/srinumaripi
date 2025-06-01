import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Content from "@/components/sections/content";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="flex min-h-screen flex-col">
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