import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Real-time Vision Defect Detector',
    desc: 'Edge-deployed CNN with TensorRT for factory QA; 96% precision with live monitoring UI.',
    image: 'https://images.unsplash.com/photo-1731867550623-a645b18561a8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWFsLXRpbWUlMjBWaXNpb24lMjBEZWZlY3QlMjBEZXRlY3RvcnxlbnwwfDB8fHwxNzYyNTU0OTExfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: 'https://example.com',
    tags: ['TensorFlow', 'ONNX', 'FastAPI'],
  },
  {
    title: 'LLM-Powered Doc Assistant',
    desc: 'Retrieval-augmented question answering over PDFs with embeddings and vector search.',
    image: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=1600&auto=format&fit=crop',
    link: 'https://example.com',
    tags: ['Python', 'Vector DB', 'Streamlit'],
  },
  {
    title: 'Forecasting Dashboard',
    desc: 'Time-series forecasting for sales with Prophet + XGBoost, delivered as a web app.',
    image: 'https://images.unsplash.com/photo-1551970634-747846a548cb?q=80&w=1600&auto=format&fit=crop',
    link: 'https://example.com',
    tags: ['XGBoost', 'Prophet', 'React'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white"
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl overflow-hidden border border-white/50 dark:border-white/10 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={p.image} alt="project" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-fuchsia-500/10" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-lg bg-white/60 dark:bg-neutral-800/60 border border-white/60 dark:border-white/10 text-neutral-700 dark:text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
