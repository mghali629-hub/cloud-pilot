'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

export default function ApiReferencePage() {
  const [lang, setLang] = useState<'curl' | 'cli'>('cli');

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div>
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">API DOCUMENTATION</span>
          <h1 className="text-4xl font-extrabold text-white mt-1">REST & CLI API Reference</h1>
          <p className="text-slate-400 text-sm mt-2">Automate cluster provisioning, rollout deployments, and fetch metrics programmatically.</p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold px-3 py-1 rounded-lg">GET</span>
            <code className="text-sky-300 font-mono text-sm">https://api.cloudpilot.io/v1/clusters</code>
          </div>

          <h3 className="font-bold text-white text-lg">Query Parameters</h3>
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-slate-800 text-sky-400 font-mono">
                <th className="py-2 px-3">PARAM</th>
                <th className="py-2 px-3">TYPE</th>
                <th className="py-2 px-3">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr><td className="py-2.5 px-3 font-mono text-sky-300">region</td><td className="py-2.5 px-3 font-mono">string</td><td className="py-2.5 px-3">Filter by cloud provider region (e.g. <code>us-east-1</code>)</td></tr>
              <tr><td className="py-2.5 px-3 font-mono text-sky-300">status</td><td className="py-2.5 px-3 font-mono">string</td><td className="py-2.5 px-3">Filter status (<code>healthy</code>, <code>degraded</code>, <code>provisioning</code>)</td></tr>
            </tbody>
          </table>

          <div className="flex justify-between items-center bg-slate-950 px-4 py-2 rounded-t-xl border-t border-x border-slate-800">
            <span className="text-xs font-mono text-sky-400">Request Example</span>
            <div className="flex gap-2">
              <button onClick={() => setLang('cli')} className={`px-3 py-1 rounded text-xs font-mono ${lang === 'cli' ? 'bg-sky-600 text-white' : 'text-slate-400'}`}>CloudPilot CLI</button>
              <button onClick={() => setLang('curl')} className={`px-3 py-1 rounded text-xs font-mono ${lang === 'curl' ? 'bg-sky-600 text-white' : 'text-slate-400'}`}>cURL</button>
            </div>
          </div>
          <pre className="bg-slate-950 border border-slate-800 rounded-b-xl p-4 text-xs font-mono text-slate-300 overflow-x-auto">
            <code>{lang === 'cli' ? `cloudpilot cluster list --region us-east-1 --output json` : `curl https://api.cloudpilot.io/v1/clusters \\\n  -H "Authorization: Bearer cp_live_84920184"`}</code>
          </pre>
        </div>
      </main>
      <Footer />
    </div>
  );
}
