import React from 'react';
import { Calendar } from 'lucide-react';

export const AthleteHeader: React.FC = () => {
  return (
    <section className="bg-white border border-surface-container-high rounded-xl overflow-hidden shadow-sm">
      <div className="flex flex-col lg:flex-row">
        {/* Athlete Photo */}
        <div className="lg:w-1/4 relative group overflow-hidden">
          <img 
            className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto transform transition-transform duration-700 group-hover:scale-105" 
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800" 
            alt="Leo Spin"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 skew-slant translate-x-[-10px]">
            <div className="skew-slant-reverse font-headline italic font-bold text-xs">PRO ATHLETE</div>
          </div>
        </div>
        
        {/* Athlete Details & Events */}
        <div className="lg:w-3/4 p-6 flex flex-col justify-center gap-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label text-secondary font-bold tracking-widest uppercase text-[10px]">ESPAÑA • CICLISMO ELITE</span>
              <h1 className="text-5xl md:text-6xl font-headline font-black italic uppercase text-primary leading-none tracking-tighter">
                Leo Spin
              </h1>
            </div>
            <button className="bg-secondary-container text-on-secondary-container px-6 py-2.5 skew-slant font-headline italic font-black uppercase tracking-wider hover:bg-tertiary-fixed-dim transition-colors text-xs flex items-center gap-2">
              <span className="skew-slant-reverse">VER CALENDARIO</span>
              <Calendar size={14} className="skew-slant-reverse" />
            </button>
          </div>
          
          <div className="bg-surface-container-lowest border-t border-surface-container-high pt-4">
            <h3 className="font-headline italic text-xs font-bold uppercase text-slate-500 mb-2">Eventos Asignados</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary text-white rounded-full font-label text-[10px] font-semibold uppercase tracking-tight">Men's 1500m Pursuit</span>
              <span className="px-3 py-1 bg-primary text-white rounded-full font-label text-[10px] font-semibold uppercase tracking-tight">400m Dash Sprint</span>
              <span className="px-3 py-1 bg-surface-container-high text-primary rounded-full font-label text-[10px] font-semibold uppercase tracking-tight">Keirin Open</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
