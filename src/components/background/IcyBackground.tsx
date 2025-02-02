'use client';

import { motion } from 'framer-motion';

export default function IcyBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(56,189,248,0.15) 0%, rgba(0,0,0,1) 45%, rgba(59,130,246,0.15) 100%)',
            'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15) 0%, rgba(0,0,0,1) 45%, rgba(56,189,248,0.15) 100%)',
            'radial-gradient(circle at 50% 50%, rgba(56,189,248,0.15) 0%, rgba(0,0,0,1) 45%, rgba(59,130,246,0.15) 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      {/* Snowflakes */}
      {[...Array(50)].map((_, i) => {
        const startX = Math.random() * window.innerWidth;
        const startY = -20; // Start above the viewport
        const size = Math.random() * 8 + 4; // Random size between 4-12px (increased)
        const duration = Math.random() * 10 + 10; // Random duration between 10-20s
        const delay = Math.random() * -20; // Random start time
        
        return (
          <motion.div
            key={i}
            className="absolute text-sky-200/50" // Increased opacity and lightened color
            initial={{
              x: startX,
              y: startY,
              scale: 0,
              rotate: 0
            }}
            animate={{
              x: [startX - 100, startX + 100, startX - 100, startX], // Increased movement range
              y: [startY, window.innerHeight + 20],
              scale: [0, 1, 0.5, 1],
              rotate: 360
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: 'linear'
            }}
            style={{
              width: size,
              height: size,
              filter: 'blur(0.5px) brightness(1.5)' // Added brightness
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.42 2.588a1 1 0 0 1 1.16 0l2.09 1.575 2.09-1.575a1 1 0 0 1 1.16 0l2.09 1.575 1.576-1.183a1 1 0 0 1 1.2 1.6l-1.736 1.302v2.148l1.736 1.302a1 1 0 0 1-1.2 1.6l-1.575-1.183-2.09 1.575a1 1 0 0 1-1.16 0l-2.09-1.575-2.09 1.575a1 1 0 0 1-1.16 0L8.66 9.149 7.084 10.33a1 1 0 1 1-1.2-1.6L7.62 7.43V5.282L5.884 3.98a1 1 0 1 1 1.2-1.6L8.66 3.563l2.09-1.575zM12 4.559L9.91 6.134a1 1 0 0 1-1.16 0L7.62 5.282v2.148a1 1 0 0 1-.392.794L5.884 9.129l1.575 1.183a1 1 0 0 1 .392.794v2.148l1.13.847a1 1 0 0 1 1.16 0L12 15.675l2.09-1.575a1 1 0 0 1 1.16 0l1.13-.847V11.11a1 1 0 0 1 .392-.794l1.575-1.183-1.344-.904a1 1 0 0 1-.392-.794V5.282l-1.13-.847a1 1 0 0 1-1.16 0L12 4.559z"/>
            </svg>
          </motion.div>
        );
      })}
      {/* Ice crystals overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to bottom right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom left, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent)'
        }}
      />
    </div>
  );
} 