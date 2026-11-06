import React, { useState } from 'react';
import {
  Sparkles,
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X,
  ChevronDown,
  Compass,
  SlidersHorizontal,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Navbar = () => {
  const {
    cartCount,
    setIsCartOpen,
    wishlist,
    setIsWishlistOpen,
    currency,
    setCurrency,
    currencies,
    setIsQuizOpen,
    setActiveCategory,
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    PRODUCTS,
    openQuickView,
    formatPrice,
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.skinType.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleNavClick = (category) => {
    setActiveCategory(category);
    setMobileMenuOpen(false);
    const element = document.getElementById('shop-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF7F5]/90 backdrop-blur-md border-b border-[#E8DDCE]/70 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Mobile Menu Toggle & Desktop Navigation */}
            <div className="flex items-center gap-6">
              <button
                type="button"
                className="lg:hidden p-2 text-[#1A1513] hover:text-[#ba946e] transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold uppercase tracking-widest text-[#1A1513]/80">
                <button
                  onClick={() => handleNavClick('All')}
                  className="hover:text-[#ba946e] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#ba946e] hover:after:w-full after:transition-all"
                >
                  Shop All
                </button>
                <button
                  onClick={() => handleNavClick('Skincare')}
                  className="hover:text-[#ba946e] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#ba946e] hover:after:w-full after:transition-all"
                >
                  Skincare
                </button>
                <button
                  onClick={() => handleNavClick('Makeup')}
                  className="hover:text-[#ba946e] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#ba946e] hover:after:w-full after:transition-all"
                >
                  Makeup
                </button>
                <button
                  onClick={() => handleNavClick('Sets')}
                  className="hover:text-[#ba946e] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#ba946e] hover:after:w-full after:transition-all"
                >
                  Sets & Bundles
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('routine-builder');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#942e17] hover:text-[#792a17] font-bold flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                  Routine Builder
                </button>
              </nav>
            </div>

            {/* Center: Brand Logo */}
            <div className="flex-1 flex justify-center lg:flex-none">
              <a href="#" className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#ba946e] via-[#e5a2a9] to-[#f99479] flex items-center justify-center text-white shadow-soft transition-transform group-hover:scale-105">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <div className="text-center">
                  <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1513] group-hover:text-[#942e17] transition-colors">
                    BEAUTYGLOW
                  </span>
                  <span className="block text-[9px] uppercase tracking-[0.25em] text-[#ba946e] font-sans font-medium -mt-1">
                    Clean Luxury Botanicals
                  </span>
                </div>
              </a>
            </div>

            {/* Right: Actions (Currency, Search, Quiz, Wishlist, Cart) */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Currency Selector */}
              <div className="relative hidden md:block">
                <button
                  type="button"
                  onClick={() => setCurrencyOpen(!currencyOpen)}
                  className="flex items-center gap-1 text-xs font-medium text-[#1A1513]/70 hover:text-[#1A1513] px-2 py-1.5 rounded-full hover:bg-black/5 transition"
                >
                  <span>{currency}</span>
                  <ChevronDown className="w-3 h-3 text-[#1A1513]/50" />
                </button>
                {currencyOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-soft-lg py-1 border border-stone-200 z-50 animate-fade-in">
                    {Object.entries(currencies).map(([code, cur]) => (
                      <button
                        key={code}
                        onClick={() => {
                          setCurrency(code);
                          setCurrencyOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#f4efe8] flex items-center justify-between ${
                          currency === code ? 'font-bold text-[#ba946e]' : 'text-stone-700'
                        }`}
                      >
                        <span>{cur.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Skin Quiz Button */}
              <button
                type="button"
                onClick={() => setIsQuizOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#ffefeb] text-[#942e17] border border-[#fdbfae] hover:bg-[#fedcd3] transition shadow-xs"
              >
                <Compass className="w-3.5 h-3.5 text-rose-500" />
                <span>Skin Quiz</span>
              </button>

              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#1A1513]/80 hover:text-[#ba946e] hover:bg-black/5 rounded-full transition"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Icon */}
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="p-2 text-[#1A1513]/80 hover:text-rose-600 hover:bg-black/5 rounded-full transition relative"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Icon */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2 bg-[#1A1513] text-[#FAF7F5] px-3.5 py-2 rounded-full hover:bg-[#322823] transition-all shadow-soft"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4 text-glow-300" />
                <span className="text-xs font-bold">{cartCount}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8DDCE] bg-[#FAF7F5] px-6 py-5 space-y-4 shadow-lg animate-slide-up">
            <div className="space-y-3">
              <button
                onClick={() => handleNavClick('All')}
                className="block w-full text-left font-serif text-lg text-[#1A1513] hover:text-[#ba946e]"
              >
                Shop All Products
              </button>
              <button
                onClick={() => handleNavClick('Skincare')}
                className="block w-full text-left font-serif text-lg text-[#1A1513] hover:text-[#ba946e]"
              >
                Skincare Collection
              </button>
              <button
                onClick={() => handleNavClick('Makeup')}
                className="block w-full text-left font-serif text-lg text-[#1A1513] hover:text-[#ba946e]"
              >
                Radiant Makeup
              </button>
              <button
                onClick={() => handleNavClick('Sets')}
                className="block w-full text-left font-serif text-lg text-[#1A1513] hover:text-[#ba946e]"
              >
                Sets & Gift Bundles
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById('routine-builder');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block w-full text-left font-serif text-lg text-[#942e17] font-semibold"
              >
                ✨ Build Your Glow Routine (Save 20%)
              </button>
            </div>

            <div className="pt-4 border-t border-[#E8DDCE] flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsQuizOpen(true);
                }}
                className="flex items-center gap-2 text-sm font-semibold text-[#942e17]"
              >
                <Compass className="w-4 h-4" />
                <span>Take Skin Routine Quiz</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-xs text-[#1A1513]/60">Currency:</span>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-white border border-stone-300 rounded px-2 py-1 text-xs text-[#1A1513]"
                >
                  {Object.keys(currencies).map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Full-Screen Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-fade-in">
          <div className="bg-[#FAF7F5] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-stone-200">
            {/* Search Input Bar */}
            <div className="p-4 sm:p-6 border-b border-stone-200 flex items-center gap-3">
              <Search className="w-5 h-5 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search serums, blushes, lip oils, concerns..."
                autoFocus
                className="w-full bg-transparent text-lg text-[#1A1513] placeholder-stone-400 focus:outline-none font-serif"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-semibold text-stone-400 hover:text-stone-600 px-2 py-1"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-1 rounded-full hover:bg-stone-200 text-stone-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Live Search Suggestions & Results */}
            <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
              {!searchQuery ? (
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Dew Peptide Serum', 'Silk Glaze Lip Oil', 'Ceramides', 'Vitamin C', 'SPF 50+', 'Blush'].map(
                      (term) => (
                        <button
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="px-3 py-1.5 rounded-full bg-[#f4efe8] text-xs font-medium text-[#1A1513] hover:bg-[#ba946e] hover:text-white transition"
                        >
                          {term}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="text-center py-10">
                  <p className="font-serif text-lg text-stone-700">No products match "{searchQuery}"</p>
                  <p className="text-xs text-stone-400 mt-1">Try searching for "serum", "lip", or "retinol"</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                    Found {searchResults.length} Products
                  </p>
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        openQuickView(product);
                      }}
                      className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-[#f4efe8] cursor-pointer transition"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif font-bold text-sm text-[#1A1513] truncate">
                            {product.name}
                          </h4>
                          {product.badge && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-semibold">
                              {product.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-stone-500 truncate">{product.tagline}</p>
                        <span className="text-xs font-bold text-[#ba946e] mt-0.5 block">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

