'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatINR } from '@/utils/formatters';
import { Star, ShoppingCart, Eye, Check } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
      
      {/* Image Container with Badges */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
        <Link href={`/products/${product.id}`} className="block w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide bg-slate-900 text-brand-300 rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
          {product.discount > 0 && (
            <span className="px-2 py-0.5 text-[10px] font-bold bg-red-600 text-white rounded-full shadow-sm">
              {product.discount}% OFF
            </span>
          )}
        </div>

        {/* Quick View Floating Action */}
        <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Link
            href={`/products/${product.id}`}
            aria-label={`View ${product.name}`}
            className="p-2 bg-white/90 backdrop-blur-md rounded-full shadow-md text-slate-700 hover:text-slate-950 hover:bg-white transition-all flex items-center justify-center"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
            {product.category}
          </span>
          <Link 
            href={`/products/${product.id}`}
            className="text-sm font-bold text-slate-900 hover:text-brand-600 line-clamp-2 transition-colors leading-snug"
          >
            {product.name}
          </Link>

          {/* Ratings */}
          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-xs font-bold text-slate-800">{product.rating}</span>
            <span className="text-[11px] text-slate-400">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="pt-2 border-t border-slate-100 space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-black text-slate-950">
              {formatINR(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                {formatINR(product.originalPrice)}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => addToCart(product, 1)}
              className="w-full flex items-center justify-center gap-1.5 py-2 px-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm active:scale-95"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </button>
            <Link
              href={`/products/${product.id}`}
              className="w-full flex items-center justify-center py-2 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors text-center"
            >
              Details
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}

