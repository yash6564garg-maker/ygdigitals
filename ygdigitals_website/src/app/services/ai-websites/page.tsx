'use client'

import React, { useEffect, useState } from 'react';
import { 
  Globe, 
  Zap, 
  Layout, 
  TrendingUp, 
  Clock, 
  UserCheck, 
  Search, 
  Building2, 
  ShoppingCart, 
  User, 
  Briefcase,
  MonitorSmartphone,
  ChevronRight,
  MessageCircle,
  Menu,
  X,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { AuroraButton } from "@/components/ui/aurora-button";
import Image from 'next/image';

export default function AIWebsitesPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Fade in animation observer
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach(element => observer.observe(element));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      fadeElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00f0ff]/30 font-sans">
      
      {/* Navigation (Sticky Mobile & Desktop) */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* YG Digitals Modern Text Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#00f0ff] to-[#0055ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.5)]">
              <span className="font-black text-black text-sm tracking-tighter">YG</span>
            </div>
            <span className="font-extrabold text-xl tracking-widest text-white uppercase hidden sm:block">
              Digitals
            </span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="/#services" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Services</a>
            <a href="/#how-it-works" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">How It Works</a>
            <a href="/about" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">About</a>
            <AuroraButton href="tel:+911171366819" className="py-2 px-5 text-sm">Let's Talk</AuroraButton>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden z-50 p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 transition-transform duration-500 flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-white">Services</a>
          <a href="/#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest text-white">How It Works</a>
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919588518385?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services." 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 z-50"
        aria-label="Contact on WhatsApp"
      >
        <WhatsAppIcon className="text-white" size={32} />
      </a>

      {/* Mobile Sticky CTA Container - visible mostly on scrolling down mobile screens if we want, but sticking to guidelines we make it prominent */}
      
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* SECTION 1: HERO SECTION */}
        <section className="container mx-auto px-4 md:px-8 relative mb-16 md:mb-24 lg:mb-40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-[#00f0ff] opacity-[0.05] blur-[120px] pointer-events-none rounded-full"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10 fade-in">
            <div className="inline-flex items-center justify-center border border-[#00f0ff]/30 text-[#00f0ff] py-1.5 px-4 rounded-full text-xs md:text-sm font-bold bg-[#00f0ff]/5 mb-6 md:mb-8 uppercase tracking-widest">
              Next-Gen Web Architecture
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.1]">
              Websites that <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#00ff9d]">think.</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed mb-10 md:mb-12 max-w-2xl mx-auto">
              We build intelligent, AI-powered websites that don't just look good — they learn, adapt, and convert visitors into customers automatically.
            </p>
            <AuroraButton href="tel:+911171366819" className="w-full sm:w-auto text-lg">Book a Strategy Call</AuroraButton>
          </div>
        </section>

        {/* SECTION 2: WHAT MAKES OUR WEBSITES DIFFERENT */}
        <section className="container mx-auto px-4 md:px-8 mb-16 md:mb-24 lg:mb-40 fade-in">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">What Makes Us Different</h2>
            <p className="text-zinc-400 md:text-lg max-w-2xl mx-auto">Beyond just aesthetics, our systems are engineered for peak performance.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-zinc-900/40 border border-white/5 p-8 md:p-10 rounded-3xl hover:border-[#00f0ff]/30 transition-all duration-500 group flex flex-col items-start active:scale-[0.98] cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#00f0ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <TrendingUp className="text-[#00f0ff]" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Algorithmic Conversion</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Our websites analyze user behavior in real time and dynamically adjust layouts and content to maximize conversions.
              </p>
            </div>
            
            <div className="bg-zinc-900/40 border border-white/5 p-8 md:p-10 rounded-3xl hover:border-[#00ff9d]/30 transition-all duration-500 group flex flex-col items-start active:scale-[0.98] cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#00ff9d]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Zap className="text-[#00ff9d]" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Self-Healing Infrastructure</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                AI-powered systems ensure performance, uptime, and scalability automatically. Zero manual maintenance required.
              </p>
            </div>
            
            <div className="bg-zinc-900/40 border border-white/5 p-8 md:p-10 rounded-3xl hover:border-white/30 transition-all duration-500 group flex flex-col items-start active:scale-[0.98] cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Layout className="text-white" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Aesthetic Dominance</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Premium visuals, dark mode native designs, and smooth micro-interactions that build instant trust with your visitors.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: HOW AI WEBSITES HELP BUSINESSES GROW */}
        <section className="container mx-auto px-4 md:px-8 mb-16 md:mb-24 lg:mb-40 fade-in">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
                Designed to scale your revenue.
              </h2>
              <p className="text-lg text-zinc-400 mb-8 md:mb-12">
                A website shouldn't just be a digital brochure. It should be your hardest-working salesperson.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00f0ff]/10 flex items-center justify-center shrink-0 mt-1">
                    <TrendingUp className="text-[#00f0ff]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Higher Conversion Rates</h4>
                    <p className="text-sm text-zinc-400">Data-driven layouts optimized to turn clicks into clients.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00f0ff]/10 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="text-[#00f0ff]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">24/7 Automated Sales</h4>
                    <p className="text-sm text-zinc-400">Smart funnels that capture leads and process sales around the clock.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00f0ff]/10 flex items-center justify-center shrink-0 mt-1">
                    <UserCheck className="text-[#00f0ff]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Personalized Experience</h4>
                    <p className="text-sm text-zinc-400">Content that adapts to user intent and browsing history.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00f0ff]/10 flex items-center justify-center shrink-0 mt-1">
                    <Search className="text-[#00f0ff]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Faster Load & SEO</h4>
                    <p className="text-sm text-zinc-400">Edge-network delivery ensuring lightning-fast speeds and top Google rankings.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual abstraction for the right side */}
            <div className="relative aspect-square md:aspect-[4/3] w-full rounded-[2.5rem] bg-zinc-900 border border-white/10 overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-transparent"></div>
               {/* Abstract Dashboard UI */}
               <div className="relative z-10 w-[80%] h-[80%] bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
                 <div className="w-full h-8 bg-white/5 rounded-lg"></div>
                 <div className="flex gap-4 h-32">
                   <div className="w-1/3 h-full bg-[#00f0ff]/20 rounded-lg border border-[#00f0ff]/20"></div>
                   <div className="w-2/3 h-full bg-[#00ff9d]/20 rounded-lg border border-[#00ff9d]/20"></div>
                 </div>
                 <div className="w-full h-full bg-white/5 rounded-lg flex items-end p-4 gap-2">
                   <div className="w-1/6 bg-[#00f0ff] h-[30%] rounded-t-sm"></div>
                   <div className="w-1/6 bg-[#00f0ff] h-[50%] rounded-t-sm"></div>
                   <div className="w-1/6 bg-[#00f0ff] h-[40%] rounded-t-sm"></div>
                   <div className="w-1/6 bg-[#00f0ff] h-[70%] rounded-t-sm"></div>
                   <div className="w-1/6 bg-[#00ff9d] h-[90%] rounded-t-sm shadow-[0_0_15px_#00ff9d]"></div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: TYPES OF AI WEBSITES */}
        <section className="container mx-auto px-4 md:px-8 mb-16 md:mb-24 lg:mb-40 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 md:mb-12">Built for every industry.</h2>
          
          <div className="relative overflow-hidden w-full -mx-4 px-4 md:mx-0 md:px-0 pb-8 group">
            <div className="flex w-max gap-4 md:gap-6 animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
              
              {[1, 2].map((loopIndex) => (
                <React.Fragment key={loopIndex}>
                  <div className="w-[260px] md:w-[280px] bg-zinc-900/60 border border-white/5 p-6 rounded-3xl shrink-0 hover:bg-zinc-800/60 transition-colors">
                    <Building2 className="text-zinc-300 mb-4" size={28} />
                    <h3 className="text-lg font-bold mb-2">Business Sites</h3>
                    <p className="text-zinc-500 text-xs">Corporate presence with automated lead generation.</p>
                  </div>
                  
                  <div className="w-[260px] md:w-[280px] bg-zinc-900/60 border border-white/5 p-6 rounded-3xl shrink-0 hover:bg-zinc-800/60 transition-colors">
                    <MonitorSmartphone className="text-zinc-300 mb-4" size={28} />
                    <h3 className="text-lg font-bold mb-2">Landing Pages</h3>
                    <p className="text-zinc-500 text-xs">High-conversion funnels optimized for ad campaigns.</p>
                  </div>
                  
                  <div className="w-[260px] md:w-[280px] bg-zinc-900/60 border border-white/5 p-6 rounded-3xl shrink-0 hover:bg-zinc-800/60 transition-colors">
                    <ShoppingCart className="text-zinc-300 mb-4" size={28} />
                    <h3 className="text-lg font-bold mb-2">E-commerce</h3>
                    <p className="text-zinc-500 text-xs">AI-driven product recommendations and smart checkouts.</p>
                  </div>
                  
                  <div className="w-[260px] md:w-[280px] bg-zinc-900/60 border border-white/5 p-6 rounded-3xl shrink-0 hover:bg-zinc-800/60 transition-colors">
                    <User className="text-zinc-300 mb-4" size={28} />
                    <h3 className="text-lg font-bold mb-2">Personal Brand</h3>
                    <p className="text-zinc-500 text-xs">Premium portfolios that establish unparalleled authority.</p>
                  </div>
                  
                  <div className="w-[260px] md:w-[280px] bg-zinc-900/60 border border-white/5 p-6 rounded-3xl shrink-0 hover:bg-zinc-800/60 transition-colors">
                    <Briefcase className="text-zinc-300 mb-4" size={28} />
                    <h3 className="text-lg font-bold mb-2">SaaS Websites</h3>
                    <p className="text-zinc-500 text-xs">Feature showcases designed to drive free trials and demos.</p>
                  </div>
                </React.Fragment>
              ))}

            </div>
          </div>
        </section>

        {/* SECTION 5: SAMPLE WEBSITE SHOWCASE */}
        <section className="container mx-auto px-0 md:px-8 mb-16 md:mb-24 lg:mb-40 fade-in">
          <div className="px-4 md:px-0 mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Aesthetic Dominance.</h2>
            <p className="text-zinc-400">Experience premium design that feels alive.</p>
          </div>
          
          {/* Horizontal scroll gallery simulating phone mockups */}
          <div className="flex overflow-x-auto pb-10 px-4 md:px-0 gap-6 md:gap-10 snap-x snap-mandatory hide-scrollbar">
            {['/images/IMG_8634.webp', '/images/IMG_8635.webp', '/images/IMG_8636.webp', '/images/IMG_8637.webp'].map((imagePath, index) => (
              <div key={index} className="snap-center shrink-0 w-[280px] md:w-[320px] aspect-[9/19] rounded-[2.5rem] bg-zinc-900 border-4 border-zinc-800 relative overflow-hidden flex flex-col shadow-2xl">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20"></div>
                
                {/* Image Mockup */}
                <div className="relative w-full h-full z-10">
                  <Image 
                    src={imagePath} 
                    alt={`AI Website Mockup ${index}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 320px"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: HOW IT WORKS */}
        <section className="container mx-auto px-4 md:px-8 mb-16 md:mb-24 lg:mb-40 fade-in">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 md:mb-16 text-center">How It Works</h2>
            
            <div className="flex flex-col gap-8 md:gap-12 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute left-[2.25rem] top-10 bottom-10 w-0.5 bg-white/10 z-0"></div>
              
              {/* Step 1 */}
              <div className="flex gap-6 md:gap-10 relative z-10">
                <div className="shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full bg-black border border-white/20 flex items-center justify-center text-xl md:text-3xl font-bold text-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                  1
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-xl md:text-3xl font-bold mb-3">Strategy</h3>
                  <p className="text-zinc-400 md:text-lg leading-relaxed">
                    We analyze your business goals, target audience, and current funnels to design a tailored architectural blueprint.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex gap-6 md:gap-10 relative z-10">
                <div className="shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full bg-black border border-white/20 flex items-center justify-center text-xl md:text-3xl font-bold text-[#00ff9d] shadow-[0_0_20px_rgba(0,255,157,0.1)]">
                  2
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-xl md:text-3xl font-bold mb-3">Build</h3>
                  <p className="text-zinc-400 md:text-lg leading-relaxed">
                    Our engineering team develops the custom interface, integrating AI capabilities and dynamic components.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex gap-6 md:gap-10 relative z-10">
                <div className="shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full bg-black border border-white/20 flex items-center justify-center text-xl md:text-3xl font-bold text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  3
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-xl md:text-3xl font-bold mb-3">Optimize</h3>
                  <p className="text-zinc-400 md:text-lg leading-relaxed">
                    We deploy on edge networks and let the algorithmic systems take over, continuously A/B testing and self-improving.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 7: FINAL CTA */}
        <section className="container mx-auto px-4 md:px-8 fade-in">
          <div className="relative overflow-hidden bg-zinc-900 border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-center">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-[#00f0ff] opacity-[0.05] blur-[100px] pointer-events-none rounded-full"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">Ready to upgrade?</h2>
              <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed text-center mx-auto max-w-2xl">
                Stop settling for static websites. Build a system that grows your business dynamically, effortlessly, and beautifully.
              </p>
              
              <AuroraButton href="tel:+911171366819" className="w-full sm:w-auto text-lg md:text-xl">Book a Strategy Call</AuroraButton>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 8 — FOOTER */}
      <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-10 mt-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            <div className="md:col-span-1">
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
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-6">Connect</h5>
              <div className="flex flex-col gap-4 items-start">
                <a href="https://wa.me/919588518385?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services." className="relative inline-flex items-center justify-center rounded-full bg-transparent px-6 py-2.5 text-white font-bold tracking-wide transition-all border border-[#25D366]/40 hover:bg-[#25D366]/10 hover:scale-105 text-sm gap-2">
                  <WhatsAppIcon size={16} className="text-[#25D366]" /> Chat on WhatsApp
                </a>
                <a href="tel:+911171366819" className="relative inline-flex items-center justify-center rounded-full bg-transparent px-6 py-2.5 text-white font-bold tracking-wide transition-all border border-white/20 hover:bg-white/5 hover:scale-105 text-sm gap-2">
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

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
