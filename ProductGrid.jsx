import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ArrowUpDown, Sparkles, Filter, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';

export const ProductGrid = () => {
  const {
    PRODUCTS,
    activeCategory,
    setActiveCategory,
    activeSkinFilter,
    setActiveSkinFilter,
    sortBy,
    setSortBy,
  } = useShop();

  const [maxPrice, setMaxPrice] = useState(120);

  const categories = ['All', 'Skincare', 'Makeup', 'Sets'];
  const skinTypes = ['All', 'Dry', 'Oily / Congested', 'Sensitive', 'Anti-Aging', 'Dull & Dehydrated'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (activeCategory !== 'All' && item.category !== activeCategory) {
        return false;
      }
      // Skin concern filter
      if (activeSkinFilter !== 'All') {
        const matchesType = item.skinType.toLowerCase().includes(activeSkinFilter.toLowerCase());
        const matchesBenefit = item.benefits.some((b) =>
          b.toLowerCase().includes(activeSkinFilter.toLowerCase())
        );
        if (!matchesType && !matchesBenefit) return false;
      }
      // Price filter
      if (item.price > maxPrice) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
      return 0; // default featured
    });
  }, [PRODUCTS, activeCategory, activeSkinFilter, maxPrice, sortBy]);

  const hasActiveFilters = activeCategory !== 'All' || activeSkinFilter !== 'All' || maxPrice < 120;

  const resetFilters = () => {
    setActiveCategory('All');
    setActiveSkinFilter('All');
    setMaxPrice(120);
    setSortBy('featured');
  };

  return (
    <section id="shop-section" className="py-16 sm:py-24 bg-[#FAF7F5] border-t border-[#E8DDCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#ba946e]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Ritual Apothecary</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1513] mt-1">
              Shop The Complete Collection
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-stone-500 max-w-md">
            Every formula is cruelty-free, biocompatible, dermatologist-tested, and sustainably crafted with active botanicals.
          </p>
        </div>

        {/* Filter & Sort Controls */}
        <div className="space-y-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-[#1A1513] text-white shadow-soft'
                      : 'bg-white text-stone-600 hover:text-black border border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {cat === 'All' ? 'All Formulations' : cat}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5" />
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs font-medium text-[#1A1513] focus:outline-none focus:ring-1 focus:ring-[#ba946e] shadow-xs cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="rating">Highest Rated (★ 5.0)</option>
                <option value="reviews">Most Reviewed</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Skin Concern Filter Chips & Price Slider */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-stone-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Concern Chips */}
            <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Target Concern:
              </span>
              {skinTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveSkinFilter(type)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                    activeSkinFilter === type
                      ? 'bg-[#ba946e] text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Price filter slider */}
            <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end">
              <span className="text-xs font-medium text-stone-600">
                Max: <span className="font-bold text-[#1A1513]">${maxPrice}</span>
              </span>
              <input
                type="range"
                min="20"
                max="120"
                step="5"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-28 accent-[#ba946e] cursor-pointer"
              />
            </div>
          </div>

          {/* Active Filter Indicators */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 flex-wrap pt-1 text-xs">
              <span className="text-stone-500">Active Filters:</span>
              {activeCategory !== 'All' && (
                <span className="px-2.5 py-1 rounded-full bg-[#f4efe8] text-[#1A1513] font-medium flex items-center gap-1">
                  Category: {activeCategory}
                  <button onClick={() => setActiveCategory('All')}>
                    <X className="w-3 h-3 text-stone-400 hover:text-stone-700" />
                  </button>
                </span>
              )}
              {activeSkinFilter !== 'All' && (
                <span className="px-2.5 py-1 rounded-full bg-[#f4efe8] text-[#1A1513] font-medium flex items-center gap-1">
                  Concern: {activeSkinFilter}
                  <button onClick={() => setActiveSkinFilter('All')}>
                    <X className="w-3 h-3 text-stone-400 hover:text-stone-700" />
                  </button>
                </span>
              )}
              {maxPrice < 120 && (
                <span className="px-2.5 py-1 rounded-full bg-[#f4efe8] text-[#1A1513] font-medium flex items-center gap-1">
                  Under ${maxPrice}
                  <button onClick={() => setMaxPrice(120)}>
                    <X className="w-3 h-3 text-stone-400 hover:text-stone-700" />
                  </button>
                </span>
              )}
              <button
                onClick={resetFilters}
                className="text-xs font-semibold text-rose-600 hover:underline ml-2"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 max-w-lg mx-auto shadow-soft my-10">
            <Sparkles className="w-8 h-8 text-stone-300 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-[#1A1513]">No formulas match your filters</h3>
            <p className="text-sm text-stone-500 mt-2 mb-6">
              Try adjusting your price range or clearing specific skin concern filters to see more of our collection.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-full bg-[#1A1513] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#ba946e] transition"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

