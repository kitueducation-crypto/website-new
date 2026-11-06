import React from 'react';
import { Sparkles, ArrowRight, Star, ShieldCheck, Leaf, HeartHandshake, Award } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Hero = () => {
  const { setIsQuizOpen, PRODUCTS, addToCart, formatPrice, openQuickView } = useShop();
  const heroProduct = PRODUCTS[0]; // Dew Peptide Serum

  const scrollToShop = () => {
    const el = document.getElementById('shop-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F5] via-[#FFF8F6] to-[#FAF7F5] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E8DDCE]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#fedcd3]/30 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#ba946e]/30 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#ba946e]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#1A1513]">
                The Next Era of Clean Luxury Skincare
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1513] leading-[1.12]">
              Radiance Reimagined.
              <span className="block font-serif italic font-normal text-[#ba946e] mt-1">
                Pure Botanicals Meet Clinical Science.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Formulated with bioactive copper peptides, rare Damask rose hydrosol, and multi-depth hyaluronic molecules. Uncompromising luxury created to transform your skin barrier into pure, dewy glass.
            </p>

            {/* Primary & Secondary Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={scrollToShop}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1A1513] text-[#FAF7F5] font-semibold text-sm tracking-wider uppercase hover:bg-[#322823] transition-all shadow-soft flex items-center justify-center gap-3 group"
              >
                <span>Shop The Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => setIsQuizOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#1A1513] font-semibold text-sm tracking-wider uppercase border border-stone-300 hover:border-[#ba946e] hover:bg-[#FAF7F5] transition shadow-xs flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-rose-500" />
                <span>Take 60-Sec Skin Quiz</span>
              </button>
            </div>

            {/* Key Trust Guarantees */}
            <div className="pt-6 border-t border-[#E8DDCE]/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs font-semibold text-[#1A1513]">100% Clean & Vegan</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#ba946e] shrink-0" />
                <span className="text-xs font-semibold text-[#1A1513]">Derm Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="text-xs font-semibold text-[#1A1513]">Cruelty Free</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork & Interactive Floating Product Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Frame */}
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85"
                alt="Radiant Glowing Skin"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />

              {/* Gentle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Editorial Caption Tag */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm text-xs font-bold text-[#1A1513]">
                ✨ The 2026 Beauty Award Winner
              </div>

              {/* Floating Bottom Card: Featured Product */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/80">
                <div className="flex items-center gap-3">
                  <img
                    src={heroProduct.images[0]}
                    alt={heroProduct.name}
                    className="w-16 h-16 rounded-xl object-cover border border-stone-200"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 mb-0.5">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-stone-600">4.9 (340+ reviews)</span>
                    </div>
                    <h4 className="font-serif font-bold text-sm text-[#1A1513] truncate">
                      {heroProduct.name}
                    </h4>
                    <p className="text-xs text-[#ba946e] font-bold">
                      {formatPrice(heroProduct.price)}{' '}
                      <span className="text-stone-400 line-through text-[11px] ml-1">
                        {formatPrice(heroProduct.originalPrice)}
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => addToCart(heroProduct)}
                    className="px-3.5 py-2 rounded-xl bg-[#1A1513] text-white text-xs font-bold hover:bg-[#ba946e] transition shrink-0 shadow-sm"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white rounded-2xl p-3 shadow-lg border border-stone-200 items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">
                98%
              </div>
              <div className="text-left text-xs">
                <p className="font-bold text-[#1A1513]">Noticeable Glow</p>
                <p className="text-stone-500 text-[11px]">in 7 days of daily ritual</p>
              </div>
            </div>
          </div>
        </div>

        {/* Press Badges / As Seen In */}
        <div className="mt-14 pt-8 border-t border-[#E8DDCE]/70 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-stone-500 mb-6">
            Celebrated by Beauty Editors & Dermatologists Globally
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition duration-300">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#1A1513]">VOGUE</span>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#1A1513]">ELLE</span>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#1A1513]">Harper's BAZAAR</span>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#1A1513]">ALLURE</span>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#1A1513]">BYRDIE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

