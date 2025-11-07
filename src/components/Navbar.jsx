import React, { useEffect, useState } from 'react';
import { Moon, Sun, Github, Linkedin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = saved ? saved === 'dark' : prefersDark;
    setDark(initialDark);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/50 dark:bg-neutral-900/40 shadow-lg shadow-black/5 dark:shadow-black/20' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">ML Engineer</a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-white/40 dark:bg-neutral-800/50 backdrop-blur border border-white/40 dark:border-white/10 hover:scale-105 transition">
            <Github className="h-4 w-4 text-neutral-800 dark:text-neutral-200" />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-white/40 dark:bg-neutral-800/50 backdrop-blur border border-white/40 dark:border-white/10 hover:scale-105 transition">
            <Linkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-200" />
          </a>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="p-2 rounded-xl bg-white/40 dark:bg-neutral-800/50 backdrop-blur border border-white/40 dark:border-white/10 hover:scale-105 transition"
          >
            {dark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-neutral-800" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
