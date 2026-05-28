"use client";

import { User, Terminal, Code2 } from "lucide-react";

export default function About() {
  const skills = [
    "AIML Architecture",
    "Local-first RAG Systems",
    "Next.js 14 / React 18",
    "FastAPI (REST Gateway)",
    "SentenceTransformers",
    "FAISS Indexing & Search",
    "llama.cpp Runtimes",
    "TypeScript & Python",
  ];

  return (
    <section id="about" className="py-24 bg-white relative border-t border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-accent-purple tracking-widest uppercase mb-4 font-bold">
            🧑‍💻 Creator Profile
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-5">
            Behind LocalMind OS.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Profile Card Container */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Developer Credentials & Visuals */}
          <div className="md:col-span-5 flex flex-col p-6 rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur-xl relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Visual glow accent */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent-purple/10 blur-[50px] rounded-full" />
            
            {/* Profile Header */}
            <div className="flex items-center gap-4 mb-6 z-10 relative">
              <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl shadow-xs">
                <User className="w-6 h-6 text-accent-purple" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-805 leading-tight">
                  Tarun Komati
                </h3>
                <p className="text-xs text-accent-cyan font-mono tracking-wide uppercase mt-0.5 font-bold">
                  AIML + Full Stack Developer
                </p>
              </div>
            </div>

            {/* Dev stats terminal simulation */}
            <div className="mt-auto bg-zinc-950 border border-zinc-800 rounded-xl p-4 font-mono text-[10px] text-zinc-400 flex flex-col gap-1.5 shadow-inner">
              <div className="flex items-center gap-1 text-zinc-500 mb-1 border-b border-zinc-800 pb-1">
                <Terminal className="w-3 h-3 text-accent-cyan" />
                <span>developer_profile.sh</span>
              </div>
              <div className="flex justify-between">
                <span>$ whoami</span>
                <span className="text-white font-semibold">tarun_komati</span>
              </div>
              <div className="flex justify-between">
                <span>$ focus</span>
                <span className="text-accent-purple font-semibold">local_neural_inference</span>
              </div>
              <div className="flex justify-between">
                <span>$ location</span>
                <span className="text-zinc-300 font-semibold">India</span>
              </div>
              <div className="flex justify-between">
                <span>$ status</span>
                <span className="text-emerald-400 font-semibold">Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Biography & Skill mesh */}
          <div className="md:col-span-7 flex flex-col justify-between p-6 rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-accent-purple font-bold">
                <Code2 className="w-4 h-4" />
                <span>MISSION STATEMENT</span>
              </div>

              <h3 className="text-lg font-bold text-zinc-800">
                Pioneering secure, local-first intelligence tools.
              </h3>

              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                As a specialized AIML and Full Stack Engineer, I design software architectures that respect user privacy without compromising performance. 
              </p>
              <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
                LocalMind OS was created to prove that high-performance retrieval and structured chat inference can run efficiently on modern consumer hardware, completely air-gapped from cloud servers.
              </p>
            </div>

            {/* Technical skills grid */}
            <div className="mt-6 pt-6 border-t border-zinc-150">
              <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-3 font-semibold">
                🔧 Core Skill Arsenal
              </span>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[10px] font-semibold font-sans bg-zinc-50 border border-zinc-200 text-zinc-600 rounded-md hover:border-accent-purple/35 hover:text-accent-purple hover:bg-accent-purple/5 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
