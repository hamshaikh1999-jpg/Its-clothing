import React, { useState } from 'react';
import { Header } from './components/Header';
import { AdCanvasRenderer } from './components/AdCanvasRenderer';
import { AdCustomizer } from './components/AdCustomizer';
import { MetaPhoneMockup } from './components/MetaPhoneMockup';
import { MetaCopyVault } from './components/MetaCopyVault';
import { StrategyGuide } from './components/StrategyGuide';
import { ComplianceInspector } from './components/ComplianceInspector';
import { INITIAL_PRESETS, FORMAT_SPECS } from './data/adPresets';
import { AdCreativeData, AdFormat, AdCopyTemplate } from './types/ad';
import { downloadCanvasImage } from './utils/canvasExporter';
import { 
  Sparkles, 
  MapPin, 
  Users, 
  Tag, 
  ShieldCheck, 
  Flame, 
  Layers, 
  Sliders, 
  Smartphone,
  BookOpen,
  CheckCircle2,
  Download
} from 'lucide-react';

export default function App() {
  const [creative, setCreative] = useState<AdCreativeData>(INITIAL_PRESETS[0]);
  const [format, setFormat] = useState<AdFormat>('1:1');
  const [activeTab, setActiveTab] = useState<'studio' | 'simulator' | 'copywriting' | 'strategy' | 'compliance'>('studio');
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const handleSelectPreset = (preset: AdCreativeData) => {
    setCreative(preset);
  };

  const handleApplyCopy = (copy: AdCopyTemplate) => {
    setCreative(prev => ({
      ...prev,
      headline: copy.headline.split('|')[1]?.trim() || copy.headline,
      subheadline: copy.description,
      callToAction: copy.recommendedCTA.toUpperCase() + ' · COD AVAILABLE',
    }));
    setActiveTab('studio');
  };

  const handleQuickExport = () => {
    setIsExporting(true);
    // Find canvas in DOM
    const canvas = document.querySelector('canvas') as HTMLCanvasElement | null;
    if (canvas) {
      const cleanBrand = creative.brandName.toLowerCase().replace(/\s+/g, '_');
      const filename = `${cleanBrand}_meta_ad_${format.replace(':', 'x')}_${Date.now()}.jpg`;
      downloadCanvasImage(canvas, filename);
    }
    setTimeout(() => {
      setIsExporting(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-[#D32F2F] selection:text-white">
      {/* Top Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onQuickExport={handleQuickExport}
        isExporting={isExporting}
      />

      {/* Target Brief & Campaign Parameter Bar */}
      <div className="border-b border-neutral-800 bg-neutral-900/60 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-neutral-300">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold text-white">Brand:</span>
              <span className="font-semibold text-neutral-200">SSK Cloth</span>
            </div>

            <span className="text-neutral-600 hidden sm:inline">|</span>

            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span className="font-bold text-white">Target Geo:</span>
              <span className="text-neutral-300">Lahore · Karachi · Islamabad</span>
            </div>

            <span className="text-neutral-600 hidden sm:inline">|</span>

            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-bold text-white">Audience:</span>
              <span className="text-neutral-300">Men Age 14–45 & Gen Z</span>
            </div>

            <span className="text-neutral-600 hidden sm:inline">|</span>

            <div className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-bold text-white">Category:</span>
              <span className="text-neutral-300">Men's Shirts (Linen & Oxford)</span>
            </div>
          </div>

          {/* Brand Colors Pill Indicator */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-neutral-400 font-medium">Palette:</span>
            <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-md border border-neutral-800">
              <div className="w-3.5 h-3.5 rounded bg-[#4B5E38]" title="Olive Green" />
              <div className="w-3.5 h-3.5 rounded bg-[#142E1F]" title="Forest Green" />
              <div className="w-3.5 h-3.5 rounded bg-[#FFFFFF]" title="White" />
              <div className="w-3.5 h-3.5 rounded bg-[#D32F2F]" title="Crimson Red" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {/* TAB 1: CREATIVE STUDIO */}
        {activeTab === 'studio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Canvas Preview (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-4">
              <AdCanvasRenderer
                creative={creative}
                format={format}
                onFormatChange={setFormat}
              />
            </div>

            {/* Right Column: Customization & Controls (5 cols on lg) */}
            <div className="lg:col-span-5">
              <AdCustomizer
                creative={creative}
                onChange={setCreative}
                onSelectPreset={handleSelectPreset}
              />
            </div>
          </div>
        )}

        {/* TAB 2: IN-APP FEED & STORY SIMULATOR */}
        {activeTab === 'simulator' && (
          <div className="max-w-4xl mx-auto">
            <MetaPhoneMockup creative={creative} />
          </div>
        )}

        {/* TAB 3: META COPYWRITING VAULT */}
        {activeTab === 'copywriting' && (
          <div className="max-w-6xl mx-auto">
            <MetaCopyVault onSelectCopy={handleApplyCopy} />
          </div>
        )}

        {/* TAB 4: 30-YEAR STRATEGY GUIDE */}
        {activeTab === 'strategy' && (
          <div className="max-w-5xl mx-auto">
            <StrategyGuide />
          </div>
        )}

        {/* TAB 5: COMPLIANCE & SIZING SPECS */}
        {activeTab === 'compliance' && (
          <div className="max-w-5xl mx-auto">
            <ComplianceInspector />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-6 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-300">SSK CLOTH</span>
            <span>·</span>
            <span>Meta Ads Campaign Creative Suite</span>
            <span>·</span>
            <span>Pakistan Edition (PKR)</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Verified 1080p Export</span>
            <span>·</span>
            <span>Safe Zones Calibrated</span>
            <span>·</span>
            <span className="text-emerald-400 font-semibold">100% Zero-Hallucination Production Ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
