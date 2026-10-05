import React, { useRef } from 'react';
import { AdCreativeData, AdStyle } from '../types/ad';
import { INITIAL_PRESETS, BRAND_COLORS } from '../data/adPresets';
import { Upload, Sparkles, Sliders, Palette, Tag, Check, Image as ImageIcon } from 'lucide-react';

interface AdCustomizerProps {
  creative: AdCreativeData;
  onChange: (updated: AdCreativeData) => void;
  onSelectPreset: (preset: AdCreativeData) => void;
}

const SHIRT_GALLERY = [
  {
    name: 'Pakistani Male Model (Olive Casual Shirt)',
    url: '/src/assets/images/shirt_olive_model_1791144018180.jpg',
    tag: 'Gen Z / Casual',
  },
  {
    name: 'Young Professional (Crisp White Oxford)',
    url: '/src/assets/images/shirt_white_classic_1791144032490.jpg',
    tag: 'Oxford / Office',
  },
  {
    name: 'Editorial Portrait (Emerald & Olive Cuban)',
    url: '/src/assets/images/shirt_green_story_1791144047152.jpg',
    tag: 'Resort / Summer',
  },
  {
    name: 'Flat Lay Showcase (Olive, White & Green Trio)',
    url: '/src/assets/images/shirt_red_olive_1791144058580.jpg',
    tag: 'Bundle Offer',
  },
];

