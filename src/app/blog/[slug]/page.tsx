'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function CloudBlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-8">
        <div>
          <Link href="/blog" className="text-xs text-sky-400 font-bold hover:underline mb-4 block">← Back to Engineering Blog</Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950 px-3 py-1 rounded-full uppercase">DEVOPS GUIDE</span>
            <span className="text-xs text-slate-500">11 Min Read · Production Benchmark</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white mt-3 mb-2">Achieving Zero-Downtime Kubernetes 1.30 Control Plane Upgrades</h1>
          <p className="text-slate-400 text-sm">Published: July 24, 2026 · By Alex Thorne</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 text-slate-300 text-sm leading-relaxed">
          <p>
            Upgrading production Kubernetes control planes without disrupting in-flight HTTP connections requires careful coordination. Each control plane component must be upgraded in sequence: first <code className="text-sky-400">etcd</code>, then <code className="text-sky-400">kube-apiserver</code>, then controllers.
          </p>

          <h2 className="text-xl font-bold text-white">Step 1: Drain Ingress Worker Nodes Safely</h2>
          <pre className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono text-sky-300 overflow-x-auto">kubectl drain node-us-east-1a --ignore-daemonsets --delete-emptydir-data --grace-period=300</pre>
          <p>
            The 300-second grace period allows active Envoy sidecars and NGINX ingress connections to drain naturally before the node undergoes any OS-level changes.
          </p>

          <h2 className="text-xl font-bold text-white">Step 2: Upgrade etcd with Leader Election Verification</h2>
          <pre className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono text-sky-300 overflow-x-auto">etcdctl endpoint health --endpoints=https://etcd-0:2379,https://etcd-1:2379 --cacert=/etc/ssl/etcd/ca.crt</pre>
          
          <div className="bg-sky-950/50 border border-sky-800/50 rounded-2xl p-5 text-xs text-sky-300 space-y-2">
            <strong className="block font-bold text-white">💡 Pro Tip:</strong>
            <p>Always verify etcd leader election quorum before proceeding. A split-brain scenario during kube-apiserver upgrade will cause full cluster write outage.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
