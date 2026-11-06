'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { formatINR, getEstimatedDeliveryDate } from '@/utils/formatters';
import ProductCard from '@/components/ProductCard';
import {
  Star,
  ShoppingCart,
  Zap,
  ShieldCheck,
  Truck,
  RotateCcw,
  Minus,
  Plus,
  ChevronRight,
  CheckCircle2,
  PackageCheck,
  Share2
} from 'lucide-react';

export default function ProductDetailClient({ product, relatedProducts }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');
  const [isCopied, setIsCopied] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push('/order');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <Link href={`/?category=${encodeURIComponent(product.category)}#products-section`} className="hover:text-slate-900 transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span className="text-slate-800 font-semibold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Product Showcase Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* Left: Product Image & Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  {product.badge && (
                    <span className="px-3 py-1 bg-slate-950 text-brand-300 text-xs font-black rounded-full shadow-md uppercase tracking-wider">
                      {product.badge}
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-md">
                      SAVE {product.discount}%
                    </span>
                  )}
                </div>

                {/* Share Button */}
                <button
                  onClick={handleShare}
                  aria-label="Share product"
                  className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-md hover:bg-white text-slate-700 transition-all"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                {isCopied && (
                  <span className="absolute top-16 right-4 px-3 py-1 bg-slate-950 text-white text-[10px] font-semibold rounded-lg shadow-lg">
                    Link copied!
                  </span>
                )}
              </div>

              {/* Quality Guarantee Mini-Strip */}
              <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-slate-600 pt-2">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-slate-800">100% Genuine</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-slate-800">Fast 2-4 Day Delivery</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center gap-1">
                  <RotateCcw className="w-4 h-4 text-amber-600" />
                  <span className="font-semibold text-slate-800">7-Day Replacement</span>
                </div>
              </div>
            </div>

            {/* Right: Product Details & Purchase Form */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                    {product.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    SKU: {product.sku}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                  {product.name}
                </h1>

                {/* Rating and Stock */}
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-slate-900">{product.rating}</span>
                    <span className="text-slate-500">({product.reviewsCount} customer reviews)</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>In Stock ({product.stockQuantity} units left)</span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-slate-950">
                    {formatINR(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-slate-400 line-through">
                      {formatINR(product.originalPrice)}
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="text-xs font-extrabold text-red-600 bg-red-100 px-2 py-0.5 rounded-md">
                      SAVE {formatINR(product.originalPrice - product.price)} ({product.discount}%)
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 -mt-2">
                  Inclusive of all taxes. Free express shipping on orders over ₹499.
                </p>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {product.features?.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Purchase Actions */}
              <div className="pt-6 border-t border-slate-200 space-y-4">

                {/* Quantity Selector */}
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-slate-700">Quantity:</span>
                  <div className="flex items-center border border-slate-300 rounded-xl bg-white shadow-inner">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2.5 text-slate-600 hover:bg-slate-100 rounded-l-xl transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 text-sm font-bold text-slate-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                      className="p-2.5 text-slate-600 hover:bg-slate-100 rounded-r-xl transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xs text-slate-400">
                    Total: <strong className="text-slate-900">{formatINR(product.price * quantity)}</strong>
                  </span>
                </div>

                {/* Add to Cart & Buy Now Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={handleAddToCart}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-white border-2 border-slate-950 text-slate-950 hover:bg-slate-100 font-extrabold text-sm transition-all shadow-sm active:scale-95"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-sm transition-all shadow-md active:scale-95"
                  >
                    <Zap className="w-4 h-4 text-brand-400 fill-brand-400" />
                    <span>Buy Now</span>
                  </button>
                </div>

                {/* Delivery Estimate Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
                  <PackageCheck className="w-5 h-5 text-slate-700 flex-shrink-0" />
                  <div>
                    <span>Estimated delivery by <strong>{getEstimatedDeliveryDate()}</strong></span>
                    <span className="block text-[11px] text-slate-400">Cash on Delivery & Razorpay UPI available at checkout.</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Detailed Tabs: Specifications & Customer Reviews */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm mb-16">
          <div className="flex border-b border-slate-200 gap-8 mb-6">
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 -mb-px ${activeTab === 'specs'
                  ? 'border-slate-950 text-slate-950'
                  : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
            >
              Technical Specifications
            </button>
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-3 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 -mb-px ${activeTab === 'description'
                  ? 'border-slate-950 text-slate-950'
                  : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
            >
              Detailed Overview
            </button>
          </div>

          {activeTab === 'specs' && (
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left">
                <tbody className="divide-y divide-slate-100">
                  {Object.entries(product.specifications || {}).map(([key, value]) => (
                    <tr key={key} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-700 w-1/3 bg-slate-50/40 rounded-l-lg">
                        {key}
                      </td>
                      <td className="py-3 px-4 text-slate-600 rounded-r-lg">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'description' && (
            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
              <p>{product.description}</p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">WeCover Laboratory Standards</h4>
                <p className="text-xs text-slate-500">
                  All WeCover merchandise is certified compliant with international safety and durability testing protocols, protecting both high-end electronics and users.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Related Products Section */}
        {relatedProducts && relatedProducts.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                  Recommended For You
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Related Accessories
                </h3>
              </div>
              <Link
                href="/#products-section"
                className="text-xs font-bold text-slate-900 hover:text-brand-600"
              >
                View all
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

