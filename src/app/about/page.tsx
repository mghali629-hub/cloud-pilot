'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const metrics = [{ label:'AWS EKS / GCP GKE', val:'Multi-Cloud' },{ label:'Control Plane Uptime', val:'99.99%' },{ label:'Avg Deploy Time', val:'< 4 mins' }];

export default function CloudPilotAboutPage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase bg-sky-400/10 px-4 py-1.5 rounded-full border border-sky-500/30">
            OUR VISION & MISSION
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">Simplifying Multi-Cloud Kubernetes at Any Scale</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Founded in 2022, CloudPilot gives DevOps and platform engineering teams single-pane-of-glass control over thousands of production Kubernetes clusters across every major cloud provider.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((m,i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-sky-500/40 transition-colors">
              <div className="text-2xl font-black text-sky-400">{m.val}</div>
              <div className="text-xs text-slate-400 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title:'GitOps-Native', desc:'ArgoCD and Flux integration baked in. Declarative cluster state management with full drift detection and automated rollback.' },
            { title:'Zero-Trust Security', desc:'SPIFFE/SPIRE identity, Falco runtime threat detection, and automated compliance reporting for SOC 2 and ISO 27001.' },
            { title:'Intelligent Autoscaling', desc:'KEDA event-driven autoscaling and Karpenter node provisioning slash idle compute costs by up to 60%.' },
          ].map((m,i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-3 hover:border-sky-500/40 transition-colors">
              <h3 className="text-xl font-bold text-white">{m.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-3">
          <h2 className="text-2xl font-bold text-white">Start Managing Clusters Today</h2>
          <p className="text-slate-400 text-xs max-w-md mx-auto">Connect up to 3 clusters free forever with full GitOps features.</p>
          <Link href="/dashboard" className="inline-block bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-8 py-3 rounded-xl transition-colors uppercase tracking-wider">
            Launch CloudPilot Console
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
