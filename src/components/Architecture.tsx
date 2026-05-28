"use client";

import { Layers, Server, Sparkles, Database, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Architecture() {
  const steps = [
    {
      id: 1,
      title: "Frontend",
      tech: "Next.js • UI",
      icon: <Layers className="w-5 h-5" />,
      colorClass: "bg-purple-100 text-purple-600 border-purple-200/30"
    },
    {
      id: 2,
      title: "Backend",
      tech: "FastAPI • Python",
      icon: <Server className="w-5 h-5" />,
      colorClass: "bg-blue-100 text-blue-600 border-blue-200/30"
    },
    {
      id: 3,
      title: "Embeddings",
      tech: "SentenceTransformers",
      icon: <Sparkles className="w-5 h-5" />,
      colorClass: "bg-violet-100 text-violet-600 border-violet-200/30"
    },
    {
      id: 4,
      title: "Vector DB",
      tech: "FAISS",
      icon: <Database className="w-5 h-5" />,
      colorClass: "bg-cyan-100 text-cyan-600 border-cyan-200/30"
    },
    {
      id: 5,
      title: "LLM",
      tech: "llama.cpp • GGUF",
      icon: <Cpu className="w-5 h-5" />,
      colorClass: "bg-emerald-100 text-emerald-600 border-emerald-200/30"
    }
  ];

  const tags = [
    "Next.js",
    "FastAPI",
    "FAISS",
    "SentenceTransformers",
    "llama.cpp",
    "TypeScript",
    "Tailwind"
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
    <section id="architecture" className="py-20 bg-zinc-50/60 relative border-t border-zinc-200/50">
      {/* Background glow ambience */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block matching the screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Centered Architecture Pill */}
          <div className="inline-flex items-center px-4 py-1.5 border border-accent-purple/15 bg-accent-purple/5 rounded-full text-[10px] font-mono font-bold tracking-wider text-accent-purple mb-6 shadow-xs select-none">
            ARCHITECTURE
          </div>
          
          {/* Primary Main Heading (Highly readable, visually prominent text) */}
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight text-zinc-900 leading-tight mb-6">
            An end-to-end{" "}
            <span className="text-[#8b5cf6]">local</span>{" "}
            <span className="bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">pipeline.</span>
          </h2>
          
          {/* Secondary Subheading (Increased font size for better clarity) */}
          <p className="text-base sm:text-lg text-zinc-650 font-medium leading-relaxed max-w-3xl mx-auto">
            From the moment a document is dropped in until a grounded answer streams back — every step runs on your machine.
          </p>
        </div>

        {/* Pipeline horizontal steps row with separators */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center justify-between gap-4 max-w-5xl mx-auto mb-16"
        >
          {steps.map((step, idx) => (
            <div key={step.id} className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto flex-1">
              
              {/* Step Card (Compact, beautiful off-white frosted style) */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="w-full lg:w-44 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/70 border border-zinc-200/60 hover:border-accent-purple/35 backdrop-blur-xl transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-purple-500/5 select-none"
              >
                {/* Rounded Icon wrapper */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${step.colorClass} mb-4 shadow-sm transition-transform group-hover:scale-105`}>
                  {step.icon}
                </div>

                {/* Highly readable text sizes as requested */}
                <h3 className="text-lg font-extrabold text-zinc-800 mb-1 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-xs text-zinc-450 font-bold tracking-wide font-mono">
                  {step.tech}
                </p>
              </motion.div>

              {/* Arrow separator (Render between cards on desktop, hide on last card) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center text-zinc-350 px-2 shrink-0 animate-pulse">
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Skills & Tech tags row at the bottom */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-1.5 bg-zinc-50 border border-zinc-200 text-zinc-600 rounded-full text-xs font-semibold shadow-xs hover:border-accent-purple/25 hover:text-accent-purple hover:bg-accent-purple/5 transition-all select-none"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
