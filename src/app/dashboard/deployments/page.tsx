'use client';
import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/Header';

interface Deploy { id: number; name: string; status: string; cluster: string; version: string; time: string; }

export default function DeploymentsPage() {
  const [deploys, setDeploys] = useState<Deploy[]>([
    { id:1, name:'payment-service', status:'RUNNING', cluster:'us-east-1-prod', version:'v3.12.1', time:'2 mins ago' },
    { id:2, name:'auth-gateway', status:'ROLLING UPDATE', cluster:'eu-west-1-prod', version:'v2.4.0→v2.5.0', time:'8 mins ago' },
    { id:3, name:'inventory-api', status:'RUNNING', cluster:'ap-southeast-1-prod', version:'v1.9.4', time:'23 mins ago' },
  ]);
  useEffect(() => { fetch('/api/deployments').then(r=>r.json()).then(d=>Array.isArray(d)&&d.length&&setDeploys(d)).catch(()=>{}); },[]);

  const statusColor: Record<string,string> = { 'RUNNING':'text-emerald-400 bg-emerald-950', 'ROLLING UPDATE':'text-amber-400 bg-amber-950', 'FAILED':'text-red-400 bg-red-950' };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">LIVE DEPLOYMENTS</span>
            <h1 className="text-3xl font-extrabold text-white mt-1">Deployment Manager</h1>
          </div>
          <button className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors">+ New Deployment</button>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          {deploys.map(d => (
            <div key={d.id} className="flex flex-col md:flex-row justify-between md:items-center p-4 bg-slate-950 rounded-2xl border border-slate-800 gap-3">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="font-bold text-white font-mono text-sm">{d.name}</h3>
                  <p className="text-xs text-slate-400">{d.cluster} · {d.version}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor[d.status] ?? 'text-slate-400 bg-slate-800'}`}>{d.status}</span>
                <span className="text-xs text-slate-500">{d.time}</span>
                <button className="border border-slate-700 text-slate-400 hover:border-sky-500/50 text-xs px-3 py-1.5 rounded-lg transition-colors">View Logs</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
