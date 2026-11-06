'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { CheckCircle, ShoppingBag } from 'lucide-react';

export default function Toast() {
  const { toastMessage, openCart } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-slate-950 text-white p-4 rounded-2xl shadow-2xl border border-slate-800 flex items-center justify-between gap-3 animate-bounce-short">
      <div className="flex items-center gap-3">
        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <p className="text-xs font-semibold text-slate-100 line-clamp-2">
          {toastMessage}
        </p>
      </div>
      <button
        onClick={openCart}
        className="px-3 py-1.5 bg-brand-500 hover:bg-brand-400 text-slate-950 text-xs font-bold rounded-lg transition-colors flex-shrink-0 flex items-center gap-1"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        <span>Cart</span>
      </button>
    </div>
  );
}

