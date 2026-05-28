"use client";

import { Crown, Terminal, Code2, Cpu, Server, Network, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const teamMembers = [
    {
      name: "Nammi Hrutin",
      role: "Team Lead & AIML Architect",
      badge: "TEAM LEAD",
      focus: "GGUF model pipelines, context windows, FAISS index tuning.",
      icon: <Crown className="w-5 h-5 text-purple-600" />,
      colorClass: "bg-purple-50 border-purple-200/30"
    },
    {
      name: "Komati Tarun",
      role: "Lead Full Stack & RAG Dev",
      badge: "LEAD FULL STACK",
      focus: "Next.js workspace environment, interactive SVG entity graphs.",
      icon: <Code2 className="w-5 h-5 text-cyan-600" />,
      colorClass: "bg-cyan-50 border-cyan-200/30"
    },
    {
      name: "Kalacharla Vinay",
      role: "Backend & Inference Specialist",
      badge: "BACKEND",
      focus: "FastAPI gateway setup, llama.cpp multi-threading coordinates.",
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      colorClass: "bg-blue-50 border-blue-200/30"
    },
    {
      name: "Ch Kusuma Sri",
      role: "Data Pipeline & Graph Engineer",
      badge: "DATA PIPELINE",
      focus: "Semantic parsing pipelines, local NLP entity extractors.",
      icon: <Network className="w-5 h-5 text-pink-600" />,
      colorClass: "bg-pink-50 border-pink-250/20"
    },
    {
      name: "K Mano Sathwik",
      role: "UI/UX & Performance Engineer",
      badge: "UI/UX",
      focus: "CSS frosted frames, framer-motion curves, page load indexing.",
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
      colorClass: "bg-emerald-50 border-emerald-250/20"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white relative border-t border-zinc-200/50">
      {/* Background radial soft light blobbing */}
      <div className="absolute top-1/4 left-1/3 w-[45vw] h-[45vw] bg-radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 border border-accent-purple/15 bg-accent-purple/5 rounded-full text-[10px] font-mono font-bold tracking-wider text-accent-purple mb-6 shadow-xs select-none">
            TEAM PROFILE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold tracking-tight text-zinc-900 leading-tight mb-5">
            Meet the innovators behind LocalMind OS.
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 font-medium leading-relaxed max-w-2xl mx-auto">
            We are a 5-member team dedicated to developing secure, off-line, local-first artificial intelligence tools.
          </p>
        </div>

        {/* Core Content: Left Team Photo & Right Team Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* LEFT: Team High-Quality Photo Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 backdrop-blur-xl relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Soft decorative glow accent */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent-purple/10 blur-[50px] rounded-full" />
            
            {/* Visual Team Photo Wrapper */}
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-xl overflow-hidden border border-zinc-200/80 shadow-xs mb-6 group bg-zinc-100">
              <img
                src="/team.jpg"
                alt="LocalMind OS 5-Member Core Team"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Overlay Glass Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/80 border border-zinc-200/40 rounded-lg backdrop-blur-md shadow-xs">
                <p className="text-[10px] font-bold text-zinc-800 leading-none">LocalMind OS Core Team</p>
                <p className="text-[8px] font-mono text-zinc-450 font-semibold mt-1 uppercase">V1.0 Dev Hackathon Deployment</p>
              </div>
            </div>

            {/* Quick stats panel */}
            <div className="bg-zinc-950 border border-zinc-850 rounded-xl p-4 font-mono text-[10px] text-zinc-400 flex flex-col gap-2 shadow-inner">
              <div className="flex items-center gap-1 text-zinc-550 mb-1 border-b border-zinc-800 pb-1.5 font-bold uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                <span>workspace_team_manifest.sh</span>
              </div>
              <div className="flex justify-between">
                <span>$ whoami --team</span>
                <span className="text-white font-bold">5_core_architects</span>
              </div>
              <div className="flex justify-between">
                <span>$ project_target</span>
                <span className="text-accent-purple font-bold">private_local_inference</span>
              </div>
              <div className="flex justify-between flex-wrap gap-x-2">
                <span>$ active_members</span>
                <span className="text-emerald-400 font-bold">Hrutin, Tarun, Vinay, Kusuma, Sathwik</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Team Members Profile Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-4 font-bold select-none">
              🔧 Core Team & Expert Focus
            </span>

            {/* Members cards grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-3"
            >
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="group p-5 md:p-6 bg-white/70 border border-zinc-200/60 hover:border-accent-purple/35 rounded-2xl flex items-center gap-5 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-purple-500/5 select-none"
                >
                  {/* Icon fully rounded circle matching screenshot perfectly */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${member.colorClass} shadow-xs shrink-0 transition-transform group-hover:scale-105`}>
                    {member.icon}
                  </div>
                  
                  {/* Biography details - Perfect vertical alignment */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm sm:text-base font-bold text-zinc-900 leading-tight">
                        {member.name}
                      </h3>
                      <span className="px-2 py-0.5 bg-zinc-100 border border-zinc-200 text-zinc-500 font-mono text-[8px] sm:text-[9px] rounded-md font-bold tracking-wide uppercase leading-none">
                        {member.badge}
                      </span>
                    </div>
                    
                    {/* Role in bold Monospace / Typewriter font matching screenshot exactly */}
                    <p className="text-xs sm:text-sm font-mono font-bold text-zinc-800 tracking-tight leading-tight mt-1">
                      {member.role}
                    </p>
                    
                    {/* Focus in highly readable soft font */}
                    <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed mt-1.5">
                      {member.focus}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
