"use client";

import { useState, useEffect, useRef } from "react";
import { 
  ArrowLeft, Inbox, Search, FileText, Cpu, ShieldCheck, 
  Send, HelpCircle, Sparkles, CheckCircle2, HardDrive, 
  Settings, Network, BookOpen, AlertCircle, Database
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LocalMindLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="neon-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="50%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#a78bfa" />
      </linearGradient>
      <linearGradient id="neon-glow-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    
    <g filter="drop-shadow(0px 2px 4px rgba(124, 58, 237, 0.15))">
      {/* Top Left Slab Column */}
      <path
        d="M60 12 L14 88 H32 L60 38 L60 12 Z"
        fill="url(#neon-grad)"
        stroke="#7c3aed"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Top Right Slab Column */}
      <path
        d="M60 12 L106 88 H88 L60 38 L60 12 Z"
        fill="url(#neon-glow-grad)"
        stroke="#8b5cf6"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Bottom Horizontal Slab Column */}
      <path
        d="M24 74 H96 L88 88 H32 L24 74 Z"
        fill="url(#neon-grad)"
        stroke="#6366f1"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Outer 3D Accent Border Slabs */}
      <path
        d="M60 18 L100 84"
        stroke="#c084fc"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M60 18 L20 84"
        stroke="#818cf8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Centered L letter */}
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fill="#6366f1"
        fontSize="20"
        fontWeight="900"
        fontFamily="sans-serif"
        className="select-none font-sans font-black"
      >
        L
      </text>
    </g>
  </svg>
);

interface ChatMessage {
  role: "user" | "assistant" | "system";
  text: string;
  citations?: string[];
  timestamp: string;
}

