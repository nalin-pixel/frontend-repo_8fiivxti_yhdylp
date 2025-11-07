import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 dark:from-[#0b0b10] dark:via-[#0b0b10] dark:to-[#0b0b10]">
      <Navbar />

      {/* Soft gradient aurora background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-400/30 to-fuchsia-400/30 blur-3xl" />
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl" />
      </div>

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <footer className="mt-16 py-10 text-center text-sm text-neutral-600 dark:text-neutral-400">
        © {new Date().getFullYear()} Alex Carter — Machine Learning Engineer
      </footer>
    </div>
  );
}

export default App;
