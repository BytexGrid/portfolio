'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen text-white relative"
    >
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </motion.div>
  );
} 