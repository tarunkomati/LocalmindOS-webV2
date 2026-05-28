"use client";

import { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Architecture", href: "#architecture" },
    { name: "Demo", href: "#demo" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/75 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm shadow-zinc-100"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo matching screenshot visually */}
          <a
            href="#home"
            className="flex items-center gap-3 group transition-transform duration-200 active:scale-95 animate-none"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <LocalMindLogo className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-lg tracking-tight text-zinc-900">
                LocalMind
              </span>
              <span className="font-medium text-lg tracking-tight text-accent-blue">
                OS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-zinc-100/50 border border-zinc-200/40 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-zinc-600 rounded-full transition-colors hover:text-zinc-900 hover:bg-zinc-200/40"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons matching screenshot exactly */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-650 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300 rounded-xl bg-zinc-50/50 backdrop-blur-xs transition-all shadow-xs"
              aria-label="View Github Repository"
            >
              <GithubIcon className="w-4 h-4 text-zinc-600" />
              GitHub
            </a>
            
            <a
              href="/app"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-accent-purple hover:bg-violet-600 rounded-xl shadow-md shadow-purple-500/10 transition-all duration-200 active:scale-95"
            >
              <Rocket className="w-3.5 h-3.5 fill-white" />
              Launch App
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-500 hover:text-zinc-900 border border-zinc-200/60 rounded-lg bg-zinc-50/60"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 md:hidden p-6 mx-4 bg-white/95 border border-zinc-200/80 rounded-2xl backdrop-blur-2xl shadow-xl shadow-zinc-200/40 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-semibold text-zinc-600 hover:text-zinc-900 rounded-xl hover:bg-zinc-50 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <hr className="border-zinc-100" />

            <div className="flex items-center justify-between gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-zinc-600 hover:text-zinc-900 border border-zinc-200/60 rounded-xl bg-zinc-50 hover:bg-zinc-100 transition-all"
              >
                <GithubIcon className="w-4.5 h-4.5" />
                GitHub
              </a>

              <a
                href="/app"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-accent-purple rounded-xl shadow-md shadow-purple-500/10 active:scale-95 transition-all"
              >
                <Rocket className="w-4.5 h-4.5" />
                Launch App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
