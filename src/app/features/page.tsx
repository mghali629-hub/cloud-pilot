'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { Cpu, ShieldCheck, BarChart3, Terminal } from 'lucide-react';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('scaling');

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold text-white mb-3">Autonomous Cloud Architecture</h1>
          <p className="text-slate-400 text-sm">Select a module below to inspect real-time neural scaling specs and configuration code.</p>
        </div>

        <div className="flex justify-center gap-3 bg-slate-900/80 p-2 rounded-2xl border border-slate-800">
          <button onClick={() => setActiveTab('scaling')} className={`py-3 px-6 rounded-xl text-xs font-bold ${activeTab === 'scaling' ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white' : 'text-slate-400'}`}>
            AI Auto-Scaling
          </button>
          <button onClick={() => setActiveTab('security')} className={`py-3 px-6 rounded-xl text-xs font-bold ${activeTab === 'security' ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white' : 'text-slate-400'}`}>
            Zero-Trust Security
          </button>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Predictive Load Management in &lt; 5ms</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              CloudPilot continuously analyzes memory and CPU spikes to autonomously scale Kubernetes clusters before latency hits users.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#070A12] border border-slate-800 font-mono text-xs text-violet-300">
            <pre><code>{`apiVersion: cloudpilot.io/v1
kind: AutoScalePolicy
metadata:
  name: production-cluster
spec:
  aiModel: neural-v4
  maxReplicas: 250`}</code></pre>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
