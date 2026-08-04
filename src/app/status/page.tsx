'use client';
import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

interface SystemStatus { name: string; status: string; latency: string; uptime: string; }

export default function StatusPage() {
  const [services, setServices] = useState<SystemStatus[]>([
    { name:'Control Plane API Gateway', status:'OPERATIONAL', latency:'38ms', uptime:'99.99%' },
    { name:'GitOps Sync Engine (Argo/Flux)', status:'OPERATIONAL', latency:'12ms', uptime:'100%' },
    { name:'Cluster Agent Relays', status:'OPERATIONAL', latency:'55ms', uptime:'99.98%' },
    { name:'Metrics & Prometheus Bridge', status:'DEGRADED', latency:'240ms', uptime:'99.4%' },
    { name:'WebSocket Realtime Dashboard', status:'OPERATIONAL', latency:'22ms', uptime:'99.97%' },
  ]);
  useEffect(() => { fetch('/api/status').then(r=>r.json()).then(d=>Array.isArray(d)&&d.length&&setServices(d)).catch(()=>{}); },[]);

  const colorMap: Record<string,string> = { OPERATIONAL:'text-emerald-400 bg-emerald-950', DEGRADED:'text-amber-400 bg-amber-950', INCIDENT:'text-red-400 bg-red-950' };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-8">
        <div>
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase bg-sky-400/10 px-4 py-1.5 rounded-full border border-sky-500/30">
            LIVE SYSTEM HEALTH
          </span>
          <h1 className="text-4xl font-extrabold text-white mt-4 mb-2">System Status Dashboard</h1>
          <p className="text-slate-400 text-sm">Real-time health indicators and latency metrics for all CloudPilot platform services.</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between md:items-center p-4 bg-slate-950 rounded-2xl border border-slate-800 gap-2">
              <div>
                <h3 className="font-bold text-white text-sm font-mono">{s.name}</h3>
                <p className="text-xs text-slate-500">Latency: {s.latency} · 30-Day Uptime: {s.uptime}</p>
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${colorMap[s.status]??'text-slate-400 bg-slate-800'}`}>{s.status}</span>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-2">
          <h3 className="font-bold text-white text-base">Subscribe to Incident Alerts</h3>
          <p className="text-slate-400 text-xs">Receive SMS and PagerDuty notifications during scheduled maintenance windows.</p>
          <Link href="/contact" className="inline-block text-sky-400 font-bold text-xs hover:underline uppercase tracking-wider">
            Subscribe to Status Feed →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
