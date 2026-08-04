'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const cases = [
  { company:'Neobank Global', metric:'60% Cloud Cost Reduction', desc:'Migrated 400 microservices to CloudPilot-managed EKS autoscaling, saving $1.2M in idle compute. Node utilization rose from 38% to 91%.', tags:['AWS EKS','Karpenter','FinOps'] },
  { company:'ShopMax (eCommerce)', metric:'100% Black Friday Uptime', desc:'Absorbed 4.2M concurrent checkout requests across 4 AWS regions with zero pod crashes, zero manual intervention, and zero customer-impacting latency spikes.', tags:['Multi-Region','KEDA','HPA'] },
  { company:'AeroPilot Analytics', metric:'4.8× Pipeline Throughput', desc:'Replaced 14 bespoke Jenkins pipelines with CloudPilot GitOps workflows, reducing deployment lead time from 3 hours to 11 minutes.', tags:['GitOps','ArgoCD','CI/CD'] },
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase bg-sky-400/10 px-4 py-1.5 rounded-full border border-sky-500/30">
            CUSTOMER PROFILES
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">Enterprise Case Studies</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">How engineering teams at scale use CloudPilot to ship faster, spend less, and sleep better.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c,i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-sky-500/40 transition-colors">
              <div className="space-y-3">
                <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full">{c.metric}</span>
                <h3 className="text-xl font-bold text-white font-mono mt-2">{c.company}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{c.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2">{c.tags.map((t,j)=><span key={j} className="text-xs bg-sky-950 text-sky-400 px-2 py-0.5 rounded font-mono">{t}</span>)}</div>
              </div>
              <div className="pt-6">
                <Link href={`/customers/${c.company.toLowerCase().replace(/\s/g,'-')}`} className="text-xs text-sky-400 font-bold hover:underline uppercase tracking-wider block">
                  Read Case Study →
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
