/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { AthleteHeader } from './components/AthleteHeader';
import { AIInsights } from './components/AIInsights';
import { PerformanceCharts } from './components/PerformanceCharts';
import { StatsBar } from './components/StatsBar';
import { ResultsTable } from './components/ResultsTable';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-secondary-container overflow-x-hidden">
      <Navbar />
      
      <main className="max-w-screen-2xl mx-auto px-6 py-6 space-y-6">
        <AthleteHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <AIInsights />
          </div>
          <div className="lg:col-span-8">
            <PerformanceCharts />
          </div>
        </div>
        
        <StatsBar />
        
        <ResultsTable />
      </main>
      
      <Footer />
    </div>
  );
}

