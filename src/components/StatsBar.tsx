import React from 'react';

import { motion } from 'motion/react';

export const StatsBar: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white p-4 border-l-4 border-primary shadow-sm flex justify-between items-center group hover:bg-primary transition-all duration-300"
      >
        <span className="font-label text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-white/70">Temporadas</span>
        <span className="text-3xl font-headline font-black italic text-primary group-hover:text-white">09</span>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-4 border-l-4 border-secondary shadow-sm flex justify-between items-center group hover:bg-secondary transition-all duration-300"
      >
        <span className="font-label text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-white/70">Récords</span>
        <span className="text-3xl font-headline font-black italic text-secondary group-hover:text-white">04</span>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white p-4 border-l-4 border-primary shadow-sm flex justify-between items-center group hover:bg-primary transition-all duration-300"
      >
        <span className="font-label text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-white/70">Podios</span>
        <span className="text-3xl font-headline font-black italic text-primary group-hover:text-white">12</span>
      </motion.div>
    </section>
  );
};
