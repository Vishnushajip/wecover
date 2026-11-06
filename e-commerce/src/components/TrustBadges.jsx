'use client';

import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Headphones, Zap, Award } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Truck,
      title: 'Free Express Shipping',
      description: 'Dispatched within 24 hours via premium air couriers across 28,000+ pin codes in India.',
      color: 'text-blue-500 bg-blue-50 border-blue-200'
    },
    {
      icon: RotateCcw,
      title: '7-Day Easy Returns',
      description: 'Defective, damaged, or mismatched product? Receive immediate replacement or full refund.',
      color: 'text-emerald-500 bg-emerald-50 border-emerald-200'
    },
    {
      icon: Award,
      title: '100% Genuine Tested',
      description: 'Manufactured to strict RoHS, CE, and BIS compliance standards with 6-12 months warranty.',
      color: 'text-amber-500 bg-amber-50 border-amber-200'
    },
    {
      icon: Headphones,
      title: 'Direct Customer Care',
      description: 'Dedicated phone and email support available Monday through Saturday 9:30 AM – 6:30 PM IST.',
      color: 'text-purple-500 bg-purple-50 border-purple-200'
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${b.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{b.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{b.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

