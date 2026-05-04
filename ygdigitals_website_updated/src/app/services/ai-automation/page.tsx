'use client'

import React, { useEffect, useState } from 'react';
import { 
  MessageCircle,
  Menu,
  X,
  Bot,
  CheckCircle2,
  Phone,
  Workflow,
  Clock,
  MessageSquare,
  Image as ImageIcon,
  Calendar,
  User,
  Shield,
  Mic,
  Star,
  ArrowRight,
  Database,
  Lock,
  Globe,
  Zap,
  Check,
  Brain
} from 'lucide-react';
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { AuroraButton } from "@/components/ui/aurora-button";

export default function AIAutomationPage() {
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
      
      {/* SECTION 1 — NAVBAR (Exact same as homepage) */}
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
      <section className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff]/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 w-full flex flex-col lg:flex-row items-center gap-12 relative z-10">
          
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left fade-in">
            <div className="inline-flex items-center justify-center border border-[#00f0ff]/30 text-[#00f0ff] py-1.5 px-4 rounded-full text-xs font-bold bg-[#00f0ff]/5 mb-8 uppercase tracking-widest">
              AI Automation
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="text-white block">Your Business,</span>
              <span className="text-white block">Running 24/7</span>
              <span className="text-[#00f0ff] block">— Without You.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#888888] mb-10 max-w-xl leading-relaxed">
              WhatsApp agents, AI calling, and custom automations built on n8n — so you never miss a lead, query, or follow-up again.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <AuroraButton href="tel:+919817458931">Book a Free Strategy Call</AuroraButton>
              <a href="#how-it-works" className="relative inline-flex items-center justify-center rounded-full bg-transparent px-6 py-3 text-white font-bold tracking-wide transition-all border border-white/20 hover:bg-white/5 hover:scale-105 min-w-[200px]">
                See How It Works
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm text-[#888888] font-medium">
              <span>Official WhatsApp API</span>
              <span className="text-white/20 px-2">•</span>
              <span>n8n Powered</span>
              <span className="text-white/20 px-2">•</span>
              <span>24/7 Uptime</span>
            </div>
          </div>

          <div className="w-full lg:w-[45%] relative fade-in delay-1 flex justify-center items-center min-h-[400px]">
            {/* Animated Flow Diagram */}
            <div className="relative w-full max-w-[400px] h-[300px] flex flex-col justify-between items-center">
              
              {/* Node 1 */}
              <div className="w-full flex justify-center z-10 relative">
                <div className="bg-[#111] border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-xl">
                  <div className="w-10 h-10 rounded-full bg-[#00f0ff]/10 flex items-center justify-center">
                    <WhatsAppIcon className="text-[#00f0ff]" size={20} />
                  </div>
                  <div className="text-sm font-bold">Customer Message</div>
                </div>
              </div>

              {/* Line 1 */}
              <div className="absolute top-[60px] w-[2px] h-[60px] bg-white/10 overflow-hidden">
                <div className="w-full h-full bg-[#00f0ff] animate-[flow_3s_linear_infinite] shadow-[0_0_10px_#00f0ff]"></div>
              </div>

              {/* Node 2 */}
              <div className="w-full flex justify-center z-10 relative mt-4">
                <div className="bg-[#111] border border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.15)] rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00f0ff]/20 flex items-center justify-center relative">
                    <Bot className="text-[#00f0ff] relative z-10" size={20} />
                    <div className="absolute inset-0 bg-[#00f0ff] rounded-full blur-md opacity-50 animate-pulse"></div>
                  </div>
                  <div className="text-sm font-bold">AI Agent (n8n)</div>
                </div>
              </div>

              {/* Line 2 */}
              <div className="absolute top-[190px] w-[2px] h-[60px] bg-white/10 overflow-hidden">
                <div className="w-full h-full bg-[#00f0ff] animate-[flow_3s_linear_infinite_1.5s] shadow-[0_0_10px_#00f0ff]"></div>
              </div>

              {/* Node 3 */}
              <div className="w-full flex justify-center z-10 relative mt-4">
                <div className="bg-[#111] border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-xl">
                  <div className="w-10 h-10 rounded-full bg-[#00f0ff]/10 flex items-center justify-center">
                    <CheckCircle2 className="text-[#00f0ff]" size={20} />
                  </div>
                  <div className="text-sm font-bold">Instant Reply + Action</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Ticker Strip */}
        <div className="absolute bottom-0 left-0 w-full bg-[#111111] border-y border-white/5 py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-8 px-4 text-sm font-medium text-[#888888] tracking-wider uppercase">
                <span>WHATSAPP OFFICIAL API</span>
                <span className="text-[#00f0ff]">·</span>
                <span>n8n POWERED AUTOMATION</span>
                <span className="text-[#00f0ff]">·</span>
                <span>24/7 ZERO DOWNTIME</span>
                <span className="text-[#00f0ff]">·</span>
                <span>REAL ESTATE SPECIALISTS</span>
                <span className="text-[#00f0ff]">·</span>
                <span>ZERO MISSED LEADS</span>
                <span className="text-[#00f0ff]">·</span>
                <span>CUSTOM WORKFLOWS</span>
                <span className="text-[#00f0ff]">·</span>
                <span>AI CALLING AGENT</span>
                <span className="text-[#00f0ff]">·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROBLEM STATEMENT */}
      <section className="py-32 md:py-48 bg-[#080808] relative overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 text-center flex flex-col gap-8 md:gap-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white fade-in">
            You miss leads while you sleep.
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white fade-in delay-1">
            Your team answers the same questions 50 times a day.
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white fade-in delay-2">
            Follow-ups fall through the cracks.
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white fade-in delay-3">
            Competitors respond faster — and win the deal.
          </h2>
          
          <div className="mt-12 md:mt-20 fade-in delay-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#00f0ff] italic drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              There's a better way.
            </h2>
          </div>
        </div>
      </section>

      {/* SECTION 3 — 3 AUTOMATION PRODUCTS OVERVIEW */}
      <section id="products" className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Three automations that change everything.</h2>
            <p className="text-lg text-[#888888] max-w-2xl mx-auto">
              Built on n8n. Powered by Official WhatsApp Business API. Managed entirely by YG Digitals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 fade-in delay-1">
            
            {/* CARD 1 */}
            <div className="bg-[#111] border-t-2 border-t-[#00f0ff] border-x border-b border-white/5 rounded-[2rem] p-8 hover:bg-[#151515] transition-colors flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-[#00f0ff]/10 flex items-center justify-center mb-8">
                <WhatsAppIcon className="text-[#00f0ff]" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">WhatsApp AI Agent</h3>
              <p className="text-[#888888] mb-8 leading-relaxed">
                A 24/7 AI receptionist on WhatsApp that handles leads, answers queries, sends property info, and books appointments — automatically.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Instant responses</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Lead qualification</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Appointment booking</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Brochure delivery</span>
              </div>

              <div className="mt-auto">
                <p className="text-white font-medium mb-1">Setup from ₹19,999 · ₹2,000/mo maintenance</p>
                <p className="text-xs text-[#555] mb-6">WhatsApp API cost ~₹500–1,000/mo paid by you</p>
                <a href="#whatsapp-agent" className="text-[#00f0ff] font-bold flex items-center gap-2 hover:gap-3 transition-all">Learn More <ArrowRight size={16}/></a>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#111] border border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.05)] rounded-[2rem] p-8 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00f0ff] text-black font-bold text-xs uppercase tracking-widest py-1.5 px-4 rounded-full">
                Most Requested
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#00f0ff]/10 flex items-center justify-center mb-8">
                <Phone className="text-[#00f0ff]" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Calling Agent</h3>
              <p className="text-[#888888] mb-8 leading-relaxed">
                An AI that makes and receives calls, qualifies leads, answers FAQs, and books appointments — in a natural human-like voice.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Inbound handling</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Outbound follow-up</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Lead qualification</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Appointment booking</span>
              </div>

              <div className="mt-auto">
                <p className="text-white font-medium mb-1">Setup from ₹29,999 · ₹3,000/mo maintenance</p>
                <p className="text-xs text-[#555] mb-6">₹7/min call cost paid by you directly</p>
                <a href="#calling-agent" className="text-[#00f0ff] font-bold flex items-center gap-2 hover:gap-3 transition-all">Learn More <ArrowRight size={16}/></a>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#111] border-t-2 border-t-[#00f0ff] border-x border-b border-white/5 rounded-[2rem] p-8 hover:bg-[#151515] transition-colors flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-[#00f0ff]/10 flex items-center justify-center mb-8">
                <Workflow className="text-[#00f0ff]" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Automation</h3>
              <p className="text-[#888888] mb-8 leading-relaxed">
                From CRM sync to document generation and lead routing — if you can describe the workflow, we can automate it.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">CRM integration</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Lead routing</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Document automation</span>
                <span className="bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#888888]">Custom workflows</span>
              </div>

              <div className="mt-auto">
                <p className="text-white font-medium mb-1">Pricing on consultation</p>
                <p className="text-xs text-[#555] mb-6 opacity-0">Spacer</p>
                <a href="tel:+919817458931" className="text-[#00f0ff] font-bold flex items-center gap-2 hover:gap-3 transition-all">Talk to Sales <ArrowRight size={16}/></a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — DEEP DIVE: WHATSAPP AI AGENT */}
      <section id="whatsapp-agent" className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left: Phone Mockup */}
            <div className="w-full lg:w-[45%] flex justify-center fade-in">
              <div className="w-full max-w-[340px] bg-[#0a0a0a] rounded-[3rem] border-[8px] border-[#1a1a1a] p-4 relative shadow-2xl h-[650px] flex flex-col">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-3xl z-20"></div>
                
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/10 mt-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00f0ff] to-blue-500 flex items-center justify-center shrink-0">
                    <Bot size={20} className="text-white"/>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">YG AI Assistant</span>
                    <span className="text-xs text-[#00f0ff] flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></div> Online</span>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-hidden flex flex-col gap-4 pt-6 text-sm">
                  {/* User Message */}
                  <div className="self-end bg-[#1a1a1a] border border-white/5 text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                    Hi, is the 3BHK in Sector 45 still available?
                    <div className="text-[10px] text-[#555] text-right mt-1">11:47 PM</div>
                  </div>
                  
                  {/* AI Message */}
                  <div className="self-start bg-[#111] border border-[#00f0ff]/20 text-white p-3 rounded-2xl rounded-tl-sm max-w-[90%]">
                    Hi Rahul! Yes, the 3BHK in Sector 45 is available. Here are the details:
                    <br/><br/>
                    📐 1,450 sq ft<br/>
                    💰 ₹85L<br/>
                    ✨ Ready to move
                    <br/><br/>
                    Would you like me to send the floor plan and schedule a site visit?
                    <div className="text-[10px] text-[#555] text-right mt-1">11:47 PM</div>
                  </div>

                  {/* User Message */}
                  <div className="self-end bg-[#1a1a1a] border border-white/5 text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                    Yes please!
                    <div className="text-[10px] text-[#555] text-right mt-1">11:48 PM</div>
                  </div>

                  {/* AI Message */}
                  <div className="self-start bg-[#111] border border-[#00f0ff]/20 text-white p-3 rounded-2xl rounded-tl-sm max-w-[90%]">
                    Floor plan sent! 📄<br/><br/>
                    I've also booked a site visit for tomorrow at 11 AM. Our agent will confirm shortly.
                    <div className="text-[10px] text-[#555] text-right mt-1">11:48 PM</div>
                  </div>
                  
                  {/* Typing indicator */}
                  <div className="self-start bg-[#111] p-3 rounded-2xl rounded-tl-sm w-16 h-10 flex items-center justify-center gap-1">
                    <div className="w-1.5 h-1.5 bg-[#888] rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#888] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1.5 h-1.5 bg-[#888] rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="bg-[#1a1a1a] rounded-full h-12 flex items-center px-4 gap-3 mt-4 border border-white/5">
                  <div className="flex-1 text-[#555] text-sm">Type a message...</div>
                  <div className="w-8 h-8 rounded-full bg-[#00f0ff] flex items-center justify-center">
                    <ArrowRight size={16} className="text-black" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Feature Breakdown */}
            <div className="w-full lg:w-[55%] fade-in delay-1">
              <div className="text-[#00f0ff] font-bold text-sm tracking-widest uppercase mb-4">WhatsApp AI Agent</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">Never miss a lead at 11pm again.</h2>

              <div className="flex flex-col gap-6 mb-12">
                <div className="flex gap-4">
                  <Clock className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                  <div>
                    <span className="font-bold text-lg text-white">24/7 availability</span>
                    <p className="text-[#888888] mt-1">Responds to every message instantly, day or night.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MessageSquare className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                  <div>
                    <span className="font-bold text-lg text-white">Handles full conversations</span>
                    <p className="text-[#888888] mt-1">Answers property queries, pricing, availability, and more.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ImageIcon className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                  <div>
                    <span className="font-bold text-lg text-white">Sends brochures automatically</span>
                    <p className="text-[#888888] mt-1">Delivers floor plans, images, and docs without human input.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Calendar className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                  <div>
                    <span className="font-bold text-lg text-white">Books site visits</span>
                    <p className="text-[#888888] mt-1">Schedules appointments directly in your calendar.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <User className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                  <div>
                    <span className="font-bold text-lg text-white">Smart escalation</span>
                    <p className="text-[#888888] mt-1">Passes complex queries to a human agent when needed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                  <div>
                    <span className="font-bold text-lg text-white">Official WhatsApp API</span>
                    <p className="text-[#888888] mt-1">Compliant, secure, not a grey-market workaround.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Workflow className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                  <div>
                    <span className="font-bold text-lg text-white">Powered by n8n</span>
                    <p className="text-[#888888] mt-1">Fully customizable automation flows.</p>
                  </div>
                </div>
              </div>

              {/* Pricing Block */}
              <div className="bg-[#111] border border-white/5 border-l-4 border-l-[#00f0ff] p-6 md:p-8 rounded-2xl max-w-md">
                <div className="font-bold text-lg mb-4">WhatsApp AI Agent</div>
                <div className="text-2xl font-bold mb-2">₹19,999 <span className="text-sm font-normal text-[#888888]">one-time setup</span></div>
                <div className="text-xl font-bold mb-2">₹2,000<span className="text-sm font-normal text-[#888888]">/month maintenance</span></div>
                <div className="text-xl font-bold mb-6">₹9,999<span className="text-sm font-normal text-[#888888]">/year after year 1</span></div>
                <p className="text-xs text-[#555] mb-8">WhatsApp API costs (~₹500–1,000/mo) are paid by you directly to the provider.</p>
                <AuroraButton href="tel:+919817458931" className="w-full text-center py-4">Set Up My WhatsApp Agent</AuroraButton>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DEEP DIVE: AI CALLING AGENT */}
      <section id="calling-agent" className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            
            {/* Left: Feature Breakdown */}
            <div className="w-full lg:w-[55%] fade-in">
              <div className="text-[#00f0ff] font-bold text-sm tracking-widest uppercase mb-4">AI Calling Agent</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Never miss a call. Ever.</h2>
              <p className="text-lg text-[#888888] mb-10 max-w-xl">
                Our AI calling agent handles inbound and outbound calls in a natural voice — qualifying leads and booking appointments while you focus on closing.
              </p>

              <div className="flex flex-col gap-6 mb-12">
                <div className="flex gap-4">
                  <Phone className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                  <div>
                    <span className="font-bold text-lg text-white">Inbound call handling</span>
                    <p className="text-[#888888] mt-1">Answers every call instantly, 24/7.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mic className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                  <div>
                    <span className="font-bold text-lg text-white">Natural AI voice</span>
                    <p className="text-[#888888] mt-1">Human-like conversation, not a robotic IVR menu.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Star className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                  <div>
                    <span className="font-bold text-lg text-white">Lead qualification on-call</span>
                    <p className="text-[#888888] mt-1">Asks the right questions and scores leads automatically.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Calendar className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                  <div>
                    <span className="font-bold text-lg text-white">Books appointments</span>
                    <p className="text-[#888888] mt-1">Schedules site visits and callbacks on the call itself.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ArrowRight className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                  <div>
                    <span className="font-bold text-lg text-white">Outbound follow-up</span>
                    <p className="text-[#888888] mt-1">Calls your cold leads from Meta campaigns automatically.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-[#00f0ff] shrink-0 mt-1" size={24} />
                  <div>
                    <span className="font-bold text-lg text-white">Never on hold</span>
                    <p className="text-[#888888] mt-1">Zero wait time for your customers, ever.</p>
                  </div>
                </div>
              </div>

              {/* Pricing Block */}
              <div className="bg-[#111] border border-white/5 border-l-4 border-l-[#00f0ff] p-6 md:p-8 rounded-2xl max-w-md">
                <div className="font-bold text-lg mb-4">AI Calling Agent</div>
                <div className="text-2xl font-bold mb-2">₹29,999 <span className="text-sm font-normal text-[#888888]">one-time setup</span></div>
                <div className="text-xl font-bold mb-2">₹3,000<span className="text-sm font-normal text-[#888888]">/month maintenance</span></div>
                <div className="text-xl font-bold mb-6">₹14,999<span className="text-sm font-normal text-[#888888]">/year after year 1</span></div>
                <p className="text-xs text-[#555] mb-8">Call costs at ₹7/min are paid directly by you to the API provider.</p>
                <AuroraButton href="tel:+919817458931" className="w-full text-center py-4">Set Up My AI Calling Agent</AuroraButton>
              </div>

            </div>

            {/* Right: Visual Call Mockup */}
            <div className="w-full lg:w-[45%] flex justify-center fade-in delay-1">
              <div className="w-full max-w-[340px] bg-[#111] rounded-[2rem] border border-white/10 p-6 relative shadow-[0_0_50px_rgba(0,240,255,0.05)] h-[550px] flex flex-col justify-center items-center text-center">
                
                <div className="w-24 h-24 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center relative mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  <Bot size={40} className="text-[#00f0ff]" />
                  <div className="absolute inset-0 border-2 border-[#00f0ff] rounded-full animate-ping opacity-20"></div>
                </div>

                <h3 className="text-2xl font-bold mb-2">YG AI Agent</h3>
                <p className="text-[#00f0ff] text-sm font-medium mb-10">Call in progress — 00:42</p>

                {/* Animated Waveform */}
                <div className="flex items-center justify-center gap-1 mb-12 h-16">
                  {[30, 45, 25, 55, 35, 60, 40, 50, 20, 45, 30, 55].map((height, i) => (
                    <div 
                      key={i} 
                      className="w-1.5 bg-[#00f0ff] rounded-full animate-[pulse_1s_ease-in-out_infinite_alternate]"
                      style={{ 
                        height: `${height}px`,
                        animationDelay: `${i * 0.1}s` 
                      }}
                    ></div>
                  ))}
                </div>

                {/* Transcript */}
                <div className="w-full bg-black/50 border border-white/5 rounded-xl p-4 text-left">
                  <div className="text-xs text-[#888888] mb-1">Live Transcript:</div>
                  <div className="text-sm">
                    <span className="text-[#00f0ff] font-bold">AI:</span> Perfect! I can book a site visit for this Saturday at 10 AM — does that work for you?
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — CUSTOM AUTOMATION */}
      <section id="custom-automation" className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 text-center fade-in">
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Need something specific? We build it.</h2>
          <p className="text-lg text-[#888888] mb-16 max-w-2xl mx-auto">
            Every real estate business is different. If you can describe the workflow, we can automate it — on n8n, connected to any tool you already use.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {[
              "Auto-assign leads to agents based on location",
              "Send WhatsApp property alerts to matched buyers",
              "Auto-generate sale agreements and NDAs",
              "7-day follow-up sequence for cold leads",
              "Sync leads from Meta ads to your CRM",
              "Daily performance report on WhatsApp every morning"
            ].map((tag, i) => (
              <span key={i} className="bg-[#111] border border-white/10 text-[#888888] hover:text-white hover:border-[#00f0ff] px-5 py-3 rounded-full text-sm font-medium transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>

          <div className="bg-[#111] border border-[#00f0ff]/30 shadow-[0_0_40px_rgba(0,240,255,0.1)] rounded-[2rem] p-10 md:p-16 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Not sure what to automate first?</h3>
            <p className="text-[#888888] text-lg mb-10 max-w-xl mx-auto">
              Book a free 20-minute automation audit. We'll map your biggest time-wasters and show you exactly what's possible.
            </p>
            <AuroraButton href="tel:+919817458931" className="py-4 px-8 text-lg">Book Free Automation Audit</AuroraButton>
          </div>

        </div>
      </section>

      {/* SECTION 7 — TECH STACK & TRUST */}
      <section className="py-24 bg-[#080808] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center fade-in">Enterprise-grade tech. SMB-friendly pricing.</h2>
          
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center fade-in delay-1">
            
            {/* Left: Tech Badges */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-[#111] border border-white/10 p-4 rounded-xl">
                <Workflow className="text-[#00f0ff]" size={24} />
                <div>
                  <div className="font-bold">n8n</div>
                  <div className="text-sm text-[#888888]">Automation engine</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#111] border border-white/10 p-4 rounded-xl">
                <WhatsAppIcon className="text-[#00f0ff]" size={24} />
                <div>
                  <div className="font-bold">Official WhatsApp Business API</div>
                  <div className="text-sm text-[#888888]">Meta certified</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#111] border border-white/10 p-4 rounded-xl">
                <Brain className="text-[#00f0ff]" size={24} />
                <div>
                  <div className="font-bold">AI Language Models</div>
                  <div className="text-sm text-[#888888]">GPT-class intelligence</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#111] border border-white/10 p-4 rounded-xl">
                <Database className="text-[#00f0ff]" size={24} />
                <div>
                  <div className="font-bold">Cloud infrastructure</div>
                  <div className="text-sm text-[#888888]">99.9% uptime</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#111] border border-white/10 p-4 rounded-xl">
                <Lock className="text-[#00f0ff]" size={24} />
                <div>
                  <div className="font-bold">End-to-end encrypted</div>
                  <div className="text-sm text-[#888888]">Fully secure</div>
                </div>
              </div>
            </div>

            {/* Right: Trust Copy */}
            <div className="w-full md:w-1/2 text-lg text-[#888888] leading-relaxed">
              <p className="mb-6">
                We use the same Official WhatsApp Business API that banks, airlines, and enterprise companies use — not grey-market workarounds or unofficial bots.
              </p>
              <p className="mb-6 text-white font-medium">
                Your business stays compliant. Your customers stay protected. And your automation never gets shut down.
              </p>
              <p className="mb-10">
                Every workflow we build on n8n is fully auditable, customizable, and owned by you.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-white uppercase tracking-wider">
                <span className="flex items-center gap-2"><Check size={16} className="text-[#00f0ff]"/> Meta Business Partner</span>
                <span className="flex items-center gap-2"><Check size={16} className="text-[#00f0ff]"/> Official API</span>
                <span className="flex items-center gap-2"><Check size={16} className="text-[#00f0ff]"/> GDPR Compliant</span>
                <span className="flex items-center gap-2"><Check size={16} className="text-[#00f0ff]"/> 99.9% Uptime</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8 — REAL ESTATE USE CASES */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Built for real estate. Proven in the field.</h2>
            <p className="text-lg text-[#888888]">Real scenarios. Real outcomes. This is what AI automation looks like in a property business.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 fade-in delay-1">
            
            <div className="bg-[#111] border border-white/5 border-l-[3px] border-l-[#00f0ff] p-8 rounded-xl flex flex-col">
              <div className="text-xs font-bold tracking-widest text-[#555] mb-4 uppercase">SCENARIO 01 — AFTER-HOURS LEAD</div>
              <p className="text-[#888888] mb-6 line-clamp-2">"A buyer messages at 11pm about a 3BHK."</p>
              <p className="text-white font-bold text-lg mt-auto leading-relaxed">
                <span className="text-[#00f0ff]">WhatsApp AI</span> responds in seconds, sends floor plan, books a morning site visit. Lead captured. Zero human effort.
              </p>
            </div>

            <div className="bg-[#111] border border-white/5 border-l-[3px] border-l-[#00f0ff] p-8 rounded-xl flex flex-col">
              <div className="text-xs font-bold tracking-widest text-[#555] mb-4 uppercase">SCENARIO 02 — META ADS CAMPAIGN</div>
              <p className="text-[#888888] mb-6 line-clamp-2">"100 new leads from a Meta ad come in over a weekend."</p>
              <p className="text-white font-bold text-lg mt-auto leading-relaxed">
                <span className="text-[#00f0ff]">AI calling agent</span> calls all 100 within the hour, qualifies hot leads, books 12 site visits automatically.
              </p>
            </div>

            <div className="bg-[#111] border border-white/5 border-l-[3px] border-l-[#00f0ff] p-8 rounded-xl flex flex-col">
              <div className="text-xs font-bold tracking-widest text-[#555] mb-4 uppercase">SCENARIO 03 — COLD LEAD REVIVAL</div>
              <p className="text-[#888888] mb-6 line-clamp-2">"An agent forgot to follow up with 50 leads from last month."</p>
              <p className="text-white font-bold text-lg mt-auto leading-relaxed">
                <span className="text-[#00f0ff]">Automated WhatsApp sequence</span> re-engages all 50 over 7 days with fresh listings and a personalised message.
              </p>
            </div>

            <div className="bg-[#111] border border-white/5 border-l-[3px] border-l-[#00f0ff] p-8 rounded-xl flex flex-col">
              <div className="text-xs font-bold tracking-widest text-[#555] mb-4 uppercase">SCENARIO 04 — NEW PROJECT LAUNCH</div>
              <p className="text-[#888888] mb-6 line-clamp-2">"You're launching a new residential project and need to notify your database."</p>
              <p className="text-white font-bold text-lg mt-auto leading-relaxed">
                <span className="text-[#00f0ff]">WhatsApp campaign</span> sent to 1,000 contacts in minutes — with images, pricing, and a booking link.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9 — PRICING COMPARISON */}
      <section className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Simple, transparent pricing.</h2>
            <p className="text-lg text-[#888888] max-w-3xl mx-auto">
              All third-party API costs — WhatsApp fees, call charges, and subscriptions — are paid directly by you to the provider. Our fee covers only setup and management.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16 fade-in delay-1 items-start">
            
            {/* CARD 1 */}
            <div className="bg-[#111] border-t-2 border-t-[#00f0ff] border-x border-b border-white/5 rounded-3xl p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-6">WhatsApp AI Agent</h3>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-2">₹19,999</div>
                <div className="text-sm font-bold text-[#888888] uppercase tracking-widest">one-time</div>
              </div>
              
              <div className="space-y-1 mb-8">
                <div className="text-[#888888]">₹2,000/mo maintenance</div>
                <div className="text-[#888888]">₹9,999/yr after year 1</div>
              </div>
              
              <div className="w-full h-[1px] bg-white/10 mb-6"></div>
              
              <p className="text-sm text-[#555] italic mb-8">
                ~₹500–1,000/mo API cost — paid to WhatsApp directly
              </p>
              
              <ul className="flex flex-col gap-4 mb-10 flex-grow text-sm text-[#888888]">
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Full setup & configuration</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Custom conversation flows</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Ongoing maintenance</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Monthly performance report</li>
              </ul>
              
              <AuroraButton href="tel:+919817458931" className="w-full text-center">Get Started</AuroraButton>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#111] border border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.05)] rounded-3xl p-8 flex flex-col h-full relative lg:-mt-4 lg:mb-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00f0ff] text-black font-bold text-xs uppercase tracking-widest py-1.5 px-4 rounded-full">
                High Impact
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">AI Calling Agent</h3>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-2">₹29,999</div>
                <div className="text-sm font-bold text-[#888888] uppercase tracking-widest">one-time</div>
              </div>
              
              <div className="space-y-1 mb-8">
                <div className="text-[#888888]">₹3,000/mo maintenance</div>
                <div className="text-[#888888]">₹14,999/yr after year 1</div>
              </div>
              
              <div className="w-full h-[1px] bg-white/10 mb-6"></div>
              
              <p className="text-sm text-[#555] italic mb-8">
                ₹7/min API cost — paid directly by you
              </p>
              
              <ul className="flex flex-col gap-4 mb-10 flex-grow text-sm text-[#888888]">
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Inbound + outbound calling</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Natural voice AI</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Custom scripts & flows</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#00f0ff] shrink-0 mt-0.5"/> Monthly performance report</li>
              </ul>
              
              <AuroraButton href="tel:+919817458931" className="w-full text-center">Get Started</AuroraButton>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Custom Automation</h3>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-2">Consult</div>
                <div className="text-sm font-bold text-[#888888] uppercase tracking-widest opacity-0">spacer</div>
              </div>
              
              <div className="space-y-1 mb-8">
                <div className="text-[#888888]">Pricing based on complexity</div>
                <div className="text-[#888888] opacity-0">spacer</div>
              </div>
              
              <div className="w-full h-[1px] bg-white/10 mb-6"></div>
              
              <p className="text-sm text-[#555] italic mb-8 opacity-0">
                spacer
              </p>
              
              <ul className="flex flex-col gap-4 mb-10 flex-grow text-sm text-[#888888]">
                <li className="flex items-start gap-3"><Check size={18} className="text-white shrink-0 mt-0.5"/> Free automation audit</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-white shrink-0 mt-0.5"/> Custom n8n workflow design</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-white shrink-0 mt-0.5"/> Full integration support</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-white shrink-0 mt-0.5"/> Ongoing management</li>
              </ul>
              
              <a href="tel:+919817458931" className="relative inline-flex items-center justify-center rounded-full bg-transparent px-6 py-3 text-white font-bold tracking-wide transition-all border border-white/20 hover:bg-white/5 hover:scale-105 w-full">
                Talk to Sales
              </a>
            </div>

          </div>

          <div className="text-center fade-in delay-2 max-w-2xl mx-auto flex flex-col items-center">
            <p className="text-[#888888] mb-6 text-sm">
              Have questions about pricing? Book a free 20-min call — no sales pressure, just honest answers.
            </p>
            <AuroraButton href="tel:+919817458931">Book Free Audit</AuroraButton>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section id="contact" className="py-32 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[#00f0ff]/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#00f0ff]/10 blur-[120px] pointer-events-none rounded-full"></div>
        
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center relative z-10 fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Start automating in 7 days.</h2>
          <p className="text-lg text-[#888888] mb-12 max-w-2xl mx-auto">
            Setup is handled entirely by us. You don't need any technical knowledge. Just tell us what you need — we'll build, test, and launch it.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <AuroraButton href="https://wa.me/919817458931?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services." className="min-w-[240px]">
              <span className="flex items-center justify-center gap-2"><WhatsAppIcon size={18}/> Chat on WhatsApp</span>
            </AuroraButton>
            <a href="tel:+919817458931" className="relative inline-flex items-center justify-center rounded-full bg-transparent px-6 py-3 text-white font-bold tracking-wide transition-all border border-white/20 hover:bg-white/5 hover:scale-105 min-w-[240px]">
              Book a Strategy Call
            </a>
          </div>

          <div className="text-xs font-bold tracking-widest uppercase text-[#555]">
            Official WhatsApp Business API · Built on n8n · Setup in 7 days · Managed & maintained by YG Digitals
          </div>
        </div>
      </section>

      {/* SECTION 11 — FOOTER (Exact same as homepage) */}
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
        @keyframes flow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
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
