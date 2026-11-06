'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Zap, ArrowRight, Star, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-brand-300">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>Engineered For Extreme Protection & Performance</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Precision Shielding for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-brand-300 to-amber-500">Flagship Smartphone</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Explore genuine WeCover mobile accessories crafted from aerospace-grade alloys, German Bayer TPU, and 9H Japanese sapphire tempered glass. Designed to withstand real everyday drops.
            </p>

            {/* Key feature checkmarks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>10ft Drop Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Anti-Yellowing TPU</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>GaN III Fast Charging</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Pan-India Delivery</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/#products-section"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 hover:from-brand-300 hover:to-brand-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-glow hover:shadow-lg transition-all active:scale-95"
              >
                <span>Shop All Accessories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/#bestsellers"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Explore Best Sellers</span>
              </Link>
            </div>

            {/* Social proof stats */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-xl sm:text-2xl font-black text-white">50,000+</p>
                <p className="text-xs text-slate-400">Devices Protected</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-brand-300">4.9 / 5.0</p>
                <p className="text-xs text-slate-400">Customer Rating</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white">100%</p>
                <p className="text-xs text-slate-400">Genuine Guarantee</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Metallic Shield Logo */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">

              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-slate-700/60 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-4 rounded-full border border-brand-500/20 pointer-events-none" />

              {/* Main Shield Logo Image */}
              <div className="relative w-full h-full p-4 flex items-center justify-center">
                <Image
                  src="/assets/logo.png"
                  alt="WeCover Signature Metallic Shield"
                  fill
                  className="object-contain filter drop-shadow-[0_20px_50px_rgba(197,160,89,0.35)]"
                  priority
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-2 -left-2 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Military Grade</p>
                  <p className="text-[10px] text-slate-400">10-Foot Drop Certified</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute top-4 -right-2 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-3 rounded-2xl shadow-xl flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-300">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">GaN III Fast Tech</p>
                  <p className="text-[10px] text-slate-400">Safe Over-Volt Guard</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

