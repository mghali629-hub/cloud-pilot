'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function QuickstartPage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div>
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase bg-sky-400/10 px-4 py-1.5 rounded-full border border-sky-500/30">
            GET STARTED IN 5 MINS
          </span>
          <h1 className="text-4xl font-extrabold text-white mt-4 mb-2">Quickstart Guide</h1>
          <p className="text-slate-400 text-sm">Connect your first Kubernetes cluster to CloudPilot in under 5 minutes using our CLI agent.</p>
        </div>

        {[
          { step:'01', title:'Install the CloudPilot CLI Agent', code:'curl -fsSL https://install.cloudpilot.io | bash' },
          { step:'02', title:'Authenticate with Account Key', code:'cloudpilot auth login --api-key $CLOUDPILOT_API_KEY' },
          { step:'03', title:'Connect Your Production Cluster', code:'cloudpilot cluster connect --context $(kubectl config current-context) --name production-us' },
        ].map((s, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-black text-sky-400/30 font-mono">{s.step}</span>
              <h2 className="text-xl font-bold text-white">{s.title}</h2>
            </div>
            <pre className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs font-mono text-sky-300 overflow-x-auto">{s.code}</pre>
          </div>
        ))}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-2">
          <h3 className="font-bold text-white text-base">Need Helm Chart Installation Instead?</h3>
          <p className="text-slate-400 text-xs">Read our enterprise Helm and Terraform deployment guides.</p>
          <Link href="/documentation" className="inline-block text-sky-400 font-bold text-xs hover:underline uppercase tracking-wider">
            View Helm Installation Docs →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
