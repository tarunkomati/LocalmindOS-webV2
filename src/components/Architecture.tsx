"use client";

import { useState } from "react";
import { Monitor, Cpu, Binary, Database, Network, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Architecture() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      name: "Frontend UI",
      badge: "Next.js 14",
      icon: <Monitor className="w-5 h-5 text-accent-purple" />,
      title: "Interactive Workspace",
      description: "App Router client wrapper coordinates ingestion states, handles model selector toggles, and renders real-time D3-style knowledge graphs.",
      logs: [
        ">>> [Next.js App] Dispatching secure payload to local REST gateway...",
        ">>> [Next.js App] Initializing server-sent event (SSE) token stream listener...",
        ">>> [Next.js App] Graph Node render: Extracted 24 semantic links successfully."
      ]
    },
    {
      id: 2,
      name: "Local Backend",
      badge: "FastAPI",
      icon: <Cpu className="w-5 h-5 text-accent-cyan" />,
      title: "RAG Controller API",
      description: "Python web gateway orchestrates the vector pipeline, formats system prompt boundaries, and serves evaluation telemetry.",
      logs: [
        "INFO:     127.0.0.1:54321 - \"POST /api/v1/chat/grounded HTTP/1.1\" 200 OK",
        ">>> [FastAPI] Formulating system prompt template based on retracted context blocks...",
        ">>> [FastAPI] Initializing MRR metrics logging database insert."
      ]
    },
    {
      id: 3,
      name: "Embeddings Engine",
      badge: "SentenceTransformers",
      icon: <Binary className="w-5 h-5 text-accent-blue" />,
      title: "Neural Vectorizer",
      description: "Generates dense 384-dimensional semantic text representations locally. Operates 100% offline via local ONNX runtimes.",
      logs: [
        ">>> [SentenceTransformers] Running miniLM-L6 text embedding pipeline...",
        ">>> [SentenceTransformers] Context input token count: 242 tokens.",
        ">>> [SentenceTransformers] Generated vector tensor shape: [1, 384]"
      ]
    },
    {
      id: 4,
      name: "Vector Database",
      badge: "FAISS Indexer",
      icon: <Database className="w-5 h-5 text-accent-magenta" />,
      title: "Semantic Context Index",
      description: "Executes cosine similarity comparisons across local files. Extracts target chunks with a cosine similarity margin > 0.72.",
      logs: [
        ">>> [FAISS] Scanning dense IndexFlatIP with L2 distance parameters...",
        ">>> [FAISS] Found 3 matching documents chunks matching similarity threshold.",
        ">>> [FAISS] Extracted Chunks: [financials_q4.csv#chunk-4, financials_q4.csv#chunk-5]"
      ]
    },
    {
      id: 5,
      name: "Local LLM",
      badge: "llama.cpp",
      icon: <Network className="w-5 h-5 text-accent-purple" />,
      title: "Quantized Inference",
      description: "Handles secure GGUF model execution. Leverages direct GPU offloading and multi-threaded CPU inference to generate tokens.",
      logs: [
        "llama_model_loader: loaded model to RAM (Llama-3-8B-Q4_K_M.gguf)",
        ">>> [llama.cpp] GPU Offload: 32/32 layers mapped to local graphics core.",
        ">>> [llama.cpp] Sampling tokens... Speed: 24.5 t/s [Thread Pool: 8]"
      ]
    }
  ];

  const getActiveLogs = () => {
    if (activeStep !== null) {
      return steps[activeStep - 1].logs;
    }
    return [
      "Hover over any pipeline node to inspect active data streams & low-level console logs...",
      "Status: LocalMind OS local server running on http://127.0.0.1:8000"
    ];
  };

  return (
    <section id="architecture" className="py-24 bg-zinc-100/30 relative border-y border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-mono text-accent-purple tracking-widest uppercase mb-4 font-bold">
            🧬 Technical Architecture
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-5">
            How LocalMind OS operates offline.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Pipeline Container */}
        <div className="relative mb-16 select-none">
          
          {/* Connecting SVG Flow lines (Desktop Horizontal Grid) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-1 z-0 pointer-events-none">
            <svg className="w-full h-8 overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 0 0 L 800 0"
                stroke="rgba(0,0,0,0.04)"
                strokeWidth="2"
              />
              <path
                d="M 0 0 L 800 0"
                stroke="url(#svg-flow-gradient)"
                strokeWidth="2"
                className="flow-line-path"
              />
              <defs>
                <linearGradient id="svg-flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`group relative flex flex-col p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white border-accent-purple/50 shadow-[0_12px_24px_rgba(124,58,237,0.08)] -translate-y-2"
                      : "bg-white/80 border-zinc-200/60 shadow-sm hover:border-zinc-300 text-zinc-650"
                  }`}
                >
                  {/* Floating ID badge */}
                  <span className={`absolute -top-3 left-5 px-2 py-0.5 rounded-md font-mono text-[9px] font-bold border ${
                    isActive
                      ? "bg-accent-purple/10 border-accent-purple/35 text-accent-purple"
                      : "bg-zinc-100 border-zinc-200 text-zinc-500"
                  }`}>
                    NODE {step.id}
                  </span>

                  {/* Icon & Tech Badge Row */}
                  <div className="flex items-center justify-between mb-4 mt-1">
                    <div className={`p-2.5 rounded-xl border transition-colors ${
                      isActive ? "bg-accent-purple/10 border-accent-purple/20" : "bg-zinc-50 border-zinc-150"
                    }`}>
                      {step.icon}
                    </div>
                    <span className={`text-[10px] font-bold font-mono px-2 py-0.5 border rounded ${
                      isActive
                        ? "bg-accent-purple/10 border-accent-purple/20 text-accent-purple"
                        : "bg-zinc-100/80 border-zinc-200 text-zinc-500"
                    }`}>
                      {step.badge}
                    </span>
                  </div>

                  {/* Details */}
                  <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5 font-mono">
                    {step.name}
                  </h3>
                  <h4 className="text-xs font-bold text-zinc-800 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live In-App Hover Terminal Console */}
        <div className="max-w-4xl mx-auto border border-zinc-200 bg-zinc-950 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
          {/* Console Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-850 font-mono text-[10px] text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
              <span>pipeline_active_logs.sh</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              <span className="text-[9px] text-emerald-400 uppercase tracking-wider font-semibold">
                live scan active
              </span>
            </div>
          </div>

          {/* Console Output */}
          <div className="p-4 bg-zinc-950 min-h-[100px] flex flex-col gap-1.5 font-mono text-[11px] leading-relaxed text-zinc-400">
            {getActiveLogs().map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className={
                  log.startsWith(">>>")
                    ? "text-accent-cyan font-bold"
                    : log.includes("INFO")
                    ? "text-emerald-400 font-bold"
                    : log.startsWith("llama")
                    ? "text-accent-purple font-bold"
                    : "text-zinc-400"
                }
              >
                {log}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
