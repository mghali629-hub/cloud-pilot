'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const posts = [
  { slug:'zero-downtime-k8s-upgrades', title:'Achieving Zero-Downtime Kubernetes 1.30 Control Plane Upgrades', date:'July 24, 2026', author:'Alex Thorne', category:'DEVOPS', excerpt:'How to drain ingress nodes gracefully, preserve in-flight HTTP sessions, and coordinate etcd leader elections.' },
  { slug:'ebpf-network-security-2026', title:'Why eBPF is Replacing iptables for Kubernetes Network Security', date:'June 15, 2026', author:'Elena Rostova', category:'SECURITY', excerpt:'A deep dive into Cilium eBPF policies, Hubble observability, and performance benchmarks vs legacy kube-proxy.' },
  { slug:'karpenter-spot-cost-savings', title:'Cutting AWS EC2 Spend by 58% with Karpenter Spot Interruption Handlers', date:'May 30, 2026', author:'James Osei', category:'COST OPTIMIZATION', excerpt:'How a real production team saved $380K annually by combining Karpenter with intelligent workload placement.' },
];

export default function CloudPilotBlogPage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center">
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase bg-sky-400/10 px-4 py-1.5 rounded-full border border-sky-500/30">
            ENGINEERING JOURNAL
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">CloudPilot Technical Blog</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Deep dives into Kubernetes internals, GitOps patterns, eBPF networking, and multi-cloud cost engineering.
          </p>
        </div>
        <div className="space-y-6">
          {posts.map(p => (
            <div key={p.slug} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-3 hover:border-sky-500/40 transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950 px-3 py-1 rounded-full">{p.category}</span>
                <span className="text-xs text-slate-500">{p.date} · By {p.author}</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-mono">{p.title}</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{p.excerpt}</p>
              <div className="pt-2">
                <Link href={`/blog/${p.slug}`} className="inline-block text-sky-400 font-bold text-xs uppercase tracking-wider hover:underline">
                  Read Technical Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
