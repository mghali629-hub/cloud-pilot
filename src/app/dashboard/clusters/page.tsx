'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const clusters = [
  { name: 'us-east-1 prod', provider: 'AWS EKS', region: 'us-east-1', nodes: 24, status: 'Healthy', version: 'v1.30.2' },
  { name: 'eu-west-1 prod', provider: 'GCP GKE', region: 'eu-west-1', nodes: 18, status: 'Healthy', version: 'v1.30.2' },
  { name: 'ap-southeast-1', provider: 'Azure AKS', region: 'ap-southeast-1', nodes: 12, status: 'Healthy', version: 'v1.29.8' },
  { name: 'staging-k8s-us', provider: 'AWS EKS', region: 'us-west-2', nodes: 6, status: 'Upgrading', version: 'v1.30.1' },
];

export default function ClustersPage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">INFRASTRUCTURE</span>
            <h1 className="text-3xl font-extrabold text-white mt-1">Managed Clusters</h1>
          </div>
          <button className="bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors">
            + Provision New Cluster
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clusters.map((c, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono font-bold text-sky-400">{c.provider}</span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{c.name}</h3>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.status === 'Healthy' ? 'bg-green-900/40 text-green-400' : 'bg-amber-900/40 text-amber-400'}`}>{c.status}</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs border-t border-slate-800 pt-4">
                <div><span className="text-slate-400 block">Region</span><strong className="text-white font-mono">{c.region}</strong></div>
                <div><span className="text-slate-400 block">Active Nodes</span><strong className="text-white font-mono">{c.nodes} Nodes</strong></div>
                <div><span className="text-slate-400 block">K8s Version</span><strong className="text-white font-mono">{c.version}</strong></div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
