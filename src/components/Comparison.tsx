"use client";

import { CheckCircle2, XCircle, ShieldAlert, Cpu, Award } from "lucide-react";

export default function Comparison() {
  const comparisonData = [
    {
      feature: "Privacy & Data Security",
      local: { status: true, text: "100% Secure (Local user-space storage)" },
      cloud: { status: false, text: "Exposed (Subject to terms & server leaks)" }
    },
    {
      feature: "Offline Capabilities",
      local: { status: true, text: "Fully Functional (Air-gapped operation)" },
      cloud: { status: false, text: "Disabled (Requires persistent internet)" }
    },
    {
      feature: "Operational Cost",
      local: { status: true, text: "Zero Cost (Runs on local GPU/CPU)" },
      cloud: { status: false, text: "Subscription / Usage API Billings" }
    },
    {
      feature: "Inference Control",
      local: { status: true, text: "Full Ownership (Custom parameters & weights)" },
      cloud: { status: false, text: "Restricted (Model behavior updates arbitrary)" }
    },
    {
      feature: "Hardware Utilization",
      local: { status: true, text: "Direct (Optimized via Vulkan/Metal runtimes)" },
      cloud: { status: false, text: "Indirect (Requires high bandwidth)" }
    }
  ];

  return (
    <section className="py-24 bg-zinc-50/60 relative border-t border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-accent-purple tracking-widest uppercase mb-4 font-bold">
            ⚖️ Feature Parity
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-5">
            Why Local-First AI is the future.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Comparison Matrix Table */}
        <div className="max-w-4xl mx-auto border border-zinc-200 bg-white/70 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-350 backdrop-blur-xl">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse text-xs font-sans">
              
              {/* Table Header */}
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-150">
                  <th className="p-5 font-mono text-zinc-500 uppercase tracking-wider text-[10px] w-1/3">Feature Set</th>
                  <th className="p-5 font-mono text-accent-purple uppercase tracking-wider text-[10px] bg-accent-purple/5 border-x border-zinc-150 w-1/3">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Cpu className="w-3.5 h-3.5" />
                      LocalMind OS
                    </span>
                  </th>
                  <th className="p-5 font-mono text-zinc-500 uppercase tracking-wider text-[10px] w-1/3">Cloud-Based AI</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-zinc-150">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                    
                    {/* Feature Label */}
                    <td className="p-5 text-zinc-800 font-bold leading-relaxed">
                      {row.feature}
                    </td>

                    {/* LocalMind OS Status */}
                    <td className="p-5 bg-accent-purple/2 border-x border-zinc-150">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-zinc-700 font-semibold leading-relaxed">
                          {row.local.text}
                        </span>
                      </div>
                    </td>

                    {/* Cloud AI Status */}
                    <td className="p-5">
                      <div className="flex items-start gap-2.5 opacity-65">
                        <XCircle className="w-4.5 h-4.5 text-rose-500 shrink-0 mt-0.5" />
                        <span className="text-zinc-500 font-medium leading-relaxed">
                          {row.cloud.text}
                        </span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Table Footer Banner */}
          <div className="p-5 bg-zinc-50 border-t border-zinc-150 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px]">
            <span className="text-zinc-500 flex items-center gap-1.5 font-semibold">
              <ShieldAlert className="w-4 h-4 text-accent-purple" />
              Guaranteed data sovereignty. Fully compliant with GDPR/HIPAA air-gap mandates.
            </span>
            <span className="text-accent-cyan font-bold flex items-center gap-1">
              <Award className="w-4 h-4 text-accent-cyan" />
              100% OWNER-CONTROLLED
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
