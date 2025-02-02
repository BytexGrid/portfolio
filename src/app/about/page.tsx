'use client';

import { motion } from 'framer-motion';
import IcyBackground from '@/components/background/IcyBackground';
import Link from 'next/link';

const skills = {
  'Languages': ['TypeScript', 'JavaScript', 'Python', 'C#', 'HTML/CSS'],
  'Frontend': ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
  'Backend': ['Node.js', 'Express', '.NET Core', 'REST APIs'],
  'Tools': ['Git', 'VS Code', 'Docker', 'GitHub Actions'],
  'Databases': ['MongoDB', 'PostgreSQL', 'SQLite'],
};

const timeline = [
  {
    year: '2024',
    title: 'Open Source Contributions',
    description: 'Actively contributing to various open source projects and creating developer tools.',
  },
  {
    year: '2023',
    title: 'NeatShift Development',
    description: 'Created NeatShift, a modern Windows file organization tool with symbolic link support.',
  },
  // Add more timeline items as needed
];

export default function AboutPage() {
  return (
    <>
      <IcyBackground />
      <motion.div 
        className="min-h-screen py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto px-4"
        >
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-8 left-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className="text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Back Home
              </Link>
            </motion.div>
          </motion.div>

          {/* Header */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-sky-100/80 text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            A passionate developer exploring the boundaries of technology and creating innovative solutions.
          </motion.p>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + categoryIndex * 0.1 }}
                  className="bg-black/40 backdrop-blur-sm border border-sky-500/10 rounded-lg p-6 hover:border-sky-500/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-sky-400 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1 rounded-full bg-sky-500/10 text-sky-300/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">
              Journey
            </h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-sky-500/20"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-sky-500/20 border-2 border-sky-500" />
                  <div className="text-sky-400 font-bold mb-2">{item.year}</div>
                  <h3 className="text-xl font-semibold text-sky-300 mb-2">{item.title}</h3>
                  <p className="text-sky-100/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
} 