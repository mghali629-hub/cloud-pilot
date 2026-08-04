'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function DocumentationPage() {
  const [search, setSearch] = useState('');

  const topics = [
    { title: 'Quickstart Guide', href: '/documentation/quickstart', desc: 'Connect your first Kubernetes cluster and deploy an application in under 5 minutes.', icon: '⚡' },
    { title: 'API Reference', href: '/documentation/api-reference', desc: 'Complete REST and gRPC API specifications for cluster automation and GitOps pipelines.', icon: '📡' },
    { title: 'Security & Compliance', href: '/security', desc: 'Zero-trust network policy enforcement, RBAC integration, and audit logs.', icon: '🛡️' },
    { title: 'Cluster Monitoring', href: '/dashboard/monitoring', desc: 'Real-time CPU, RAM, and pod metrics with automated alert triggers.', icon: '📊' },
  ];

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase bg-sky-400/10 px-4 py-1.5 rounded-full">KUBERNETES & GITOPS DOCS</span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">CloudPilot Documentation</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base">Guides, CLI tools, and architecture references to manage multi-cloud Kubernetes clusters.</p>

          <div className="mt-8 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search documentation (e.g. helm, kubectl, ingress, vault)..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {topics.map((t, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-sky-500/50 transition-colors">
              <div>
                <span className="text-4xl mb-3 block">{t.icon}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{t.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{t.desc}</p>
              </div>
              <Link href={t.href} className="inline-block w-full text-center bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                View Guide →
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
