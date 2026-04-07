import React from 'react';
import { Bell, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-surface-container">
      <div className="flex justify-between items-center w-full px-6 py-3 max-w-screen-2xl mx-auto">
        <div className="text-xl font-black italic text-primary tracking-tighter font-headline uppercase">
          ARENA VELOCITY
        </div>
        <nav className="hidden md:flex items-center gap-6 font-headline italic font-bold uppercase tracking-tighter text-sm">
          <a className="text-slate-500 hover:text-primary transition-colors" href="#">Training</a>
          <a className="text-slate-500 hover:text-primary transition-colors" href="#">Stats</a>
          <a className="text-primary border-b-2 border-primary pb-0.5" href="#">Roster</a>
          <a className="text-slate-500 hover:text-primary transition-colors" href="#">Schedule</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="text-primary p-1.5 hover:bg-surface-container rounded-full transition-colors">
            <Bell size={20} />
          </button>
          <button className="text-primary p-1.5 hover:bg-surface-container rounded-full transition-colors">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};
