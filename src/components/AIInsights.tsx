import React from 'react';
import { Brain } from 'lucide-react';

import { motion } from 'motion/react';

export const AIInsights: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white p-6 rounded-xl flex flex-col justify-between relative overflow-hidden h-full"
    >
      <div className="absolute top-0 right-0 w-24 h-full bg-white opacity-5 -skew-x-12 translate-x-8"></div>
      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-3">
          <div className="bg-secondary-container text-primary p-2 rounded-lg">
            <Brain size={24} fill="currentColor" />
          </div>
          <h2 className="font-headline italic text-lg font-bold uppercase tracking-tight text-secondary-container leading-tight">AI Insights</h2>
        </div>
        <p className="font-body text-sm text-primary-fixed leading-relaxed">
          Leo muestra una <span className="text-white font-bold underline decoration-secondary-container">mejora del 12%</span> en resistencia. Recuperación óptima tras HIIT (18h).
        </p>
        <div className="flex flex-col gap-2 border-t border-white/10 pt-3">
          <div className="flex items-center justify-between">
            <span className="font-label text-[10px] uppercase tracking-widest text-primary-fixed-dim">Optimización</span>
            <span className="font-headline font-bold text-secondary-container">94%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-label text-[10px] uppercase tracking-widest text-primary-fixed-dim">Recuperación</span>
            <span className="font-headline font-bold text-secondary-container">18H</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
