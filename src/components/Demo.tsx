"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, FileText, Search, ShieldCheck, HardDrive, Cpu, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Demo() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Secure Document Ingestion",
      tagline: "Local File Parser & Chunking Engine",
      description: "Directly ingest PDFs, CSVs, and Word docs. Files are fully parsed into semantic blocks, tokenized offline, and indexed directly in local RAM.",
      cta: "Explore parser parameters",
      mockupType: "upload"
    },
    {
      title: "Hybrid Semantic Search",
      tagline: "FAISS-Powered Similarity Scanner",
      description: "Perform sub-millisecond similarity scans over thousands of pages. Retrieves exact paragraphs using cosine-similarity indexing.",
      cta: "Tune similarity thresholds",
      mockupType: "search"
    },
    {
      title: "Source-Cited RAG Chat",
      tagline: "Grounded Local LLM Inference",
      description: "Interact with your document library securely. The AI responds strictly from your retrieved file chunks, highlighting inline citation indices.",
      cta: "Configure temperature levels",
      mockupType: "chat"
    },
    {
      title: "Semantic Knowledge Graphs",
      tagline: "Automated Entity Mapping",
      description: "Watch the system dynamically extract relationships, connecting key dates, parameters, and entities into a visually navigable knowledge mesh.",
      cta: "Open full graph viewport",
      mockupType: "graph"
    },
    {
      title: "Offline GGUF Model Warehouse",
      tagline: "Local Model Runtimes manager",
      description: "Download, manage, and toggle specialized model weights. Adjust GPU offloading layers and multi-threading variables based on hardware.",
      cta: "Configure GPU threads",
      mockupType: "models"
    }
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Render mockup layouts inside the demo window (Light theme)
  const renderMockup = (type: string) => {
    switch (type) {
      case "upload":
        return (
          <div className="w-full h-full bg-white p-6 flex flex-col gap-4 font-sans text-xs text-zinc-600">
            {/* Window title bar */}
            <div className="flex items-center justify-between border-b border-zinc-150 pb-2.5">
              <span className="font-mono text-[10px] text-zinc-400 uppercase font-semibold">Local File Ingestion Hub</span>
              <span className="text-[10px] text-emerald-600 font-mono flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                Air-gapped secure
              </span>
            </div>

            {/* Dropzone mock */}
            <div className="border border-dashed border-zinc-200 bg-zinc-50/50 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2">
              <FileText className="w-8 h-8 text-accent-purple animate-bounce" />
              <p className="font-semibold text-zinc-800">Drag & Drop Encrypted Files</p>
              <p className="text-[10px] text-zinc-400">Supports PDF, CSV, TXT, DOCX up to 100MB • Local storage ONLY</p>
            </div>

            {/* Upload Queue simulation */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] text-zinc-400 uppercase font-semibold">Indexing Queue</span>
              <div className="p-2.5 bg-zinc-50 border border-zinc-150 rounded-lg flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-accent-cyan" />
                  <div>
                    <p className="font-bold text-zinc-800 text-[10px]">project_specifications_final.pdf</p>
                    <p className="text-[9px] text-zinc-400 font-medium">1.8 MB • 24 pages</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-20 bg-zinc-200 h-1.5 rounded-full overflow-hidden inline-block">
                    <span className="block bg-accent-cyan h-full w-[80%] rounded-full animate-pulse" />
                  </span>
                  <span className="font-mono text-[9px] text-accent-cyan font-bold">80% Vectorizing</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "search":
        return (
          <div className="w-full h-full bg-white p-6 flex flex-col gap-4 font-sans text-xs text-zinc-650">
            {/* Header search bar */}
            <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2">
              <Search className="w-3.5 h-3.5 text-zinc-400" />
              <input
                type="text"
                readOnly
                value="retrieval thresholds & latency"
                className="bg-transparent border-none text-[11px] text-zinc-700 font-mono focus:outline-none flex-grow"
              />
              <span className="text-[9px] px-2 py-0.5 bg-zinc-100 border border-zinc-200 rounded font-mono text-zinc-500 font-semibold">FAISS Index</span>
            </div>

            {/* Results mock */}
            <div className="flex flex-col gap-2.5 overflow-y-auto no-scrollbar max-h-[190px]">
              <span className="font-mono text-[9px] text-zinc-400 uppercase font-semibold">SIMILARITY MATCHES (2)</span>
              
              <div className="p-2.5 bg-zinc-50 border border-zinc-150 rounded-xl flex flex-col gap-1.5 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-accent-cyan font-bold">Similarity Score: 0.942</span>
                  <span className="text-[9px] text-zinc-400 font-mono">spec_doc.pdf #chunk-14</span>
                </div>
                <p className="text-[10px] text-zinc-700 leading-relaxed font-medium">
                  “...The local RAG system maintains a <span className="bg-accent-cyan/8 text-accent-cyan px-1.5 py-0.5 rounded border border-accent-cyan/15 font-bold">maximum indexing latency of 42ms</span> per PDF page. The similarity cosine threshold can be custom tuned in settings to prevent hallucination noise...”
                </p>
              </div>

              <div className="p-2.5 bg-zinc-50 border border-zinc-150 rounded-xl flex flex-col gap-1.5 opacity-60 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-accent-purple font-bold">Similarity Score: 0.814</span>
                  <span className="text-[9px] text-zinc-400 font-mono">spec_doc.pdf #chunk-22</span>
                </div>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-medium">
                  “...Vector index scans leverage optimized Intel AVX-512 and ARM Neon instructions, enabling semantic similarity matching speeds under 2.4 milliseconds...”
                </p>
              </div>
            </div>
          </div>
        );

      case "chat":
        return (
          <div className="w-full h-full bg-white p-6 flex flex-col gap-4 font-sans text-xs text-zinc-650">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-zinc-150 pb-2.5">
              <span className="font-mono text-[10px] text-zinc-400 uppercase font-semibold">Secure Grounded Console</span>
              <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-250 px-2 py-0.5 rounded-full uppercase font-bold">
                Grounded Strict Mode
              </span>
            </div>

            {/* Conversation list */}
            <div className="flex-1 flex flex-col gap-3 min-h-[170px] overflow-y-auto no-scrollbar justify-end">
              <div className="p-2.5 bg-zinc-100 border border-zinc-200 rounded-xl text-[10px] max-w-[80%] self-end font-semibold text-zinc-800 shadow-xs">
                Explain the vector chunking strategy.
              </div>
              <div className="p-3 bg-white border border-zinc-200 rounded-xl text-[10px] max-w-[85%] self-start leading-relaxed text-zinc-650 font-medium shadow-sm">
                Documents are split into <span className="text-accent-cyan font-bold">500-token chunks</span> with a 50-token sliding overlap. This preserves paragraph context while minimizing local vector database indexing footprint.
                
                <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-zinc-100 text-[9px] font-mono text-zinc-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified citation:</span>
                  <span className="px-1.5 py-0.2 bg-zinc-50 border border-zinc-200 text-accent-cyan rounded-md font-bold">
                    architecture_overview.txt
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case "graph":
        return (
          <div className="w-full h-full bg-white p-6 flex flex-col gap-4 font-sans text-xs text-zinc-650 relative overflow-hidden select-none">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-zinc-150 pb-2.5">
              <span className="font-mono text-[10px] text-zinc-400 uppercase font-semibold">Knowledge Graph extraction</span>
              <span className="text-[9px] font-mono text-zinc-500 font-semibold">Total Entities: 142 • Semantic Links: 348</span>
            </div>

            {/* Simulated interactive node web */}
            <div className="relative flex-1 min-h-[170px] bg-zinc-50/50 border border-zinc-200/80 rounded-xl flex items-center justify-center overflow-hidden">
              
              {/* Animated linking vector lines */}
              <svg className="absolute inset-0 w-full h-full overflow-visible" fill="none">
                <line x1="50%" y1="50%" x2="25%" y2="30%" stroke="rgba(124, 58, 237, 0.25)" strokeWidth="1.5" />
                <line x1="50%" y1="50%" x2="75%" y2="35%" stroke="rgba(13, 148, 136, 0.25)" strokeWidth="1.5" />
                <line x1="50%" y1="50%" x2="40%" y2="80%" stroke="rgba(37, 99, 235, 0.25)" strokeWidth="1.5" />
                <line x1="25%" y1="30%" x2="75%" y2="35%" stroke="rgba(0, 0, 0, 0.03)" strokeWidth="1" />
              </svg>

              {/* Core Node */}
              <div className="absolute p-2.5 bg-white border border-accent-cyan/60 text-[10px] font-mono text-accent-cyan rounded-lg shadow-md shadow-cyan-500/5 text-center font-bold z-10 animate-pulse">
                LocalMind OS
              </div>

              {/* Surrounding Nodes */}
              <div className="absolute top-[20%] left-[12%] p-2 bg-white border border-zinc-200 text-[9px] font-mono text-zinc-600 rounded shadow-xs z-10 font-semibold">
                📁 user_spec.pdf
              </div>
              <div className="absolute top-[25%] right-[12%] p-2 bg-white border border-zinc-200 text-[9px] font-mono text-zinc-600 rounded shadow-xs z-10 font-semibold">
                ⚙️ llama.cpp
              </div>
              <div className="absolute bottom-[15%] left-[30%] p-2 bg-white border border-zinc-200 text-[9px] font-mono text-zinc-600 rounded shadow-xs z-10 font-semibold">
                🧠 cosine_similarity
              </div>

            </div>
          </div>
        );

      case "models":
        return (
          <div className="w-full h-full bg-white p-6 flex flex-col gap-4 font-sans text-xs text-zinc-650">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-zinc-150 pb-2.5">
              <span className="font-mono text-[10px] text-zinc-400 uppercase font-semibold">GGUF Model Hub</span>
              <span className="text-[10px] text-accent-purple font-mono flex items-center gap-1 font-bold">
                Active RAM: 5.8 GB
              </span>
            </div>

            {/* Model Warehouse List */}
            <div className="flex flex-col gap-2 overflow-y-auto no-scrollbar max-h-[190px]">
              
              <div className="p-2.5 bg-accent-cyan/5 border border-accent-cyan/25 rounded-xl flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2.5">
                  <HardDrive className="w-4 h-4 text-accent-cyan" />
                  <div>
                    <p className="font-bold text-zinc-800 text-[10px]">Llama-3-8B-Q4_K_M.gguf</p>
                    <p className="text-[9px] text-zinc-450 font-medium">4.8 GB • GGUF weights</p>
                  </div>
                </div>
                <span className="text-[9px] px-2 py-0.5 bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/25 rounded font-mono font-bold">
                  ACTIVE
                </span>
              </div>

              <div className="p-2.5 bg-white border border-zinc-200 rounded-xl flex items-center justify-between opacity-60 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <HardDrive className="w-4 h-4 text-zinc-400" />
                  <div>
                    <p className="font-bold text-zinc-700 text-[10px]">Mistral-7B-Instruct.gguf</p>
                    <p className="text-[9px] text-zinc-450 font-medium">4.1 GB • Click to load</p>
                  </div>
                </div>
                <span className="text-[9px] px-2 py-0.5 bg-zinc-100 text-zinc-500 border border-zinc-200 rounded font-mono font-semibold">
                  LOAD
                </span>
              </div>

            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="demo" className="py-24 bg-white relative border-t border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-accent-purple tracking-widest uppercase mb-4 font-bold">
            🎥 Product Walkthrough
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-5">
            Explore the LocalMind OS interface.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-center">
          
          {/* LEFT: Text Info Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Steps Pills */}
            <div className="flex flex-wrap gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeSlide === idx ? "bg-accent-purple w-6" : "bg-zinc-200 hover:bg-zinc-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Slide Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3"
              >
                <span className="text-[10px] font-mono uppercase text-accent-purple font-bold tracking-wider">
                  {slides[activeSlide].tagline}
                </span>
                <h3 className="text-2xl font-bold text-zinc-800 leading-tight">
                  {slides[activeSlide].title}
                </h3>
                <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
                  {slides[activeSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={handlePrev}
                className="p-3 bg-white border border-zinc-200 text-zinc-650 hover:bg-zinc-50 hover:text-zinc-950 rounded-xl active:scale-95 shadow-sm transition-all animate-none"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 bg-white border border-zinc-200 text-zinc-650 hover:bg-zinc-50 hover:text-zinc-950 rounded-xl active:scale-95 shadow-sm transition-all animate-none"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="text-xs font-bold text-zinc-500 hover:text-accent-purple flex items-center gap-1.5 transition-colors ml-4"
              >
                👉 Request Private Beta
              </a>
            </div>
          </div>

          {/* RIGHT: Animated Simulated Dashboard Preview Window */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative border border-zinc-200 bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] min-h-[300px]"
            >
              {/* OS Browser Control bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-50 border-b border-zinc-150">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-rose-400 rounded-full border border-rose-500/10" />
                  <span className="w-2.5 h-2.5 bg-amber-400 rounded-full border border-amber-500/10" />
                  <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full border border-emerald-500/10" />
                </div>
                <div className="px-3 py-0.5 bg-zinc-100 border border-zinc-200/60 rounded text-[9px] text-zinc-450 font-mono">
                  localmind-os://active-workspace/{slides[activeSlide].mockupType}
                </div>
                <span className="text-[8px] font-mono text-zinc-450 font-bold tracking-wider">SECURED</span>
              </div>

              {/* Live Slide Mockup */}
              <div className="min-h-[250px] flex items-center justify-center bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full"
                  >
                    {renderMockup(slides[activeSlide].mockupType)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
