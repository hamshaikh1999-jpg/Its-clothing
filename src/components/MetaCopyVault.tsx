import React, { useState } from 'react';
import { META_COPY_VAULT } from '../data/adPresets';
import { AdCopyTemplate } from '../types/ad';
import { Copy, Check, MessageSquare, Sparkles, Target, Zap, ArrowRight } from 'lucide-react';

interface MetaCopyVaultProps {
  onSelectCopy: (copy: AdCopyTemplate) => void;
}

export const MetaCopyVault: React.FC<MetaCopyVaultProps> = ({ onSelectCopy }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedAngle, setSelectedAngle] = useState<string>(META_COPY_VAULT[0].id);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const activeCopy = META_COPY_VAULT.find((c) => c.id === selectedAngle) || META_COPY_VAULT[0];

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-black text-white">Meta Ads Copywriting Vault</h2>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#4B5E38] text-white">
              Pakistan High-Conversion
            </span>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Engineered with Roman Urdu & English hooks, Cash On Delivery reassurances, and local city resonance (Lahore, Karachi, Islamabad).
          </p>
        </div>

        {/* Quick Angle Tabs */}
        <div className="flex flex-wrap gap-1.5 bg-neutral-950 p-1 rounded-xl border border-neutral-800">
          {META_COPY_VAULT.map((copy) => (
            <button
              key={copy.id}
              onClick={() => setSelectedAngle(copy.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedAngle === copy.id
                  ? 'bg-[#4B5E38] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {copy.title.split('(')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Active Angle Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Primary Ad Copy (Main Meta Ads Text) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#4B5E38]" />
                <span>Primary Text (The Main Ad Caption)</span>
              </span>
              <button
                onClick={() => handleCopy(activeCopy.primaryText, 'primary')}
                className="flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 bg-red-950/40 hover:bg-red-950 border border-red-800/40 px-3 py-1 rounded-lg transition-all"
              >
                {copiedId === 'primary' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Primary Text</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-xs text-neutral-200 whitespace-pre-wrap font-sans leading-relaxed bg-neutral-900/60 p-3.5 rounded-lg border border-neutral-800/80">
              {activeCopy.primaryText}
            </pre>
          </div>

          {/* Headline & Description Pair */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  Ad Headline (5-8 Words)
                </span>
                <button
                  onClick={() => handleCopy(activeCopy.headline, 'headline')}
                  className="text-xs text-neutral-400 hover:text-white flex items-center gap-1"
                >
                  {copiedId === 'headline' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'headline' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-xs font-bold text-white bg-neutral-900 p-2.5 rounded-lg border border-neutral-800">
                {activeCopy.headline}
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  News Feed Description
                </span>
                <button
                  onClick={() => handleCopy(activeCopy.description, 'description')}
                  className="text-xs text-neutral-400 hover:text-white flex items-center gap-1"
                >
                  {copiedId === 'description' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'description' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-xs text-neutral-300 bg-neutral-900 p-2.5 rounded-lg border border-neutral-800">
                {activeCopy.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Strategic Targeting Guidance for this copy */}
        <div className="space-y-4">
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-emerald-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Target Audience Angle</h4>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed bg-neutral-900/80 p-3 rounded-lg border border-neutral-800">
              {activeCopy.targetAudience}
            </p>

            <div className="border-t border-neutral-800 pt-3">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                Strategic Hook Mechanism
              </span>
              <p className="text-xs text-neutral-400">
                {activeCopy.angle}
              </p>
            </div>

            <div className="border-t border-neutral-800 pt-3 flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-medium">Recommended CTA:</span>
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-red-950 text-red-300 border border-red-800">
                {activeCopy.recommendedCTA}
              </span>
            </div>
          </div>

          {/* Quick Apply Button */}
          <div className="bg-gradient-to-br from-[#4B5E38]/20 to-[#142E1F]/30 border border-[#4B5E38]/40 rounded-xl p-4 text-center">
            <p className="text-xs text-neutral-300 mb-3">
              Want to inject this copy directly into the Creative Canvas visual?
            </p>
            <button
              onClick={() => onSelectCopy(activeCopy)}
              className="w-full bg-[#4B5E38] hover:bg-[#3d4c2e] text-white text-xs font-bold py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-md"
            >
              <span>Apply Headline & Offer to Canvas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
