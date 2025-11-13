'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IntroPageProps {
  onComplete: () => void;
}

export default function IntroPage({ onComplete }: IntroPageProps) {
  const [showButton, setShowButton] = useState(false);
  const [particles, setParticles] = useState<Array<{ left: string; top: string }>>([]);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 3000);
    // Generate particles only on client side to avoid hydration mismatch
    setParticles(
      Array.from({ length: 30 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }))
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-black via-ocean-blue to-black flex items-center justify-center z-40"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(212,175,55,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(212,175,55,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 text-center px-8 max-w-5xl">
        {/* Main title */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-serif font-light mb-6 gradient-text"
            initial={{ letterSpacing: '-0.05em' }}
            animate={{ letterSpacing: '0em' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            St. Olan Isle
          </motion.h1>

          <motion.h2
            className="text-5xl md:text-7xl font-chinese font-light text-gold-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            圣澳蓝屿
          </motion.h2>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="w-64 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-12"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl md:text-2xl font-light text-cream/80 tracking-wide mb-4"
        >
          Wine Label Design Collection
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="text-lg md:text-xl font-chinese font-light text-gold-light/80 mb-16"
        >
          葡萄酒标签设计系列
        </motion.p>

        {/* Enter button */}
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(212,175,55,1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onComplete}
            className="group px-16 py-4 glass rounded-full text-gold font-light tracking-widest uppercase text-sm border border-gold/30 hover:bg-gold/10 transition-all duration-300"
          >
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
              Discover the Collection
            </span>
            <motion.span
              className="inline-block ml-3"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        )}

        {/* Scroll hint */}
        {showButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gold/50 text-sm font-light"
            >
              <div className="w-6 h-10 border-2 border-gold/30 rounded-full mx-auto mb-2 relative">
                <motion.div
                  animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-gold/50 rounded-full absolute left-1/2 transform -translate-x-1/2 top-2"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Floating golden particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold/30 rounded-full blur-sm"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + (i % 6),
            repeat: Infinity,
            delay: (i % 15) * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.div>
  );
}
