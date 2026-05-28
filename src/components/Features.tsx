"use client";

import { ShieldAlert, Cpu, Network, Search, AreaChart, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: <ShieldAlert className="w-5 h-5 text-accent-purple" />,
      title: "100% Privacy-First AI",
      badge: "No Cloud APIs",
      description:
        "All ingestion, chunking, and neural inference occur locally. Absolutely no telemetry, cookies, or external server round-trips. Your data stays entirely in user-space.",
      specs: "Zero API Keys Required • 100% Air-Gapped Capable",
    },
    {
      icon: <Search className="w-5 h-5 text-accent-cyan" />,
      title: "Local Semantic Search",
      badge: "FAISS Vector DB",
      description:
        "Generates dense 384-dimensional vector embeddings on your CPU/GPU using localized SentenceTransformers models, powering blazing-fast, semantic-aware keyword lookup.",
      specs: "FAISS Indexer • MiniLM-L6 Embedding Engine",
    },
    {
      icon: <FileCheck className="w-5 h-5 text-accent-blue" />,
      title: "Grounded Chat with Citations",
      badge: "Source Integrity",
      description:
        "Maintains a strict retrieval trust-boundary. The local LLM is restricted from hallucinating by relying exclusively on ingested context chunks with inline citation highlights.",
      specs: "Metadata Citation Bindings • Truth Score Guard",
    },
    {
      icon: <Network className="w-5 h-5 text-accent-magenta" />,
      title: "Interactive Knowledge Graphs",
      badge: "Entity Linking",
      description:
        "Automatically extracts document-wide key entities (organizations, parameters, concepts) and their relationships to map a semantic neural mesh of your document library.",
      specs: "Custom local network layout • Interactive Nodes",
    },
    {
      icon: <Cpu className="w-5 h-5 text-accent-purple" />,
      title: "GGUF Model Switching",
      badge: "llama.cpp Integration",
      description:
        "Hot-swap quantized GGUF models on the fly. Interfaces directly with llama.cpp compiled libraries to coordinate GPU memory allocation, context sizing, and threads.",
      specs: "Llama-3, Mistral, Phi-3 Supported • GPU Offloading",
    },
    {
      icon: <AreaChart className="w-5 h-5 text-accent-cyan" />,
      title: "Evaluation Metrics Engine",
      badge: "IR Performance",
      description:
        "Analyze retrieval accuracy inside the app. Tracks and plots Mean Reciprocal Rank (MRR), Top-K retrieval precision, and chunk cosine similarity to tune your RAG pipeline.",
      specs: "MRR Curve plotting • Hit Rate @ K Metrics",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="features" className="py-24 bg-zinc-50/60 relative border-t border-zinc-200/50">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-radial-glow opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-mono text-accent-purple tracking-widest uppercase mb-4 font-bold">
            ⚡ Engineered Performance
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-5">
            SaaS-grade local intelligence, built to stand out.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative flex flex-col p-6 rounded-2xl bg-white/70 border border-zinc-200/60 hover:border-accent-purple/30 backdrop-blur-xl transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-purple-500/5 overflow-hidden"
            >
              {/* Card Radial Spotlight Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon & Badge Row */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 bg-zinc-50 border border-zinc-150 rounded-xl group-hover:border-accent-purple/20 transition-colors">
                  {feature.icon}
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-zinc-100 border border-zinc-200/60 text-zinc-500 group-hover:text-accent-cyan rounded-md transition-colors">
                  {feature.badge}
                </span>
              </div>

              {/* Feature Details */}
              <h3 className="text-base font-bold text-zinc-800 mb-2.5 group-hover:text-zinc-900 transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs text-zinc-550 font-medium leading-relaxed mb-6 flex-grow">
                {feature.description}
              </p>

              {/* Specs Sub-footer */}
              <div className="mt-auto pt-4 border-t border-zinc-100 font-mono text-[9px] text-zinc-400 group-hover:text-accent-cyan/80 transition-colors">
                {feature.specs}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
