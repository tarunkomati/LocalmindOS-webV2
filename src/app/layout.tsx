import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SpotlightEffect from "@/components/SpotlightEffect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LocalMind OS | Private, Local-First AI Workspace",
  description:
    "An elegant local-first AI workspace for secure document ingestion, semantic search, grounded source-cited chat, interactive knowledge graphs, and offline GGUF model switching.",
  keywords: [
    "Local AI",
    "Private AI Workspace",
    "RAG System",
    "FAISS Embedding",
    "llama.cpp offline LLM",
    "Knowledge Graph AI",
    "Tarun Komati",
    "Developer Portfolio",
  ],
  authors: [{ name: "Tarun Komati", url: "https://skillsence.tarunkomati.in" }],
  openGraph: {
    title: "LocalMind OS | Private, Local-First AI Workspace",
    description:
      "Your private AI workspace. Fully local, fully yours. Experience semantic search, grounded chat, and local model switching.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="relative bg-white text-zinc-900 min-h-full font-sans antialiased overflow-x-hidden">
        {/* Hardware accelerated spotlight and reading progress tracking */}
        <SpotlightEffect />
        
        {/* Ambient Shifting Pastel Blobs (Light Mode compatible) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-purple/6 blur-[120px] pointer-events-none animate-blob" />
        <div className="absolute top-[40%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none animate-blob-reverse" />
        <div className="absolute bottom-[-5%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-accent-blue/5 blur-[130px] pointer-events-none animate-blob" />
        
        <main className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
