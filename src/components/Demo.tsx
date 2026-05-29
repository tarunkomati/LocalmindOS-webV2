"use client";

import { useState } from "react";
import { 
  Upload, Search, MessageSquare, Network, Cpu, Play, 
  FileText, ShieldCheck, HardDrive, CheckCircle2, RefreshCw
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Demo() {
  const [activeTab, setActiveTab] = useState<"Upload" | "Search" | "Chat" | "Graph" | "Models">("Upload");

  const tabs = [
    { id: "Upload", name: "Upload", icon: <Upload className="w-4 h-4" /> },
    { id: "Search", name: "Search", icon: <Search className="w-4 h-4" /> },
    { id: "Chat", name: "Chat", icon: <MessageSquare className="w-4 h-4" /> },
    { id: "Graph", name: "Graph", icon: <Network className="w-4 h-4" /> },
    { id: "Models", name: "Models", icon: <Cpu className="w-4 h-4" /> },
  ] as const;

  // Render mockup layouts inside the demo window (Light theme)
  const renderMockup = (type: "Upload" | "Search" | "Chat" | "Graph" | "Models") => {
    switch (type) {
      case "Upload":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 font-sans text-xs text-zinc-600 bg-white">
            {/* Left side - Dropzone */}
            <div className="border border-dashed border-zinc-200 bg-zinc-50/50 rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-3 transition-colors hover:border-zinc-300">
              <div className="w-12 h-12 rounded-full bg-accent-purple/5 flex items-center justify-center border border-accent-purple/10">
                <Upload className="w-6 h-6 text-accent-purple" />
              </div>
              <div>
                <p className="font-bold text-zinc-800 text-sm">Drop documents here</p>
                <p className="text-[10px] text-zinc-400 mt-1">PDF • DOCX • MD • TXT • HTML</p>
              </div>
              <button className="px-4 py-1.5 bg-white border border-zinc-200 text-zinc-750 rounded-full text-[11px] font-semibold hover:bg-zinc-50 hover:text-zinc-950 transition-all cursor-pointer mt-2 shadow-xs">
                Browse files
              </button>
            </div>

            {/* Right side - Queue/Recent */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-bold">RECENT</span>
              
              <div className="flex flex-col gap-3">
                {/* Item 1 */}
                <div className="p-4 bg-white border border-zinc-200/80 rounded-2xl flex items-center justify-between shadow-xs hover:border-zinc-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-accent-cyan" />
                    <div>
                      <p className="font-bold text-zinc-800 text-xs">research-paper.pdf</p>
                      <p className="text-[10px] text-zinc-400 font-mono mt-0.5">2.4 MB</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-250 rounded-full px-2.5 py-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                    Indexed
                  </span>
                </div>

                {/* Item 2 */}
                <div className="p-4 bg-white border border-zinc-200/80 rounded-2xl flex items-center justify-between shadow-xs hover:border-zinc-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-accent-purple" />
                    <div>
                      <p className="font-bold text-zinc-800 text-xs">q3-contract.docx</p>
                      <p className="text-[10px] text-zinc-400 font-mono mt-0.5">684 KB</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 border border-cyan-250 rounded-full px-2.5 py-0.5 flex items-center gap-1.5">
                    <RefreshCw className="w-3 h-3 text-cyan-600 animate-spin" />
                    Embedding
                  </span>
                </div>

                {/* Item 3 */}
                <div className="p-4 bg-white border border-zinc-200/80 rounded-2xl flex items-center justify-between shadow-xs hover:border-zinc-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-zinc-400" />
                    <div>
                      <p className="font-bold text-zinc-800 text-xs">meeting-notes.md</p>
                      <p className="text-[10px] text-zinc-400 font-mono mt-0.5">12 KB</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-250 rounded-full px-2.5 py-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                    Indexed
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case "Search":
        return (
          <div className="p-6 flex flex-col gap-4 font-sans text-xs text-zinc-650 bg-white">
            {/* Header search bar */}
            <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3">
              <Search className="w-4 h-4 text-zinc-400" />
              <input
                type="text"
                readOnly
                value="retrieval thresholds & latency"
                className="bg-transparent border-none text-xs text-zinc-700 font-mono focus:outline-none flex-grow"
              />
              <span className="text-[9px] px-2.5 py-0.5 bg-white border border-zinc-200 rounded-md font-mono text-zinc-500 font-semibold uppercase">
                FAISS Index
              </span>
            </div>

            {/* Results mock */}
            <div className="flex flex-col gap-3 overflow-y-auto no-scrollbar max-h-[220px]">
              <span className="font-mono text-[9px] text-zinc-450 uppercase tracking-widest font-bold">SIMILARITY MATCHES (2)</span>
              
              <div className="p-4 bg-zinc-50 border border-zinc-150 rounded-2xl flex flex-col gap-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-accent-cyan font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                    Cosine Similarity: 0.942
                  </span>
                  <span className="text-[9px] text-zinc-450 font-mono">spec_doc.pdf #chunk-14</span>
                </div>
                <p className="text-[11px] text-zinc-600 leading-relaxed font-medium">
                  “...The local RAG system maintains a <span className="bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 px-1.5 py-0.2 rounded font-bold font-mono">maximum indexing latency of 42ms</span> per PDF page. The similarity cosine threshold can be custom tuned in settings to prevent hallucination noise...”
                </p>
              </div>

              <div className="p-4 bg-zinc-50 border border-zinc-150 rounded-2xl flex flex-col gap-2 opacity-60 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-accent-purple font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-accent-purple rounded-full" />
                    Cosine Similarity: 0.814
                  </span>
                  <span className="text-[9px] text-zinc-450 font-mono">spec_doc.pdf #chunk-22</span>
                </div>
                <p className="text-[11px] text-zinc-600 leading-relaxed font-medium">
                  “...Vector index scans leverage optimized Intel AVX-512 and ARM Neon instructions, enabling semantic similarity matching speeds under 2.4 milliseconds...”
                </p>
              </div>
            </div>
          </div>
        );

      case "Chat":
        return (
          <div className="p-6 flex flex-col gap-4 font-sans text-xs text-zinc-650 bg-white">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-zinc-150 pb-3">
              <span className="font-mono text-[10px] text-zinc-450 uppercase font-bold tracking-widest">Secure Grounded Console</span>
              <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-250 px-2.5 py-0.5 rounded-full uppercase font-bold tracking-wider">
                Grounded Strict Mode
              </span>
            </div>

            {/* Conversation list */}
            <div className="flex-1 flex flex-col gap-3 min-h-[170px] overflow-y-auto no-scrollbar justify-end">
              <div className="p-3 bg-zinc-100 border border-zinc-200 text-zinc-800 rounded-2xl text-[11px] max-w-[80%] self-end font-semibold shadow-xs">
                Explain the vector chunking strategy.
              </div>
              
              <div className="p-4 bg-white border border-zinc-200 rounded-2xl text-[11px] max-w-[85%] self-start leading-relaxed text-zinc-700 font-medium shadow-sm flex flex-col gap-3">
                <p>
                  Documents are split into <span className="text-accent-cyan font-bold">500-token chunks</span> with a 50-token sliding overlap. This preserves paragraph context while minimizing local vector database indexing footprint.
                </p>
                
                <div className="flex items-center gap-1.5 pt-2.5 border-t border-zinc-150 text-[9px] font-mono text-zinc-400 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified citation:</span>
                  <span className="px-2 py-0.5 bg-[#0d9488]/5 border border-[#0d9488]/20 text-accent-cyan rounded-md font-bold">
                    architecture_overview.txt
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case "Graph":
        return (
          <div className="p-6 flex flex-col gap-4 font-sans text-xs text-zinc-650 bg-white relative overflow-hidden select-none">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-zinc-150 pb-3">
              <span className="font-mono text-[10px] text-zinc-455 uppercase font-bold tracking-widest">Knowledge Graph extraction</span>
              <span className="text-[9px] font-mono text-zinc-400 font-bold">Total Entities: 142 • Semantic Links: 348</span>
            </div>

            {/* Simulated interactive node web */}
            <div className="relative flex-1 min-h-[200px] bg-zinc-50 border border-zinc-200 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
              
              {/* Animated linking vector lines */}
              <svg className="absolute inset-0 w-full h-full overflow-visible" fill="none">
                <line x1="50%" y1="50%" x2="25%" y2="30%" stroke="rgba(124, 58, 237, 0.2)" strokeWidth="1.5" />
                <line x1="50%" y1="50%" x2="75%" y2="35%" stroke="rgba(13, 148, 136, 0.2)" strokeWidth="1.5" />
                <line x1="50%" y1="50%" x2="40%" y2="80%" stroke="rgba(37, 99, 235, 0.2)" strokeWidth="1.5" />
                <line x1="25%" y1="30%" x2="75%" y2="35%" stroke="rgba(0, 0, 0, 0.03)" strokeWidth="1" />
              </svg>

              {/* Core Node */}
              <div className="absolute p-3 bg-white border border-accent-cyan/60 text-[10px] font-mono text-accent-cyan rounded-xl shadow-md shadow-cyan-500/5 text-center font-bold z-10 animate-pulse">
                LocalMind OS
              </div>

              {/* Surrounding Nodes */}
              <div className="absolute top-[18%] left-[12%] p-2.5 bg-white border border-zinc-200 text-[9px] font-mono text-zinc-650 rounded-xl shadow-xs z-10 font-bold">
                📁 user_spec.pdf
              </div>
              <div className="absolute top-[22%] right-[12%] p-2.5 bg-white border border-zinc-200 text-[9px] font-mono text-zinc-650 rounded-xl shadow-xs z-10 font-bold">
                ⚙️ llama.cpp
              </div>
              <div className="absolute bottom-[12%] left-[30%] p-2.5 bg-white border border-zinc-200 text-[9px] font-mono text-zinc-650 rounded-xl shadow-xs z-10 font-bold">
                🧠 cosine_similarity
              </div>
            </div>
          </div>
        );

      case "Models":
        return (
          <div className="p-6 flex flex-col gap-4 font-sans text-xs text-zinc-650 bg-white">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-zinc-150 pb-3">
              <span className="font-mono text-[10px] text-zinc-450 uppercase font-bold tracking-widest">GGUF Model Hub</span>
              <span className="text-[10px] text-accent-purple font-mono font-bold">Active RAM: 5.8 GB</span>
            </div>

            {/* Model Warehouse List */}
            <div className="flex flex-col gap-3 overflow-y-auto no-scrollbar max-h-[220px]">
              {/* Active model */}
              <div className="p-4 bg-accent-cyan/5 border border-accent-cyan/25 rounded-2xl flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <HardDrive className="w-5 h-5 text-accent-cyan" />
                  <div>
                    <p className="font-bold text-zinc-800 text-xs">Llama-3-8B-Q4_K_M.gguf</p>
                    <p className="text-[10px] text-zinc-400 font-mono mt-0.5">4.8 GB • GGUF weights</p>
                  </div>
                </div>
                <span className="text-[9px] px-2.5 py-0.5 bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/25 rounded-md font-mono font-bold tracking-wider uppercase">
                  ACTIVE
                </span>
              </div>

              {/* Inactive loaded model */}
              <div className="p-4 bg-white border border-zinc-200 rounded-2xl flex items-center justify-between opacity-60 shadow-xs hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <HardDrive className="w-5 h-5 text-zinc-400" />
                  <div>
                    <p className="font-bold text-zinc-700 text-xs">Mistral-7B-Instruct.gguf</p>
                    <p className="text-[10px] text-zinc-400 font-mono mt-0.5">4.1 GB • Click to load</p>
                  </div>
                </div>
                <span className="text-[9px] px-2.5 py-0.5 bg-zinc-50 text-zinc-550 border border-zinc-200 rounded-md font-mono font-bold tracking-wider uppercase cursor-pointer hover:bg-zinc-100 hover:text-zinc-800 transition-colors">
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
    <section id="demo" className="py-24 bg-white relative border-t border-zinc-200/50 overflow-hidden">
      {/* Visual Radial Glow Accent */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] bg-radial-glow opacity-40 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header Block matching the screenshot exactly but in Light theme */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight mb-4 tracking-tight">
            See it in <span className="bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan bg-clip-text text-transparent">action.</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-500 font-semibold leading-relaxed max-w-2xl mx-auto">
            Walk through every surface of LocalMind OS — from dropping docs in to chatting with citations.
          </p>
        </div>

        {/* Tab row switcher matching the screenshot exactly but in Light theme */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
                  isActive
                    ? "bg-accent-purple text-white border border-accent-purple/20 shadow-lg shadow-purple-500/15"
                    : "bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300"
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Live Mockup Simulated OS Window Frame in Light theme */}
        <div className="w-full max-w-5xl border border-zinc-200/80 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
          
          {/* OS Header / Control Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-50 border-b border-zinc-150">
            {/* Left side: path name */}
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-zinc-500 font-mono select-none font-semibold">
                workspace.local / {activeTab.toLowerCase()}
              </span>
            </div>

            {/* Right side: window dots (red, yellow, green) */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-rose-450 rounded-full border border-rose-500/20" />
              <span className="w-2.5 h-2.5 bg-amber-450 rounded-full border border-amber-500/20" />
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full border border-emerald-500/20" />
            </div>
          </div>

          {/* Tab Mockup Display Area */}
          <div className="min-h-[300px] bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {renderMockup(activeTab)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Play Demo Button at the bottom of the section */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/Vinaykalacharla/LOCALMIND_OS_RELEASES/releases/download/v1.0.0/LocalMind.OS_1.1.14_x64-setup.exe"
            className="px-6 py-2.5 bg-accent-purple hover:bg-violet-600 text-white font-bold rounded-full shadow-lg shadow-purple-500/15 active:scale-95 transition-all text-xs inline-flex items-center gap-2 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            Watch Full Demo
          </a>
        </div>

      </div>
    </section>
  );
}
