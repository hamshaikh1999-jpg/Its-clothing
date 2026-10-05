import React from 'react';
import { Layers, ShieldCheck, Download, Sparkles, Share2 } from 'lucide-react';

interface HeaderProps {
  activeTab: 'studio' | 'simulator' | 'copywriting' | 'strategy' | 'compliance';
  setActiveTab: (tab: 'studio' | 'simulator' | 'copywriting' | 'strategy' | 'compliance') => void;
  onQuickExport: () => void;
  isExporting: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onQuickExport,
  isExporting,
}) => {
  return (
    <header className="border-b border-neutral-800 bg-neutral-900/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#4B5E38] border border-[#657E4C] flex items-center justify-center shadow-inner relative overflow-hidden">
              <span className="font-extrabold text-white text-base tracking-tighter">SSK</span>
              <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#D32F2F]"></div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg tracking-wider text-white">SSK CLOTH</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-800/60">
                  Meta Ads Pro
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span>Men's Shirts</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400">PKR Currency</span>
                <span aria-hidden="true">·</span>
                <span>Lahore / Khi / Isb</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-950/70 p-1 rounded-xl border border-neutral-800">
            <button
              onClick={() => setActiveTab('studio')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'studio'
                  ? 'bg-[#4B5E38] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Creative Studio
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'simulator'
                  ? 'bg-[#4B5E38] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Feed & Story Simulator
            </button>
            <button
              onClick={() => setActiveTab('copywriting')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'copywriting'
                  ? 'bg-[#4B5E38] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Ad Copy Vault
            </button>
            <button
              onClick={() => setActiveTab('strategy')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'strategy'
                  ? 'bg-[#4B5E38] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              30-Yr Strategy (Pakistan)
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'compliance'
                  ? 'bg-[#4B5E38] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Size & Policy Specs
            </button>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onQuickExport}
              disabled={isExporting}
              className="flex items-center gap-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-md active:scale-95 disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Exporting...' : 'Export High-Res Ad'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="flex md:hidden overflow-x-auto py-2 gap-2 border-t border-neutral-800/60 no-scrollbar">
          {[
            { id: 'studio', label: 'Studio' },
            { id: 'simulator', label: 'Simulator' },
            { id: 'copywriting', label: 'Copy Vault' },
            { id: 'strategy', label: 'Strategy' },
            { id: 'compliance', label: 'Size Specs' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`whitespace-nowrap px-3 py-1 text-xs font-medium rounded-md ${
                activeTab === tab.id
                  ? 'bg-[#4B5E38] text-white'
                  : 'text-neutral-400 hover:text-white bg-neutral-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
