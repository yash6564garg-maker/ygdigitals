"use client"

import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone
} from 'lucide-react';
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { AuroraButton } from "@/components/ui/aurora-button";

export default function PrivacyPolicyPage() {
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
            <AuroraButton href="tel:+911171366819" className="px-5 py-2 text-sm">Book a Free Call</AuroraButton>
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
          <AuroraButton href="tel:+911171366819" onClick={() => setIsMobileMenuOpen(false)}>Book a Free Call</AuroraButton>
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

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-32 pb-24 md:pt-48 md:pb-32 px-4 md:px-8 max-w-[800px] mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-[#888888] font-medium mb-12">
          Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="prose prose-invert max-w-none text-[#ddd] text-lg leading-relaxed space-y-8">
          <p>
            At YG Digitals, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
          </p>

          <div className="w-full h-px bg-white/10 my-8"></div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-[#888888]">
            <li><strong className="text-white font-medium">Personal Information:</strong> Name, phone number, email address</li>
            <li><strong className="text-white font-medium">Business Information:</strong> Details shared during consultations or inquiries</li>
            <li><strong className="text-white font-medium">Communication Data:</strong> Messages sent via WhatsApp, forms, or email</li>
            <li><strong className="text-white font-medium">Technical Data:</strong> IP address, browser type, device information, and website usage (via cookies and analytics tools)</li>
          </ul>

          <div className="w-full h-px bg-white/10 my-8"></div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-[#888888]">
            <li>Respond to your inquiries and provide support</li>
            <li>Deliver our services (AI websites, automation, and marketing solutions)</li>
            <li>Improve our website and user experience</li>
            <li>Send service-related updates or important communication</li>
          </ul>
          <p className="mt-6">We do not sell, rent, or trade your personal data to third parties.</p>

          <div className="w-full h-px bg-white/10 my-8"></div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. WhatsApp & Communication</h2>
          <p>When you contact us via WhatsApp or other messaging platforms:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-[#888888]">
            <li>Your phone number and messages are used only for communication</li>
            <li>We may use automation tools to provide faster responses</li>
            <li>Your conversations remain private and confidential</li>
          </ul>

          <div className="w-full h-px bg-white/10 my-8"></div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Third-Party Services</h2>
          <p>We may use trusted third-party tools to operate our services, such as:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-[#888888]">
            <li>WhatsApp Business API</li>
            <li>Hosting and cloud providers</li>
            <li>Analytics tools (e.g., website traffic tracking)</li>
          </ul>
          <p className="mt-6">These services may process limited data only as required for functionality.</p>

          <div className="w-full h-px bg-white/10 my-8"></div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Data Security</h2>
          <p>
            We take reasonable security measures to protect your data from unauthorized access, misuse, or disclosure. However, no online system is 100% secure, and we cannot guarantee absolute security.
          </p>

          <div className="w-full h-px bg-white/10 my-8"></div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-[#888888]">
            <li>Request access to your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of future communications</li>
          </ul>
          <p className="mt-6">To exercise these rights, please contact us directly.</p>

          <div className="w-full h-px bg-white/10 my-8"></div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">7. Contact Us</h2>
          <p>If you have any questions or concerns regarding this Privacy Policy, you can contact us:</p>
          <ul className="list-none space-y-2 mt-4 text-[#888888]">
            <li><strong className="text-white font-medium">Phone:</strong> +91 (11) 7136 6819</li>
            <li><strong className="text-white font-medium">Email:</strong> yashgarg6564@gmail.com</li>
          </ul>

          <div className="w-full h-px bg-white/10 my-8"></div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">8. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
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
    </div>
  );
}
