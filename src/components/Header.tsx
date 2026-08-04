'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cloud } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Overview' },
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/clusters', label: 'Clusters' },
    { href: '/dashboard/monitoring', label: 'Monitoring' },
    { href: '/dashboard/deployments', label: 'Deployments' },
    { href: '/integrations', label: 'Integrations' },
    { href: '/security', label: 'Security' },
    { href: '/documentation', label: 'Docs' },
    { href: '/customers', label: 'Customers' },
    { href: '/status', label: 'System Status' },
    { href: '/changelog', label: 'Changelog' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Enterprise Demo' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0B0F19]/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/20">
            <Cloud className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white block">CloudPilot</span>
            <span className="text-[9px] tracking-[0.2em] text-violet-400 font-bold uppercase block -mt-1">Cloud Telemetry OS</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 text-xs font-medium overflow-x-auto py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors whitespace-nowrap py-1 ${pathname === link.href ? 'text-violet-400 border-b-2 border-violet-400 font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/pricing"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-[11px] tracking-wider uppercase shadow-lg transition-all shrink-0"
        >
          Start Trial
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#070A12] border-t border-slate-800 py-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-base font-sans">
            <Cloud className="w-5 h-5 text-violet-400" /> CLOUDPILOT
          </div>
          <p className="text-slate-400 text-xs leading-relaxed font-sans">
            Next-Gen Autonomous Cloud Telemetry Engine & Kubernetes Auto-Scaler.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider font-sans">Platform</h4>
          <ul className="space-y-2">
            <li><Link href="/dashboard/clusters" className="hover:text-violet-400">Cluster Manager</Link></li>
            <li><Link href="/dashboard/monitoring" className="hover:text-violet-400">Distributed Tracing</Link></li>
            <li><Link href="/integrations" className="hover:text-violet-400">AWS / GCP / Azure Connectors</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider font-sans">Developers</h4>
          <ul className="space-y-2">
            <li><Link href="/documentation" className="hover:text-violet-400">Documentation Portal</Link></li>
            <li><Link href="/documentation/quickstart" className="hover:text-violet-400">Quickstart Guide</Link></li>
            <li><Link href="/documentation/api-reference" className="hover:text-violet-400">API Reference Specs</Link></li>
            <li><Link href="/status" className="hover:text-violet-400">Cluster Uptime Status</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider font-sans">Enterprise Support</h4>
          <p className="text-slate-400 font-sans">30-Min Infrastructure Audit:</p>
          <p className="text-violet-400 font-bold mt-1 text-sm font-sans">support@cloudpilot.io</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-900 text-center text-slate-500 text-[11px] font-sans">
        © 2026 CloudPilot Inc. Autonomous Cloud Telemetry Engine.
      </div>
    </footer>
  );
}
