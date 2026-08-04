'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company, details }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white mb-2">Enterprise Support & Demo</h1>
          <p className="text-slate-400 text-sm">Schedule a 30-minute infrastructure benchmark session.</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Work Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="cto@company.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Company Name</label>
              <input type="text" required value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme Systems Inc" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Infrastructure Details</label>
              <textarea rows={4} value={details} onChange={(e) => setDetails(e.target.value)} placeholder="AWS EKS, GCP GKE, or hybrid setups..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider">
              Request Platform Demo via API
            </button>
          </form>
        ) : (
          <div className="p-8 rounded-3xl bg-slate-900 border border-violet-500 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-2xl font-bold text-white">Demo Request Received</h3>
            <p className="text-slate-400 text-sm">We will contact {email} within 24 hours.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
