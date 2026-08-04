'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { Cpu, ShieldCheck, Activity, Terminal, Send, CheckCircle2, ArrowRight, Server } from 'lucide-react';

interface Cluster {
  id: number;
  name: string;
  provider: string;
  region: string;
  status: string;
  nodes: number;
  cpuUsage: number;
  memUsage: number;
}

export default function CloudPilotHomePage() {
  const [clusters, setClusters] = useState<Cluster[]>([]);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('/api/clusters')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setClusters(data.clusters);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleDemo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans selection:bg-violet-600 selection:text-white flex flex-col justify-between">
      <Header />

      <main className="flex-1 space-y-20 font-sans">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1800&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-black/40" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-violet-500/40 text-violet-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Cpu className="w-4 h-4 text-violet-400" /> Autonomous Kubernetes & Telemetry Engine
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-none">
              Autonomous Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500">Ops Platform</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Predictive autoscaling, multi-cloud Kubernetes telemetry, zero-trust RBAC mesh, and 99.999% SLA reliability.
            </p>

            <div className="pt-6 font-mono flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#demo"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-violet-600/30 hover:brightness-110 transition-all text-center"
              >
                Request Enterprise Demo
              </a>
              <Link
                href="/dashboard"
                className="px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all text-center"
              >
                Inspect Telemetry Console
              </Link>
            </div>
          </div>
        </section>

        {/* Live Cluster Monitoring */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-mono">
          <div className="text-center font-sans">
            <span className="text-xs text-violet-400 font-mono font-bold uppercase tracking-widest block mb-1">Live Multi-Region Mesh</span>
            <h2 className="text-3xl font-extrabold text-white">DB Telemetry Clusters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clusters.map((c) => (
              <div key={c.id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-white font-sans">{c.name}</h3>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">{c.status}</span>
                </div>
                <div className="text-xs text-slate-400 font-sans">{c.provider} • {c.region}</div>
                <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800">
                  <div>
                    <span className="text-slate-500 block">Nodes</span>
                    <span className="font-bold text-white">{c.nodes} Nodes</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">CPU Usage</span>
                    <span className="font-bold text-violet-400">{c.cpuUsage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Demo Request Form */}
        <section id="demo" className="max-w-3xl mx-auto px-4 font-mono">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-violet-500/30 space-y-6 shadow-2xl">
            <div className="text-center space-y-2 font-sans">
              <span className="text-xs text-violet-400 font-mono font-bold uppercase tracking-widest block">Instant Onboarding</span>
              <h2 className="text-3xl font-extrabold text-white">Request Enterprise Platform Access</h2>
            </div>

            {!submitted ? (
              <form onSubmit={handleDemo} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Corporate Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="cto@enterprise.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-violet-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Company / Organization</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Cloud Systems"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-violet-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-violet-600/30 font-sans"
                >
                  Save Demo Request in Database via API
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-slate-950 border border-violet-500 text-center space-y-3 font-sans">
                <CheckCircle2 className="w-12 h-12 text-violet-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Request Saved in Database</h3>
                <p className="text-slate-300 text-xs">Thank you! Platform credentials sent to {email}.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
