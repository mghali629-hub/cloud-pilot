'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#0A0F1D] text-slate-100 flex flex-col items-center justify-center text-center px-4 font-mono">
      <div className="text-4xl text-rose-500 font-bold mb-3">CRASH_LOOP_BACKOFF</div>
      <h2 className="text-xl font-bold text-white mb-2">Control Plane Exception</h2>
      <p className="text-slate-400 text-xs max-w-md mb-6 font-sans">
        A runtime error occurred in the CloudPilot dashboard API proxy layer.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-sans rounded-xl transition-colors"
      >
        Re-sync Control Plane
      </button>
    </div>
  );
}
