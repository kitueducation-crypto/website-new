import React, { useState } from 'react';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Sparkles,
  Truck,
  Tag,
  Check,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    freeShippingThreshold,
    isFreeShipping,
    freeShippingRemaining,
    formatPrice,
    discountCode,
    discountPercent,
    discountAmount,
    finalTotal,
    applyDiscountCode,
    setIsCheckoutOpen,
    openQuickView,
  } = useShop();

  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput) {
      applyDiscountCode(couponInput);
      setCouponInput('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const progressPercent = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F5] shadow-2xl flex flex-col justify-between animate-slide-up">
          {/* Drawer Header */}
          <div className="p-6 border-b border-stone-200 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#ba946e]" />
                <h3 className="font-serif font-bold text-lg text-[#1A1513]">
                  Your Beauty Bag ({cart.reduce((sum, i) => sum + i.quantity, 0)})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Meter */}
            <div className="mt-4 bg-[#f4efe8] p-3 rounded-2xl border border-stone-200">
              <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                <span className="flex items-center gap-1.5 text-stone-700">
                  <Truck className="w-3.5 h-3.5 text-[#ba946e]" />
                  {isFreeShipping ? (
                    <span className="text-emerald-700 font-bold">
                      🎉 Congratulations! Free Shipping Unlocked
                    </span>
                  ) : (
                    <span>
                      Add <strong className="text-[#1A1513]">{formatPrice(freeShippingRemaining)}</strong> for Free Delivery
                    </span>
                  )}
                </span>
                <span className="text-stone-500 text-[10px]">{progressPercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#ba946e] to-[#ef6a47] transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1A1513]">
                    Your bag is completely empty
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                    Discover our award-winning botanical peptides and barrier elixirs to awaken your skin glow.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#1A1513] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#ba946e] transition"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.itemId}
                  className="flex gap-4 p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-xs relative group"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 cursor-pointer"
                    onClick={() => {
                      setIsCartOpen(false);
                      openQuickView(item.product);
                    }}
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h5
                          onClick={() => {
                            setIsCartOpen(false);
                            openQuickView(item.product);
                          }}
                          className="font-serif font-bold text-sm text-[#1A1513] hover:text-[#ba946e] cursor-pointer line-clamp-1"
                        >
                          {item.product.name}
                        </h5>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.itemId)}
                          className="text-stone-300 hover:text-rose-600 transition p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Variant tags */}
                      <div className="flex flex-wrap gap-1.5 mt-1 text-[11px] text-stone-500">
                        {item.selectedShade && (
                          <span className="flex items-center gap-1 bg-[#FAF7F5] px-2 py-0.5 rounded-md border border-stone-200">
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block border border-black/10"
                              style={{ backgroundColor: item.selectedShade.hex }}
                            />
                            {item.selectedShade.name}
                          </span>
                        )}
                        {item.selectedSize && (
                          <span className="bg-[#FAF7F5] px-2 py-0.5 rounded-md border border-stone-200">
                            {item.selectedSize}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity + Item Total */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-stone-100">
                      <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.itemId, -1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-200 transition"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.itemId, 1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-200 transition"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-bold text-sm text-[#1A1513]">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Coupon & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-white space-y-4">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-stone-400" />
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Promo code (try GLOW20)"
                    className="w-full pl-9 pr-3 py-2 bg-[#f4efe8] rounded-xl text-xs font-medium placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#ba946e]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#1A1513] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#ba946e] transition shrink-0"
                >
                  Apply
                </button>
              </form>

              {/* Active Discount Tag */}
              {discountPercent > 0 && (
                <div className="flex items-center justify-between text-xs bg-emerald-50 text-emerald-800 p-2.5 rounded-xl border border-emerald-200">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Check className="w-3.5 h-3.5" />
                    Promo Code "{discountCode}" Active ({discountPercent}% Off)
                  </span>
                  <span className="font-bold">-{formatPrice(discountAmount)}</span>
                </div>
              )}

              {/* Financial Subtotals */}
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="font-semibold text-stone-800">{formatPrice(cartSubtotal)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-rose-600 font-semibold">
                    <span>Discount Savings</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Standard Shipping</span>
                  <span className="font-semibold text-stone-800">
                    {isFreeShipping ? 'FREE' : formatPrice(6.0)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#1A1513] pt-2 border-t border-stone-200">
                  <span>Total Due</span>
                  <span>{formatPrice(finalTotal + (isFreeShipping ? 0 : 6.0))}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                type="button"
                onClick={handleProceedToCheckout}
                className="w-full py-4 rounded-2xl bg-[#1A1513] hover:bg-[#ba946e] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-soft transition"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-stone-400">
                🔒 Guaranteed 256-Bit Encrypted Secure Checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