export default function WorkspaceApp() {
  // Navigation states
  const [activeTab, setActiveTab] = useState("Research");
  const [activeModel, setActiveModel] = useState("llama-3-8B");
  
  // Chat states
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingStage, setTypingStage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      role: "user",
      text: "Summarize the Q3 vendor contract and cite the indemnity clause.",
      timestamp: "12:04 PM"
    },
    {
      role: "assistant",
      text: "The vendor agrees to indemnify the buyer against IP claims arising from the deliverables.",
      citations: ["contract-q3.pdf #12", "addendum-a.pdf #4"],
      timestamp: "12:05 PM"
    }
  ]);
  
  // Interactive knowledge graph states
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isTyping]);

  // Model switching notification
  const [notification, setNotification] = useState<string | null>(null);
  const handleModelChange = (modelId: string) => {
    setActiveModel(modelId);
    setNotification(`Successfully loaded GGUF weight: ${modelId} into local VRAM.`);
    setTimeout(() => setNotification(null), 3500);
  };

  // Simulate local RAG responses
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isTyping) return;

    const userMsg = userInput.trim();
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    
    // Add user message
    setChatHistory(prev => [...prev, { role: "user", text: userMsg, timestamp: time }]);
    setUserInput("");
    setIsTyping(true);

    // Simulate RAG pipeline stages
    const stages = [
      "🔍 Querying FAISS dense vector index...",
      "🧠 Retrieving offline document chunks...",
      "⚡ Quantizing contextual embeddings...",
      "✍️ Local model synthesizing grounded response..."
    ];

    let stageIdx = 0;
    setTypingStage(stages[0]);

    const stageInterval = setInterval(() => {
      stageIdx++;
      if (stageIdx < stages.length) {
        setTypingStage(stages[stageIdx]);
      } else {
        clearInterval(stageInterval);
        
        // Final response generation
        let assistantText = "";
        let citations: string[] = [];

        // Simple custom responses based on keywords
        const lowerMsg = userMsg.toLowerCase();
        if (lowerMsg.includes("profit") || lowerMsg.includes("financial")) {
          assistantText = "According to financials_q4_confidential.csv, our Q4 operating profit margins stood at 28.4% (up 2.1% Q-o-Q), with a net operating profit of $1,240,500. This is fully optimized locally.";
          citations = ["financials_q4.csv #2", "q4_report.pdf #14"];
        } else if (lowerMsg.includes("patent") || lowerMsg.includes("legal")) {
          assistantText = "The patent draft (v3) specifies that the local vector chunking algorithms and FAISS indexing techniques constitute proprietary, air-gapped intellectual property under Section 4.2.";
          citations = ["patent_draft_v3.docx #8"];
        } else {
          assistantText = `I have searched the local directory. Based on your active research context, I found that we coordinate chunking parameters locally. The active model (${activeModel}) synthesized this securely without cloud API calls.`;
          citations = ["architecture_overview.txt #3", "localmind_core.js #42"];
        }

        setChatHistory(prev => [
          ...prev, 
          { 
            role: "assistant", 
            text: assistantText, 
            citations, 
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) 
          }
        ]);
        setIsTyping(false);
      }
    }, 1200);
  };

  // Node graph details
  const nodes = [
    { id: "Core", label: "LocalMind OS", x: 150, y: 100, color: "#8b5cf6", size: 16, type: "core" },
    { id: "Doc1", label: "contract-q3.pdf", x: 70, y: 70, color: "#a78bfa", size: 10, type: "document" },
    { id: "Doc2", label: "addendum-a.pdf", x: 230, y: 80, color: "#06b6d4", size: 10, type: "document" },
    { id: "Doc3", label: "financials_q4.csv", x: 90, y: 160, color: "#3b82f6", size: 10, type: "document" },
    { id: "Doc4", label: "patent_draft_v3.docx", x: 220, y: 150, color: "#ec4899", size: 10, type: "document" },
    { id: "Concept1", label: "indemnity_clause", x: 150, y: 180, color: "#06b6d4", size: 12, type: "concept" },
  ];

  const links = [
    { source: "Core", target: "Doc1" },
    { source: "Core", target: "Doc2" },
    { source: "Core", target: "Doc3" },
    { source: "Core", target: "Doc4" },
    { source: "Doc1", target: "Concept1" },
    { source: "Doc2", target: "Concept1" },
    { source: "Doc3", target: "Core" },
    { source: "Doc4", target: "Concept1" }
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-zinc-300 font-sans flex flex-col relative overflow-hidden select-none">
      
      {/* Background Ambience Radial Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-950/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-950/10 blur-[150px] pointer-events-none" />

      {/* Floating System Notifications */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-6 left-1/2 z-50 px-4 py-2.5 bg-zinc-900/95 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] rounded-xl shadow-xl flex items-center gap-2 backdrop-blur-md"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-pulse" />
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Utility Header */}
      <header className="px-6 py-4 bg-zinc-950/40 border-b border-zinc-900/80 flex items-center justify-between z-10 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-xs font-semibold rounded-lg hover:text-white transition-all group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Exit Workspace
          </a>
          <div className="h-4 w-px bg-zinc-800" />
          <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
            AIR-GAPPED COMPLIANCE PORTAL
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-zinc-500">Local Latency:</span>
          <span className="text-xs font-mono text-accent-cyan font-bold bg-accent-cyan/5 px-2 py-0.5 border border-accent-cyan/15 rounded-md">
            1.42ms
          </span>
        </div>
      </header>

      {/* MAIN APPLICATION VIEWPORT FRAME (Simulated OS Window) */}
      <main className="flex-1 p-4 md:p-6 flex items-center justify-center z-10">
        <div className="w-full max-w-7xl h-[calc(100vh-140px)] min-h-[580px] bg-[#0c0d12]/95 border border-zinc-850 rounded-2xl shadow-2xl flex flex-col overflow-hidden relative backdrop-blur-3xl">
          
          {/* OS Header / Title Bar */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-[#08090d] border-b border-zinc-900/80">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-1.5">
              <a href="/" className="w-3 h-3 bg-rose-500 rounded-full border border-rose-600/30 hover:opacity-85 transition-opacity" />
              <span className="w-3 h-3 bg-amber-500 rounded-full border border-amber-600/30" />
              <span className="w-3 h-3 bg-emerald-500 rounded-full border border-emerald-600/30" />
              <span className="text-[10px] text-zinc-500 font-mono ml-4 tracking-wide">
                localmind-os — workspace.local
              </span>
            </div>

            {/* Ingestion & Network Indicator */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              <span className="text-[10px] text-emerald-500 font-mono font-bold tracking-wide uppercase">
                Offline - Ready
              </span>
            </div>
          </div>

          {/* Application Layout: 3 Columns */}
          <div className="flex-1 flex overflow-hidden">
            
            {/* COLUMN 1: Workspace Sidebar */}
            <aside className="w-60 bg-[#090a0e]/50 border-r border-zinc-900/80 p-4 flex flex-col gap-6 justify-between select-none">
              
              {/* Workspace Navigation tab list */}
              <div className="flex flex-col gap-6">
                {/* Brand Logo Header */}
                <div className="flex items-center gap-2.5 pb-2.5 border-b border-zinc-900/50">
                  <LocalMindLogo className="w-6 h-6" />
                  <span className="font-extrabold text-sm text-white tracking-tight flex items-center gap-0.5 select-none">
                    LocalMind <span className="text-[#a78bfa] font-bold text-[10px]">OS</span>
                  </span>
                </div>

                <div>
                  <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-3 font-bold">
                    WORKSPACE
                  </span>
                  
                  <nav className="flex flex-col gap-1.5">
                    {[
                      { id: "Inbox", label: "Inbox", icon: <Inbox className="w-4 h-4" /> },
                      { id: "Research", label: "Research", icon: <Search className="w-4 h-4" /> },
                      { id: "Contracts", label: "Contracts", icon: <FileText className="w-4 h-4" /> },
                      { id: "Notes", label: "Notes", icon: <BookOpen className="w-4 h-4" /> },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-3 transition-all ${
                          activeTab === item.id
                            ? "bg-zinc-800/80 border border-zinc-700/50 text-white shadow-md shadow-zinc-950/20"
                            : "text-zinc-450 hover:text-zinc-200 hover:bg-zinc-900/40 border border-transparent"
                        }`}
                      >
                        {item.icon}
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Models Hot Swapper section */}
                <div>
                  <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-3 font-bold">
                    MODELS
                  </span>
                  
                  <div className="flex flex-col gap-1.5">
                    {[
                      { id: "llama-3-8B", label: "llama-3-8B", size: "4.8 GB" },
                      { id: "phi-3-mini", label: "phi-3-mini", size: "2.2 GB" },
                      { id: "qwen-2-7B", label: "qwen-2-7B", size: "4.1 GB" },
                    ].map((model) => (
                      <button
                        key={model.id}
                        onClick={() => handleModelChange(model.id)}
                        className={`w-full px-3.5 py-2.5 rounded-xl border transition-all flex items-center justify-between text-left ${
                          activeModel === model.id
                            ? "bg-[#8b5cf6]/5 border-[#8b5cf6]/20 text-[#a78bfa] font-bold"
                            : "bg-[#0c0d12]/30 border-zinc-900/80 hover:border-zinc-800 text-zinc-450 hover:text-zinc-300"
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="text-xs font-mono">{model.label}</span>
                          <span className="text-[9px] text-zinc-500 font-normal font-mono">{model.size}</span>
                        </div>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          activeModel === model.id ? "bg-emerald-500 animate-pulse" : "bg-zinc-700"
                        }`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar footer status specs */}
              <div className="p-3 bg-zinc-950/60 border border-zinc-900 rounded-xl flex items-center gap-2">
                <Database className="w-4 h-4 text-accent-purple shrink-0" />
                <div className="min-w-0">
                  <p className="text-[9px] font-mono text-zinc-450 font-bold uppercase tracking-wide leading-none">FAISS VEC STORE</p>
                  <p className="text-[10px] font-semibold text-zinc-300 truncate mt-0.5">FAISS-Grounded Engine</p>
                </div>
              </div>

            </aside>

            {/* COLUMN 2: Grounded Chat Console */}
            <section className="flex-1 bg-[#090a0d]/20 flex flex-col justify-between overflow-hidden">
              
              {/* Chat Column Header */}
              <div className="px-5 py-3 border-b border-zinc-900/80 bg-[#08090d]/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-400 font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-accent-purple" />
                  GROUNDED CHAT
                </span>
                
                <span className="text-[9px] font-mono text-accent-cyan bg-accent-cyan/5 px-2 py-0.5 border border-accent-cyan/15 rounded-md font-bold uppercase">
                  ACTIVE CONTEXT: {activeTab.toUpperCase()}
                </span>
              </div>

              {/* Conversation Log viewport */}
              <div className="flex-1 p-6 overflow-y-auto no-scrollbar flex flex-col gap-4">
                {chatHistory.map((message, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex flex-col gap-1 max-w-[85%] ${
                      message.role === "user" ? "self-end items-end" : "self-start items-start"
                    }`}
                  >
                    {/* Chat Bubble container */}
                    <div
                      className={`p-3.5 rounded-2xl text-[12px] leading-relaxed font-medium ${
                        message.role === "user"
                          ? "bg-[#1f1635] border border-[#3c2a65]/40 text-purple-100 shadow-md shadow-purple-950/5"
                          : "bg-zinc-900/80 border border-zinc-800/80 text-zinc-200 shadow-sm"
                      }`}
                    >
                      {message.text}
                    </div>

                    {/* Grounded Citation Highlights */}
                    {message.citations && (
                      <div className="flex items-center gap-1.5 mt-1.5 px-1 text-[9px] text-accent-cyan font-mono font-bold">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Sources cited:</span>
                        {message.citations.map((citation, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2 py-0.5 bg-[#0d9488]/5 border border-[#0d9488]/20 hover:border-[#0d9488]/40 text-accent-cyan rounded-full transition-colors cursor-pointer"
                          >
                            {citation}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Pipeline stage / Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="self-start flex flex-col gap-2 max-w-[85%]"
                  >
                    <div className="p-3 bg-zinc-900/40 border border-zinc-850 rounded-2xl flex items-center gap-2.5 text-xs text-zinc-400 font-medium">
                      <Cpu className="w-3.5 h-3.5 text-accent-purple animate-spin" />
                      <span>{typingStage}</span>
                    </div>
                  </motion.div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Chat Send Message form block */}
              <form onSubmit={handleSendMessage} className="p-4 bg-[#08090d]/60 border-t border-zinc-900/80">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask LocalMind anything..."
                    disabled={isTyping}
                    className="w-full bg-[#0a0b0e] border border-zinc-850 focus:border-accent-purple/50 rounded-xl px-4 py-3 text-xs text-zinc-200 placeholder-zinc-550 focus:outline-none pr-12 font-sans shadow-inner transition-colors"
                  />
                  
                  <button
                    type="submit"
                    disabled={isTyping || !userInput.trim()}
                    className={`absolute right-2 p-1.5 rounded-lg transition-all ${
                      userInput.trim() && !isTyping
                        ? "bg-accent-purple text-white hover:bg-violet-600 active:scale-95 shadow-md shadow-purple-500/10"
                        : "text-zinc-600 bg-transparent cursor-not-allowed"
                    }`}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>

            </section>

            {/* COLUMN 3: Knowledge Graph & Stats Panel */}
            <aside className="w-80 bg-[#090a0e]/50 border-l border-zinc-900/80 p-4 flex flex-col gap-4 overflow-hidden select-none">
              
              {/* Header Title */}
              <div className="flex items-center gap-1.5 border-b border-zinc-900/80 pb-2.5 mb-1">
                <Network className="w-4 h-4 text-accent-purple animate-pulse" />
                <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                  KNOWLEDGE GRAPH
                </span>
              </div>

              {/* Simulated Interactive D3-Style Network Graph */}
              <div className="relative flex-1 bg-zinc-950/60 border border-zinc-900/80 rounded-2xl flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
                
                {/* SVG Graph Layout */}
                <svg className="w-full h-full min-h-[190px] absolute inset-0 cursor-crosshair overflow-visible">
                  {/* Drawing node linking lines */}
                  {links.map((link, idx) => {
                    const sourceNode = nodes.find(n => n.id === link.source);
                    const targetNode = nodes.find(n => n.id === link.target);
                    if (!sourceNode || !targetNode) return null;
                    
                    const isSelected = selectedNode === link.source || selectedNode === link.target;
                    
                    return (
                      <line
                        key={idx}
                        x1={sourceNode.x}
                        y1={sourceNode.y}
                        x2={targetNode.x}
                        y2={targetNode.y}
                        stroke={isSelected ? "#8b5cf6" : "#27272a"}
                        strokeWidth={isSelected ? 1.5 : 1}
                        strokeOpacity={isSelected ? 0.7 : 0.3}
                        className="transition-all duration-300"
                      />
                    );
                  })}

                  {/* Rendering Nodes */}
                  {nodes.map((node) => {
                    const isSelected = selectedNode === node.id;
                    return (
                      <g 
                        key={node.id}
                        className="cursor-pointer group"
                        onClick={() => setSelectedNode(isSelected ? null : node.id)}
                      >
                        {/* Node Outer Pulsing Ring */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={node.size + 4}
                          fill="transparent"
                          stroke={node.color}
                          strokeWidth={1}
                          strokeOpacity={isSelected ? 0.5 : 0}
                          className="group-hover:stroke-opacity-40 transition-all duration-300"
                        />
                        
                        {/* Node Core circle */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={node.size - 2}
                          fill={isSelected ? "#ffffff" : node.color}
                          stroke={node.color}
                          strokeWidth={2}
                          className="transition-all duration-300"
                        />

                        {/* Hover Tooltip name inside SVG */}
                        <text
                          x={node.x}
                          y={node.y - node.size - 5}
                          textAnchor="middle"
                          fill={isSelected ? "#ffffff" : "#71717a"}
                          fontSize="8"
                          className="font-mono opacity-0 group-hover:opacity-100 group-hover:fill-zinc-300 transition-opacity duration-200 pointer-events-none select-none font-bold"
                        >
                          {node.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Legend indicator overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                    Core
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                    Documents
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899]" />
                    Concepts
                  </span>
                </div>
              </div>

              {/* Vector Statistics Dashboard cards grid */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Docs", value: "248", desc: "Total Files" },
                  { label: "Chunks", value: "12.4k", desc: "Embeddings" },
                  { label: "MRR", value: "0.87", desc: "IR Score" },
                ].map((stat, idx) => (
                  <div key={idx} className="p-3 bg-zinc-950/60 border border-zinc-900 rounded-xl flex flex-col justify-between shadow-xs">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider font-semibold leading-none">{stat.label}</span>
                    <span className="text-sm font-extrabold text-zinc-200 mt-1.5 leading-none">{stat.value}</span>
                    <span className="text-[8px] text-zinc-600 font-mono mt-1 font-semibold leading-none">{stat.desc}</span>
                  </div>
                ))}
              </div>

              {/* Secure Air-gap guarantee badge */}
              <div className="p-3.5 bg-zinc-950/40 border border-zinc-900/60 rounded-xl flex items-center gap-2.5 text-[9px] font-mono text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="leading-normal font-semibold">
                  All vector embedding parsing and chat inference occur exclusively on this device.
                </span>
              </div>

            </aside>

          </div>
        </div>
      </main>
      
    </div>
  );
}
