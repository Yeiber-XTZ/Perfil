import React from 'react';

const results = [
  {
    date: '12 May 2024',
    event: 'World Track Series III',
    location: 'Berlín, DE',
    result: '03:42.12',
    rank: '1º ORO',
    rankType: 'gold'
  },
  {
    date: '28 Abr 2024',
    event: 'Copa Europea Pista',
    location: 'Madrid, ES',
    result: '03:45.05',
    rank: '3º BRONCE',
    rankType: 'bronze'
  }
];

export const ResultsTable: React.FC = () => {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-baseline px-1">
        <h3 className="font-headline italic text-2xl font-black uppercase text-primary tracking-tighter">Resultados</h3>
        <a className="font-label text-[10px] font-bold uppercase text-secondary hover:underline" href="#">PDF</a>
      </div>
      <div className="overflow-x-auto bg-white rounded-xl border border-surface-container-high">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="px-5 py-3 font-label text-[10px] uppercase tracking-widest text-primary font-black">Fecha</th>
              <th className="px-5 py-3 font-label text-[10px] uppercase tracking-widest text-primary font-black">Evento</th>
              <th className="px-5 py-3 font-label text-[10px] uppercase tracking-widest text-primary font-black">Ubicación</th>
              <th className="px-5 py-3 font-label text-[10px] uppercase tracking-widest text-primary font-black">Resultado</th>
              <th className="px-5 py-3 font-label text-[10px] uppercase tracking-widest text-primary font-black">Rango</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-high text-xs">
            {results.map((item, idx) => (
              <tr key={idx} className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-5 py-3 font-body">{item.date}</td>
                <td className="px-5 py-3 font-headline italic font-bold">{item.event}</td>
                <td className="px-5 py-3 text-slate-500">{item.location}</td>
                <td className="px-5 py-3 font-label font-bold text-primary">{item.result}</td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-full font-label text-[9px] font-black ${
                    item.rankType === 'gold' 
                      ? 'bg-secondary-container text-on-secondary-container' 
                      : 'bg-surface-container-high text-on-surface-variant'
                  }`}>
                    {item.rank}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
