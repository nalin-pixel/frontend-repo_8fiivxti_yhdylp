import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Senior Machine Learning Engineer',
    org: 'TechCorp AI',
    period: '2022 — Present',
    desc: 'Leading CV initiatives, deploying models to edge and cloud, and mentoring junior engineers.'
  },
  {
    title: 'Machine Learning Engineer',
    org: 'DataWorks',
    period: '2020 — 2022',
    desc: 'Built data pipelines and ML services with FastAPI, improving inference latency by 40%.'
  },
  {
    title: 'M.Sc. in Computer Science',
    org: 'University of Somewhere',
    period: '2018 — 2020',
    desc: 'Specialized in machine learning, thesis on attention mechanisms for document understanding.'
  }
];

const Timeline = () => {
  return (
    <section id="experience" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white"
        >
          Experience & Education
        </motion.h2>

        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-neutral-300/60 dark:via-neutral-700/60 to-transparent" />
          <div className="space-y-10">
            {items.map((it, idx) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative sm:grid sm:grid-cols-2 gap-8 items-start`}
              >
                <div className={`sm:text-right ${idx % 2 === 0 ? 'sm:pr-10' : 'sm:order-2 sm:pl-10'}`}>
                  <div className="inline-block rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl px-4 py-3 shadow-lg shadow-black/5">
                    <h3 className="font-semibold text-neutral-900 dark:text-white">{it.title}</h3>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">{it.org}</p>
                    <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">{it.period}</p>
                  </div>
                </div>
                <div className={`${idx % 2 === 0 ? 'sm:pl-10' : 'sm:order-1 sm:pr-10'}`}>
                  <p className="text-neutral-700 dark:text-neutral-300">{it.desc}</p>
                </div>
                <span className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-6 h-3 w-3 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
