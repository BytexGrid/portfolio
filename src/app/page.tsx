'use client';

import { motion } from 'framer-motion';
import AnimatedBackground from '@/components/background/AnimatedBackground';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      {/* About Me button in corner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-8 right-8"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/about"
            className="px-6 py-2 border border-blue-500 rounded-full hover:bg-blue-500/10 transition-colors inline-block text-sm"
          >
            About Me
          </Link>
        </motion.div>
      </motion.div>

      <div className="min-h-screen flex flex-col justify-center items-center relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            BytexGrid
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Open Source Developer | Creating modern solutions for tomorrow&apos;s challenges
          </p>
          <div className="flex gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/projects"
                className="px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors inline-block"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="px-6 py-2 border border-blue-500 rounded-full hover:bg-blue-500/10 transition-colors inline-block"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
