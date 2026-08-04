'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    { name: 'Developer Pod', price: annual ? '$49' : '$59', billing: 'per month billed annually', nodes: 'Up to 16 Nodes', support: 'Community Slack' },
    { name: 'Enterprise Cluster', price: annual ? '$299' : '$349', billing: 'per month billed annually', nodes: 'Up to 128 Nodes', support: '24/7 Dedicated Ops Engineer' },
    { name: 'Sovereign Grid', price: 'Custom', billing: 'Dedicated Private Cloud Infrastructure', nodes: 'Unlimited Nodes', support: '15-min SLA Response' }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto font-sans">
          <span className="text-xs text-violet-400 font-mono font-bold uppercase tracking-widest block">Transparent Telemetry Pricing</span>
          <h1 className="text-4xl font-extrabold text-white">Scale Your Infrastructure Without Limits</h1>
          
          <div className="flex justify-center items-center gap-3 font-mono text-xs pt-4">
            <span className={!annual ? 'text-white font-bold' : 'text-slate-500'}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-14 h-8 rounded-full p-1 transition-colors ${annual ? 'bg-violet-600' : 'bg-slate-800'}`}
            >
              <div className={`w-6 h-6 rounded-full bg-white transition-transform ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={annual ? 'text-white font-bold' : 'text-slate-500'}>Annual (Save 20%)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div key={p.name} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 flex flex-col justify-between">
              <div className="space-y-4 font-sans">
                <h3 className="text-2xl font-bold text-white">{p.name}</h3>
                <div>
                  <span className="text-4xl font-black text-white font-mono">{p.price}</span>
                  <span className="text-slate-400 text-xs block font-mono mt-1">{p.billing}</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300 font-mono pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-400" /> {p.nodes}</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-400" /> {p.support}</div>
                </div>
              </div>

              <Link href="/contact" className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-widest text-center block font-mono">
                Get Started Now
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
