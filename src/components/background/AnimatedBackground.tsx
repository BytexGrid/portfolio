'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 }); // Default values

  useEffect(() => {
    // Update dimensions on mount
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Update dimensions on resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15) 0%, rgba(0,0,0,1) 45%, rgba(147,51,234,0.15) 100%)',
            'radial-gradient(circle at 50% 50%, rgba(147,51,234,0.15) 0%, rgba(0,0,0,1) 45%, rgba(59,130,246,0.15) 100%)',
            'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15) 0%, rgba(0,0,0,1) 45%, rgba(147,51,234,0.15) 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-blue-500/30"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
} 