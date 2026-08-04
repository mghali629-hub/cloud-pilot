'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const releases = [
  { version: 'v4.2.0', date: 'August 2, 2026', title: 'Automated Canary Rollouts & SPIFFE/SPIRE Mutual TLS', features: ['Added automatic rollback triggers based on P99 latency anomaly detection', 'Native SPIFFE/SPIRE identity token rotation for all pod-to-pod communication', 'Support for Kubernetes 1.30.2 control planes'] },
  { version: 'v4.1.0', date: 'July 14, 2026', title: 'Multi-Region Load Balancer Auto-Failover', features: ['Envoy-powered cross-region traffic shifting in under 5 seconds', 'Zero-downtime cluster migrations for EKS and GKE'] },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase bg-sky-400/10 px-4 py-1.5 rounded-full">PRODUCT UPDATES</span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">Changelog & Releases</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base">New features, performance enhancements, and security patches released weekly.</p>
        </div>

        <div className="space-y-8">
          {releases.map((rel, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-sky-400 bg-sky-950 px-3 py-1 rounded-full">{rel.version}</span>
                <span className="text-xs text-slate-500">{rel.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-white">{rel.title}</h2>
              <ul className="space-y-2">
                {rel.features.map((f, j) => (
                  <li key={j} className="text-slate-300 text-sm flex items-center gap-2">
                    <span className="text-sky-400">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
