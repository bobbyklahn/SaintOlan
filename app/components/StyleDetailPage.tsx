'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { stylesData, StyleData } from '../data/styles';

interface StyleDetailPageProps {
  styleId: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

type ImageTab =
  | { key: 'moodboard'; label: string; labelCN: string; labelIndex?: never }
  | { key: 'mockup'; label: string; labelCN: string; labelIndex?: never }
  | { key: 'labels'; label: string; labelCN: string; labelIndex: number };

export default function StyleDetailPage({ styleId, onClose, onNext, onPrev }: StyleDetailPageProps) {
  const style = stylesData.find(s => s.id === styleId);
  const [currentImageType, setCurrentImageType] = useState<'moodboard' | 'mockup' | 'labels'>('moodboard');
  const [currentLabelIndex, setCurrentLabelIndex] = useState(0);

  if (!style) return null;

  // Build dynamic image tabs including all label variants
  const imageTabs: ImageTab[] = [
    { key: 'moodboard', label: 'Moodboard', labelCN: '设计灵感' },
    { key: 'mockup', label: 'Mockup', labelCN: '瓶身效果' },
    ...style.images.labels.map((_, index) => ({
      key: 'labels' as const,
      label: `Label ${index + 1}`,
      labelCN: `标签设计 ${index + 1}`,
      labelIndex: index,
    })),
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 overflow-y-auto"
    >
      {/* Close button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={onClose}
        className="fixed top-8 right-8 z-50 w-12 h-12 glass rounded-full border border-gold/30 hover:border-gold/50 flex items-center justify-center group transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-gold text-2xl">×</span>
      </motion.button>

      {/* Progress indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed top-8 left-8 z-50 glass px-6 py-3 rounded-full border border-gold/30"
      >
        <span className="text-gold font-light">
          {styleId} <span className="text-gold/50">/ 5</span>
        </span>
      </motion.div>

      {/* Navigation arrows */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        onClick={onPrev}
        disabled={styleId === 1}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 glass rounded-full border border-gold/30 hover:border-gold/50 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-gold text-xl">←</span>
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        onClick={onNext}
        disabled={styleId === 5}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 glass rounded-full border border-gold/30 hover:border-gold/50 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-gold text-xl">→</span>
      </motion.button>

      {/* Main content */}
      <div className="min-h-screen py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <h1 className="text-6xl md:text-8xl font-chinese font-light gradient-text mb-4">
                {style.chineseName}
              </h1>
              <p className="text-2xl md:text-3xl font-serif text-cream/80 font-light">
                {style.name}
              </p>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-48 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-lg text-cream/70 font-light max-w-2xl mx-auto"
            >
              {style.description}
            </motion.p>
          </motion.div>

          {/* Image viewer tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center gap-3 mb-8 flex-wrap"
          >
            {imageTabs.map((tab, index) => {
              const isActive =
                (tab.key === 'labels' && currentImageType === 'labels' && currentLabelIndex === tab.labelIndex) ||
                (tab.key !== 'labels' && currentImageType === tab.key);

              return (
                <button
                  key={`${tab.key}-${tab.labelIndex ?? index}`}
                  onClick={() => {
                    setCurrentImageType(tab.key);
                    if (tab.key === 'labels' && tab.labelIndex !== undefined) {
                      setCurrentLabelIndex(tab.labelIndex);
                    }
                  }}
                  className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                    isActive
                      ? 'bg-gold/20 border-gold text-gold'
                      : 'glass border-gold/20 text-cream/60 hover:border-gold/50'
                  }`}
                >
                  <span className="block text-sm font-light">{tab.label}</span>
                  <span className="block text-xs font-chinese mt-1">{tab.labelCN}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Image display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="relative w-full aspect-[16/10] mb-12 rounded-xl overflow-hidden glass border border-gold/20"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentImageType}-${currentLabelIndex}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full bg-black/50"
              >
                <Image
                  src={
                    currentImageType === 'labels'
                      ? style.images.labels[currentLabelIndex]
                      : style.images[currentImageType]
                  }
                  alt={`${style.chineseName} - ${currentImageType}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Design details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* Features */}
            <div className="glass rounded-xl p-8 border border-gold/20">
              <h3 className="text-2xl font-chinese text-gold mb-6">设计特点</h3>
              <ul className="space-y-4">
                {style.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    className="flex items-start text-cream/80 font-light"
                  >
                    <span className="text-gold mr-3 mt-1">•</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Additional info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
                className="glass rounded-xl p-8 border border-gold/20"
              >
                <h4 className="text-lg font-chinese text-gold mb-3">核心元素</h4>
                <p className="text-cream/80 font-light">{style.coreElements}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 }}
                className="glass rounded-xl p-8 border border-gold/20"
              >
                <h4 className="text-lg font-chinese text-gold mb-3">设计气质</h4>
                <p className="text-cream/80 font-light">{style.vibe}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
                className="glass rounded-xl p-8 border border-gold/20"
              >
                <h4 className="text-lg font-chinese text-gold mb-3">色彩方案</h4>
                <div className="flex flex-wrap gap-2">
                  {style.colors.map((color, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-sm text-cream/80 font-light"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(212,175,55,0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(212,175,55,0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(212,175,55,0.08) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </motion.div>
  );
}
