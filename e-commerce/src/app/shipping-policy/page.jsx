import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/products';
import { Truck, Clock, MapPin, AlertCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Shipping and Delivery Policy | WeCover',
  description: 'Read WeCover shipping policy, delivery timelines across India, shipping fee calculations, and shipment tracking info.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Store</span>
        </Link>

        {/* Header Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
            <Truck className="w-3.5 h-3.5" />
            <span>Fast Express Dispatch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Shipping & Delivery Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Last Updated: November 2026 • Servicing 28,000+ PIN Codes Across India
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
            This Shipping Policy outlines dispatch protocols, shipping charges, carrier partnerships, and expected delivery windows for orders placed on <strong>WeCover</strong> (https://wecover.web.app).
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-10 text-xs sm:text-sm text-slate-700 leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">1</span>
              Serviceable Shipping Coverage
            </h2>
            <p>
              We ship to all major tier-1, tier-2, tier-3 cities, and rural postal zones across all 28 Indian States and 8 Union Territories through air express courier partners.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">2</span>
              Order Processing & Dispatch Timelines
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Same-Day Dispatch:</strong> Orders placed before <strong>2:00 PM IST (Monday through Saturday)</strong> are packed, quality verified, and handed to the courier partner on the same business day.
              </li>
              <li>
                Orders placed after 2:00 PM IST or on Sundays and national public holidays are dispatched on the next working business day.
              </li>
              <li>
                Standard warehouse processing takes less than 24 hours from payment confirmation.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">3</span>
              Estimated Delivery Timelines
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                  <tr>
                    <th className="py-3 px-4">Destination Region</th>
                    <th className="py-3 px-4">Courier Mode</th>
                    <th className="py-3 px-4">Estimated Transit Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Metro Cities (Bengaluru, Mumbai, Delhi-NCR, Chennai, Hyderabad, Kolkata)</td>
                    <td className="py-3 px-4">Express Air Cargo</td>
                    <td className="py-3 px-4 font-bold text-emerald-700">2 to 3 Business Days</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Tier 2 & Tier 3 Cities (State capitals & industrial hubs)</td>
                    <td className="py-3 px-4">Air / Fast Surface</td>
                    <td className="py-3 px-4 font-bold text-slate-800">3 to 4 Business Days</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Remote & Northeast Postal Sectors</td>
                    <td className="py-3 px-4">India Post Speed Post / Regional Air</td>
                    <td className="py-3 px-4 font-bold text-slate-800">4 to 6 Business Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">4</span>
              Shipping & Delivery Fees
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                <p className="font-bold text-emerald-900 text-sm">FREE Express Shipping</p>
                <p className="text-xs text-slate-600 mt-1">
                  Applicable to all orders with an item subtotal of <strong>₹{COMPANY_INFO.shippingThresholdFree} and above</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="font-bold text-slate-900 text-sm">Flat ₹{COMPANY_INFO.standardDeliveryFee} Standard Shipping</p>
                <p className="text-xs text-slate-600 mt-1">
                  Charged on small orders below ₹{COMPANY_INFO.shippingThresholdFree} to cover freight and protective box packaging.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">5</span>
              Shipment Tracking & Updates
            </h2>
            <p>
              As soon as your package is dispatched, we send an automatic email and SMS containing your live Airway Bill (AWB) number and direct carrier tracking URL. You can monitor the real-time package status until it arrives at your doorstep.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">6</span>
              Incorrect Address & Delivery Attempts
            </h2>
            <p>
              Our courier partners attempt delivery up to 3 times. If an order cannot be delivered due to an incorrect phone number or incomplete house address, it will be returned to our origin facility (RTO). We will contact you to correct the details and arrange re-dispatch.
            </p>
          </section>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <p className="font-bold text-slate-900">Questions about your shipment?</p>
            <p className="text-slate-600">Contact logistics support: <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="text-brand-600 hover:underline">{COMPANY_INFO.supportEmail}</a> or call <a href={`tel:${COMPANY_INFO.supportPhone}`} className="text-brand-600 hover:underline">{COMPANY_INFO.supportPhone}</a>.</p>
          </div>

        </div>

      </div>
    </div>
  );
}

