import React, { useState } from 'react';
import { AdCreativeData, MockupPlatform } from '../types/ad';
import { 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  MoreHorizontal, 
  Volume2, 
  ChevronRight, 
  Share2, 
  ThumbsUp, 
  MessageSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface MetaPhoneMockupProps {
  creative: AdCreativeData;
}

export const MetaPhoneMockup: React.FC<MetaPhoneMockupProps> = ({ creative }) => {
  const [platform, setPlatform] = useState<MockupPlatform>('instagram_feed');
  const [isLiked, setIsLiked] = useState<boolean>(true);
  const [likeCount, setLikeCount] = useState<number>(3842);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="flex flex-col h-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Platform Switcher */}
      <div className="p-4 border-b border-neutral-800 bg-neutral-950/60 flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span>Live Meta In-App Simulator</span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
              Live Preview
            </span>
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Test how Pakistani shoppers will experience SSK Cloth ads on mobile apps.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-neutral-900 p-1 rounded-xl border border-neutral-800">
          <button
            onClick={() => setPlatform('instagram_feed')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              platform === 'instagram_feed'
                ? 'bg-[#4B5E38] text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Instagram Feed
          </button>
          <button
            onClick={() => setPlatform('instagram_story')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              platform === 'instagram_story'
                ? 'bg-[#4B5E38] text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Stories & Reels
          </button>
          <button
            onClick={() => setPlatform('facebook_feed')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              platform === 'facebook_feed'
                ? 'bg-[#4B5E38] text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Facebook Feed
          </button>
        </div>
      </div>

      {/* Device Stage */}
      <div className="flex-1 p-6 flex items-center justify-center bg-[radial-gradient(#1c221a_1px,transparent_1px)] [background-size:16px_16px] overflow-y-auto">
        {/* Mobile Device Frame */}
        <div className="w-full max-w-[390px] rounded-[44px] p-3 bg-neutral-900 border-[7px] border-neutral-800 shadow-2xl relative">
          {/* Speaker / Camera Island */}
          <div className="w-28 h-4 bg-neutral-800 rounded-full mx-auto mb-2 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-900"></div>
          </div>

          {/* SCREEN CONTENT */}
          <div className="bg-black rounded-[32px] overflow-hidden border border-neutral-800/80 text-white font-sans text-xs select-none">
            {/* PLATFORM: INSTAGRAM FEED */}
            {platform === 'instagram_feed' && (
              <div className="flex flex-col">
                {/* IG Top App Bar */}
                <div className="px-4 py-3 flex items-center justify-between border-b border-neutral-900">
                  <span className="font-bold text-sm tracking-tight font-serif italic">Instagram</span>
                  <div className="flex items-center gap-3 text-neutral-300">
                    <Heart className="w-4 h-4" />
                    <MessageCircle className="w-4 h-4" />
                  </div>
                </div>

                {/* Ad Post Header */}
                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#4B5E38] p-[1.5px] ring-2 ring-red-500/80">
                      <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center font-black text-[10px] text-white">
                        SSK
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-xs">sskcloth.official</span>
                        <CheckCircle className="w-3 h-3 text-blue-400 fill-blue-400" />
                      </div>
                      <div className="text-[10px] text-neutral-400 flex items-center gap-1">
                        <span className="font-semibold text-neutral-300">Sponsored</span>
                        <span>·</span>
                        <span>{creative.cityTarget.split('·')[0].trim()}</span>
                      </div>
                    </div>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-neutral-400" />
                </div>

                {/* Post Visual */}
                <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden">
                  <img
                    src={creative.imageUrl}
                    alt={creative.headline}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle brand tag overlay */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold tracking-wider text-white border border-white/10">
                    {creative.brandName}
                  </div>
                  <div className="absolute top-3 right-3 bg-red-600 px-2 py-0.5 rounded text-[10px] font-extrabold text-white">
                    {creative.discountText || 'SALE'}
                  </div>

                  {/* Feed CTA Action Banner */}
                  <div className="absolute bottom-0 inset-x-0 bg-neutral-950/90 backdrop-blur-sm p-2.5 flex items-center justify-between border-t border-neutral-800">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-xs">{creative.headline}</span>
                      <span className="text-[11px] font-bold text-emerald-400">{creative.pricePKR}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-red-400 group cursor-pointer">
                      <span>{creative.callToAction.split('·')[0].trim()}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <button onClick={toggleLike} className="hover:opacity-80 transition-opacity">
                        <Heart className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`} />
                      </button>
                      <MessageCircle className="w-5 h-5 text-white" />
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    <button onClick={() => setIsSaved(!isSaved)}>
                      <Bookmark className={`w-5 h-5 ${isSaved ? 'text-white fill-white' : 'text-white'}`} />
                    </button>
                  </div>

                  {/* Likes count */}
                  <div className="font-bold text-xs mb-1">
                    {likeCount.toLocaleString()} likes
                  </div>

                  {/* Caption */}
                  <div className="text-xs leading-relaxed">
                    <span className="font-bold mr-1.5">sskcloth.official</span>
                    <span className="text-neutral-200">
                      {isExpanded ? (
                        <>
                          {creative.headline} — {creative.subheadline}. 
                          Crafted with breathable cotton tailored for Lahore, Karachi & Islamabad. 
                          🔥 Launch Price: {creative.pricePKR} (Regular: {creative.originalPricePKR}). 
                          📦 {creative.codGuarantee}. Tap link in bio or 'Shop Now' to order!
                        </>
                      ) : (
                        <>
                          {creative.headline} — {creative.subheadline}...{' '}
                          <button
                            onClick={() => setIsExpanded(true)}
                            className="text-neutral-400 font-semibold"
                          >
                            more
                          </button>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Simulated comments from Pakistani buyers */}
                  <div className="mt-2 pt-2 border-t border-neutral-900 space-y-1">
                    <div className="text-[11px]">
                      <span className="font-semibold text-neutral-300">hamza_lhr:</span>{' '}
                      <span className="text-neutral-400">Lahore mein delivery kitne din mein hoti hai?</span>
                    </div>
                    <div className="text-[11px]">
                      <span className="font-semibold text-emerald-400">sskcloth.official:</span>{' '}
                      <span className="text-neutral-400">@hamza_lhr 2 days via express courier, cash on delivery!</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PLATFORM: INSTAGRAM STORIES / REELS */}
            {platform === 'instagram_story' && (
              <div className="relative aspect-[9/16] w-full bg-neutral-950 flex flex-col justify-between overflow-hidden">
                {/* Full-bleed background visual */}
                <img
                  src={creative.imageUrl}
                  alt={creative.headline}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Top Vignette Gradient */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none"></div>

                {/* Bottom Vignette Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none"></div>

                {/* Top Story UI Header (Safe Zone Area) */}
                <div className="relative z-10 p-3 pt-4">
                  {/* Progress bars */}
                  <div className="flex gap-1 mb-2">
                    <div className="h-0.5 flex-1 bg-white rounded-full"></div>
                    <div className="h-0.5 flex-1 bg-white/40 rounded-full"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#4B5E38] flex items-center justify-center font-bold text-[9px] border border-white">
                        SSK
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-xs">sskcloth.official</span>
                          <CheckCircle className="w-3 h-3 text-blue-400 fill-blue-400" />
                        </div>
                        <span className="text-[10px] text-neutral-300 font-medium">Sponsored</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-white" />
                      <MoreHorizontal className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Mid Overlay: Brand Offer Card */}
                <div className="relative z-10 px-4 my-auto">
                  <div className="bg-black/65 backdrop-blur-md p-3.5 rounded-xl border border-white/10 max-w-[280px]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-red-400 tracking-wider">
                        {creative.highlightBadge || 'EXCLUSIVE DROP'}
                      </span>
                      <span className="text-[10px] bg-red-600 text-white font-extrabold px-1.5 py-0.2 rounded">
                        {creative.discountText}
                      </span>
                    </div>
                    <h4 className="font-black text-sm text-white leading-tight uppercase">
                      {creative.headline}
                    </h4>
                    <p className="text-[11px] text-neutral-300 mt-1">
                      {creative.subheadline}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="font-black text-emerald-400 text-sm">{creative.pricePKR}</span>
                      <span className="line-through text-neutral-400 text-xs">{creative.originalPricePKR}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Story Safe Zone: Swipe Up CTA */}
                <div className="relative z-10 p-4 pb-6 flex flex-col items-center">
                  <div className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] py-2.5 rounded-xl text-center font-extrabold text-xs tracking-wider text-white shadow-lg flex items-center justify-center gap-1.5">
                    <span>{creative.callToAction.split('·')[0].trim()}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] text-neutral-300 font-medium mt-1.5">
                    ✓ {creative.codGuarantee}
                  </span>
                </div>
              </div>
            )}

            {/* PLATFORM: FACEBOOK FEED */}
            {platform === 'facebook_feed' && (
              <div className="flex flex-col bg-neutral-950">
                {/* FB Post Header */}
                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#4B5E38] flex items-center justify-center font-bold text-xs text-white">
                      SSK
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-xs">SSK Cloth</span>
                        <CheckCircle className="w-3 h-3 text-blue-400 fill-blue-400" />
                      </div>
                      <div className="text-[10px] text-neutral-400 flex items-center gap-1">
                        <span>Sponsored</span>
                        <span>·</span>
                        <span>Paid Partnership</span>
                      </div>
                    </div>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-neutral-400" />
                </div>

                {/* FB Primary Text */}
                <div className="px-3 pb-2 text-xs leading-relaxed text-neutral-200">
                  <p className="font-semibold text-white mb-1">
                    🇵🇰 Lahore, Karachi aur Islamabad ke men ke liye new summer shirt collection!
                  </p>
                  <p className="text-[11px] text-neutral-300">
                    Pehle parcel check karein, phir cash dein. 100% Breathable cotton. 
                    Launch discount: {creative.pricePKR} (Regular {creative.originalPricePKR}).
                  </p>
                </div>

                {/* Ad Image */}
                <div className="relative aspect-[4/3] w-full bg-black overflow-hidden">
                  <img
                    src={creative.imageUrl}
                    alt={creative.headline}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Link Preview Card */}
                <div className="p-3 bg-neutral-900 border-t border-b border-neutral-800 flex items-center justify-between">
                  <div className="max-w-[210px]">
                    <span className="text-[10px] uppercase text-neutral-400 font-mono">sskcloth.pk</span>
                    <h5 className="font-bold text-xs text-white truncate">{creative.headline}</h5>
                    <p className="text-[11px] text-emerald-400 font-medium truncate">
                      {creative.pricePKR} · Cash On Delivery PK
                    </p>
                  </div>
                  <button className="bg-[#4B5E38] hover:bg-[#3d4c2e] text-white px-3 py-1.5 rounded-md font-bold text-xs">
                    Shop Now
                  </button>
                </div>

                {/* FB Engagement bar */}
                <div className="px-3 py-2 flex items-center justify-between border-t border-neutral-800/60 text-neutral-400 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <ThumbsUp className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                    <span>2.4K</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>189 Comments</span>
                    <span>42 Shares</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Simulator Guidance */}
      <div className="p-3.5 border-t border-neutral-800 bg-neutral-950 text-xs text-neutral-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Interactive Meta UI elements render exactly as seen by shoppers in Pakistan.</span>
        </div>
        <span className="text-neutral-500 font-mono text-[11px]">Meta SDK v2026.4</span>
      </div>
    </div>
  );
};
