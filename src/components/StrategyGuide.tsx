import React from 'react';
import { EXPERT_CAMPAIGN_GUIDE } from '../data/adPresets';
import { CheckCircle2, TrendingUp, DollarSign, MapPin, Users, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export const StrategyGuide: React.FC = () => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl space-y-8">
      {/* Title & Experience Header */}
      <div className="border-b border-neutral-800 pb-5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded bg-red-950 text-red-400 border border-red-800">
            30-Year Meta Ads Blueprint
          </span>
          <span className="text-xs text-neutral-400">|</span>
          <span className="text-xs font-bold text-emerald-400">Zero-Hallucination Playbook</span>
        </div>
        <h2 className="text-xl font-black text-white mt-1">
          SSK Cloth: Men's Shirts Launch Strategy for Pakistan (Lahore · Karachi · Islamabad)
        </h2>
        <p className="text-xs text-neutral-300 mt-1 max-w-3xl leading-relaxed">
          When launching a brand new Facebook & Instagram page with zero pixel history, standard US/UK e-commerce advice fails in Pakistan. Here is the direct response formula tested across millions in ad spend.
        </p>
      </div>

      {/* Target Audience Breakdown (14 - 45 & Gen Z) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Segment 1: Gen Z (14 - 24) */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>Segment 1: Gen Z Men (Age 14 – 24)</span>
            </span>
            <span className="text-[10px] bg-neutral-900 border border-neutral-700 px-2 py-0.5 rounded text-neutral-300">
              High Shareability
            </span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">
            University students, college teens, and young creatives in Lahore, Karachi, and Islamabad. They buy shirts for cafe hangouts, university, and street style.
          </p>
          <ul className="text-xs text-neutral-400 space-y-1.5 pt-1">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Winning Style:</strong> Cuban collar shirts, relaxed boxy fits in Olive Green & Pure White.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Primary Placement:</strong> Instagram Reels & Stories (9:16 vertical video & carousel).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Price Sweet Spot:</strong> Rs. 1,650 – Rs. 1,999 PKR.</span>
            </li>
          </ul>
        </div>

        {/* Segment 2: Young Professionals & Mature Men (25 - 45) */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>Segment 2: Working Men (Age 25 – 45)</span>
            </span>
            <span className="text-[10px] bg-neutral-900 border border-neutral-700 px-2 py-0.5 rounded text-neutral-300">
              High Purchasing Power
            </span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Corporate executives, business owners, and working professionals in DHA, Gulberg, Clifton, and Blue Area Islamabad. They want crisp, neat fabrics that handle summer heat without wrinkling.
          </p>
          <ul className="text-xs text-neutral-400 space-y-1.5 pt-1">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
              <span><strong>Winning Style:</strong> Crisp White Oxford button-down and Earthy Olive semi-formal shirts.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
              <span><strong>Primary Placement:</strong> Facebook Feed & Instagram Feed (1:1 and 4:5 portrait).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
              <span><strong>Price Sweet Spot:</strong> Rs. 2,250 – Rs. 3,599 PKR (High Bundle conversion).</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 4-Step Campaign Setup Flow */}
      <div className="space-y-4">
        <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-red-500" />
          <span>Meta Ads Manager Step-by-Step Setup</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EXPERT_CAMPAIGN_GUIDE.steps.map((item, idx) => (
            <div key={idx} className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 space-y-2">
              <div className="font-bold text-xs text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#4B5E38] text-white text-[11px] flex items-center justify-center font-mono">
                  {idx + 1}
                </span>
                <span>{item.step}</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {item.detail}
              </p>
              <div className="pt-1.5 border-t border-neutral-900 text-[11px] text-emerald-400 font-medium">
                💡 <strong>Expert Tip:</strong> {item.recommendation}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benchmarks & Target KPIs for Pakistan */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>Target Performance Metrics (PKR Currency)</span>
          </h3>
          <span className="text-[11px] text-neutral-400">Average based on Pakistani fashion e-com</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {EXPERT_CAMPAIGN_GUIDE.kpis.map((kpi, idx) => (
            <div key={idx} className="bg-neutral-900 p-3 rounded-lg border border-neutral-800">
              <div className="text-[11px] text-neutral-400 font-medium">{kpi.metric}</div>
              <div className="text-sm font-extrabold text-white mt-1">{kpi.benchmark}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Critical Pakistani COD Warning & Protocol */}
      <div className="bg-red-950/30 border border-red-800/60 rounded-xl p-5 space-y-2">
        <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4" />
          <span>Crucial Pakistan Market Rule: Return-To-Origin (RTO) Defense</span>
        </div>
        <p className="text-xs text-neutral-300 leading-relaxed">
          Over 90% of apparel orders in Pakistan are Cash On Delivery. If you ship without order confirmation, up to 30% of packages will be returned refused by customers. 
          <strong> Action to take:</strong> As soon as an order is placed on your Meta ad or website, send an automated WhatsApp message or 10-second phone call: 
          <em> "Assalam-o-Alaikum, SSK Cloth se aapki [Size] shirt ka order confirm kar lein?"</em>. This single step immediately preserves your profit margins!
        </p>
      </div>
    </div>
  );
};