export const AdCustomizer: React.FC<AdCustomizerProps> = ({
  creative,
  onChange,
  onSelectPreset,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFieldChange = (field: keyof AdCreativeData, value: string) => {
    onChange({
      ...creative,
      [field]: value,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onChange({
            ...creative,
            imageUrl: event.target.result as string,
            modelType: `Uploaded Image (${file.name})`,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col gap-6 shadow-xl overflow-y-auto max-h-[820px]">
      {/* Preset Strategy Angles */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>High-Converting Ad Angles</span>
          </label>
          <span className="text-[11px] text-neutral-400">Tested in PK Market</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {INITIAL_PRESETS.map((preset) => {
            const isSelected = creative.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => onSelectPreset(preset)}
                className={`text-left p-2.5 rounded-xl border text-xs transition-all ${
                  isSelected
                    ? 'bg-[#4B5E38]/20 border-[#4B5E38] text-white shadow-sm ring-1 ring-[#4B5E38]'
                    : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900'
                }`}
              >
                <div className="font-bold flex items-center justify-between">
                  <span className="truncate">{preset.name.split('(')[0]}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5 truncate">
                  {preset.headline} · {preset.pricePKR}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Shirt & Model Photography Selection */}
      <div className="border-t border-neutral-800 pt-5">
        <div className="flex items-center justify-between mb-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5 text-[#4B5E38]" />
            <span>Shirt & Model Photography</span>
          </label>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-[11px] font-semibold text-red-400 hover:text-red-300 flex items-center gap-1"
          >
            <Upload className="w-3 h-3" />
            <span>Upload Custom Photo</span>
          </button>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />

        <div className="grid grid-cols-2 gap-2">
          {SHIRT_GALLERY.map((item) => {
            const isCurrent = creative.imageUrl === item.url;
            return (
              <button
                key={item.url}
                onClick={() => handleFieldChange('imageUrl', item.url)}
                className={`relative rounded-xl overflow-hidden border p-1 text-left transition-all group ${
                  isCurrent
                    ? 'border-[#D32F2F] ring-2 ring-[#D32F2F]/40'
                    : 'border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="aspect-square w-full rounded-lg overflow-hidden bg-neutral-950">
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-1.5 px-1 pb-1">
                  <div className="text-[11px] font-bold text-white truncate">{item.tag}</div>
                  <div className="text-[10px] text-neutral-400 truncate">{item.name}</div>
                </div>
                {isCurrent && (
                  <div className="absolute top-2 right-2 bg-[#D32F2F] text-white p-1 rounded-full shadow-md">
                    <Check className="w-3 h-3" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Copywriting & Headline Editor */}
      <div className="border-t border-neutral-800 pt-5 space-y-3.5">
        <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5 text-neutral-400" />
          <span>Meta Ad Copy & Offer Controls</span>
        </label>

        <div>
          <label className="text-[11px] text-neutral-400 block mb-1">Brand Name & Tagline</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              value={creative.brandName}
              onChange={(e) => handleFieldChange('brandName', e.target.value)}
              className="bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#4B5E38]"
              placeholder="Brand Name"
            />
            <input
              type="text"
              value={creative.tagline}
              onChange={(e) => handleFieldChange('tagline', e.target.value)}
              className="bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#4B5E38]"
              placeholder="Tagline"
            />
          </div>
        </div>

        <div>
          <label className="text-[11px] text-neutral-400 block mb-1">Main Ad Headline</label>
          <input
            type="text"
            value={creative.headline}
            onChange={(e) => handleFieldChange('headline', e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs font-bold text-white focus:outline-none focus:border-[#4B5E38]"
            placeholder="Main Headline"
          />
        </div>

        <div>
          <label className="text-[11px] text-neutral-400 block mb-1">Subheadline / Fabric Feature</label>
          <input
            type="text"
            value={creative.subheadline}
            onChange={(e) => handleFieldChange('subheadline', e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-neutral-200 focus:outline-none focus:border-[#4B5E38]"
            placeholder="Subheadline"
          />
        </div>

        {/* Pricing in PKR */}
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="text-[11px] text-neutral-400 block mb-1">Offer Price</label>
            <input
              type="text"
              value={creative.pricePKR}
              onChange={(e) => handleFieldChange('pricePKR', e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs font-bold text-emerald-400 focus:outline-none focus:border-[#4B5E38]"
              placeholder="Rs. 1,950"
            />
          </div>
          <div>
            <label className="text-[11px] text-neutral-400 block mb-1">Original Price</label>
            <input
              type="text"
              value={creative.originalPricePKR}
              onChange={(e) => handleFieldChange('originalPricePKR', e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-neutral-400 focus:outline-none focus:border-[#4B5E38]"
              placeholder="Rs. 2,999"
            />
          </div>
          <div>
            <label className="text-[11px] text-neutral-400 block mb-1">Discount Tag</label>
            <input
              type="text"
              value={creative.discountText}
              onChange={(e) => handleFieldChange('discountText', e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-red-400 font-bold focus:outline-none focus:border-[#4B5E38]"
              placeholder="FLAT 35% OFF"
            />
          </div>
        </div>

        {/* Target Cities & COD */}
        <div>
          <label className="text-[11px] text-neutral-400 block mb-1">Target Pakistani Cities</label>
          <input
            type="text"
            value={creative.cityTarget}
            onChange={(e) => handleFieldChange('cityTarget', e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-neutral-200 focus:outline-none focus:border-[#4B5E38]"
            placeholder="Lahore · Karachi · Islamabad"
          />
        </div>

        <div>
          <label className="text-[11px] text-neutral-400 block mb-1">Cash on Delivery Trust Line</label>
          <input
            type="text"
            value={creative.codGuarantee}
            onChange={(e) => handleFieldChange('codGuarantee', e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-emerald-300 focus:outline-none focus:border-[#4B5E38]"
            placeholder="Cash on Delivery Across Pakistan"
          />
        </div>

        <div>
          <label className="text-[11px] text-neutral-400 block mb-1">Call to Action Button</label>
          <input
            type="text"
            value={creative.callToAction}
            onChange={(e) => handleFieldChange('callToAction', e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs font-bold text-white focus:outline-none focus:border-[#4B5E38]"
            placeholder="SHOP NOW · COD AVAILABLE"
          />
        </div>
      </div>

      {/* Brand Color Palette Balance */}
      <div className="border-t border-neutral-800 pt-5">
        <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center justify-between mb-2">
          <span className="flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-red-500" />
            <span>Brand Colors (Red, Olive, White, Green)</span>
          </span>
          <span className="text-[10px] text-neutral-400 font-mono">100% Brand Locked</span>
        </label>
        
        <div className="flex items-center gap-2 bg-neutral-950 p-2 rounded-xl border border-neutral-800">
          <div className="flex items-center gap-2 flex-1">
            <div className="w-6 h-6 rounded-md bg-[#4B5E38] border border-white/20" title="Olive Green" />
            <div className="w-6 h-6 rounded-md bg-[#142E1F] border border-white/20" title="Deep Forest Green" />
            <div className="w-6 h-6 rounded-md bg-[#FFFFFF] border border-neutral-400" title="Pure White" />
            <div className="w-6 h-6 rounded-md bg-[#D32F2F] border border-white/20" title="Crimson Red" />
          </div>
          <span className="text-[11px] text-neutral-400 font-medium">SSK Official Palette</span>
        </div>
      </div>
    </div>
  );
};
