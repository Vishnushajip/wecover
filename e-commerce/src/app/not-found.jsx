import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-6 shadow-sm">
        <span className="text-6xl font-black text-slate-900 tracking-tight block">
          404
        </span>
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-slate-900">Page Not Found</h1>
          <p className="text-xs text-slate-500">
            The mobile accessory or page you are looking for does not exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <Link
            href="/"
            className="w-full py-3 px-4 rounded-xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Return to Store Home</span>
          </Link>
          <Link
            href="/contact"
            className="w-full py-2.5 px-4 rounded-xl text-slate-600 text-xs font-semibold hover:bg-slate-100 transition-colors"
          >
            Contact Customer Support
          </Link>
        </div>
      </div>
    </div>
  );
}

