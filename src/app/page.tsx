import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import Demo from "@/components/Demo";
import Comparison from "@/components/Comparison";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Navbar />
      
      {/* Full-width Main Page Sections */}
      <Hero />
      
      <Features />
      
      <Architecture />
      
      <Demo />
      
      <Comparison />
      
      <About />
      
      <Contact />
      
      {/* Footer & Compliance portal */}
      <Footer />
    </>
  );
}
