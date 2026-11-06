import React, { useState, useEffect } from 'react';
import {
  X,
  Star,
  Heart,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Leaf,
  Droplet,
  Truck,
  Check,
  Plus,
  Minus,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ProductQuickViewModal = () => {
  const {
    quickViewProduct: product,
    closeQuickView,
    addToCart,
    isInWishlist,
    toggleWishlist,
    formatPrice,
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedShade, setSelectedShade] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImageIndex(0);
      setSelectedShade(product.shades && product.shades.length > 0 ? product.shades[0] : null);
      setSelectedSize(product.sizes && product.sizes.length > 0 ? product.sizes[0] : null);
      setQuantity(1);
      setActiveTab('description');
      setIsAdded(false);
    }
  }, [product]);

  if (!product) return null;

  const isFavorited = isInWishlist(product.id);

  const handleAdd = () => {
    addToCart(product, quantity, selectedShade, selectedSize);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      closeQuickView();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="relative bg-[#FAF7F5] w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-stone-200 animate-slide-up my-8 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md hover:bg-stone-100 flex items-center justify-center text-stone-700 shadow-md transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-white border-b md:border-b-0 md:border-r border-stone-200">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#f4efe8] mb-4">
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1A1513] text-white">
                {product.badge}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition ${
                    activeImageIndex === idx
                      ? 'border-[#ba946e] ring-2 ring-[#ba946e]/20'
                      : 'border-stone-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Trust Guarantees */}
          <div className="mt-6 pt-4 border-t border-stone-100 grid grid-cols-2 gap-2 text-[11px] text-stone-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              100% Vegan & Cruelty-Free
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ba946e]" />
              Dermatologist Tested
            </span>
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-stone-600" />
              Free Shipping over $65
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              Sustainable Glass Jar
            </span>
          </div>
        </div>

        {/* Right Column: Product Config & Details */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div className="space-y-4">
            {/* Header / Subcategory */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#ba946e]">
                {product.subCategory || product.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1513] mt-1">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-stone-800">{product.rating}</span>
                <span className="text-xs text-stone-400">({product.reviewCount} customer reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-[#1A1513]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-base text-stone-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {product.originalPrice > product.price && (
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700">
                  Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            {/* Short Tagline */}
            <p className="text-sm text-stone-600 italic">
              "{product.tagline}"
            </p>

            {/* Shade Selection if available */}
            {product.shades && product.shades.length > 0 && (
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-[#1A1513]">Selected Shade:</span>
                  <span className="text-stone-600 font-medium">{selectedShade?.name}</span>
                </div>
                <div className="flex gap-2">
                  {product.shades.map((shade) => (
                    <button
                      key={shade.name}
                      type="button"
                      onClick={() => setSelectedShade(shade)}
                      style={{ backgroundColor: shade.hex }}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        selectedShade?.name === shade.name
                          ? 'border-[#1A1513] ring-2 ring-[#ba946e] scale-110'
                          : 'border-white shadow-xs hover:scale-105'
                      }`}
                      title={shade.name}
                    />
                  ))}
                </div>
                {selectedShade?.preview && (
                  <p className="text-[11px] text-stone-500 mt-1.5">{selectedShade.preview}</p>
                )}
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="pt-2">
                <span className="block text-xs font-bold text-[#1A1513] mb-2">Select Volume:</span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                        selectedSize === size
                          ? 'bg-[#1A1513] text-white shadow-xs'
                          : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tabs (Description, Active Ingredients, How to Use) */}
            <div className="pt-4 border-t border-stone-200">
              <div className="flex border-b border-stone-200 text-xs font-bold uppercase tracking-wider">
                <button
                  type="button"
                  onClick={() => setActiveTab('description')}
                  className={`pb-2 mr-4 border-b-2 transition ${
                    activeTab === 'description'
                      ? 'border-[#ba946e] text-[#ba946e]'
                      : 'border-transparent text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Formula Overview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('ingredients')}
                  className={`pb-2 mr-4 border-b-2 transition ${
                    activeTab === 'ingredients'
                      ? 'border-[#ba946e] text-[#ba946e]'
                      : 'border-transparent text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Bioactive Actives
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('usage')}
                  className={`pb-2 border-b-2 transition ${
                    activeTab === 'usage'
                      ? 'border-[#ba946e] text-[#ba946e]'
                      : 'border-transparent text-stone-400 hover:text-stone-700'
                  }`}
                >
                  How to Use
                </button>
              </div>

              <div className="py-3 text-xs leading-relaxed text-stone-600 min-h-[90px]">
                {activeTab === 'description' && (
                  <div>
                    <p>{product.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {product.benefits.map((b) => (
                        <span key={b} className="px-2 py-0.5 rounded-md bg-[#f4efe8] text-[10px] font-semibold text-stone-700">
                          ✓ {b}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'ingredients' && (
                  <div className="space-y-2">
                    {product.ingredients.map((ing) => (
                      <div key={ing.name} className="bg-white p-2 rounded-lg border border-stone-200">
                        <strong className="text-stone-800 font-serif block">{ing.name}</strong>
                        <span className="text-[11px] text-stone-500">{ing.benefit}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'usage' && (
                  <div className="space-y-2">
                    <p>{product.howToUse}</p>
                    <div className="bg-rose-50 p-2.5 rounded-xl border border-rose-100 text-rose-900 mt-2">
                      <span className="font-bold">✨ BeautyGlow Tip:</span> Pair with chilled quartz facial roller or press lightly into skin with warm palms to maximize peptide absorption.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Add to Bag and Quantity Controller */}
          <div className="pt-4 border-t border-stone-200 flex items-center gap-3">
            {/* Quantity Selector */}
            <div className="flex items-center border border-stone-300 rounded-xl bg-white overflow-hidden shrink-0">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-2 text-stone-500 hover:bg-stone-100 transition"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-3 text-xs font-bold text-[#1A1513]">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="p-2 text-stone-500 hover:bg-stone-100 transition"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Cart CTA */}
            <button
              type="button"
              onClick={handleAdd}
              disabled={isAdded}
              className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-soft ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#1A1513] hover:bg-[#ba946e] text-white'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Bag!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add {quantity > 1 ? `(${quantity}) ` : ''}• {formatPrice(product.price * quantity)}</span>
                </>
              )}
            </button>

            {/* Wishlist Button */}
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              className={`p-3.5 rounded-xl border transition ${
                isFavorited
                  ? 'bg-rose-50 border-rose-300 text-rose-600'
                  : 'bg-white border-stone-200 text-stone-600 hover:text-rose-600 hover:border-stone-400'
              }`}
              title="Add to Wishlist"
            >
              <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

