'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const metrics = [
  { service: 'Kubernetes Control Plane', status: 'Operational', uptime: '99.99%', latency: '4ms', icon: '☸️' },
  { service: 'GitOps Deployment Engine', status: 'Operational', uptime: '99.98%', latency: '12ms', icon: '🔄' },
  { service: 'Container Registry', status: 'Operational', uptime: '100%', latency: '8ms', icon: '📦' },
  { service: 'Monitoring & Alerting', status: 'Operational', uptime: '99.97%', latency: '6ms', icon: '📊' },
  { service: 'Secrets Management (Vault)', status: 'Operational', uptime: '99.99%', latency: '3ms', icon: '🔐' },
  { service: 'Load Balancer (Envoy)', status: 'Degraded', uptime: '99.91%', latency: '24ms', icon: '⚖️' },
];

const clusterData = [
  { name: 'us-east-1 prod', cpu: 68, mem: 72, nodes: 24, pods: 312 },
  { name: 'eu-west-1 prod', cpu: 45, mem: 58, nodes: 18, pods: 241 },
  { name: 'ap-southeast-1', cpu: 31, mem: 40, nodes: 12, pods: 167 },
];

export default function MonitoringPage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1">
        <div className="mb-10">
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">LIVE DASHBOARD</span>
          <h1 className="text-4xl font-extrabold text-white mt-2 mb-2">Infrastructure Monitoring</h1>
          <p className="text-slate-400">Real-time visibility into all clusters, services, and deployments.</p>
        </div>

        {/* Service Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {metrics.map((m, i) => (
            <div key={i} className={`bg-slate-900/60 border rounded-2xl p-5 ${m.status === 'Degraded' ? 'border-amber-500/50' : 'border-slate-800'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{m.icon}</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${m.status === 'Operational' ? 'bg-green-900/50 text-green-400' : 'bg-amber-900/50 text-amber-400'}`}>{m.status}</span>
              </div>
              <h3 className="font-bold text-white text-sm mb-2">{m.service}</h3>
              <div className="flex gap-4 text-xs text-slate-400">
                <span>Uptime: <strong className="text-green-400">{m.uptime}</strong></span>
                <span>P50: <strong className="text-sky-400">{m.latency}</strong></span>
              </div>
            </div>
          ))}
        </div>

        {/* Cluster Health */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">Cluster Resource Utilization</h2>
          <div className="space-y-6">
            {clusterData.map((c, i) => (
              <div key={i} className="bg-slate-950 rounded-2xl p-5 border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-mono font-bold text-sky-400">{c.name}</span>
                    <span className="text-slate-500 text-xs ml-3">{c.nodes} nodes · {c.pods} pods</span>
                  </div>
                  <span className="text-xs text-green-400 font-bold">● HEALTHY</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span className="text-slate-400">CPU Usage</span><span className="text-white font-mono">{c.cpu}%</span></div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className={`h-full rounded-full ${c.cpu > 80 ? 'bg-red-500' : c.cpu > 60 ? 'bg-amber-500' : 'bg-sky-500'}`} style={{ width: `${c.cpu}%` }} /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span className="text-slate-400">Memory Usage</span><span className="text-white font-mono">{c.mem}%</span></div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className={`h-full rounded-full ${c.mem > 80 ? 'bg-red-500' : c.mem > 60 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${c.mem}%` }} /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alert Feed */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">Recent Alerts</h2>
          <div className="space-y-3">
            {[
              { time: '2m ago', level: 'WARN', msg: 'eu-west-1: Load balancer response time spike to 24ms (threshold: 20ms)' },
              { time: '18m ago', level: 'INFO', msg: 'us-east-1: Auto-scaled from 22 to 24 nodes (CPU threshold reached)' },
              { time: '1h ago', level: 'INFO', msg: 'ap-southeast-1: Rolling deployment completed — 167/167 pods healthy' },
              { time: '3h ago', level: 'RESOLVED', msg: 'Container registry rate limiting resolved — root cause: misconfigured egress rule' },
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className={`text-xs font-bold px-2 py-0.5 rounded mt-0.5 ${a.level === 'WARN' ? 'bg-amber-900/50 text-amber-400' : a.level === 'INFO' ? 'bg-sky-900/50 text-sky-400' : 'bg-green-900/50 text-green-400'}`}>{a.level}</span>
                <span className="text-slate-300 text-sm flex-1">{a.msg}</span>
                <span className="text-slate-600 text-xs whitespace-nowrap">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
