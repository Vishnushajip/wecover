'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import HeroBanner from '@/components/HeroBanner';
import TrustBadges from '@/components/TrustBadges';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import {
  Filter,
  Sparkles,
  Search,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState('featured');
  const [openFaq, setOpenFaq] = useState(null);

  // Sync if URL search params change
  React.useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && CATEGORIES.includes(cat)) {
      setSelectedCategory(cat);
    }
    const q = searchParams.get('search');
    if (q !== null) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, sortBy]);

  // Bestsellers list for highlight row
  const bestSellers = useMemo(() => {
    return PRODUCTS.filter(p => p.badge === 'Best Seller' || p.rating >= 4.9).slice(0, 4);
  }, []);

  const faqs = [
    {
      q: 'How long does shipping take for mobile accessories?',
      a: 'We process and dispatch all orders within 24 business hours from our central fulfillment hub. Delivery typically takes 2 to 4 business days depending on your delivery pin code across India.'
    },
    {
      q: 'What is your 7-day replacement & return policy?',
      a: 'If you receive a defective, cracked, or mismatched mobile accessory, you can initiate a return or replacement within 7 days of delivery. We will arrange a free reverse pickup and issue a brand-new replacement or full refund.'
    },
    {
      q: 'Are WeCover mobile covers compatible with wireless charging?',
      a: 'Yes, all our slim and ArmorClear phone covers are engineered to support Qi and MagSafe wireless charging without needing to remove the case.'
    },
    {
      q: 'Are your online payments secure?',
      a: 'Absolutely. We support Razorpay payment gateway with 256-bit bank-grade SSL encryption for all UPI, credit/debit card, RuPay, and net banking transactions.'
    }
  ];

  return (
    <div>
      <HeroBanner />
      <TrustBadges />

      {/* Best Sellers Spotlight Section */}
      <section id="bestsellers" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4 text-brand-500" />
                <span>Customer Favorites</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Best-Selling Mobile Protection
              </h2>
            </div>
            <Link
              href="#products-section"
              className="text-xs sm:text-sm font-bold text-slate-900 hover:text-brand-600 flex items-center gap-1 group"
            >
              <span>View full catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Catalog & Filter Section */}
      <section id="products-section" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Explore Mobile Accessories
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Showing {filteredProducts.length} authentic accessories
                {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
                {searchQuery && <span> matching <strong>"{searchQuery}"</strong></span>}
              </p>
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search in catalog */}
              <div className="relative min-w-[200px] flex-1 sm:flex-initial">
                <input
                  type="text"
                  placeholder="Filter products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="py-2 px-3 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Reset filter button */}
              {(selectedCategory !== 'All' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="py-2 px-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills (Horizontal Scroll on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${isActive
                      ? 'bg-slate-950 text-white shadow-md'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-slate-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No matching accessories found</h3>
              <p className="text-xs text-slate-500">
                We could not find products matching your filters. Try clearing your search or browsing another category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Promotional Featurette Banner */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-800/40 border border-slate-700/60 rounded-3xl p-8 sm:p-12">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider">
                WeCover Quality Pledge
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Engineered for Impact. Designed to Last.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every WeCover accessory undergoes strict multi-point quality checks including drop testing, chemical UV resistance analysis, and thermal charging validation before dispatch.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>BIS Certified Electronics</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Anti-Yellowing Guarantee</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <Link
                href="/order"
                className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-sm rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Order Direct & Save 50% Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4 text-brand-500" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-bold text-slate-900">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 text-xs sm:text-sm text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900" />
      </div>
    }>
      <CatalogContent />
    </Suspense>
  );
}

