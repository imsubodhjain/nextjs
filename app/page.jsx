'use client';
import { ThemeProvider } from './components/ThemeProvider';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import LeetcodeStats from './sections/LeetcodeStats';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <ThemeProvider>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <LeetcodeStats />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
