import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been staged.');
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <a href="mailto:alex@example.com" className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur border border-white/60 dark:border-white/10 hover:scale-[1.02] transition">
              <Mail className="h-5 w-5 text-indigo-600" />
              <span className="text-neutral-800 dark:text-neutral-200">alex@example.com</span>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur border border-white/60 dark:border-white/10 hover:scale-[1.02] transition">
              <Linkedin className="h-5 w-5 text-indigo-600" />
              <span className="text-neutral-800 dark:text-neutral-200">LinkedIn</span>
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur border border-white/60 dark:border-white/10 hover:scale-[1.02] transition">
              <Github className="h-5 w-5 text-indigo-600" />
              <span className="text-neutral-800 dark:text-neutral-200">GitHub</span>
            </a>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-2 rounded-3xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl p-6 shadow-lg shadow-black/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-700 dark:text-neutral-300">Name</label>
                <input required type="text" className="mt-1 w-full rounded-xl border border-white/60 dark:border-white/10 bg-white/60 dark:bg-neutral-800/60 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 dark:text-neutral-300">Email</label>
                <input required type="email" className="mt-1 w-full rounded-xl border border-white/60 dark:border-white/10 bg-white/60 dark:bg-neutral-800/60 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-neutral-700 dark:text-neutral-300">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-xl border border-white/60 dark:border-white/10 bg-white/60 dark:bg-neutral-800/60 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button type="submit" className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30 hover:shadow-lg hover:shadow-indigo-600/40 transition">
                Send Message
              </button>
              {status && <span className="text-sm text-emerald-600 dark:text-emerald-400">{status}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
