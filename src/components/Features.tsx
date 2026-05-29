"use client";

import { useState } from "react";
import { 
  Shield, Brain, MessageSquare, Network, Sliders, LineChart, 
  Cpu, Key, Lock, Database, FileText
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const features = [
    {
      title: "Zero Hallucinations.",
      description: "Engage with your local documents instantly. See exact citations directly within the chat interface, backed by strict offline verification.",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "text-orange-500",
    },
    {
      title: "Absolute Privacy.",
      description: "Your local vault is protected by a Scrypt-derived passphrase and AES-GCM encryption. Zero trackers, zero API calls, and zero external telemetry.",
      icon: <Shield className="w-5 h-5" />,
      color: "text-cyan-505",
    },
    {
      title: "Hybrid Retrieval.",
      description: "Blends dense vector search with lexical scoring and local cross-encoder reranking to fetch high-relevance matches in milliseconds.",
      icon: <Brain className="w-5 h-5" />,
      color: "text-blue-500",
    },
    {
      title: "Model Agnostic.",
      description: "Switch instantly between Llama 3, Mistral, and Phi-3 depending on your hardware limits. Run weights natively on CPU or Vulkan/Metal GPUs.",
      icon: <Sliders className="w-5 h-5" />,
      color: "text-purple-500",
    },
    {
      title: "Instant Vectorization.",
      description: "Drop 100-page PDFs into the vault and watch them index locally in seconds. Document parser blocks are quantized and stored in RAM.",
      icon: <FileText className="w-5 h-5" />,
      color: "text-pink-500",
    },
    {
      title: "Persistent Vaults.",
      description: "Your data is heavily locked down on your SSD. Turn off the app, and nothing leaves. Secured database indexes persist reliably.",
      icon: <Lock className="w-5 h-5" />,
      color: "text-emerald-500",
    }
  ];

  // Render the sticky visual elements corresponding to each feature
  const renderVisualElement = (index: number) => {
    switch (index) {
      case 0: // Zero Hallucinations / Hybrid Retrieval Link
        return (
          <div className="relative w-full max-w-sm aspect-video bg-gradient-to-b from-transparent to-orange-500/2 border border-zinc-200/80 rounded-3xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
            {/* Left Node */}
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 absolute left-[20%] shadow-sm z-10 bg-white">
              <Network className="w-7 h-7" />
            </div>
            {/* Right Node */}
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 absolute right-[20%] shadow-sm z-10 bg-white">
              <Cpu className="w-7 h-7" />
            </div>
            {/* Connecting Line with active pulse */}
            <div className="absolute w-[40%] h-[2px] bg-zinc-200/80 z-0">
              <motion.div 
                className="h-full bg-gradient-to-r from-orange-500 to-cyan-500" 
                initial={{ width: "0%", left: "0%" }}
                animate={{ width: ["0%", "100%", "0%"], left: ["0%", "0%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        );

      case 1: // Absolute Privacy (Matches screenshot exactly!)
        return (
          <div className="relative w-full max-w-sm aspect-video bg-gradient-to-b from-transparent to-cyan-500/2 border border-zinc-200/80 rounded-3xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
            {/* Center Shield Node */}
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 z-10 shadow-lg relative bg-white">
              <div className="absolute inset-0 bg-cyan-500/5 animate-pulse rounded-2xl" />
              <Shield className="w-8 h-8" />
            </div>

            {/* Inner Orbit (Dashed) */}
            <div className="absolute w-[160px] h-[160px] border border-dashed border-cyan-500/25 rounded-full flex justify-center items-start animate-[spin_10s_linear_infinite] z-0">
              <div className="bg-white p-1.5 border border-zinc-200 rounded-full shadow-md text-zinc-700 -mt-3.5 origin-center">
                <Key className="w-3.5 h-3.5 text-zinc-650" />
              </div>
            </div>

            {/* Outer Orbit (Dashed) */}
            <div className="absolute w-[230px] h-[230px] border border-dashed border-cyan-500/15 rounded-full flex items-center justify-end animate-[spin_15s_linear_infinite_reverse] z-0">
              <div className="bg-white p-1.5 border border-zinc-200 rounded-full shadow-md text-zinc-700 -mr-3.5 origin-center">
                <Lock className="w-3.5 h-3.5 text-zinc-655" />
              </div>
            </div>
          </div>
        );

      case 2: // Hybrid Retrieval
        return (
          <div className="relative w-full max-w-sm aspect-video bg-gradient-to-b from-transparent to-blue-500/2 border border-zinc-200/80 rounded-3xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
            {/* File Card sliding */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: [-80, -10, -10, -80], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-10"
            >
              <div className="bg-white border border-zinc-200 px-4 py-2.5 rounded-2xl shadow-md flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-accent-cyan" />
                <span className="font-bold text-[11px] text-zinc-800">data.pdf</span>
              </div>
            </motion.div>

            {/* Database Node */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-xl shadow-blue-500/15 ml-28 z-0">
              <Database className="w-8 h-8" />
            </div>
          </div>
        );

      case 3: // Model Agnostic
        return (
          <div className="relative w-full max-w-sm aspect-video bg-gradient-to-b from-transparent to-purple-500/2 border border-zinc-200/80 rounded-3xl flex flex-col items-center justify-center gap-3 overflow-hidden p-6">
            <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
            <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Active local Runtimes</span>
            <div className="w-full flex flex-col gap-2 max-w-[200px] z-10">
              {[
                { name: "Llama 3 (8B)", active: true },
                { name: "Mistral-Instruct", active: false },
                { name: "Phi-3 Mini", active: false },
              ].map((model, mIdx) => (
                <motion.div 
                  key={mIdx}
                  animate={model.active ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`px-4 py-2 rounded-xl border text-[11px] font-bold text-center transition-all ${
                    model.active 
                      ? "bg-white border-accent-purple text-accent-purple shadow-sm font-extrabold" 
                      : "bg-white/40 border-zinc-150 text-zinc-450 opacity-60"
                  }`}
                >
                  {model.name}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 4: // Instant Vectorization
        return (
          <div className="relative w-full max-w-sm aspect-video bg-gradient-to-b from-transparent to-pink-500/2 border border-zinc-200/80 rounded-3xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
            {/* Central File Text */}
            <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-600 z-10 shadow-sm bg-white">
              <FileText className="w-7 h-7" />
            </div>

            {/* Floating chunks */}
            {[...Array(6)].map((_, pIdx) => {
              const angles = [0, 60, 120, 180, 240, 300];
              const rad = (angles[pIdx] * Math.PI) / 180;
              const xDist = Math.cos(rad) * 55;
              const yDist = Math.sin(rad) * 55;

              return (
                <motion.div
                  key={pIdx}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0.5],
                    x: [0, xDist],
                    y: [0, yDist],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: pIdx * 0.3,
                    ease: "easeOut",
                  }}
                  className="absolute w-2.5 h-2.5 bg-pink-400 border border-pink-300 rounded-md z-0"
                />
              );
            })}
          </div>
        );

      case 5: // Persistent Vaults
        return (
          <div className="relative w-full max-w-sm aspect-video bg-gradient-to-b from-transparent to-emerald-500/2 border border-zinc-200/80 rounded-3xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
            <div className="w-[100px] h-[135px] bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-lg shadow-emerald-500/15 flex flex-col justify-between p-3.5 text-white hover:scale-[1.03] transition-transform duration-300">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[8px] font-mono font-bold tracking-wider opacity-60">PERSISTENT</span>
                <span className="text-[10px] font-bold font-mono truncate">vault_secure.db</span>
              </div>
              <div className="self-end bg-white/10 p-1 rounded-lg">
                <Lock className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-24 bg-zinc-50/60 relative border-t border-zinc-200/50 overflow-hidden">
      {/* Background ambient light blobs */}
      <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block matching the screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          {/* Centered Capabilities Pill */}
          <div className="inline-flex items-center px-4 py-1.5 border border-accent-purple/15 bg-accent-purple/5 rounded-full text-[10px] font-mono font-bold tracking-wider text-accent-purple mb-6 shadow-xs select-none">
            CAPABILITIES
          </div>
          
          {/* Primary Main Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-4">
            Everything you need.{" "}
            <span className="bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan bg-clip-text text-transparent">Nothing you don't.</span>
          </h2>
          
          {/* Secondary Subheading */}
          <p className="text-sm sm:text-base text-zinc-500 font-semibold leading-relaxed max-w-2xl mx-auto">
            A complete local AI stack — retrieval, chat, graph, and evaluation — packaged as a single workspace.
          </p>
        </div>

        {/* Scroll Pinning Split Screen Viewport */}
        <div className="flex flex-col md:flex-row items-stretch gap-12 mt-16 max-w-5xl mx-auto">
          
          {/* LEFT: Scrollable Text Blocks */}
          <div className="w-full md:w-1/2 flex flex-col gap-24 py-12 md:py-24">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0.3, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.6 }}
                onViewportEnter={() => setActiveIndex(idx)}
                className="flex flex-col gap-4 min-h-[30vh] justify-center select-none"
              >
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-accent-purple/5 border border-accent-purple/15 text-[8px] font-mono text-accent-purple font-bold rounded-md uppercase tracking-wider">
                    MODULE 0{idx + 1}
                  </span>
                </div>
                
                <h3 className="text-3xl font-extrabold text-zinc-900 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-sm md:text-base text-zinc-500 font-semibold leading-relaxed">
                  {feature.description}
                </p>

                {/* Mobile-only visual element inline placement */}
                <div className="md:hidden mt-4 bg-white/70 border border-zinc-200/80 rounded-3xl p-6 flex items-center justify-center shadow-xs">
                  {renderVisualElement(idx)}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Sticky Visual Element Window Simulator */}
          <div className="hidden md:flex md:w-1/2 sticky top-[20vh] h-[55vh] items-center justify-center bg-white/70 border border-zinc-200/80 rounded-3xl overflow-hidden shadow-sm backdrop-blur-xl p-8">
            <div className="absolute inset-0 bg-radial-glow opacity-5 pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full h-full flex items-center justify-center"
              >
                {renderVisualElement(activeIndex)}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
