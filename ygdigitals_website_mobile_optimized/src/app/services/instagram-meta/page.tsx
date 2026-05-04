'use client'

import React, { useEffect, useState } from 'react';
import { 
  MessageCircle,
  Menu,
  X,
  Phone,
  ArrowRight,
  Check,
  Sparkles,
  Target,
  Play,
  User,
  Calendar,
  PenTool,
  Video,
  Bookmark,
  Hash,
  ImageIcon,
  Activity,
  RefreshCw,
  FileText,
  Heart,
  Share2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Users,
  Shield
} from 'lucide-react';
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { AuroraButton } from "@/components/ui/aurora-button";

export default function InstagramMetaPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
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
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00f0ff]/30 font-sans">
      
      {/* SECTION 1 — NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex justify-between items-center relative z-50">
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
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`md:hidden fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center gap-8 z-40 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'}`}>
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

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[100svh] flex flex-col justify-center pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff]/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 w-full flex flex-col lg:flex-row items-center gap-12 relative z-10">
          
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left fade-in">
            <div className="inline-flex items-center justify-center border border-[#00f0ff]/30 text-[#00f0ff] py-1.5 px-4 rounded-full text-xs font-bold bg-[#00f0ff]/5 mb-8 uppercase tracking-widest">
              Instagram & Meta Management
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="text-white block">Content That Sells.</span>
              <span className="text-[#00f0ff] block">Ads That Convert.</span>
            </h1>
            
            <p className="text-base md:text-xl text-[#888888] mb-10 max-w-xl leading-relaxed">
              AI-generated posts, high-quality UGC videos, Meta ads management, and a dedicated account manager — everything your real estate brand needs to dominate social.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <AuroraButton href="tel:+919817458931">Get a Free Strategy Call</AuroraButton>
              <a href="#pillars" className="relative inline-flex items-center justify-center rounded-full bg-transparent px-6 py-3 text-white font-bold tracking-wide transition-all border border-white/20 hover:bg-white/5 hover:scale-105 min-w-[200px]">
                See What's Included
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm text-[#888888] font-medium">
              <span>AI Content</span>
              <span className="text-white/20 px-2">•</span>
              <span>Meta Ads</span>
              <span className="text-white/20 px-2">•</span>
              <span>UGC Videos</span>
              <span className="text-white/20 px-2">•</span>
              <span>Dedicated Manager</span>
            </div>
          </div>

          <div className="w-full lg:w-[45%] relative fade-in delay-1 flex justify-center items-center min-h-[400px]">
            {/* Mock Instagram Profile Grid */}
            <div className="relative w-full max-w-[360px] bg-[#111] rounded-[2rem] border border-white/10 p-4 shadow-[0_0_50px_rgba(0,240,255,0.05)] overflow-hidden">
              
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#0055ff] flex items-center justify-center shrink-0 border-2 border-white/10 relative p-0.5">
                  <div className="w-full h-full bg-[#111] rounded-full flex items-center justify-center">
                    <span className="text-xl font-black">RE</span>
                  </div>
                  {/* Story Ring */}
                  <div className="absolute inset-0 border-[3px] border-[#00f0ff] rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-lg leading-tight">@galaxyrealty</div>
                  <div className="flex justify-between text-xs text-[#888888] mt-1 pr-2">
                    <span className="font-medium text-white">89 <span className="font-normal text-[#888888]">posts</span></span>
                    <span className="font-medium text-white">1,247 <span className="font-normal text-[#888888]">followers</span></span>
                    <span className="font-medium text-white">142 <span className="font-normal text-[#888888]">following</span></span>
                  </div>
                </div>
              </div>

              {/* Grid 3x3 */}
              <div className="grid grid-cols-3 gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <div key={i} className={`aspect-square relative bg-[#1a1a1a] rounded overflow-hidden group animate-[fade-in-up_0.4s_ease-out_forwards]`} style={{animationDelay: `${i * 0.05}s`, opacity: 0}}>
                    {/* Abstract Real Estate Backgrounds */}
                    <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity transition-transform duration-500 group-hover:scale-110" 
                         style={{backgroundImage: `url('https://images.unsplash.com/photo-${1512917774080 + i}?q=80&w=400&auto=format&fit=crop')`}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80"></div>
                    
                    {/* Content Overlays */}
                    <div className="absolute inset-0 p-2 flex flex-col justify-end">
                      {i === 2 && <Play className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50" size={20} />}
                      {i === 5 && <div className="absolute top-2 right-2 flex gap-0.5"><div className="w-1 h-1 bg-white rounded-full"></div><div className="w-1 h-1 bg-white/50 rounded-full"></div></div>}
                      <span className="text-[9px] font-bold text-[#00f0ff] uppercase tracking-wider line-clamp-2">
                        {i % 3 === 0 ? "JUST SOLD" : i % 2 === 0 ? "NEW LISTING" : "MARKET UPDATE"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ticker Strip */}
        <div className="absolute bottom-0 left-0 w-full bg-[#111111] border-y border-white/5 py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-8 px-4 text-sm font-medium text-[#888888] tracking-wider uppercase">
                <span>AI CONTENT CREATION</span>
                <span className="text-[#00f0ff]">·</span>
                <span>META ADS MANAGEMENT</span>
                <span className="text-[#00f0ff]">·</span>
                <span>AI UGC VIDEOS</span>
                <span className="text-[#00f0ff]">·</span>
                <span>DEDICATED ACCOUNT MANAGER</span>
                <span className="text-[#00f0ff]">·</span>
                <span>CONTENT CURATION FOR VIRALITY</span>
                <span className="text-[#00f0ff]">·</span>
                <span>REAL ESTATE SPECIALISTS</span>
                <span className="text-[#00f0ff]">·</span>
                <span>MONTHLY STRATEGY CALLS</span>
                <span className="text-[#00f0ff]">·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROBLEM STATEMENT */}
      <section className="py-20 md:py-32 lg:py-48 bg-[#080808] relative overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 text-center flex flex-col gap-8 md:gap-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white fade-in">
            Your Instagram hasn't been posted on in 3 weeks.
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white fade-in delay-1">
            Your competitors are getting leads from Reels. You're not.
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white fade-in delay-2">
            You're spending on Meta ads but don't know what's working.
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white fade-in delay-3">
            You don't have time to make content — and it shows.
          </h2>
          
          <div className="mt-12 md:mt-20 fade-in delay-4" style={{transitionDelay: '600ms'}}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#00f0ff] italic drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              We fix all of this.
            </h2>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FOUR SERVICE PILLARS */}
      <section id="pillars" className="py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Everything your brand needs to dominate Instagram.</h2>
            <p className="text-lg text-[#888888] max-w-2xl mx-auto">
              One team. Four systems. Zero stress on your end.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 fade-in delay-1">
            
            {/* CARD 1 */}
            <div className="bg-[#111] border-t-2 border-t-[#00f0ff] rounded-[2rem] p-8 md:p-10 hover:bg-[#151515] transition-colors flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[#00f0ff]/10 flex items-center justify-center mb-6">
                <Sparkles className="text-[#00f0ff]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Content Creation</h3>
              <p className="text-[#888888] mb-8 leading-relaxed">
                Scroll-stopping posts, captions, reels, and stories — created with AI and curated by our team for maximum engagement.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">AI captions</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Reel concepts</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Story templates</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Hashtag strategy</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Monthly content calendar</span>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#111] border-t-2 border-t-[#00f0ff] rounded-[2rem] p-8 md:p-10 hover:bg-[#151515] transition-colors flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[#00f0ff]/10 flex items-center justify-center mb-6">
                <Target className="text-[#00f0ff]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Meta Ads Management</h3>
              <p className="text-[#888888] mb-8 leading-relaxed">
                Data-driven campaigns on Facebook and Instagram — built to generate real estate leads at the lowest possible cost.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto mb-4">
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Campaign setup</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Audience targeting</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">A/B testing</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Budget optimisation</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Monthly reporting</span>
              </div>
              <p className="text-[11px] text-[#555] italic">Ad spend paid directly by you to Meta</p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#111] border-t-2 border-t-[#00f0ff] rounded-[2rem] p-8 md:p-10 hover:bg-[#151515] transition-colors flex flex-col relative">
              <div className="absolute top-8 right-8 bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-bold text-xs uppercase tracking-widest py-1.5 px-4 rounded-full">
                ₹1,000/video
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#00f0ff]/10 flex items-center justify-center mb-6">
                <Play className="text-[#00f0ff]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 pr-32">AI UGC Videos</h3>
              <p className="text-[#888888] mb-8 leading-relaxed">
                Cinematic AI-generated videos for Reels and Shorts — property walkthroughs, market updates, and brand content.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">AI script</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Voiceover</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Branded overlays</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Delivered in 3–5 days</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Reels & Shorts ready</span>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#111] border-t-2 border-t-[#00f0ff] rounded-[2rem] p-8 md:p-10 hover:bg-[#151515] transition-colors flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[#00f0ff]/10 flex items-center justify-center mb-6">
                <Shield className="text-[#00f0ff]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Dedicated Account Manager</h3>
              <p className="text-[#888888] mb-8 leading-relaxed">
                A real human who knows your brand, your market, and your goals — and is accountable for your results.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Single point of contact</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Monthly strategy calls</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Real-time reporting</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Collaboration support</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — DEEP DIVE: AI CONTENT CREATION */}
      <section className="py-16 md:py-24 bg-[#0d0d0d] border-t border-white/5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: 2x3 Feed Mockup */}
          <div className="w-full lg:w-[48%] flex justify-center fade-in">
            <div className="w-full max-w-[340px] bg-[#0a0a0a] rounded-[2.5rem] border-[6px] border-[#1a1a1a] p-2 relative shadow-[0_0_50px_rgba(0,240,255,0.05)]">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1a1a1a] rounded-b-2xl z-20"></div>
              
              <div className="pt-8 pb-4 px-2 font-bold text-center border-b border-white/10 text-sm flex justify-between items-center">
                <ChevronLeft size={20} />
                @galaxyrealty
                <MoreHorizontal size={20} />
              </div>

              {/* 2x3 Feed Grid */}
              <div className="grid grid-cols-2 gap-1 p-1 h-[500px] overflow-hidden">
                {/* 1. Single Image */}
                <div className="aspect-[4/5] relative bg-[#111] rounded overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-luminosity"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00f0ff]/40 to-transparent mix-blend-overlay"></div>
                  <div className="absolute bottom-2 left-2 text-[8px] font-bold leading-tight drop-shadow-md">3BHK in Sector 45<br/>Ready to Move<br/>₹85L</div>
                </div>
                {/* 2. Carousel */}
                <div className="aspect-[4/5] relative bg-[#111] rounded overflow-hidden">
                  <div className="absolute top-2 right-2 flex gap-0.5"><div className="w-1 h-1 bg-white rounded-full"></div><div className="w-1 h-1 bg-white/50 rounded-full"></div></div>
                  <div className="absolute inset-0 flex items-center justify-center text-center p-2">
                    <span className="text-[10px] font-bold text-[#00f0ff] uppercase tracking-wider">5 reasons to invest in Noida</span>
                  </div>
                </div>
                {/* 3. Reel */}
                <div className="aspect-[4/5] relative bg-[#111] rounded overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                  <Play className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white shadow-lg" size={24} />
                  <div className="absolute bottom-2 left-2 text-[10px] font-bold drop-shadow-md">New Listing</div>
                </div>
                {/* 4. Quote */}
                <div className="aspect-[4/5] relative bg-[#1a1a1a] rounded overflow-hidden flex items-center justify-center p-3 text-center">
                  <span className="text-[10px] font-medium italic text-white/90">"The best time to invest in real estate was yesterday. The second best time is now."</span>
                </div>
                {/* 5. Story Mock */}
                <div className="aspect-[4/5] relative bg-[#111] rounded overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                  <div className="absolute top-2 left-2 flex items-center gap-1">
                    <div className="w-4 h-4 rounded-full bg-[#00f0ff] border border-white"></div>
                    <span className="text-[8px] font-bold">galaxyrealty</span>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] font-bold py-1 px-3 rounded-full flex items-center gap-1 whitespace-nowrap">
                    Book a site visit <ChevronRight size={10}/>
                  </div>
                </div>
                {/* 6. Market Update */}
                <div className="aspect-[4/5] relative bg-[#111] rounded overflow-hidden p-2 flex flex-col justify-center border border-[#00f0ff]/20">
                  <span className="text-[8px] text-[#888] uppercase font-bold tracking-widest mb-1">Market Update</span>
                  <span className="text-xl font-black text-[#00f0ff]">+12%</span>
                  <span className="text-[8px] text-white">Avg price YoY</span>
                  <span className="text-[8px] text-[#555] mt-1">Noida Q1 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature Breakdown */}
          <div className="w-full lg:w-[52%] fade-in delay-1">
            <div className="text-[#00f0ff] font-bold text-sm tracking-widest uppercase mb-4">AI Content Creation</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">We create content that stops the scroll.</h2>
            <p className="text-lg text-[#888888] mb-10 leading-relaxed">
              Your raw photos and videos, transformed into a month's worth of premium content — by AI and refined by our creative team.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex gap-4">
                <Calendar className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                <div>
                  <span className="font-bold text-lg text-white">Monthly content calendar</span>
                  <p className="text-[#888888] mt-1 text-sm">Planned 30 days ahead. Never scrambling for ideas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <PenTool className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                <div>
                  <span className="font-bold text-lg text-white">AI-generated captions with hooks</span>
                  <p className="text-[#888888] mt-1 text-sm">Written to grab attention in the first line.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Video className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                <div>
                  <span className="font-bold text-lg text-white">Viral reel concepts & scripts</span>
                  <p className="text-[#888888] mt-1 text-sm">Trend-aware ideas that work for real estate.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Bookmark className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                <div>
                  <span className="font-bold text-lg text-white">Story templates for saves</span>
                  <p className="text-[#888888] mt-1 text-sm">Designed to drive saves and shares, not just likes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Hash className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                <div>
                  <span className="font-bold text-lg text-white">Real estate hashtag strategy</span>
                  <p className="text-[#888888] mt-1 text-sm">Research-backed tags to reach active buyers.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <ImageIcon className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                <div>
                  <span className="font-bold text-lg text-white">Content curation & scheduling</span>
                  <p className="text-[#888888] mt-1 text-sm">We handle posting at peak engagement times.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#111] border border-white/5 border-l-4 border-l-[#00f0ff] p-6 text-sm text-[#ddd]">
              Raw content (photos and videos of your properties) is provided by you. We handle the creative execution — editing, scripting, captions, overlays, and scheduling — entirely.
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 — DEEP DIVE: META ADS MANAGEMENT */}
      <section className="py-16 md:py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col-reverse lg:flex-row items-center gap-16">
          
          {/* Left: Features */}
          <div className="w-full lg:w-[52%] fade-in">
            <div className="text-[#00f0ff] font-bold text-sm tracking-widest uppercase mb-4">Meta Ads Management</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Every rupee tracked. Every lead counted.</h2>
            <p className="text-lg text-[#888888] mb-10 leading-relaxed">
              We manage your Facebook and Instagram ad campaigns with one goal: qualified real estate leads at the lowest possible cost.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex gap-4">
                <Target className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                <div>
                  <span className="font-bold text-lg text-white">Hyper-targeted audiences</span>
                  <p className="text-[#888888] mt-1 text-sm">Reach homebuyers, investors, and NRIs based on location, income, and intent signals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Activity className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                <div>
                  <span className="font-bold text-lg text-white">A/B testing creatives</span>
                  <p className="text-[#888888] mt-1 text-sm">We test multiple ad formats to find what converts best for your market.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <BarChart3 className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                <div>
                  <span className="font-bold text-lg text-white">Daily budget optimisation</span>
                  <p className="text-[#888888] mt-1 text-sm">We shift budget toward winning ads in real time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <RefreshCw className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                <div>
                  <span className="font-bold text-lg text-white">Retargeting warm audiences</span>
                  <p className="text-[#888888] mt-1 text-sm">Re-engage people who viewed your listings but didn't enquire.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FileText className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                <div>
                  <span className="font-bold text-lg text-white">Monthly performance reports</span>
                  <p className="text-[#888888] mt-1 text-sm">Clear, jargon-free breakdowns of reach, leads, and cost.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <User className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                <div>
                  <span className="font-bold text-lg text-white">Dedicated ads manager</span>
                  <p className="text-[#888888] mt-1 text-sm">One expert managing your account, not a rotating team.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#111] border border-white/5 border-l-4 border-l-[#00f0ff] p-6 text-sm text-[#ddd]">
              Your ad spend is paid directly by you to Meta. YG Digitals charges only for campaign management. You always control your budget.
            </div>
          </div>

          {/* Right: Ads Dashboard Mockup */}
          <div className="w-full lg:w-[48%] fade-in delay-1">
            <div className="bg-[#111] rounded-[1.5rem] border border-white/10 p-6 shadow-[0_0_40px_rgba(0,240,255,0.05)] w-full max-w-[500px] mx-auto">
              
              <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
                  <Target size={16} className="text-white" />
                </div>
                <div className="font-bold text-lg">Ads Manager — Galaxy Realty</div>
              </div>

              {/* Campaign 1 */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="font-bold text-white text-sm mb-1">Sector 45 Launch — Lead Gen</div>
                    <div className="flex items-center gap-2 text-xs text-[#888]">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div> Active · Budget: ₹500/day
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-[#1a1a1a] p-2 rounded flex flex-col justify-center">
                    <span className="text-[10px] text-[#888] uppercase mb-1">Reach</span>
                    <span className="font-bold text-sm">48,200</span>
                  </div>
                  <div className="bg-[#1a1a1a] p-2 rounded flex flex-col justify-center border border-[#00f0ff]/20">
                    <span className="text-[10px] text-[#888] uppercase mb-1">Leads</span>
                    <span className="font-bold text-sm text-[#00f0ff]">142</span>
                  </div>
                  <div className="bg-[#1a1a1a] p-2 rounded flex flex-col justify-center">
                    <span className="text-[10px] text-[#888] uppercase mb-1">CPL</span>
                    <span className="font-bold text-sm">₹187</span>
                  </div>
                  <div className="bg-[#1a1a1a] p-2 rounded flex flex-col justify-center">
                    <span className="text-[10px] text-[#888] uppercase mb-1">ROAS</span>
                    <span className="font-bold text-sm text-green-400">4.2x</span>
                  </div>
                </div>
              </div>

              {/* Campaign 2 */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="font-bold text-white text-sm mb-1">Investor Audience — Retargeting</div>
                    <div className="flex items-center gap-2 text-xs text-[#888]">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div> Active · Budget: ₹300/day
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-[#1a1a1a] p-2 rounded flex flex-col justify-center">
                    <span className="text-[10px] text-[#888] uppercase mb-1">Reach</span>
                    <span className="font-bold text-sm">12,800</span>
                  </div>
                  <div className="bg-[#1a1a1a] p-2 rounded flex flex-col justify-center border border-[#00f0ff]/20">
                    <span className="text-[10px] text-[#888] uppercase mb-1">Leads</span>
                    <span className="font-bold text-sm text-[#00f0ff]">67</span>
                  </div>
                  <div className="bg-[#1a1a1a] p-2 rounded flex flex-col justify-center">
                    <span className="text-[10px] text-[#888] uppercase mb-1">CPL</span>
                    <span className="font-bold text-sm">₹143</span>
                  </div>
                  <div className="bg-[#1a1a1a] p-2 rounded flex flex-col justify-center">
                    <span className="text-[10px] text-[#888] uppercase mb-1">ROAS</span>
                    <span className="font-bold text-sm text-green-400">6.1x</span>
                  </div>
                </div>
              </div>

              {/* Chart Mockup */}
              <div className="border-t border-white/5 pt-6">
                <div className="text-[10px] text-[#888] uppercase mb-3 font-bold tracking-widest">Lead Volume (Last 4 Weeks)</div>
                <div className="flex items-end gap-2 h-20">
                  <div className="w-full bg-[#1a1a1a] rounded-t relative h-[40%]"><div className="absolute -top-5 text-[10px] text-[#888] w-full text-center">42</div></div>
                  <div className="w-full bg-[#1a1a1a] rounded-t relative h-[65%]"><div className="absolute -top-5 text-[10px] text-[#888] w-full text-center">78</div></div>
                  <div className="w-full bg-[#1a1a1a] rounded-t relative h-[85%]"><div className="absolute -top-5 text-[10px] text-[#888] w-full text-center">112</div></div>
                  <div className="w-full bg-[#00f0ff] rounded-t relative h-[100%] shadow-[0_0_10px_rgba(0,240,255,0.4)]"><div className="absolute -top-5 text-[10px] text-white font-bold w-full text-center">142</div></div>
                </div>
              </div>

              <div className="mt-6 text-[10px] text-[#555] text-center italic">
                Data shown is illustrative. Results vary by market and budget.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6 — DEEP DIVE: AI UGC VIDEOS */}
      <section className="py-20 md:py-32 bg-[#080808] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">AI videos that look human. Priced for real businesses.</h2>
            <p className="text-lg text-[#888888] max-w-2xl mx-auto">
              Professional-quality short videos for Instagram Reels and YouTube Shorts — powered by AI, delivered in 3–5 days.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left: Pricing & Included */}
            <div className="w-full lg:w-[55%] fade-in">
              <div className="text-[#00f0ff] font-bold text-sm tracking-widest uppercase mb-4">AI UGC Videos — ₹1,000 per video</div>
              
              <ul className="flex flex-col gap-4 mb-10 text-lg">
                <li className="flex items-start gap-4"><Check size={24} className="text-[#00f0ff] shrink-0 mt-0.5"/> AI-generated script tailored to your property</li>
                <li className="flex items-start gap-4"><Check size={24} className="text-[#00f0ff] shrink-0 mt-0.5"/> Professional AI voiceover (natural tone)</li>
                <li className="flex items-start gap-4"><Check size={24} className="text-[#00f0ff] shrink-0 mt-0.5"/> Property visuals with smooth motion</li>
                <li className="flex items-start gap-4"><Check size={24} className="text-[#00f0ff] shrink-0 mt-0.5"/> Branded text overlays and transitions</li>
                <li className="flex items-start gap-4"><Check size={24} className="text-[#00f0ff] shrink-0 mt-0.5"/> Optimised aspect ratio for Reels & Shorts</li>
                <li className="flex items-start gap-4"><Check size={24} className="text-[#00f0ff] shrink-0 mt-0.5"/> Delivered as MP4 in 3–5 business days</li>
              </ul>

              <div className="bg-[#111] border border-white/5 border-l-4 border-l-[#00f0ff] p-6 text-sm text-[#ddd] mb-10">
                We recommend a minimum of 3–4 videos per month for consistent Reels presence and algorithm momentum.
              </div>

              {/* Price CTA */}
              <div className="bg-[#111] border-2 border-[#00f0ff] p-8 rounded-2xl max-w-md shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                <div className="text-4xl font-bold text-[#00f0ff] mb-2">₹1,000 <span className="text-lg text-white font-normal">per video</span></div>
                <div className="font-bold text-lg mb-2">No retainer. No minimum commitment.</div>
                <p className="text-[#888888] text-sm mb-8">Order as many or as few as you need. Bulk discounts available for 10+ videos.</p>
                <AuroraButton href="tel:+919817458931" className="w-full text-center">Order AI UGC Videos</AuroraButton>
              </div>

            </div>

            {/* Right: Reel Mockup */}
            <div className="w-full lg:w-[45%] flex justify-center fade-in delay-1">
              <div className="relative">
                {/* Floating Metrics Cards */}
                <div className="absolute -left-6 md:-left-12 top-1/4 bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-2xl z-20 animate-[bounce_4s_infinite]">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Activity className="text-green-500" size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#888] font-bold">Reach</div>
                    <div className="font-bold text-lg text-white leading-none mt-1">45.2K</div>
                  </div>
                </div>

                <div className="absolute -right-6 md:-right-12 bottom-1/4 bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-2xl z-20 animate-[bounce_5s_infinite]" style={{animationDelay: '1s'}}>
                  <div className="w-10 h-10 rounded-full bg-[#00f0ff]/20 flex items-center justify-center shrink-0">
                    <Target className="text-[#00f0ff]" size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#888] font-bold">Engagement</div>
                    <div className="font-bold text-lg text-white leading-none mt-1">+214%</div>
                  </div>
                </div>
                {/* Reel Header */}
                <div className="absolute -top-16 left-0 w-full max-w-[320px] flex items-center justify-between z-10 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00f0ff] to-blue-500 p-[2px]">
                       <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center text-[10px] font-bold">RE</div>
                    </div>
                    <span className="font-bold text-sm">galaxyrealty</span>
                  </div>
                  <span className="text-xs font-bold bg-white text-black px-3 py-1 rounded-md">Follow</span>
                </div>

                {/* Video Player */}
                <div className="w-full max-w-[320px] h-[580px] bg-[#0a0a0a] rounded-[2.5rem] border-[6px] border-[#1a1a1a] relative shadow-[0_0_50px_rgba(0,240,255,0.05)] overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-70 mix-blend-luminosity"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40"></div>
                  
                  {/* Play Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                    <Play className="text-white fill-white ml-1" size={24} />
                  </div>

                  {/* Overlays */}
                  <div className="absolute bottom-6 left-4 right-16">
                    <div className="bg-black/60 backdrop-blur-sm border-l-[3px] border-[#00f0ff] p-3 rounded-r-lg mb-4">
                      <span className="text-sm font-bold text-white block mb-1">3BHK in Sector 45</span>
                      <span className="text-xs text-[#00f0ff] font-bold block mb-1">₹85L | Ready to Move</span>
                    </div>
                    <div className="flex gap-1 items-end h-6 w-32">
                      {/* Fixed wave array to avoid hydration error */}
                      {[15, 20, 12, 24, 18, 10, 22, 16, 20, 14].map((h, i) => (
                        <div key={i} className="w-1 bg-white/80 rounded-t-sm animate-[pulse_1s_ease-in-out_infinite_alternate]" style={{height: `${h}px`, animationDelay: `${i * 0.1}s`}}></div>
                      ))}
                    </div>
                  </div>

                  {/* Engagement Icons */}
                  <div className="absolute bottom-16 right-4 flex flex-col gap-6 items-center">
                    <div className="flex flex-col items-center gap-1"><Heart size={24} className="text-white hover:text-red-500 transition-colors cursor-pointer" /><span className="text-xs font-medium">1.2k</span></div>
                    <div className="flex flex-col items-center gap-1"><MessageCircle size={24} className="text-white hover:text-white/80 transition-colors cursor-pointer" /><span className="text-xs font-medium">84</span></div>
                    <div className="flex flex-col items-center gap-1"><Share2 size={24} className="text-white hover:text-white/80 transition-colors cursor-pointer" /><span className="text-xs font-medium">Share</span></div>
                    <div className="flex flex-col items-center gap-1"><MoreHorizontal size={24} className="text-white hover:text-white/80 transition-colors cursor-pointer" /></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7 — DEDICATED ACCOUNT MANAGER */}
      <section className="py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <div className="mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Your own social media expert. Always on.</h2>
            <p className="text-lg text-[#888888] max-w-2xl mx-auto">
              Every YG Digitals client gets a dedicated key account manager — one person who knows your brand, your goals, and your local real estate market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 fade-in delay-1">
            <div className="bg-[#111] p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#00f0ff]/10 flex items-center justify-center mb-6">
                <User className="text-[#00f0ff]" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-3">Single point of contact</h3>
              <p className="text-[#888888] text-sm">No bouncing between teams or shared inboxes. One person handles everything.</p>
            </div>
            
            <div className="bg-[#111] p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#00f0ff]/10 flex items-center justify-center mb-6">
                <Calendar className="text-[#00f0ff]" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-3">Monthly strategy calls</h3>
              <p className="text-[#888888] text-sm">Review performance, align on next month's content, and adjust targeting together.</p>
            </div>

            <div className="bg-[#111] p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#00f0ff]/10 flex items-center justify-center mb-6">
                <BarChart3 className="text-[#00f0ff]" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-3">Real-time reporting</h3>
              <p className="text-[#888888] text-sm">Ask for your numbers any time. No waiting for end-of-month summaries.</p>
            </div>

            <div className="bg-[#111] p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#00f0ff]/10 flex items-center justify-center mb-6">
                <Users className="text-[#00f0ff]" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-3">Collaboration support</h3>
              <p className="text-[#888888] text-sm">We work with your photographer, developer, or internal team — however you prefer.</p>
            </div>
          </div>

          <div className="fade-in delay-2">
            <p className="text-2xl md:text-3xl font-bold italic text-[#888888] tracking-tight">
              "Not a chatbot. Not a shared inbox. A real person dedicated to your growth."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — REAL ESTATE USE CASES */}
      <section className="py-20 md:py-32 bg-[#080808] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="mb-16 fade-in text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Built for real estate. Designed to convert.</h2>
            <p className="text-lg text-[#888888]">Here's what full-service social management actually looks like for a property business.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 fade-in delay-1">
            
            {/* SCENARIO 1 */}
            <div className="bg-[#111] border border-white/5 border-l-[3px] border-l-[#00f0ff] p-8 rounded-xl rounded-l-none flex flex-col">
              <div className="text-xs font-bold tracking-widest text-[#00f0ff] mb-4 uppercase">SCENARIO 01 — PROJECT LAUNCH</div>
              <p className="text-[#888888] mb-6 font-medium">"You're launching a new residential project and need buzz fast."</p>
              <p className="text-white font-bold text-lg mt-auto leading-relaxed">
                We create a full campaign: teaser reels, countdown stories, launch-day posts, and Meta lead gen ads targeting investors in your city — all coordinated for maximum impact on day one.
              </p>
            </div>

            {/* SCENARIO 2 */}
            <div className="bg-[#111] border border-white/5 border-l-[3px] border-l-[#00f0ff] p-8 rounded-xl rounded-l-none flex flex-col">
              <div className="text-xs font-bold tracking-widest text-[#00f0ff] mb-4 uppercase">SCENARIO 02 — SITE VISIT DRIVE</div>
              <p className="text-[#888888] mb-6 font-medium">"You need qualified site visit bookings from Meta ads this month."</p>
              <p className="text-white font-bold text-lg mt-auto leading-relaxed">
                We set up a video ad campaign targeting active homebuyers in your area. Lead form connects to WhatsApp for instant follow-up. Target: sub-₹200 CPL.
              </p>
            </div>

            {/* SCENARIO 3 */}
            <div className="bg-[#111] border border-white/5 border-l-[3px] border-l-[#00f0ff] p-8 rounded-xl rounded-l-none flex flex-col">
              <div className="text-xs font-bold tracking-widest text-[#00f0ff] mb-4 uppercase">SCENARIO 03 — BROKER BRAND BUILDING</div>
              <p className="text-[#888888] mb-6 font-medium">"You want to become the go-to broker in your area on Instagram."</p>
              <p className="text-white font-bold text-lg mt-auto leading-relaxed">
                Monthly content plan: market update reels, property spotlights, client success stories, and local area guides — all making you the trusted expert buyers follow.
              </p>
            </div>

            {/* SCENARIO 4 */}
            <div className="bg-[#111] border border-white/5 border-l-[3px] border-l-[#00f0ff] p-8 rounded-xl rounded-l-none flex flex-col">
              <div className="text-xs font-bold tracking-widest text-[#00f0ff] mb-4 uppercase">SCENARIO 04 — INVENTORY CLEARANCE</div>
              <p className="text-[#888888] mb-6 font-medium">"You have slow-moving units that need to sell before quarter-end."</p>
              <p className="text-white font-bold text-lg mt-auto leading-relaxed">
                Flash campaign: AI UGC video walkthrough + 5-day Meta retargeting push to warm audiences — designed to create urgency and move inventory fast.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9 — PRICING */}
      <section className="py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Transparent pricing. Built around your goals.</h2>
            <p className="text-lg text-[#888888] max-w-3xl mx-auto">
              Your Meta ad spend always goes directly to Meta — we never touch your ad budget. Our fee is purely for strategy, creation, and management.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-[900px] mx-auto mb-16 fade-in delay-1">
            
            {/* CARD 1 */}
            <div className="bg-[#111] border-t-2 border-t-[#00f0ff] border-x border-b border-white/5 rounded-3xl p-8 md:p-10 flex flex-col h-full mt-4 lg:mt-8">
              <h3 className="text-2xl font-bold text-white mb-6">AI UGC Videos</h3>
              
              <div className="mb-4">
                <div className="text-4xl font-bold text-[#00f0ff] mb-2">₹1,000 <span className="text-lg text-white font-normal">per video</span></div>
                <div className="text-sm font-bold text-[#888888]">No retainer. Order anytime.</div>
              </div>
              
              <div className="w-full h-[1px] bg-white/10 my-8"></div>
              
              <ul className="flex flex-col gap-4 mb-10 flex-grow text-sm text-[#888888]">
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> AI script & voiceover</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Branded visuals & overlays</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Delivered in 3–5 days</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Reels & Shorts optimised</li>
              </ul>
              
              <AuroraButton href="tel:+919817458931" className="w-full text-center">Order Videos</AuroraButton>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#111] border-2 border-[#00f0ff] shadow-[0_0_40px_rgba(0,240,255,0.05)] rounded-3xl p-8 md:p-10 flex flex-col h-full relative z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00f0ff] text-black font-bold text-xs uppercase tracking-widest py-1.5 px-4 rounded-full">
                Most Comprehensive
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Full Management</h3>
              
              <div className="mb-4">
                <div className="text-4xl font-bold text-[#00f0ff] mb-2">Custom</div>
                <div className="text-sm font-bold text-white">Tailored to your goals</div>
                <div className="text-sm text-[#888] mt-2">Includes content + ads + account manager + reporting</div>
              </div>
              
              <div className="w-full h-[1px] bg-white/10 my-8"></div>
              
              <ul className="flex flex-col gap-4 mb-8 flex-grow text-sm text-[#888888]">
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Dedicated account manager</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Monthly content calendar</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> AI posts, captions & reels</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Meta ads setup & management</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> A/B testing & optimisation</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Monthly performance report</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Collaboration assistance</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> AI UGC videos (add-on at ₹1,000/video)</li>
              </ul>

              <p className="text-xs text-[#555] italic mb-8">Ad spend paid by you directly to Meta</p>
              
              <AuroraButton href="tel:+919817458931" className="w-full text-center">Get Custom Proposal</AuroraButton>
            </div>

          </div>

          <div className="max-w-[700px] mx-auto bg-[#111] border border-white/5 border-l-4 border-l-[#00f0ff] p-8 md:p-10 rounded-2xl text-center fade-in delay-2 flex flex-col items-center">
            <p className="text-[#ddd] text-lg mb-8 leading-relaxed">
              Not sure what package fits your goals? Book a free 20-minute strategy call. We'll audit your current Instagram and Meta setup and give you a custom proposal within 24 hours — <strong className="text-white">no commitment required.</strong>
            </p>
            <a href="tel:+919817458931" className="text-[#00f0ff] font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all text-lg">
              Book Free Audit <ArrowRight size={20}/>
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section id="contact" className="py-20 md:py-32 bg-[#0a1a14] border-t border-[#00f0ff]/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-[#00f0ff] opacity-[0.03] blur-[120px] pointer-events-none rounded-full"></div>
        
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center relative z-10 fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Your brand deserves to be seen.</h2>
          <p className="text-lg md:text-xl text-[#888888] mb-12 leading-relaxed">
            Stop posting inconsistently and hoping for results. Let us build you a content and ads engine that generates real estate leads every single day.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <AuroraButton href="https://wa.me/919817458931?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services." className="min-w-[240px] bg-[#111] hover:bg-[#1a1a1a] border-[#25D366]/30" glowClassName="from-[#25D366] via-[#128C7E] to-[#25D366]">
              <span className="flex items-center justify-center gap-2"><WhatsAppIcon size={18} className="text-[#25D366]"/> Chat on WhatsApp</span>
            </AuroraButton>
            <a href="tel:+919817458931" className="relative inline-flex items-center justify-center rounded-full bg-transparent px-8 py-4 text-white font-bold tracking-wide transition-all border border-white/20 hover:bg-white/5 hover:scale-105 min-w-[240px]">
              Book a Free Strategy Call
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs font-bold text-[#555] uppercase tracking-widest">
            <span>Dedicated Account Manager</span>
            <span>·</span>
            <span>AI Content</span>
            <span>·</span>
            <span>Meta Ads</span>
            <span>·</span>
            <span>AI UGC Videos</span>
            <span>·</span>
            <span>Real Estate Specialists</span>
          </div>
        </div>
      </section>

      {/* SECTION 11 — FOOTER */}
      <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            <div className="md:col-span-1">
              <a href="/" className="flex items-center gap-2 mb-4">
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

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 100ms; }
        .delay-2 { transition-delay: 200ms; }
        .delay-3 { transition-delay: 300ms; }
        .delay-4 { transition-delay: 400ms; }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
