import React, { useState } from 'react';
import { Star, CheckCircle, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const ReviewsSection = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF7F5] via-[#FFF8F6] to-[#FAF7F5] border-t border-[#E8DDCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#ba946e]">
            Real Customer Journeys
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1513] mt-1">
            Loved by 150,000+ Dewy Skin Devotees
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            4.9 out of 5 stars average rating across our entire clean formulations range.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Star rating & verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" /> Verified Buyer
                  </span>
                </div>

                <h4 className="font-serif font-bold text-lg text-[#1A1513] mb-2">
                  "{t.title}"
                </h4>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Reviewer Bio & Product Purchased */}
              <div className="mt-6 pt-5 border-t border-stone-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-stone-200"
                />
                <div className="flex-1 min-w-0">
                  <span className="font-serif font-bold text-sm text-[#1A1513] block">
                    {t.name}
                  </span>
                  <span className="text-[11px] text-stone-400 block truncate">
                    {t.skinProfile} • {t.location}
                  </span>
                  <span className="text-[11px] font-semibold text-[#ba946e] block truncate mt-0.5">
                    Purchased: {t.productName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

