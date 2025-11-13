'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { stylesData } from '../data/styles';

interface OverviewPageProps {
  onStyleSelect: (styleId: number) => void;
}

export default function OverviewPage({ onStyleSelect }: OverviewPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-ocean-blue to-black py-20 px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-serif font-light gradient-text mb-4">
          Design Collection
        </h2>
        <p className="text-2xl font-chinese text-gold-light">五款设计风格</p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8"
        />
      </motion.div>

      {/* Styles Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stylesData.map((style, index) => (
          <motion.div
            key={style.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            onClick={() => onStyleSelect(style.id)}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-lg glass border border-gold/20 hover:border-gold/50 transition-all duration-500">
              {/* Image Container */}
              <div className="relative h-96 bg-black/50 overflow-hidden">
                <Image
                  src={style.images.labels[0]}
                  alt={style.chineseName}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Style number badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full glass border border-gold/30 flex items-center justify-center">
                  <span className="text-gold font-light text-lg">{style.id}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-chinese font-medium text-gold mb-2">
                  {style.chineseName}
                </h3>
                <p className="text-sm font-serif text-cream/80 mb-4">
                  {style.name}
                </p>
                <p className="text-sm text-cream/60 font-light line-clamp-2">
                  {style.description}
                </p>

                {/* View Details button */}
                <motion.div
                  className="mt-6 flex items-center text-gold/70 group-hover:text-gold text-sm font-light"
                  whileHover={{ x: 5 }}
                >
                  <span>View Design</span>
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-20 text-cream/40 text-sm font-light"
      >
        Click on any design to explore in detail
      </motion.div>
    </div>
  );
}
