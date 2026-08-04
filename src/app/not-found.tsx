'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0F1D] text-slate-100 flex flex-col items-center justify-center text-center px-4 font-mono">
      <div className="text-6xl font-black text-cyan-400 mb-4 tracking-wider">[404]</div>
      <h1 className="text-2xl font-bold text-white mb-2">Kubernetes Resource Not Found</h1>
      <p className="text-slate-400 text-xs max-w-md mb-8">
        The requested deployment, cluster node, or namespace pod manifest does not exist in the control plane.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs font-sans transition-colors"
        >
          Control Plane Home
        </Link>
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold rounded-xl text-xs font-sans border border-slate-700 transition-colors"
        >
          View Clusters
        </Link>
      </div>
    </div>
  );
}
