'use client';

import { motion } from 'framer-motion';
import FloralBackground from '@/components/background/FloralBackground';
import Link from 'next/link';
import { FiMail, FiArrowLeft } from 'react-icons/fi';
import { SiDiscord, SiBluesky } from 'react-icons/si';

const contactLinks = [
  {
    name: 'Discord',
    value: 'bytexgrid',
    icon: SiDiscord,
    href: 'https://discord.com/users/bytexgrid',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    name: 'Bluesky',
    value: '@bytexgrid.bsky.social',
    icon: SiBluesky,
    href: 'https://bsky.app/profile/bytexgrid.bsky.social',
    color: 'from-sky-400 to-blue-500'
  },
  {
    name: 'Email',
    value: 'dnalinkman@outlook.com',
    icon: FiMail,
    href: 'mailto:dnalinkman@outlook.com',
    color: 'from-pink-500 to-rose-500'
  }
];

export default function ContactPage() {
  return (
    <>
      <FloralBackground />
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
                className="text-pink-400 hover:text-pink-300 transition-colors flex items-center gap-2"
              >
                <FiArrowLeft className="h-5 w-5" />
                Back Home
              </Link>
            </motion.div>
          </motion.div>

          {/* Header */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-rose-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Let&apos;s Connect
          </motion.h1>
          <motion.p 
            className="text-pink-100/80 text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Feel free to reach out through any of these platforms. I&apos;m always excited to connect and collaborate!
          </motion.p>

          {/* Contact Links */}
          <div className="max-w-2xl mx-auto space-y-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="block"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black/40 backdrop-blur-sm border border-pink-500/10 rounded-lg p-6 hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-2xl bg-gradient-to-r ${link.color} text-transparent bg-clip-text`}>
                      <link.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-pink-200">{link.name}</h3>
                      <p className="text-pink-100/60">{link.value}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
} 