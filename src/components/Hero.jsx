import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 md:pt-28 lg:pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 dark:bg-neutral-900/40 border border-white/50 dark:border-white/10 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Open to opportunities</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Alex Carter
          </h1>
          <p className="mt-3 text-lg md:text-xl font-semibold bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
            Machine Learning Engineer
          </p>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-xl">
            Building intelligent systems with Python, TensorFlow, and modern MLOps. I craft data-driven products, from computer vision to end-to-end web-based ML.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30 hover:shadow-lg hover:shadow-indigo-600/40 transition">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-xl bg-white/50 dark:bg-neutral-800/60 border border-white/60 dark:border-white/10 backdrop-blur text-neutral-800 dark:text-neutral-200 hover:scale-[1.02] transition">
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative h-[360px] md:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden border border-white/40 dark:border-white/10 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-xl"
        >
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-fuchsia-400/20 via-transparent to-indigo-500/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
