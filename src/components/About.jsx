import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Code, Database } from 'lucide-react';

const skills = [
  { icon: Brain, label: 'Machine Learning', items: ['TensorFlow', 'PyTorch', 'scikit-learn'] },
  { icon: Cpu, label: 'Computer Vision', items: ['OpenCV', 'Transformers', 'ONNX'] },
  { icon: Database, label: 'Data & MLOps', items: ['SQL', 'Airflow', 'Docker', 'FastAPI'] },
  { icon: Code, label: 'Languages', items: ['Python', 'TypeScript', 'Bash'] },
];

const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-3xl text-neutral-700 dark:text-neutral-300"
        >
          I specialize in building production-grade ML systems — from data pipelines and feature engineering to model training, evaluation, and deployment. Passionate about computer vision, NLP, and creating delightful AI-driven products.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, label, items }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/50 dark:border-white/10 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl p-5 shadow-lg shadow-black/5"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20">
                  <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">{label}</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-neutral-700 dark:text-neutral-300">
                {items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
