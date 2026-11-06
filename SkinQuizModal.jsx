import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const SkinQuizModal = () => {
  const { isQuizOpen, setIsQuizOpen, PRODUCTS, addToCart, applyDiscountCode, formatPrice, showToast } = useShop();

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    skinType: '',
    goal: '',
    texture: '',
  });

  if (!isQuizOpen) return null;

  const handleSelectOption = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < 3) {
      setStep((s) => s + 1);
    } else {
      setStep(4); // Results step
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ skinType: '', goal: '', texture: '' });
  };

  // Determine recommendations based on answers
  const getPrescription = () => {
    let cleanse = PRODUCTS.find((p) => p.id === 'botanical-melt-cleansing-balm');
    let treat = PRODUCTS.find((p) => p.id === 'dew-peptide-serum');
    let hydrate = PRODUCTS.find((p) => p.id === 'rose-velvet-cloud-cream');

    if (answers.goal === 'Brightening') {
      treat = PRODUCTS.find((p) => p.id === 'radiance-c-glow-drops') || treat;
    } else if (answers.goal === 'Anti-Aging') {
      treat = PRODUCTS.find((p) => p.id === 'moonlight-renewal-retinol-elixir') || treat;
    }

    if (answers.skinType === 'Oily') {
      hydrate = PRODUCTS.find((p) => p.id === 'golden-hour-sun-veil-spf50') || hydrate;
    }

    const items = [cleanse, treat, hydrate].filter(Boolean);
    const totalPrice = items.reduce((acc, it) => acc + it.price, 0);
    const discountedPrice = Math.round(totalPrice * 0.8); // 20% bundle discount

    return {
      items,
      totalPrice,
      discountedPrice,
      routineName: `${answers.skinType || 'Bespoke'} ${answers.goal || 'Radiance'} System`,
    };
  };

  const prescription = getPrescription();

  const handleAddEntireRoutine = () => {
    prescription.items.forEach((item) => {
      addToCart(item, 1);
    });
    applyDiscountCode('ROUTINE25');
    showToast('✨ Custom Routine added to your bag with 25% bundle savings!');
    setIsQuizOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="relative bg-[#FAF7F5] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-stone-200 animate-slide-up my-8 p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsQuizOpen(false)}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white hover:bg-stone-100 flex items-center justify-center text-stone-700 shadow-sm transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Bar (if steps 1 to 3) */}
        {step <= 3 && (
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#ba946e] mb-2">
              <span>Diagnostic Assessment</span>
              <span>Step {step} of 3</span>
            </div>
            <div className="w-full h-1.5 bg-[#e8ddce] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#ba946e] to-[#ef6a47] transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Step 1: Skin Type */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center max-w-md mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Question 01</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1513] mt-1">
                How does your skin feel by midday?
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                This helps us diagnose your lipid moisture barrier level.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                { title: 'Dry & Tight', desc: 'Flaky patches, craves rich moisture', val: 'Dry' },
                { title: 'Oily & Shiny', desc: 'Midday shine on T-zone and cheeks', val: 'Oily' },
                { title: 'Combination', desc: 'Oily T-zone, dry or normal elsewhere', val: 'Combination' },
                { title: 'Sensitive & Red', desc: 'Easily irritated, reactive to new actives', val: 'Sensitive' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelectOption('skinType', opt.val)}
                  className="p-4 rounded-2xl bg-white border border-stone-200 text-left hover:border-[#ba946e] hover:shadow-md transition group"
                >
                  <span className="font-serif font-bold text-base text-[#1A1513] group-hover:text-[#ba946e] block">
                    {opt.title}
                  </span>
                  <span className="text-xs text-stone-500 mt-0.5 block">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Goal */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center max-w-md mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Question 02</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1513] mt-1">
                What is your #1 dream skin result?
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                We will match you with the precise molecular actives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                { title: 'Glass Skin Dew & Hydration', desc: 'Juicy, plump, lit-from-within glow', val: 'Hydration' },
                { title: 'Dark Spot & Clarifying', desc: 'Fades hyperpigmentation & sun spots', val: 'Brightening' },
                { title: 'Firming & Smoothing', desc: 'Smooths fine lines and tightens pores', val: 'Anti-Aging' },
                { title: 'Barrier Comfort & Calming', desc: 'Restores skin resilience against redness', val: 'Calming' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelectOption('goal', opt.val)}
                  className="p-4 rounded-2xl bg-white border border-stone-200 text-left hover:border-[#ba946e] hover:shadow-md transition group"
                >
                  <span className="font-serif font-bold text-base text-[#1A1513] group-hover:text-[#ba946e] block">
                    {opt.title}
                  </span>
                  <span className="text-xs text-stone-500 mt-0.5 block">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Finish Preference */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center max-w-md mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Question 03</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1513] mt-1">
                What texture finishes make you feel your best?
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Customize the sensory luxury feel of your routine.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                { title: 'Luminous Dew Glaze', desc: 'Reflective, editorial glossy sheen', val: 'Dewy' },
                { title: 'Velvet Satin Touch', desc: 'Soft-focus, blurred natural cashmere', val: 'Velvet' },
                { title: 'Featherlight Weightless', desc: 'Instant absorption, invisible veil', val: 'Light' },
                { title: 'Rich Cocooning Butter', desc: 'Ultra-plush decadent nourishing layer', val: 'Rich' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelectOption('texture', opt.val)}
                  className="p-4 rounded-2xl bg-white border border-stone-200 text-left hover:border-[#ba946e] hover:shadow-md transition group"
                >
                  <span className="font-serif font-bold text-base text-[#1A1513] group-hover:text-[#ba946e] block">
                    {opt.title}
                  </span>
                  <span className="text-xs text-stone-500 mt-0.5 block">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Diagnostic Results & Tailored Ritual Bundle */}
        {step === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
                <Check className="w-3.5 h-3.5" />
                Diagnostic Analysis Complete
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1513]">
                Your Bespoke {prescription.routineName}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mt-1">
                Calibrated to restore lipid integrity and provide that signature lit-from-within glow in 7 days.
              </p>
            </div>

            {/* Prescribed Items Cards */}
            <div className="space-y-3 pt-2">
              {prescription.items.map((item, idx) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-stone-200 shadow-xs"
                >
                  <span className="w-6 h-6 rounded-full bg-[#f4efe8] text-[#ba946e] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </span>
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#ba946e]">
                      {idx === 0 ? 'Step 1: Cleanse' : idx === 1 ? 'Step 2: Treat' : 'Step 3: Seal'}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#1A1513] truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-stone-500 truncate">{item.tagline}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-bold text-sm text-[#1A1513] block">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bundle Pricing Card */}
            <div className="bg-[#FFF5F2] border border-[#fdbfae] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">
                  Prescription Ritual Bundle Offer
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-bold text-[#1A1513]">
                    {formatPrice(prescription.discountedPrice)}
                  </span>
                  <span className="text-sm text-stone-400 line-through">
                    {formatPrice(prescription.totalPrice)}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">
                    Save 20%
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  Includes Free Shipping + Complimentary Rose Quartz Gua Sha Tool
                </p>
              </div>

              <button
                type="button"
                onClick={handleAddEntireRoutine}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1A1513] hover:bg-[#ba946e] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-soft transition shrink-0"
              >
                <ShoppingBag className="w-4 h-4 text-glow-300" />
                <span>Add Ritual to Bag</span>
              </button>
            </div>

            {/* Retake Quiz */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={resetQuiz}
                className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Diagnostic Assessment</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

