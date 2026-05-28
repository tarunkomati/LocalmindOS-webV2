"use client";

import { useState } from "react";
import { Play, Shield, Cpu, FileText, CheckCircle2, RefreshCw, Terminal, Search, HelpCircle, Network, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero() {
  // Mock states for the interactive mockup
  const [activeModel, setActiveModel] = useState("Llama-3-8B-Q4_K_M");
  const [isIngesting, setIsIngesting] = useState(false);
  const [ingestedFiles, setIngestedFiles] = useState([
    { name: "medical_records_2026.pdf", size: "1.4 MB", status: "Indexed" },
    { name: "financials_q4_confidential.csv", size: "840 KB", status: "Indexed" },
  ]);
  const [vectorChunks, setVectorChunks] = useState(142);
  const [chatLog, setChatLog] = useState([
    {
      role: "user",
      text: "What was our Q4 operating profit margins?",
    },
    {
      role: "assistant",
      text: "According to your local file [financials_q4_confidential.csv](doc-1), Q4 operating profit margins stood at 28.4% (up 2.1% Q-o-Q), with a net operating profit of $1,240,500. This calculation excludes one-off depreciation charges.",
      citations: ["financials_q4_confidential.csv"],
    },
  ]);

  // Handle mock file ingestion
  const handleIngestFile = () => {
    if (isIngesting || ingestedFiles.some(f => f.name === "patent_draft_v3.docx")) return;
    
    setIsIngesting(true);
    setTimeout(() => {
      setIngestedFiles(prev => [
        ...prev,
        { name: "patent_draft_v3.docx", size: "2.1 MB", status: "Indexed" }
      ]);
      setVectorChunks(210);
      setIsIngesting(false);
      
      // Append mock success notification to chat log
      setChatLog(prev => [
        ...prev,
        {
          role: "assistant",
          text: "System Note: Securely parsed [patent_draft_v3.docx](doc-2). Extracted 68 paragraphs, generated 768-dimensional embeddings via SentenceTransformers, and loaded 68 new nodes into the local FAISS index.",
          citations: ["patent_draft_v3.docx"]
        }
      ]);
    }, 1800);
  };

  // Get metrics based on model selection
  const getModelMetrics = () => {
    switch (activeModel) {
      case "Llama-3-8B-Q4_K_M":
        return { ram: "5.8 GB", speed: "24.5 t/s", context: "8K" };
      case "Mistral-7B-v0.3":
        return { ram: "5.1 GB", speed: "28.2 t/s", context: "32K" };
      case "Phi-3-Mini-Instruct":
        return { ram: "2.8 GB", speed: "42.0 h/s", context: "4K" };
      default:
        return { ram: "5.8 GB", speed: "24.5 t/s", context: "8K" };
    }
  };

  const metrics = getModelMetrics();

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-radial-grid overflow-hidden">
      {/* Visual Radial Glow Accent (Light Mode) */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] bg-radial-glow pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Headline Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Centered Tagline Pill matching screenshot exactly in light mode */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-200 bg-zinc-50 rounded-full text-xs font-mono tracking-wide mb-8 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
            <span className="text-zinc-650 font-semibold">v1.0 — Local-first AI workspace</span>
            <span className="text-zinc-300 font-light">•</span>
            <span className="text-accent-cyan font-bold tracking-wide">No cloud. No tracking.</span>
          </motion.div>

          {/* Heading matching screenshot exactly in light mode */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-zinc-900 leading-[1.05] mb-8"
          >
            Your Private AI Workspace.<br />
            <span className="bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan bg-clip-text text-transparent">
              Fully Local. Fully Yours.
            </span>
          </motion.h1>

          {/* Subtitle matching screenshot exactly in light mode */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-500 font-normal leading-relaxed mb-10 max-w-3xl mx-auto px-4"
          >
            A local-first AI system for document ingestion, semantic retrieval, grounded chat, knowledge graphs, and offline model control — built for developers who care about privacy.
          </motion.p>

          {/* CTA Buttons matching screenshot exactly in light mode */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/app"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-accent-purple hover:bg-violet-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/15 hover:shadow-purple-500/25 active:scale-98 transition-all text-sm"
            >
              <Rocket className="w-4 h-4 fill-white" />
              Try Demo
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-700 hover:text-zinc-900 font-semibold rounded-full shadow-xs active:scale-98 transition-all text-sm"
            >
              <GithubIcon className="w-4 h-4" />
              View GitHub
            </a>
          </motion.div>
        </div>

        {/* Dashboard Mockup (Visual Highlight - macOS Light Mode style) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto border border-zinc-200/80 bg-white/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl overflow-hidden"
        >
          {/* Header OS Control bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-50 border-b border-zinc-150">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-rose-450 rounded-full border border-rose-500/20" />
              <span className="w-3 h-3 bg-amber-450 rounded-full border border-amber-500/20" />
              <span className="w-3 h-3 bg-emerald-450 rounded-full border border-emerald-500/20" />
              <span className="text-[10px] text-zinc-400 font-mono ml-4 select-none font-semibold">
                localmind_os_desktop_v1.0.4
              </span>
            </div>
            
            {/* Address Bar Simulation */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-zinc-100 border border-zinc-200/50 rounded-lg w-1/3 justify-center text-[10px] text-zinc-650 font-mono">
              <Shield className="w-3 h-3 text-emerald-600" />
              localhost:11434 (Fully Encrypted)
            </div>

            {/* Ingestion badge indicator */}
            <div className="flex items-center gap-2">
              <span className="inline-flex w-2 h-2 bg-emerald-600 rounded-full animate-ping" />
              <span className="text-[10px] text-emerald-600 font-mono uppercase tracking-wider font-bold">
                Local host active
              </span>
            </div>
          </div>

          {/* Grid Layout of OS */}
          <div className="grid grid-cols-1 md:grid-cols-4 min-h-[460px] text-sm font-sans">
            
            {/* COLUMN 1: Documents Ingestion Drawer */}
            <div className="bg-zinc-50/70 p-4 border-r border-zinc-200/60 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-500 font-mono tracking-wider uppercase">
                  📁 Document Store
                </span>
                <span className="text-[10px] px-1.5 py-0.5 bg-zinc-100 border border-zinc-200 text-accent-cyan font-mono rounded-md font-semibold">
                  {ingestedFiles.length} files
                </span>
              </div>

              {/* Ingestion Area */}
              <button
                onClick={handleIngestFile}
                disabled={isIngesting || ingestedFiles.some(f => f.name === "patent_draft_v3.docx")}
                className={`w-full py-3.5 px-3 border border-dashed rounded-xl flex flex-col items-center justify-center gap-1.5 text-center transition-all ${
                  isIngesting
                    ? "border-accent-purple/50 bg-accent-purple/5 text-accent-purple"
                    : ingestedFiles.some(f => f.name === "patent_draft_v3.docx")
                    ? "border-zinc-250 bg-zinc-100 text-zinc-400 cursor-not-allowed"
                    : "border-zinc-200 hover:border-accent-purple/40 hover:bg-zinc-100/30 bg-white text-zinc-650"
                }`}
              >
                {isIngesting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-accent-purple" />
                    <span className="text-[11px] font-mono font-bold text-accent-purple">Embedding document...</span>
                  </>
                ) : ingestedFiles.some(f => f.name === "patent_draft_v3.docx") ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                    <span className="text-[11px] font-mono font-semibold">All Mock Files Loaded</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 text-accent-purple" />
                    <span className="text-xs font-bold text-zinc-800">Secure Add File</span>
                    <span className="text-[9px] text-zinc-450 font-mono">Simulate patent_draft.docx</span>
                  </>
                )}
              </button>

              {/* Ingested File List */}
              <div className="flex-1 flex flex-col gap-2 overflow-y-auto no-scrollbar">
                {ingestedFiles.map((file, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-white border border-zinc-200/80 rounded-xl flex items-start gap-2.5 shadow-sm"
                  >
                    <FileText className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold text-zinc-800 truncate leading-tight">
                        {file.name}
                      </p>
                      <div className="flex items-center justify-between text-[9px] text-zinc-450 font-mono mt-1">
                        <span>{file.size}</span>
                        <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                          {file.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vector Stats */}
              <div className="p-3 bg-white border border-zinc-200/80 rounded-xl font-mono text-[10px] shadow-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-zinc-455 font-semibold">Vector Index:</span>
                  <span className="text-accent-cyan font-bold">FAISS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-455 font-semibold">Total Chunks:</span>
                  <span className="text-zinc-800 font-bold">{vectorChunks}</span>
                </div>
              </div>
            </div>

            {/* COLUMN 2 & 3: Local Grounded Chat Interface */}
            <div className="md:col-span-2 p-4 flex flex-col gap-4 bg-white">
              <div className="flex items-center justify-between border-b border-zinc-150 pb-2">
                <span className="text-xs font-semibold text-zinc-700 font-mono flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-accent-purple" />
                  Grounded Chat Console
                </span>
                <span className="text-[9px] px-2 py-0.5 bg-emerald-50 border border-emerald-250 text-emerald-700 rounded-full font-mono font-bold uppercase">
                  ✓ Trust Guard Active
                </span>
              </div>

              {/* Chat Viewport */}
              <div className="flex-1 flex flex-col gap-3 min-h-[250px] overflow-y-auto no-scrollbar">
                {chatLog.map((chat, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col gap-1 max-w-[85%] ${
                      chat.role === "user" ? "self-end items-end" : "self-start items-start"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-2xl text-[12px] leading-relaxed font-medium ${
                        chat.role === "user"
                          ? "bg-zinc-100 border border-zinc-200/50 text-zinc-800 shadow-sm"
                          : "bg-white border border-zinc-200/80 text-zinc-700 shadow-sm"
                      }`}
                    >
                      {chat.text}
                    </div>
                    {chat.citations && (
                      <div className="flex items-center gap-1.5 mt-1 px-1 text-[9px] text-accent-cyan font-mono font-bold">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                        <span>Sources cited:</span>
                        {chat.citations.map((c, i) => (
                          <span
                            key={i}
                            className="px-1 py-0.2 bg-zinc-50 border border-zinc-200 text-zinc-500 rounded-md font-semibold hover:text-zinc-900 transition-colors"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Prompt box mockup */}
              <div className="relative mt-auto">
                <input
                  type="text"
                  placeholder="Ask local model about your documents..."
                  readOnly
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-500 focus:outline-none pr-10 font-sans shadow-sm"
                />
                <Search className="absolute right-3.5 top-3 w-4 h-4 text-zinc-400" />
              </div>
            </div>

            {/* COLUMN 4: Active Model & Local Specs */}
            <div className="p-4 border-l border-zinc-200/60 bg-zinc-50/70 flex flex-col gap-4">
              <span className="text-xs font-semibold text-zinc-500 font-mono tracking-wider uppercase">
                ⚙️ Model Manager
              </span>

              {/* Model Select Options */}
              <div className="flex flex-col gap-2">
                {[
                  { id: "Llama-3-8B-Q4_K_M", label: "Llama 3 8B (Q4)" },
                  { id: "Mistral-7B-v0.3", label: "Mistral 7B" },
                  { id: "Phi-3-Mini-Instruct", label: "Phi-3 Mini (3.8B)" },
                ].map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setActiveModel(model.id)}
                    className={`w-full px-3 py-2 text-[11px] font-mono text-left rounded-lg border transition-all flex items-center justify-between ${
                      activeModel === model.id
                        ? "bg-accent-cyan/8 border-accent-cyan/30 text-accent-cyan font-bold"
                        : "bg-white border-zinc-200 text-zinc-655 hover:text-zinc-900 hover:bg-zinc-100"
                    }`}
                  >
                    <span>{model.label}</span>
                    {activeModel === model.id && (
                      <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse" />
                    )}
                  </button>
                ))}
              </div>

              {/* Resource Monitor */}
              <div className="mt-auto flex flex-col gap-2">
                <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase">
                  📊 Performance Monitor
                </span>

                <div className="p-3 bg-white border border-zinc-200/80 rounded-xl flex flex-col gap-2 font-mono text-[10px] shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-455 font-semibold">GGUF Engine:</span>
                    <span className="text-zinc-600 font-medium">llama.cpp</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-455 font-semibold">Active RAM:</span>
                    <span className="text-accent-purple font-bold">{metrics.ram}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-455 font-semibold">Inference speed:</span>
                    <span className="text-accent-cyan font-bold">{metrics.speed}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-455 font-semibold">Context Window:</span>
                    <span className="text-zinc-600 font-medium">{metrics.context}</span>
                  </div>
                </div>

                <div className="text-[9px] text-zinc-500 font-mono flex items-center gap-1.5 font-semibold">
                  <Cpu className="w-3.5 h-3.5 text-zinc-450" />
                  Metal/Vulkan GPU Enabled
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
