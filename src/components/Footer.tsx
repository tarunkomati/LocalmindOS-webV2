"use client";

import { Brain, ShieldCheck, Heart, Cpu } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200/65 py-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-8">
        
        {/* LOGO & Tagline */}
        <div className="flex flex-col gap-3.5 max-w-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <LocalMindLogo className="w-6 h-6" />
            </div>
            <span className="font-semibold text-zinc-800 tracking-wide">
              LocalMind OS
            </span>
          </div>
          
          <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
            Your Private AI Workspace. Fully Local. Fully Yours. Experience data sovereignty with secure RAG.
          </p>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-full font-mono text-[9px] text-emerald-700 font-bold tracking-wide shadow-xs self-start">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            ZERO TRACKERS • 100% OFFLINE
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          
          {/* Navigation */}
          <div className="flex flex-col gap-3 text-xs">
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
              Product
            </span>
            <a href="#features" className="text-zinc-500 hover:text-accent-purple font-semibold transition-colors">Features</a>
            <a href="#architecture" className="text-zinc-500 hover:text-accent-purple font-semibold transition-colors">Architecture</a>
            <a href="#demo" className="text-zinc-500 hover:text-accent-purple font-semibold transition-colors">Walkthrough</a>
          </div>

          {/* Social connections */}
          <div className="flex flex-col gap-3 text-xs">
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
              Developer
            </span>
            <a href="#about" className="text-zinc-500 hover:text-accent-purple font-semibold transition-colors">Tarun Komati</a>
            <a href="#contact" className="text-zinc-500 hover:text-accent-purple font-semibold transition-colors">Get in touch</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-accent-purple font-semibold transition-colors">GitHub Source</a>
          </div>

        </div>

      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-zinc-150 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-400">
        <span className="font-semibold">
          © {new Date().getFullYear()} LocalMind OS. Hand-crafted by Tarun Komati.
        </span>
        <span className="flex items-center gap-1 font-semibold">
          Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" /> & <Cpu className="w-3 h-3 text-accent-cyan" /> for the local AI revolution.
        </span>
      </div>
    </footer>
  );
}
