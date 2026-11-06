import React from 'react';
import { Sparkles, CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Toast = () => {
  const { toast } = useShop();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-slide-up">
      <div className="bg-[#1A1513] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-stone-700/60 flex items-center gap-3 backdrop-blur-md">
        <div className="w-7 h-7 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>
        <p className="text-xs font-semibold leading-snug flex-1">
          {toast.message}
        </p>
      </div>
    </div>
  );
};

