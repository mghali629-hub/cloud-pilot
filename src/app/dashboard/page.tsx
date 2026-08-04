'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { Cpu, Activity, Server, ShieldCheck } from 'lucide-react';

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

export default function DashboardPage() {
  const [clusters, setClusters] = useState<Cluster[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/clusters')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setClusters(data.clusters);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-white">Live Cluster Telemetry Dashboard</h1>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
            ● {clusters.length} Active EKS/GKE Clusters
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clusters.map((cluster) => (
            <div key={cluster.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 font-mono">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-white font-sans">{cluster.name}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">{cluster.status}</span>
              </div>
              <div className="text-xs text-slate-400 font-sans">Provider: {cluster.provider} ({cluster.region})</div>
              <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800">
                <div>
                  <span className="text-slate-500 block">Nodes</span>
                  <span className="font-bold text-white">{cluster.nodes} Active</span>
                </div>
                <div>
                  <span className="text-slate-500 block">CPU Usage</span>
                  <span className="font-bold text-violet-400">{cluster.cpuUsage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
