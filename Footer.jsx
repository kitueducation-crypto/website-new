import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Heart,
  ShieldCheck,
  Mail,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer = () => {
  const { setActiveCategory, setIsQuizOpen, showToast } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Are all BeautyGlow formulas 100% cruelty-free and vegan?',
      a: 'Yes, unconditionally. BeautyGlow is certified by Leaping Bunny and PETA. We never use animal byproducts or conduct animal testing anywhere in the world.',
    },
    {
      q: 'How long until I see visible results from the Dew Peptide Serum?',
      a: 'Clinical trials showed that 98% of users observed a surge in skin hydration and bounce within 24 to 72 hours, with significant firming and barrier repair by Day 14.',
    },
    {
      q: 'Can I use BeautyGlow if I have sensitive or reactive skin?',
      a: 'All formulations are dermatologist-tested, hypoallergenic, and free from common sensitizers like synthetic fragrances, harsh drying alcohols, and sulfates.',
    },
    {
      q: 'What is your return & guarantee policy?',
      a: 'We offer a 30-Day Lit-From-Within Satisfaction Guarantee. If your skin does not love the transformation, return even an opened bottle for a full refund.',
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      showToast('✨ Welcome to the Glow Club! Check your inbox for $15 off code.');
      setEmail('');
    }
  };

  const handleNav = (cat) => {
    setActiveCategory(cat);
    const el = document.getElementById('shop-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#14100E] text-[#FAF7F5] border-t border-[#29221E] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Signup VIP Card */}
        <div className="bg-gradient-to-r from-[#201814] via-[#2A1F1A] to-[#201814] rounded-3xl p-8 sm:p-12 border border-[#3E3029] shadow-2xl mb-16 relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-glow-300 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join The Glow Club</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Unlock $15 Off Your First Order
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto">
              Receive private access to new limited drops, editorial skincare rituals, and exclusive member-only gifts.
            </p>

            {subscribed ? (
              <div className="p-4 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl text-emerald-300 text-xs font-bold">
                🎉 You are on the VIP guest list! Check your inbox for your exclusive code.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-stone-400 text-xs focus:outline-none focus:ring-1 focus:ring-[#ba946e]"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-[#ba946e] hover:bg-[#c5a787] text-white font-bold text-xs uppercase tracking-wider transition shadow-soft flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="mb-16 border-b border-[#29221E] pb-12">
          <h4 className="font-serif text-2xl font-bold text-white mb-6 text-center">
            Frequently Asked Questions
          </h4>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = faqOpenIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#1C1613] border border-[#2D231E] overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-stone-200 hover:text-white"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#ba946e] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-stone-400 leading-relaxed border-t border-white/5 pt-3 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#29221E]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ba946e] to-[#ef6a47] flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                BEAUTYGLOW
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Formulated in California, inspired by timeless French apothecary traditions. Dedicated to high-potency bio-compatible botanicals and luminous dermal health.
            </p>
            <div className="flex items-center gap-4 text-stone-400 pt-2">
              <span className="text-xs font-semibold">Join the conversation:</span>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:text-white hover:bg-white/10 transition">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#ba946e] mb-4">
              Formulations
            </h5>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button onClick={() => handleNav('All')} className="hover:text-white transition">
                  Shop All Formulations
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('Skincare')} className="hover:text-white transition">
                  Clean Skincare
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('Makeup')} className="hover:text-white transition">
                  Radiant Makeup
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('Sets')} className="hover:text-white transition">
                  Sets & Bundles
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('routine-builder');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition text-rose-300"
                >
                  3-Step Routine Builder
                </button>
              </li>
            </ul>
          </div>

          {/* Clean Science Column */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#ba946e] mb-4">
              Our Science
            </h5>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>Bioactive Copper Peptides</li>
              <li>Damask Rose Hydrosol</li>
              <li>Clinical 7-Day Trials</li>
              <li>Refillable French Glass</li>
              <li>Carbon Neutral Commitment</li>
            </ul>
          </div>

          {/* Customer Care Column */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#ba946e] mb-4">
              Client Concierge
            </h5>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button onClick={() => setIsQuizOpen(true)} className="hover:text-white transition">
                  60-Sec Skin Quiz
                </button>
              </li>
              <li>Track Order Shipment</li>
              <li>30-Day Guarantee & Returns</li>
              <li>Stockists & Spas</li>
              <li>concierge@beautyglow.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 BeautyGlow Cosmetics & Skincare Inc. All rights reserved.</p>
          <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-wider">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Ritual</span>
            <span>•</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
