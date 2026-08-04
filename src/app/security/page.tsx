'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const securityFeatures = [
  { icon: '🔐', title: 'Zero-Trust Architecture', desc: 'Every request is authenticated and authorized regardless of network origin. No implicit trust — identity verified at every layer using mTLS and SPIFFE/SPIRE.' },
  { icon: '🛡️', title: 'Role-Based Access Control (RBAC)', desc: 'Granular permissions per user, team, and service. Kubernetes RBAC integrated with OIDC identity providers (Okta, Azure AD, Google Workspace).' },
  { icon: '🔒', title: 'End-to-End Encryption', desc: 'All data encrypted at rest (AES-256) and in transit (TLS 1.3). Keys managed via HashiCorp Vault with automatic rotation every 90 days.' },
  { icon: '📋', title: 'SOC 2 Type II Certified', desc: 'Annual third-party audits by Deloitte. Full compliance reports available on request for enterprise customers.' },
  { icon: '🔍', title: 'Runtime Threat Detection', desc: 'Falco-powered behavioral monitoring detects anomalous container activity in real-time. Automated incident response playbooks execute within seconds.' },
  { icon: '🌐', title: 'Network Policy Enforcement', desc: 'Calico CNI enforces microsegmentation between namespaces. Egress filtering via OPA (Open Policy Agent) prevents data exfiltration.' },
];

const compliance = [
  { name: 'SOC 2 Type II', icon: '✅', since: '2022' },
  { name: 'ISO 27001', icon: '✅', since: '2023' },
  { name: 'GDPR Compliant', icon: '✅', since: '2021' },
  { name: 'HIPAA Ready', icon: '✅', since: '2023' },
  { name: 'PCI DSS Level 1', icon: '✅', since: '2024' },
  { name: 'FedRAMP Moderate', icon: '⏳', since: 'In Progress' },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase bg-sky-400/10 px-4 py-2 rounded-full">Security & Compliance</span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-4">Security Built Into Every Layer</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">CloudPilot is architected around zero-trust principles — every microservice, every API call, and every data packet is verified, encrypted, and logged.</p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((f, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/50 transition-colors">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Compliance Certifications */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Compliance Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {compliance.map((c, i) => (
              <div key={i} className="text-center bg-slate-950 rounded-xl p-4 border border-slate-800">
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className="text-xs font-bold text-white">{c.name}</div>
                <div className="text-xs text-slate-500 mt-1">{c.since}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vulnerability Disclosure */}
        <div className="bg-gradient-to-r from-sky-900/30 to-blue-900/30 border border-sky-800/40 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Responsible Disclosure Program</h2>
          <p className="text-slate-400 mb-6">Found a vulnerability? We appreciate responsible disclosure. Our security team responds within 24 hours and offers a bug bounty program up to $50,000.</p>
          <a href="mailto:security@cloudpilot.io" className="inline-block bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-3 rounded-xl transition-colors">Report a Vulnerability</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
