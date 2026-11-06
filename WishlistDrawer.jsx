import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const WishlistDrawer = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    PRODUCTS,
    toggleWishlist,
    addToCart,
    formatPrice,
    openQuickView,
    setActiveCategory,
  } = useShop();

  if (!isWishlistOpen) return null;

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F5] shadow-2xl flex flex-col justify-between animate-slide-up">
          {/* Header */}
          <div className="p-6 border-b border-stone-200 bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-current" />
              <h3 className="font-serif font-bold text-lg text-[#1A1513]">
                Saved Favorites ({wishlist.length})
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsWishlistOpen(false)}
              className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {savedProducts.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center mx-auto text-rose-400">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1A1513]">
                    Your wishlist is empty
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                    Tap the heart on any formulation to save it for your next skincare replenishment.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsWishlistOpen(false);
                    setActiveCategory('All');
                    const el = document.getElementById('shop-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#1A1513] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#ba946e] transition"
                >
                  Explore The Collection
                </button>
              </div>
            ) : (
              savedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-xs relative"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 cursor-pointer"
                    onClick={() => {
                      setIsWishlistOpen(false);
                      openQuickView(product);
                    }}
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h5
                          onClick={() => {
                            setIsWishlistOpen(false);
                            openQuickView(product);
                          }}
                          className="font-serif font-bold text-sm text-[#1A1513] hover:text-[#ba946e] cursor-pointer line-clamp-1"
                        >
                          {product.name}
                        </h5>
                        <button
                          type="button"
                          onClick={() => toggleWishlist(product.id)}
                          className="text-stone-300 hover:text-rose-600 transition"
                          title="Remove from favorites"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-xs font-bold text-[#ba946e] block mt-0.5">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    <div className="mt-3">
                      <button
                        type="button"
                        onClick={() => {
                          addToCart(product, 1);
                        }}
                        className="w-full py-2 px-3 rounded-xl bg-[#1A1513] hover:bg-[#ba946e] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition shadow-xs"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-glow-300" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {savedProducts.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-white">
              <button
                type="button"
                onClick={() => {
                  savedProducts.forEach((p) => addToCart(p, 1));
                  setIsWishlistOpen(false);
                }}
                className="w-full py-3.5 rounded-2xl bg-[#1A1513] hover:bg-[#ba946e] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-soft"
              >
                <span>Add All ({savedProducts.length}) to Bag</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

