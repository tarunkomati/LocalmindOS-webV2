"use client";

import { Mail, Send, ArrowRight, HelpCircle } from "lucide-react";

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

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const contacts = [
    {
      name: "Direct Email",
      value: "localmindos@gmail.com",
      href: "mailto:localmindos@gmail.com",
      icon: <Mail className="w-5 h-5 text-accent-purple" />,
    },
    {
      name: "GitHub Developer",
      value: "github.com/tarunkomati",
      href: "https://github.com",
      icon: <GithubIcon className="w-5 h-5 text-accent-cyan" />,
    },
    {
      name: "LinkedIn Network",
      value: "linkedin.com/in/tarunkomati",
      href: "https://linkedin.com",
      icon: <LinkedinIcon className="w-5 h-5 text-accent-blue" />,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-zinc-50/60 relative border-t border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-accent-purple tracking-widest uppercase mb-4 font-bold">
            📬 Direct Inquiry
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-5">
            Let's build secure products together.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Contact Grids */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Quick Contact Cards */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {contacts.map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="group p-4 bg-white/70 border border-zinc-200 hover:border-accent-purple/35 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-3 bg-zinc-50 border border-zinc-150 rounded-xl group-hover:border-accent-purple/20 transition-colors">
                  {contact.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                    {contact.name}
                  </p>
                  <p className="text-xs font-bold text-zinc-700 group-hover:text-zinc-900 mt-0.5">
                    {contact.value}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-accent-cyan ml-auto transition-all group-hover:translate-x-1" />
              </a>
            ))}
          </div>

          {/* RIGHT: Quick message mockup form */}
          <div className="md:col-span-7 p-6 bg-white/70 border border-zinc-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-xl">
            <h3 className="text-sm font-bold text-zinc-800 mb-4 flex items-center gap-2 font-mono">
              <HelpCircle className="w-4 h-4 text-accent-cyan" />
              INQUIRY CONSOLE
            </h3>

            <div className="flex flex-col gap-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] text-zinc-400 uppercase font-semibold">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-accent-cyan/45 focus:bg-white font-sans transition-all shadow-xs"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] text-zinc-400 uppercase font-semibold">Your Email</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-accent-cyan/45 focus:bg-white font-sans transition-all shadow-xs"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-zinc-400 uppercase font-semibold">Message</label>
                <textarea
                  rows={4}
                  placeholder="Hey Tarun, let's discuss your AIML + Full Stack expertise..."
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-accent-cyan/45 focus:bg-white font-sans resize-none transition-all shadow-xs"
                />
              </div>

              <button
                type="button"
                className="mt-2 w-full py-3 px-4 bg-gradient-to-r from-accent-purple to-accent-cyan hover:opacity-90 text-white font-semibold rounded-xl flex items-center justify-center gap-2 active:scale-98 shadow-sm transition-all"
              >
                <Send className="w-4 h-4" />
                Dispatch Message
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
