import React from 'react';
import { Leaf, HeartHandshake, Recycle, ShieldCheck, Sparkles, Droplets } from 'lucide-react';

export const ValuesSection = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Biocompatible & Clean',
      description:
        'Never formulated with 2,700+ questionable ingredients: free from parabens, PEGs, synthetic fragrances, sulfates, and silicones.',
    },
    {
      icon: HeartHandshake,
      title: 'Leaping Bunny Cruelty-Free',
      description:
        '100% Vegan and certified cruelty-free. We never test on animals and never sell in markets that require animal testing.',
    },
    {
      icon: Recycle,
      title: 'Refillable French Glass',
      description:
        'Infinitely recyclable heavyweight frosted glass containers and 100% post-consumer recycled luxury cartons.',
    },
    {
      icon: Droplets,
      title: 'Dermatologist Validated',
      description:
        'Hypoallergenic, non-comedogenic, and rigorously tested on sensitive skin for zero pore clogging or irritation.',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF7F5] border-t border-[#E8DDCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ba946e]">
            Our Uncompromising Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1513] mt-2">
            Luxury Without Compromise
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            We believe you should never have to choose between clean, sustainable formulas and high-performance clinical efficacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#ffefeb] text-[#942e17] flex items-center justify-center mb-6 shadow-xs">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1A1513] mb-2">
                  {val.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

