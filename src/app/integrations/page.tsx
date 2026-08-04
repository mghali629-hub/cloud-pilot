'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { Server, CheckCircle2, ShieldCheck } from 'lucide-react';

interface Integration {
  id: number;
  name: string;
  provider: string;
  status: string;
}

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState<Integration[]>([]);

  useEffect(() => {
    fetch('/api/integrations')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setIntegrations(data.integrations);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-8 font-mono">
        <div className="text-center font-sans space-y-2">
          <span className="text-xs text-violet-400 font-mono font-bold uppercase tracking-widest block">Enterprise Ecosystem</span>
          <h1 className="text-3xl font-extrabold text-white">Native Cloud Integrations</h1>
          <p className="text-slate-400 text-sm">Datadog, PagerDuty, HashiCorp Vault, and Prometheus telemetry hooks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrations.map((item) => (
            <div key={item.id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 font-sans">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-bold text-white">{item.name}</h3>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">{item.status}</span>
              </div>
              <p className="text-slate-400 text-xs font-mono">Provider: {item.provider}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
