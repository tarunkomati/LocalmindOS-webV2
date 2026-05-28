"use client";

import { Shield, Brain, MessageSquare, Network, Sliders, LineChart } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Privacy-first",
      description: "Everything runs locally. No external APIs, no telemetry, no leaks.",
      colorClass: "bg-purple-100 text-purple-600 border-purple-200/30"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Semantic Search",
      description: "FAISS + SentenceTransformers embeddings deliver instant, intent-aware retrieval.",
      colorClass: "bg-blue-100 text-blue-600 border-blue-200/30"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Grounded Chat",
      description: "Every answer comes with inline citations and a strict trust-mode toggle.",
      colorClass: "bg-cyan-100 text-cyan-600 border-cyan-200/30"
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "Knowledge Graph",
      description: "Auto-build a navigable graph from your docs to explore entities and relations.",
      colorClass: "bg-emerald-100 text-emerald-600 border-emerald-200/30"
    },
    {
      icon: <Sliders className="w-5 h-5" />,
      title: "Model Switching",
      description: "Hot-swap GGUF models via llama.cpp — pick speed, accuracy, or context size.",
      colorClass: "bg-pink-100 text-pink-600 border-pink-200/30"
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Evaluation Metrics",
      description: "Built-in MRR, Top-K, and grounded-accuracy scoring for your retrieval pipeline.",
      colorClass: "bg-indigo-100 text-indigo-600 border-indigo-200/30"
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
    <section id="features" className="py-24 bg-zinc-50/60 relative border-t border-zinc-200/50">
      {/* Ambient background blur blobs */}
      <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-radial-glow opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block matching the screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          {/* Centered Capabilities Pill */}
          <div className="inline-flex items-center px-4 py-1.5 border border-accent-purple/15 bg-accent-purple/5 rounded-full text-[10px] font-mono font-bold tracking-wider text-accent-purple mb-6 shadow-xs select-none">
            CAPABILITIES
          </div>
          
          {/* Primary Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.05] mb-6">
            Everything you need.{" "}
            <span className="text-[#8b5cf6]">Nothing you</span>{" "}
            <span className="bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">don't.</span>
          </h2>
          
          {/* Secondary Subheading */}
          <p className="text-base sm:text-lg text-zinc-500 font-normal leading-relaxed max-w-2xl mx-auto">
            A complete local AI stack — retrieval, chat, graph, and evaluation — packaged as a single workspace.
          </p>
        </div>

        {/* Feature Cards Grid - 3 columns, 2 rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative flex flex-col p-8 rounded-2xl bg-white/70 border border-zinc-200/60 hover:border-accent-purple/35 backdrop-blur-xl transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-purple-500/5 overflow-hidden"
            >
              {/* Card Hover Spotlight Radial mask */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Colorful Rounded Icon Container */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${feature.colorClass} mb-6 transition-transform duration-300 group-hover:scale-105 shadow-sm`}>
                {feature.icon}
              </div>

              {/* Content details */}
              <h3 className="text-lg font-bold text-zinc-800 mb-2 transition-colors group-hover:text-zinc-900">
                {feature.title}
              </h3>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
