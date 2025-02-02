'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FloralBackground() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

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
            'radial-gradient(circle at 50% 50%, rgba(244,114,182,0.15) 0%, rgba(0,0,0,1) 45%, rgba(236,72,153,0.15) 100%)',
            'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.15) 0%, rgba(0,0,0,1) 45%, rgba(244,114,182,0.15) 100%)',
            'radial-gradient(circle at 50% 50%, rgba(244,114,182,0.15) 0%, rgba(0,0,0,1) 45%, rgba(236,72,153,0.15) 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      {/* Floating petals */}
      {[...Array(30)].map((_, i) => {
        const startX = Math.random() * dimensions.width;
        const startY = -20;
        const size = Math.random() * 15 + 10;
        const duration = Math.random() * 5 + 8;
        const delay = Math.random() * -20;
        
        return (
          <motion.div
            key={i}
            className="absolute text-pink-200/40"
            initial={{
              x: startX,
              y: startY,
              scale: 0,
              rotate: 0
            }}
            animate={{
              x: [startX - 200, startX + 200, startX - 100],
              y: [startY, dimensions.height + 50],
              scale: [0, 1, 0.5, 1],
              rotate: 360
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: 'easeInOut'
            }}
            style={{
              width: size,
              height: size
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1s-4 3-4 6c0 2.5 2 3 2 3s-2 .5-2 3c0 3 4 6 4 6s4-3 4-6c0-2.5-2-3-2-3s2-.5 2-3c0-3-4-6-4-6zm0 1.5c.663 0 1.467.467 2.121 1.121C15.533 4.967 16 5.771 16 6.434c0 1.105-.672 1.566-1.414 1.414-.742-.152-1.414-1.414-1.414-1.414s-.672 1.262-1.414 1.414C10.672 8 10 7.539 10 6.434c0-.663.467-1.467 1.121-2.121C11.533 3.967 12.337 3.5 13 3.5z"/>
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
} 