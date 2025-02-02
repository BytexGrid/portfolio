'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FireBackground() {
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
            'radial-gradient(circle at 50% 50%, rgba(251,146,60,0.15) 0%, rgba(0,0,0,1) 45%, rgba(194,65,12,0.15) 100%)',
            'radial-gradient(circle at 50% 50%, rgba(194,65,12,0.15) 0%, rgba(0,0,0,1) 45%, rgba(251,146,60,0.15) 100%)',
            'radial-gradient(circle at 50% 50%, rgba(251,146,60,0.15) 0%, rgba(0,0,0,1) 45%, rgba(194,65,12,0.15) 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      {[...Array(50)].map((_, i) => {
        const startX = Math.random() * dimensions.width;
        const startY = Math.random() * dimensions.height + 100;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{
              x: startX,
              y: startY,
              scale: 0,
            }}
            animate={{
              x: [startX, startX + (Math.random() - 0.5) * 100],
              y: [startY, startY - (Math.random() * 200 + 100)],
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              background: `rgb(${251 + Math.random() * 4}, ${146 + Math.random() * 20}, ${60 + Math.random() * 10})`,
              filter: 'blur(1px)',
            }}
          />
        );
      })}
    </div>
  );
} 