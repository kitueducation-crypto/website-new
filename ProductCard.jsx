import React, { useState } from 'react';
import { Star, Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ProductCard = ({ product }) => {
  const {
    addToCart,
    openQuickView,
    isInWishlist,
    toggleWishlist,
    formatPrice,
  } = useShop();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedShade, setSelectedShade] = useState(
    product.shades && product.shades.length > 0 ? product.shades[0] : null
  );
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1, selectedShade, product.sizes?.[0] || null);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1600);
  };

  return (
    <div
      onClick={() => openQuickView(product)}
      className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Product Image Area */}
      <div
        className="relative aspect-square w-full overflow-hidden bg-[#f4efe8]"
        onMouseEnter={() => {
          if (product.images.length > 1) setCurrentImageIndex(1);
        }}
        onMouseLeave={() => {
          setCurrentImageIndex(0);
        }}
      >
        <img
          src={product.images[currentImageIndex] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#1A1513] text-white shadow-xs">
              {product.badge}
            </span>
          )}
          {product.originalPrice > product.price && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-rose-600 text-white shadow-xs">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10 ${
            isFavorited
              ? 'bg-rose-500 text-white shadow-md scale-110'
              : 'bg-white/80 hover:bg-white text-stone-700 hover:text-rose-600 shadow-sm'
          }`}
          aria-label="Save to wishlist"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(product);
            }}
            className="flex-1 py-2.5 px-3 rounded-xl bg-white/95 backdrop-blur-sm text-[#1A1513] text-xs font-bold tracking-wide uppercase hover:bg-white shadow-md flex items-center justify-center gap-1.5 transition"
          >
            <Eye className="w-3.5 h-3.5 text-stone-500" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating and Reviews */}
          <div className="flex items-center gap-1 mb-1.5">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating) ? 'fill-current' : 'fill-stone-200 text-stone-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-medium text-stone-500 ml-1">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Title and Category */}
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#ba946e]">
            {product.subCategory || product.category}
          </span>
          <h3 className="font-serif font-bold text-base text-[#1A1513] group-hover:text-[#ba946e] transition-colors line-clamp-1 mt-0.5">
            {product.name}
          </h3>

          <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Color Shade Swatches (for makeup) */}
          {product.shades && product.shades.length > 0 && (
            <div className="mt-3">
              <span className="text-[11px] text-stone-600 block mb-1">
                Shade: <span className="font-semibold text-stone-800">{selectedShade?.name}</span>
              </span>
              <div className="flex items-center gap-1.5">
                {product.shades.map((shade) => (
                  <button
                    key={shade.name}
                    type="button"
                    title={shade.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedShade(shade);
                    }}
                    style={{ backgroundColor: shade.hex }}
                    className={`w-4 h-4 rounded-full border transition-all ${
                      selectedShade?.name === shade.name
                        ? 'ring-2 ring-[#1A1513] ring-offset-1 scale-110'
                        : 'border-black/20 hover:scale-105'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pricing and Action */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
          <div>
            <span className="font-bold text-base text-[#1A1513]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-stone-400 line-through ml-1.5 font-normal">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              isAddedRecently
                ? 'bg-emerald-600 text-white'
                : 'bg-[#1A1513] text-white hover:bg-[#ba946e] shadow-xs'
            }`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

