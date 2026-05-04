"use client"

import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone,
  Mail
} from 'lucide-react';
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { AuroraButton } from "@/components/ui/aurora-button";

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-[#00f0ff] selection:text-black flex flex-col font-sans">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* YG Digitals Modern Text Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#00f0ff] to-[#0055ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.5)]">
              <span className="font-black text-black text-sm tracking-tighter">YG</span>
            </div>
            <span className="font-extrabold text-xl tracking-widest text-white uppercase hidden sm:block">
              Digitals
            </span>
          </a>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="/#services" className="text-sm font-medium text-[#888888] hover:text-white transition-colors">Services</a>
            <a href="/#how-it-works" className="text-sm font-medium text-[#888888] hover:text-white transition-colors">How It Works</a>
            <a href="/#pricing" className="text-sm font-medium text-[#888888] hover:text-white transition-colors">Pricing</a>
            <a href="/about" className="text-sm font-medium text-[#888888] hover:text-white transition-colors">About</a>
            <AuroraButton href="tel:+919817458931" className="px-5 py-2 text-sm">Book a Free Call</AuroraButton>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 transition-transform duration-500 flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white">Services</a>
          <a href="/#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white">How It Works</a>
          <a href="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white">Pricing</a>
          <AuroraButton href="tel:+919817458931" onClick={() => setIsMobileMenuOpen(false)}>Book a Free Call</AuroraButton>
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919817458931?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services." 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 z-50"
        aria-label="Contact on WhatsApp"
      >
        <WhatsAppIcon className="text-white" size={32} />
      </a>

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-32 pb-24 md:pt-48 md:pb-32 px-4 md:px-8 max-w-[800px] mx-auto w-full">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
          Contact Us
        </h1>
        <div className="w-20 h-1 bg-[#00f0ff] mb-12"></div>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed mb-12 max-w-2xl">
          Ready to scale your real estate business with AI? Reach out to us directly or schedule a free strategy call.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-[#00f0ff]/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#00f0ff]/10 flex items-center justify-center mb-2">
              <Phone className="text-[#00f0ff]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white">Phone</h3>
            <p className="text-[#888888] mb-4">Call us directly</p>
            <a href="tel:+919817458931" className="text-[#00f0ff] font-bold text-lg hover:underline transition-all">
              +91 9817458931
            </a>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-[#00f0ff]/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#00f0ff]/10 flex items-center justify-center mb-2">
              <Mail className="text-[#00f0ff]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white">Email</h3>
            <p className="text-[#888888] mb-4">Drop us a message</p>
            <a href="mailto:yashgarg6564@gmail.com" className="text-[#00f0ff] font-bold text-lg hover:underline transition-all break-all">
              yashgarg6564@gmail.com
            </a>
          </div>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-4">Let's talk instantly</h2>
          <p className="text-[#888888] mb-8">Skip the forms. Message us on WhatsApp for a quick response.</p>
          <AuroraButton href="https://wa.me/919817458931?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services." className="min-w-[240px] bg-[#111] hover:bg-[#1a1a1a] border-[#25D366]/30" glowClassName="from-[#25D366] via-[#128C7E] to-[#25D366]">
            <span className="flex items-center justify-center gap-2"><WhatsAppIcon size={18} className="text-[#25D366]"/> Chat on WhatsApp</span>
          </AuroraButton>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
            
            <div className="flex flex-col gap-6">
              {/* YG Digitals Modern Text Logo */}
              <a href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-[#00f0ff] to-[#0055ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                  <span className="font-black text-black text-sm tracking-tighter">YG</span>
                </div>
                <span className="flex flex-col leading-none">
                  <span className="font-extrabold text-lg tracking-widest text-white uppercase">YG</span>
                  <span className="text-[10px] font-medium text-[#888888] uppercase tracking-widest">
                    Digitals
                  </span>
                </span>
              </a>
              <p className="text-[#888888] text-sm">The AI That Builds Your Business.</p>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-6">Services</h5>
              <ul className="flex flex-col gap-4 text-[#888888] text-sm">
                <li><a href="/services/ai-websites" className="hover:text-white transition-colors">AI Websites</a></li>
                <li><a href="/services/ai-automation" className="hover:text-white transition-colors">AI Automation</a></li>
                <li><a href="/services/instagram-meta" className="hover:text-white transition-colors">Instagram & Meta</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-6">Company</h5>
              <ul className="flex flex-col gap-4 text-[#888888] text-sm">
                <li><a href="/#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-6">Connect</h5>
              <div className="flex flex-col gap-4 items-start">
                <a href="https://wa.me/919817458931?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services." className="relative inline-flex items-center justify-center rounded-full bg-transparent px-6 py-2.5 text-white font-bold tracking-wide transition-all border border-[#25D366]/40 hover:bg-[#25D366]/10 hover:scale-105 text-sm gap-2">
                  <WhatsAppIcon size={16} className="text-[#25D366]" /> Chat on WhatsApp
                </a>
                <a href="tel:+919817458931" className="relative inline-flex items-center justify-center rounded-full bg-transparent px-6 py-2.5 text-white font-bold tracking-wide transition-all border border-white/20 hover:bg-white/5 hover:scale-105 text-sm gap-2">
                  <Phone size={16} /> Talk to Sales
                </a>
              </div>
            </div>

          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#888888]">
            <p>© 2026 YG Digitals. All rights reserved.</p>
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
