import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary border-t border-white/10 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-6 gap-4 max-w-screen-2xl mx-auto">
        <div className="text-sm font-black italic text-white font-headline tracking-tighter">
          ARENA VELOCITY
        </div>
        <div className="flex gap-6 font-body text-[10px] uppercase tracking-widest text-slate-400">
          <a className="hover:text-white transition-colors" href="#">Privacy</a>
          <a className="hover:text-white transition-colors" href="#">Terms</a>
          <a className="hover:text-white transition-colors" href="#">Support</a>
        </div>
        <div className="text-secondary-container font-body text-[9px] uppercase tracking-widest opacity-80">
          © 2024 ARENA VELOCITY
        </div>
      </div>
    </footer>
  );
};
