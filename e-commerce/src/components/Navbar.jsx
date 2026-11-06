'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  ShieldCheck,
  Phone,
  ChevronRight,
  Headphones,
  Smartphone,
  Zap
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/products';

export default function Navbar() {
  const router = useRouter();
  const { cartCount, openCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}#products-section`);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 overflow-hidden">
        <span className="inline-flex items-center gap-1 text-brand-400 font-semibold tracking-wide">
          <Zap className="w-3.5 h-3.5 text-brand-400 fill-brand-400" /> Free Delivery
        </span>
        <span className="hidden sm:inline">across India on all orders above ₹499</span>
        <span className="hidden md:inline">• 7-Day Easy Returns Guarantee</span>
        <span className="hidden lg:inline">• 100% Genuine Guaranteed</span>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">

          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none flex-shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/logo.png"
                alt="WeCover Logo"
                fill
                sizes="(max-width: 640px) 44px, 48px"
                className="object-contain filter drop-shadow-md"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                We<span className="text-brand-600">Cover</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 -mt-1 hidden xs:block">
                Premium Mobile Gear
              </span>
            </div>
          </Link>

          {/* Search Form (Desktop / Tablet) */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-md mx-4 relative"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search phone covers, screen guards, chargers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </form>

          {/* Right Navigation & Cart Trigger */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/#products-section"
              className="hidden lg:inline-flex text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors px-3 py-2"
            >
              All Products
            </Link>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>Contact Us</span>
            </Link>

            {/* Shopping Cart Button */}
            <button
              onClick={openCart}
              aria-label="View Shopping Cart"
              className="relative p-2.5 rounded-full text-slate-800 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all flex items-center gap-2"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="hidden sm:inline text-xs font-bold text-slate-800">
                Cart
              </span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-slate-950 text-white text-[11px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 md:hidden focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="pb-3 md:hidden">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search accessories (e.g. covers, cables)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-slate-900"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </form>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-xl animate-fadeIn">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              <span>Home Store</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
            <Link
              href="/#products-section"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              <span>Explore All Products</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
            <Link
              href="/order"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              <span>Checkout / My Order</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Customer Support & Legal
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md bg-slate-50 text-slate-700 font-medium hover:bg-slate-100"
              >
                Contact Us
              </Link>
              <Link
                href="/shipping-policy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md bg-slate-50 text-slate-700 font-medium hover:bg-slate-100"
              >
                Shipping Policy
              </Link>
              <Link
                href="/refund-and-cancellation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md bg-slate-50 text-slate-700 font-medium hover:bg-slate-100"
              >
                Refunds & Returns
              </Link>
              <Link
                href="/terms-and-conditions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md bg-slate-50 text-slate-700 font-medium hover:bg-slate-100"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md bg-slate-50 text-slate-700 font-medium hover:bg-slate-100 col-span-2"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Support: {COMPANY_INFO.supportEmail}</span>
            <span>{COMPANY_INFO.supportPhone}</span>
          </div>
        </div>
      )}
    </header>
  );
}

