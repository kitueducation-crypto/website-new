import React, { useState } from 'react';
import { Sparkles, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const RoutineBuilder = () => {
  const { PRODUCTS, addToCart, applyDiscountCode, formatPrice, showToast } = useShop();

  const cleansers = PRODUCTS.filter(
    (p) => p.subCategory === 'Cleansers' || p.subCategory === 'Masks'
  );
  const serums = PRODUCTS.filter((p) => p.subCategory === 'Serums');
  const moisturizers = PRODUCTS.filter(
    (p) => p.subCategory === 'Moisturizers' || p.subCategory === 'Sunscreen'
  );

  const [selectedCleanse, setSelectedCleanse] = useState(cleansers[0] || null);
  const [selectedSerum, setSelectedSerum] = useState(serums[0] || null);
  const [selectedMoisturizer, setSelectedMoisturizer] = useState(moisturizers[0] || null);

  const originalTotal =
    (selectedCleanse?.price || 0) +
    (selectedSerum?.price || 0) +
    (selectedMoisturizer?.price || 0);

  const bundleDiscount = Math.round(originalTotal * 0.2); // 20% off
  const bundleTotal = originalTotal - bundleDiscount;

  const handleAddBundle = () => {
    if (selectedCleanse) addToCart(selectedCleanse, 1);
    if (selectedSerum) addToCart(selectedSerum, 1);
    if (selectedMoisturizer) addToCart(selectedMoisturizer, 1);
    applyDiscountCode('GLOW20');
    showToast('✨ Custom 3-Step Glow Routine added with 20% bundle savings!');
  };

  return (
    <section id="routine-builder" className="py-20 bg-gradient-to-b from-[#FAF7F5] via-[#FFF9F8] to-[#FAF7F5] border-t border-[#E8DDCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#942e17] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Routine Builder</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1513]">
            Curate Your 3-Step Ritual & Save 20%
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Handpick your ideal cleanser, targeted treatment serum, and barrier moisturizer. Your bundle automatically unlocks 20% savings + free luxury delivery.
          </p>
        </div>

        {/* 3 Step Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1: Cleanse */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#ba946e]">
                    Step 01
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1A1513]">Pure Cleansing</h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F5] text-stone-600">
                  {cleansers.length} Formulas
                </span>
              </div>

              <div className="space-y-3">
                {cleansers.map((item) => {
                  const isSelected = selectedCleanse?.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedCleanse(item)}
                      className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'border-[#ba946e] bg-[#faf8f5] shadow-xs'
                          : 'border-stone-100 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-[#1A1513] truncate">
                          {item.name}
                        </h4>
                        <span className="text-xs text-[#ba946e] font-bold block mt-0.5">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-[#1A1513] text-white'
                            : 'border border-stone-300 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
              Selected: <strong className="text-stone-800">{selectedCleanse?.name}</strong>
            </div>
          </div>

          {/* Step 2: Treat */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#ba946e]">
                    Step 02
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1A1513]">Targeted Serum</h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F5] text-stone-600">
                  {serums.length} Formulas
                </span>
              </div>

              <div className="space-y-3">
                {serums.map((item) => {
                  const isSelected = selectedSerum?.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedSerum(item)}
                      className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'border-[#ba946e] bg-[#faf8f5] shadow-xs'
                          : 'border-stone-100 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-[#1A1513] truncate">
                          {item.name}
                        </h4>
                        <span className="text-xs text-[#ba946e] font-bold block mt-0.5">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-[#1A1513] text-white'
                            : 'border border-stone-300 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
              Selected: <strong className="text-stone-800">{selectedSerum?.name}</strong>
            </div>
          </div>

          {/* Step 3: Hydrate */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#ba946e]">
                    Step 03
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1A1513]">Seal & Protect</h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F5] text-stone-600">
                  {moisturizers.length} Formulas
                </span>
              </div>

              <div className="space-y-3">
                {moisturizers.map((item) => {
                  const isSelected = selectedMoisturizer?.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedMoisturizer(item)}
                      className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'border-[#ba946e] bg-[#faf8f5] shadow-xs'
                          : 'border-stone-100 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-[#1A1513] truncate">
                          {item.name}
                        </h4>
                        <span className="text-xs text-[#ba946e] font-bold block mt-0.5">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-[#1A1513] text-white'
                            : 'border border-stone-300 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
              Selected: <strong className="text-stone-800">{selectedMoisturizer?.name}</strong>
            </div>
          </div>
        </div>

        {/* Dynamic Bundle Summary Bar */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#ba946e]/30 shadow-soft-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#ba946e] to-[#ef6a47] flex items-center justify-center text-white font-bold shrink-0 shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-serif font-bold text-lg text-[#1A1513]">
                  Your Custom 3-Piece Radiance Trio
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[11px] font-bold">
                  20% Off Bundle Applied
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                Eligible for Free Expedited Global Shipping + Free Luxury Cosmetic Pouch
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <div className="text-right">
              <span className="text-xs text-stone-400 block line-through">
                {formatPrice(originalTotal)}
              </span>
              <span className="font-serif text-3xl font-bold text-[#1A1513]">
                {formatPrice(bundleTotal)}
              </span>
            </div>

            <button
              type="button"
              onClick={handleAddBundle}
              className="px-8 py-4 rounded-2xl bg-[#1A1513] hover:bg-[#ba946e] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-soft transition"
            >
              <ShoppingBag className="w-4 h-4 text-glow-300" />
              <span>Add Trio to Bag</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

