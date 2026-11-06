import React from 'react';
import { Heart, Sparkles, ShoppingBag, Camera } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/products';
import { useShop } from '../context/ShopContext';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const InstagramFeed = () => {
  const { setActiveCategory } = useShop();

  const handleShopCommunity = () => {
    setActiveCategory('All');
    const el = document.getElementById('shop-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#FAF7F5] border-t border-[#E8DDCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#ba946e] mb-1">
              <InstagramIcon className="w-4 h-4" />
              <span>@BeautyGlow.Official</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1513]">
              As Seen in the Wild
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              Tag <span className="font-bold text-stone-800">#BeautyGlowRoutine</span> to be featured on our global gallery.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-stone-300 hover:border-[#ba946e] text-xs font-bold uppercase tracking-wider text-[#1A1513] hover:bg-white transition shadow-xs flex items-center gap-2"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow on Instagram</span>
          </a>
        </div>

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={handleShopCommunity}
              className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-soft-lg transition-all"
            >
              <img
                src={post.image}
                alt={post.handle}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover Scrim with UGC details */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white backdrop-blur-[2px]">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>{post.handle}</span>
                  <span className="flex items-center gap-1 text-rose-300">
                    <Heart className="w-3.5 h-3.5 fill-current" /> {post.likes}
                  </span>
                </div>

                <div>
                  <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-glow-300 mt-2 bg-white/10 px-2.5 py-1 rounded-full">
                    <ShoppingBag className="w-3 h-3" /> Shop {post.product}
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
