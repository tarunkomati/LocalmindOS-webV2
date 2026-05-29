"use client";

import { Shield, Brain, MessageSquare, Network, Sliders, LineChart, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy-first",
      description: "Everything runs locally on your machine. No external API queries, no background telemetry, and absolutely no data leaks. Your private documents are parsed and tokenized fully offline.",
      colorClass: "bg-purple-50 text-purple-600 border-purple-200/30",
      accentGlow: "shadow-purple-500/5 hover:border-purple-300"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Semantic Search",
      description: "Leverage advanced FAISS + SentenceTransformers embeddings to execute sub-millisecond similarity scans. Retrieves exact paragraphs based on intent-aware similarity thresholds.",
      colorClass: "bg-blue-50 text-blue-600 border-blue-200/30",
      accentGlow: "shadow-blue-500/5 hover:border-blue-300"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Grounded Chat",
      description: "Interact with your local library securely. The GGUF LLM synthesizes responses grounded strictly in the retrieved document chunks, featuring verified inline citation footnotes.",
      colorClass: "bg-cyan-50 text-cyan-600 border-cyan-200/30",
      accentGlow: "shadow-cyan-500/5 hover:border-cyan-300"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Knowledge Graph",
      description: "Watch the sandbox dynamically build a navigable entities graph as you ingest files. Graphing links entities, dates, and contracts into a visually searchable network map.",
      colorClass: "bg-emerald-50 text-emerald-600 border-emerald-250/20",
      accentGlow: "shadow-emerald-500/5 hover:border-emerald-300"
    },
    {
      icon: <Sliders className="w-6 h-6" />,
      title: "Model Switching",
      description: "Hot-swap local GGUF models on the fly through llama.cpp. Instantly dial in multi-threading variables, context window layers, and CPU/GPU offload percentages based on hardware constraints.",
      colorClass: "bg-pink-50 text-pink-600 border-pink-250/20",
      accentGlow: "shadow-pink-500/5 hover:border-pink-300"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Evaluation Metrics",
      description: "Quantify search precision with built-in Mean Reciprocal Rank (MRR), Hit Rate, Top-K, and grounded accuracy scoring. Test and calibrate your local pipeline variables objectively.",
      colorClass: "bg-indigo-50 text-indigo-600 border-indigo-250/20",
      accentGlow: "shadow-indigo-500/5 hover:border-indigo-300"
    }
  ];

  return (
    <section id="features" className="py-24 bg-zinc-50/60 relative border-t border-zinc-200/50 overflow-hidden">
      {/* Background ambient light blobs */}
      <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block matching the screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-16">
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

        {/* Sticky Stacking Cards Deck Container */}
        <div className="flex flex-col gap-10 max-w-4xl mx-auto px-2 relative mt-12 pb-24">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
              className={`sticky group bg-white border border-zinc-200/90 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 backdrop-blur-xl shadow-lg transition-all duration-300 ${feature.accentGlow}`}
              style={{
                top: `${100 + idx * 32}px`, // Staggers the sticky top levels for deck look
              }}
            >
              {/* Soft internal gradient background indicator */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              {/* Icon Capsule Box */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md ${feature.colorClass}`}>
                {feature.icon}
              </div>

              {/* Feature Content */}
              <div className="flex-1 min-w-0 z-10">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg md:text-xl font-bold text-zinc-850 transition-colors group-hover:text-zinc-950">
                    {feature.title}
                  </h3>
                  <span className="px-2 py-0.5 bg-zinc-50 border border-zinc-200 text-[8px] font-mono text-zinc-400 font-bold rounded-md uppercase tracking-wider">
                    MODULE {idx + 1}
                  </span>
                </div>
                
                <p className="text-xs md:text-[13px] text-zinc-500 font-semibold leading-relaxed mt-2 group-hover:text-zinc-650 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
