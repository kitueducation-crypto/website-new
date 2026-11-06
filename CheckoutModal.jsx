import React, { useState } from 'react';
import {
  X,
  CreditCard,
  Lock,
  CheckCircle,
  Truck,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CheckoutModal = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    discountAmount,
    discountPercent,
    finalTotal,
    isFreeShipping,
    formatPrice,
    clearCart,
    showToast,
  } = useShop();

  const [step, setStep] = useState('checkout'); // 'checkout' | 'success'
  const [formData, setFormData] = useState({
    firstName: 'Elena',
    lastName: 'Rostova',
    email: 'elena.rostova@example.com',
    address: '742 Evergreen Terrace',
    city: 'San Francisco',
    state: 'CA',
    zip: '94102',
    country: 'United States',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 4242',
    expiry: '08/28',
    cvc: '892',
  });

  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const shippingCost = isFreeShipping ? 0 : 6.0;
  const grandTotal = finalTotal + shippingCost;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const generated = `BG-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generated);
    setStep('success');
    clearCart();
    showToast('✨ Order confirmed! Thank you for glowing with us.');
  };

  const handleFinish = () => {
    setIsCheckoutOpen(false);
    setStep('checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="relative bg-[#FAF7F5] w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-stone-200 animate-slide-up my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-stone-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ba946e] to-[#ef6a47] flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#1A1513]">
                {step === 'checkout' ? 'BeautyGlow Secure Checkout' : 'Order Confirmed'}
              </h3>
              <p className="text-[11px] text-stone-500">
                {step === 'checkout' ? 'Encrypted 256-Bit SSL Checkout' : 'Luxury Botanical Ritual En Route'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleFinish}
            className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {step === 'checkout' ? (
            <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Shipping & Payment Details */}
              <div className="lg:col-span-7 space-y-6">
                {/* Contact info */}
                <div>
                  <h4 className="font-serif font-bold text-base text-[#1A1513] mb-3">
                    1. Contact Information
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-medium focus:ring-1 focus:ring-[#ba946e] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-medium focus:ring-1 focus:ring-[#ba946e] outline-none"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-semibold text-stone-600 mb-1">Email for Delivery Updates</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-medium focus:ring-1 focus:ring-[#ba946e] outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping address */}
                <div>
                  <h4 className="font-serif font-bold text-base text-[#1A1513] mb-3">
                    2. Delivery Address
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">Street Address</label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-medium focus:ring-1 focus:ring-[#ba946e] outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-stone-600 mb-1">City</label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-medium focus:ring-1 focus:ring-[#ba946e] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-600 mb-1">State</label>
                        <input
                          type="text"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-medium focus:ring-1 focus:ring-[#ba946e] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-600 mb-1">Postal Code</label>
                        <input
                          type="text"
                          name="zip"
                          required
                          value={formData.zip}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-medium focus:ring-1 focus:ring-[#ba946e] outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment method */}
                <div>
                  <h4 className="font-serif font-bold text-base text-[#1A1513] mb-3 flex items-center justify-between">
                    <span>3. Payment Method</span>
                    <span className="flex items-center gap-1 text-[11px] font-normal text-emerald-700">
                      <Lock className="w-3 h-3" /> End-to-end encrypted
                    </span>
                  </h4>

                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-white border-2 border-[#ba946e] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1A1513] flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-[#ba946e]" /> Credit or Debit Card
                        </span>
                        <div className="flex gap-1.5 opacity-80 text-[10px] font-bold text-stone-500">
                          <span>VISA</span>
                          <span>MC</span>
                          <span>AMEX</span>
                        </div>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-lg border border-stone-200 text-xs font-mono"
                          placeholder="Card Number"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-lg border border-stone-200 text-xs"
                          placeholder="MM / YY"
                        />
                        <input
                          type="text"
                          name="cvc"
                          value={formData.cvc}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-lg border border-stone-200 text-xs"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#1A1513] hover:bg-[#ba946e] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-soft"
                >
                  <Lock className="w-4 h-4" />
                  <span>Place Order • {formatPrice(grandTotal)}</span>
                </button>
              </div>

              {/* Right Column: Order Summary Review */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-stone-200 h-fit space-y-5">
                <h4 className="font-serif font-bold text-base text-[#1A1513] pb-3 border-b border-stone-100">
                  Order Summary ({cart.length} items)
                </h4>

                <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
                  {cart.map((item) => (
                    <div key={item.itemId} className="flex gap-3 text-xs">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-12 h-12 rounded-lg object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h6 className="font-serif font-bold text-stone-800 truncate">
                          {item.product.name}
                        </h6>
                        <span className="text-[11px] text-stone-500">
                          Qty: {item.quantity}{' '}
                          {item.selectedShade && `• ${item.selectedShade.name}`}
                        </span>
                      </div>
                      <span className="font-bold text-stone-800">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-2 text-xs text-stone-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(cartSubtotal)}</span>
                  </div>
                  {discountPercent > 0 && (
                    <div className="flex justify-between text-rose-600 font-semibold">
                      <span>Discount ({discountPercent}%)</span>
                      <span>-{formatPrice(discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Carbon-Neutral Shipping</span>
                    <span>{isFreeShipping ? 'FREE' : formatPrice(shippingCost)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#1A1513] pt-2 border-t border-stone-200">
                    <span>Estimated Total</span>
                    <span>{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF7F5] rounded-xl text-[11px] text-stone-600 space-y-1">
                  <p className="font-bold text-stone-800 flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#ba946e]" /> Compliments of BeautyGlow:
                  </p>
                  <p>• Complimentary Rose Velvet Deluxe Sample</p>
                  <p>• Eco-luxe embossed gifting box included</p>
                </div>
              </div>
            </form>
          ) : (
            /* Success Confirmation Screen */
            <div className="text-center py-12 px-4 max-w-lg mx-auto space-y-6 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#ba946e]">
                  Payment Authorized
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#1A1513] mt-1">
                  Thank You, {formData.firstName}!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2">
                  Your luxury skincare ritual is now being hand-packed with care in our botanical laboratory.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-stone-200 text-left space-y-3 shadow-xs">
                <div className="flex justify-between text-xs pb-3 border-b border-stone-100">
                  <span className="text-stone-500">Order Reference</span>
                  <span className="font-mono font-bold text-stone-800">{orderNumber}</span>
                </div>
                <div className="flex justify-between text-xs pb-3 border-b border-stone-100">
                  <span className="text-stone-500">Sent Confirmation To</span>
                  <span className="font-bold text-stone-800">{formData.email}</span>
                </div>
                <div className="flex justify-between text-xs pb-3 border-b border-stone-100">
                  <span className="text-stone-500">Estimated Delivery</span>
                  <span className="font-bold text-emerald-800">3-5 Business Days (Tracked)</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500">Shipping To</span>
                  <span className="font-medium text-stone-800 text-right">
                    {formData.address}, {formData.city}, {formData.state}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleFinish}
                className="w-full py-4 rounded-2xl bg-[#1A1513] hover:bg-[#ba946e] text-white font-bold text-xs uppercase tracking-wider transition shadow-soft"
              >
                Continue Exploring BeautyGlow
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

