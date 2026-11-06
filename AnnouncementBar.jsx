import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const AnnouncementBar = () => {
  const { setIsQuizOpen } = useShop();
  const announcements = [
    { text: '✨ SPECIAL OFFER: Take 20% off all orders with code GLOW20 at checkout', action: null },
    { text: '🌿 Complimentary Deluxe Mini + Free Worldwide Shipping over $65', action: null },
    { text: '🤍 Unsure about your skin type? Take our 60-Second Skin Diagnostic Quiz', action: () => setIsQuizOpen(true) },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const current = announcements[currentIndex];

  return (
    <div className="bg-[#1A1513] text-[#FAF7F5] py-2 px-4 text-xs font-medium tracking-wide transition-all duration-500 border-b border-[#2D2420]">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <div
          onClick={current.action ? current.action : undefined}
          className={`flex items-center gap-2 transition-opacity duration-300 ${
            current.action ? 'cursor-pointer hover:text-glow-300' : ''
          }`}
        >
          <span className="inline-block animate-pulse-subtle">
            {current.text}
          </span>
          {current.action && <ArrowRight className="w-3.5 h-3.5 inline-block" />}
        </div>
      </div>
    </div>
  );
};

