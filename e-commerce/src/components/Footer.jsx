'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Lock,
  CreditCard,
  Truck,
  RotateCcw
} from 'lucide-react';
import { COMPANY_INFO, CATEGORIES } from '@/data/products';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 transition-colors">

      {/* Upper Trust Strip */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
              <div className="w-12 h-12 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 text-brand-400">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Free Fast Shipping</h4>
                <p className="text-xs text-slate-400">On all prepaid orders above ₹499</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">7-Day Easy Returns</h4>
                <p className="text-xs text-slate-400">Hassle-free replacement guarantee</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">100% Genuine Gear</h4>
                <p className="text-xs text-slate-400">Rigorous laboratory quality tested</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Secure Encrypted Payments</h4>
                <p className="text-xs text-slate-400">256-bit SSL secured transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/logo.png"
                  alt="WeCover Logo"
                  fill
                  className="object-contain filter drop-shadow-md"
                />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white">
                  We<span className="text-brand-400">Cover</span>
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Mobile Accessories & Gear
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              WeCover is an authentic Indian mobile accessories brand specializing in military-grade phone cases, 9H tempered glass screen protectors, GaN fast chargers, and durable braided cables.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.supportEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.supportPhone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.supportPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> Home Store
                </Link>
              </li>
              <li>
                <Link href="/#products-section" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> All Products
                </Link>
              </li>
              <li>
                <Link href="/#bestsellers" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> View Cart & Checkout
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> Help & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.filter(c => c !== 'All').slice(0, 6).map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/?category=${encodeURIComponent(cat)}#products-section`}
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600" /> {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Razorpay Required Business Policies */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Policies & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors block text-slate-300 font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-white transition-colors block text-slate-300 font-medium"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-and-cancellation"
                  className="hover:text-white transition-colors block text-slate-300 font-medium"
                >
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-policy"
                  className="hover:text-white transition-colors block text-slate-300 font-medium"
                >
                  Shipping & Delivery Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors block text-slate-300 font-medium"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Payment Methods and Razorpay Compliance Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-slate-400 text-center sm:text-left">
            <span>Accepted Payment Options:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-700/60 rounded text-slate-200 font-semibold text-[11px]">
                UPI / QR
              </span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-700/60 rounded text-slate-200 font-semibold text-[11px]">
                RuPay
              </span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-700/60 rounded text-slate-200 font-semibold text-[11px]">
                Visa / MasterCard
              </span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-700/60 rounded text-slate-200 font-semibold text-[11px]">
                Net Banking
              </span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-700/60 rounded text-slate-200 font-semibold text-[11px]">
                Cash On Delivery
              </span>
            </div>
          </div>

          <div className="text-xs text-slate-500 text-center md:text-right">
            <p>© {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.</p>
            <p className="text-[11px] text-slate-500 mt-1">
              Storefront verified for Razorpay Payment Gateway integration.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

