'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { 
  Globe, 
  Zap, 
  Play, 
  Clock, 
  Shield, 
  Brain, 
  Target, 
  MessageCircle,
  Menu,
  X,
  Phone,
  Home as HomeIcon
} from 'lucide-react';
import dynamic from 'next/dynamic';
const SplineScene = dynamic(() => import('@/components/ui/splite').then(mod => mod.SplineScene), { ssr: false });
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { AuroraButton } from "@/components/ui/aurora-button";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "The AI agent they built handles 80% of our property inquiries now. Our sales team is finally focusing only on warm leads.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    name: "Rahul Sharma",
    role: "Director, Apex Real Estate",
  },
  {
    text: "We got our new 3D website live in exactly 6 days. The aesthetic is incredibly premium, and it has already increased our conversion rate by 24%.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
    name: "Priya Desai",
    role: "Founder, Elevate Design",
  },
  {
    text: "The n8n automation flow connected our CRM with WhatsApp seamlessly. Zero dropped leads since we implemented this system.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
    name: "Vikram Mehta",
    role: "Head of Growth, Scale Properties",
  },
  {
    text: "Their Instagram management isn't just posting. It's an entire AI content machine. We hit 10k engaged followers in 3 months.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    name: "Ananya Patel",
    role: "CEO, Lux Interiors",
  },
  {
    text: "Transparent, fast, and highly technical. They didn't just build a website; they built a completely automated sales funnel.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    name: "Arjun Singh",
    role: "Founder, Capital Ventures",
  },
  {
    text: "I was skeptical about AI calling, but the voice agent sounds completely natural. It books our property viewings 24/7.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=150&auto=format&fit=crop",
    name: "Neha Gupta",
    role: "Sales Head, Horizon Estates",
  },
  {
    text: "YG Digitals completely overhauled our digital presence. Their attention to design detail and AI integration is unmatched.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    name: "Aisha Khan",
    role: "Marketing Director",
  },
  {
    text: "The WhatsApp automation alone saved us two full-time hires. Every business needs this kind of infrastructure.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    name: "Rohan Patel",
    role: "Operations Manager",
  },
  {
    text: "If you want a futuristic website that actually drives revenue instead of just looking pretty, hire them immediately.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop",
    name: "Karan Johar",
    role: "E-commerce Founder",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile(); // Check on initial load
    window.addEventListener('resize', checkMobile, { passive: true });

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
      window.removeEventListener('resize', checkMobile);
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
            <a href="#services" className="text-sm font-medium text-[#888888] hover:text-white transition-colors">Services</a>
            <a href="#how-it-works" className="text-sm font-medium text-[#888888] hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm font-medium text-[#888888] hover:text-white transition-colors">Pricing</a>
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

        {/* Mobile menu uses opacity and pointer-events instead of translate to avoid address bar bugs */}
        <div className={`md:hidden fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center gap-8 z-40 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'}`}>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white">Services</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white">How It Works</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white">Pricing</a>
          <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white">About</a>
          <AuroraButton href="tel:+919817458931" onClick={() => setIsMobileMenuOpen(false)}>Book a Free Call</AuroraButton>
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919817458931?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20AI%20services%20for%20real%20estate." 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 z-50"
        aria-label="Contact on WhatsApp"
      >
        <WhatsAppIcon className="text-white" size={32} />
      </a>

      {/* SECTION 2 — HERO */}
      <section className="relative min-h-[100svh] flex flex-col justify-center pt-20 lg:pt-24 overflow-hidden">
        {/* Subtle ambient neon glow behind robot */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff]/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 w-full flex flex-col lg:flex-row items-center relative z-10">
          
          <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0 fade-in pt-12 lg:pt-0">
            <div className="inline-flex items-center justify-center border border-[#00f0ff]/30 text-[#00f0ff] py-1.5 px-4 rounded-full text-xs font-bold bg-[#00f0ff]/5 mb-8">
              AI Agency for Real Estate & SMBs
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="text-white block whitespace-nowrap">We Build the AI</span>
              <span className="text-white block">That</span>
              <span className="text-[#00f0ff] block whitespace-nowrap">Builds Your Business.</span>
            </h1>
            
            <p className="text-base md:text-lg text-[#888888] mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              From AI websites to WhatsApp automation and Instagram growth — everything your business needs, delivered in 5–7 days.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <AuroraButton href="tel:+919817458931">Book a Free Strategy Call</AuroraButton>
              <AuroraButton href="https://wa.me/919817458931?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services." className="min-w-[240px] bg-[#111] hover:bg-[#1a1a1a] border-[#25D366]/30" glowClassName="from-[#25D366] via-[#128C7E] to-[#25D366]">
                <span className="flex items-center justify-center gap-2"><WhatsAppIcon size={18} className="text-[#25D366]"/> Chat on WhatsApp</span>
              </AuroraButton>
            </div>



          </div>

          <div className="hidden lg:flex w-full lg:w-[55%] h-[400px] lg:h-[700px] relative fade-in delay-1 justify-center lg:justify-end">
            {mounted && !isMobile && (
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full max-w-[600px]"
              />
            )}
          </div>
        </div>

        {/* Ticker Strip */}
        <div className="absolute bottom-0 left-0 w-full bg-[#111111] border-y border-white/5 py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-8 px-4 text-sm font-medium text-[#888888] tracking-wider uppercase">
                <span>AI WEBSITES IN 5–7 DAYS</span>
                <span className="text-[#00f0ff]">·</span>
                <span>WHATSAPP AI AUTOMATION</span>
                <span className="text-[#00f0ff]">·</span>
                <span>META ADS MANAGEMENT</span>
                <span className="text-[#00f0ff]">·</span>
                <span>AI UGC VIDEOS</span>
                <span className="text-[#00f0ff]">·</span>
                <span>REAL ESTATE SPECIALISTS</span>
                <span className="text-[#00f0ff]">·</span>
                <span>n8n AUTOMATION</span>
                <span className="text-[#00f0ff]">·</span>
                <span>OFFICIAL WHATSAPP API</span>
                <span className="text-[#00f0ff]">·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR AI SERVICES */}
      <section id="services" className="py-20 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Three systems. One unfair advantage.</h2>
            <p className="text-lg text-[#888888] max-w-2xl mx-auto">
              Deploy intelligent infrastructure across web, automation, and social — built specifically for real estate businesses ready to scale.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px] min-h-[600px] w-full fade-in delay-1">
            
            {/* Card 1 */}
            <div 
              className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] transition-all duration-500 cursor-pointer flex-1 flex flex-col justify-end p-8 ${activeCard === 0 ? 'lg:flex-[2]' : 'hover:bg-[#1a1a1a]'}`}
              onMouseEnter={() => setActiveCard(0)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => window.location.href = '/services/ai-websites'}
            >
              <div className="absolute inset-0">
                <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" alt="Websites" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover opacity-20 mix-blend-luminosity" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00f0ff]/10 flex items-center justify-center">
                  <Globe className="text-[#00f0ff]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">AI Websites</h3>
                <p className={`text-[#888888] transition-all duration-500 ${activeCard === 0 || activeCard === null ? 'opacity-100 max-h-40' : 'lg:opacity-0 lg:max-h-0'}`}>
                  High-converting, 3D-capable websites delivered in 5–7 days. Hosting, SEO, and maintenance — all included.
                </p>
                <div className={`transition-all duration-500 overflow-hidden ${activeCard === 0 || activeCard === null ? 'opacity-100 max-h-20 mt-2' : 'lg:opacity-0 lg:max-h-0 lg:mt-0'}`}>
                   <a href="/services/ai-websites" className="text-[#00f0ff] font-medium flex items-center gap-2 hover:gap-3 transition-all">Learn More →</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] transition-all duration-500 cursor-pointer flex-1 flex flex-col justify-end p-8 ${activeCard === 1 ? 'lg:flex-[2]' : 'hover:bg-[#1a1a1a]'}`}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => window.location.href = '/services/ai-automation'}
            >
              <div className="absolute inset-0">
                <Image src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop" alt="Automation" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover opacity-20 mix-blend-luminosity" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00f0ff]/10 flex items-center justify-center">
                  <Zap className="text-[#00f0ff]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">AI Automation</h3>
                <p className={`text-[#888888] transition-all duration-500 ${activeCard === 1 || activeCard === null ? 'opacity-100 max-h-40' : 'lg:opacity-0 lg:max-h-0'}`}>
                  WhatsApp agents, AI calling, and custom n8n workflows that handle your customers 24/7 — no human needed.
                </p>
                <div className={`transition-all duration-500 overflow-hidden ${activeCard === 1 || activeCard === null ? 'opacity-100 max-h-20 mt-2' : 'lg:opacity-0 lg:max-h-0 lg:mt-0'}`}>
                   <a href="/services/ai-automation" className="text-[#00f0ff] font-medium flex items-center gap-2 hover:gap-3 transition-all">Learn More →</a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] transition-all duration-500 cursor-pointer flex-1 flex flex-col justify-end p-8 ${activeCard === 2 ? 'lg:flex-[2]' : 'hover:bg-[#1a1a1a]'}`}
              onMouseEnter={() => setActiveCard(2)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => window.location.href = '/services/instagram-meta'}
            >
              <div className="absolute inset-0">
                <Image src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop" alt="Instagram" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover opacity-20 mix-blend-luminosity" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00f0ff]/10 flex items-center justify-center">
                  <Play className="text-[#00f0ff]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Instagram & Meta</h3>
                <p className={`text-[#888888] transition-all duration-500 ${activeCard === 2 || activeCard === null ? 'opacity-100 max-h-40' : 'lg:opacity-0 lg:max-h-0'}`}>
                  AI-generated posts, reels, UGC videos, meta ads management, and a dedicated account manager — all in one.
                </p>
                <div className={`transition-all duration-500 overflow-hidden ${activeCard === 2 || activeCard === null ? 'opacity-100 max-h-20 mt-2' : 'lg:opacity-0 lg:max-h-0 lg:mt-0'}`}>
                   <a href="/services/instagram-meta" className="text-[#00f0ff] font-medium flex items-center gap-2 hover:gap-3 transition-all">Learn More →</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY US */}
      <section className="py-16 md:py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 fade-in">
            
            <div className="flex flex-col gap-4 items-center text-center">
              <Clock className="text-[#00f0ff]" size={32} />
              <h4 className="text-xl font-bold text-white">Delivered in 5–7 days</h4>
              <p className="text-[#888888] leading-relaxed">Not months. Not endless revisions. Fast, precise execution.</p>
            </div>

            <div className="flex flex-col gap-4 items-center text-center">
              <Shield className="text-[#00f0ff]" size={32} />
              <h4 className="text-xl font-bold text-white">Zero hidden costs</h4>
              <p className="text-[#888888] leading-relaxed">API fees, ad spend, and subscriptions are separate and always disclosed upfront.</p>
            </div>

            <div className="flex flex-col gap-4 items-center text-center">
              <Brain className="text-[#00f0ff]" size={32} />
              <h4 className="text-xl font-bold text-white">No tech knowledge needed</h4>
              <p className="text-[#888888] leading-relaxed">We handle everything. You focus on closing deals.</p>
            </div>

            <div className="flex flex-col gap-4 items-center text-center">
              <Target className="text-[#00f0ff]" size={32} />
              <h4 className="text-xl font-bold text-white">Built for real estate</h4>
              <p className="text-[#888888] leading-relaxed">Every system is designed around how property businesses actually grow.</p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section id="how-it-works" className="py-20 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 md:mb-20 text-center tracking-tight fade-in">How it works</h2>
          
          <div className="flex flex-col gap-16 md:gap-24 relative fade-in delay-1">
            
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute left-[50%] top-[10%] bottom-[10%] w-[1px] bg-white/10 z-0"></div>

            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10 w-full">
              <div className="md:w-1/2 flex justify-end">
                <div className="text-[5rem] md:text-[8rem] font-black text-white/5 pointer-events-none select-none leading-none">01</div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Discovery</h3>
                <p className="text-[#888888] leading-relaxed max-w-sm">
                  We audit your business, find automation opportunities, and map your complete growth strategy. Free, no commitment.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 relative z-10 w-full">
              <div className="md:w-1/2 flex justify-start">
                <div className="text-[5rem] md:text-[8rem] font-black text-white/5 pointer-events-none select-none leading-none">02</div>
              </div>
              <div className="md:w-1/2 text-center md:text-right">
                <h3 className="text-2xl font-bold text-white mb-4">Build</h3>
                <p className="text-[#888888] leading-relaxed max-w-sm ml-auto">
                  We design and deploy your AI website, automation flows, content systems, and ad campaigns — all in one sprint.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10 w-full">
              <div className="md:w-1/2 flex justify-end">
                <div className="text-[5rem] md:text-[8rem] font-black text-white/5 pointer-events-none select-none leading-none">03</div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Scale</h3>
                <p className="text-[#888888] leading-relaxed max-w-sm">
                  Your business runs on autopilot. Leads come in, queries get answered, content goes out — we manage everything ongoing.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — PRICING SNAPSHOT */}
      <section id="pricing" className="py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Transparent pricing. No surprises.</h2>
            <p className="text-lg text-[#888888] max-w-2xl mx-auto">
              Every third-party cost — APIs, ad spend, subscriptions — is paid directly by you. Our fees are always clear.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20 fade-in delay-1">
            
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 border-t-4 border-t-[#00f0ff] flex flex-col">
              <h3 className="text-xl font-bold text-white mb-6">AI Website</h3>
              <p className="text-sm text-[#888888] mb-2 uppercase tracking-widest font-medium">Starting from</p>
              <div className="text-4xl font-bold text-white mb-2">₹19,999</div>
              <p className="text-sm text-[#888888] mb-8">first year, all-inclusive</p>
              
              <ul className="flex flex-col gap-3 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-[#888888]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></div>
                  Hosting included
                </li>
                <li className="flex items-center gap-3 text-[#888888]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></div>
                  Maintenance included
                </li>
                <li className="flex items-center gap-3 text-[#888888]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></div>
                  SEO optimized
                </li>
              </ul>
              
              <a href="/services/ai-websites" className="text-[#00f0ff] font-medium flex items-center gap-2 hover:gap-3 transition-all mt-auto">See all plans →</a>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 border-t-4 border-t-[#00f0ff] flex flex-col">
              <h3 className="text-xl font-bold text-white mb-6">AI Automation</h3>
              <p className="text-sm text-[#888888] mb-2 uppercase tracking-widest font-medium">Starting from</p>
              <div className="text-4xl font-bold text-white mb-2">₹19,999</div>
              <p className="text-sm text-[#888888] mb-8">one-time setup</p>
              
              <ul className="flex flex-col gap-3 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-[#888888]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></div>
                  WhatsApp AI Agents
                </li>
                <li className="flex items-center gap-3 text-[#888888]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></div>
                  AI Calling Assistants
                </li>
                <li className="flex items-center gap-3 text-[#888888]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></div>
                  Custom n8n flows
                </li>
              </ul>
              
              <a href="/services/ai-automation" className="text-[#00f0ff] font-medium flex items-center gap-2 hover:gap-3 transition-all mt-auto">Learn More →</a>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 border-t-4 border-t-[#00f0ff] flex flex-col">
              <h3 className="text-xl font-bold text-white mb-6">Instagram & Meta</h3>
              <p className="text-sm text-[#888888] mb-2 uppercase tracking-widest font-medium opacity-0">Pricing</p>
              <div className="text-4xl font-bold text-white mb-2">Custom</div>
              <p className="text-sm text-[#888888] mb-8">tailored to your goals</p>
              
              <ul className="flex flex-col gap-3 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-[#888888]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></div>
                  Dedicated manager
                </li>
                <li className="flex items-center gap-3 text-[#888888]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></div>
                  AI content creation
                </li>
                <li className="flex items-center gap-3 text-[#888888]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></div>
                  Meta Ads management
                </li>
              </ul>
              
              <a href="/services/instagram-meta" className="text-[#00f0ff] font-medium flex items-center gap-2 hover:gap-3 transition-all mt-auto">See All Plans →</a>
            </div>

          </div>

          <div className="text-center fade-in delay-2 max-w-2xl mx-auto flex flex-col items-center">
            <p className="text-[#888888] font-medium mb-8 text-lg">Every engagement starts with a free strategy call.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
              <AuroraButton href="tel:+919817458931" className="min-w-[200px]">Book a Call</AuroraButton>
              <a href="https://wa.me/919817458931?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services." className="relative inline-flex items-center justify-center rounded-full bg-transparent px-6 py-3 text-[#25D366] font-bold tracking-wide transition-all border border-[#25D366]/40 hover:bg-[#25D366]/10 hover:scale-105 min-w-[200px]">
                Talk on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS (Animated Columns) */}
      <section className="bg-[#0a0a0a] py-20 md:py-32 border-t border-white/5 relative overflow-hidden">
        <div className="container z-10 mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[800px] mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center border border-[#00f0ff]/30 text-[#00f0ff] py-1.5 px-4 rounded-full text-xs font-bold bg-[#00f0ff]/5 mb-6 uppercase tracking-widest">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5">
              What our users say
            </h2>
            <p className="text-lg text-[#888888] mt-2 mb-10">
              See what real estate and digital businesses have to say about us.
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] h-[600px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={25} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[#00f0ff]/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#00f0ff]/10 blur-[120px] pointer-events-none rounded-full"></div>
        
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center relative z-10 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to put your business on autopilot?</h2>
          <p className="text-lg text-[#888888] mb-12">
            Join real estate businesses already scaling with AI. Get your free strategy call — no commitment, no jargon.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <AuroraButton href="https://wa.me/919817458931?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services." className="min-w-[240px]">Chat on WhatsApp</AuroraButton>
            <a href="tel:+919817458931" className="relative inline-flex items-center justify-center rounded-full bg-transparent px-6 py-3 text-white font-bold tracking-wide transition-all border border-white/20 hover:bg-white/5 hover:scale-105 min-w-[240px]">
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FOOTER */}
      <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            <div className="md:col-span-1">
              <a href="/" className="z-50 flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-[#00f0ff] to-[#0055ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                  <span className="font-black text-black text-sm tracking-tighter">YG</span>
                </div>
                <span className="font-extrabold text-xl tracking-widest text-white uppercase hidden sm:block">
                  Digitals
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
      `}</style>
    </div>
  );
}
