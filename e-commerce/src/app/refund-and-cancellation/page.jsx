import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/products';
import { RotateCcw, Clock, AlertTriangle, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Refund and Cancellation Policy | WeCover',
  description: 'Learn about WeCover 7-day return policy, order cancellation rules, refund processing timelines, and replacement terms.',
};

export default function RefundAndCancellationPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Customer Guarantee</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Last Updated: November 2026 • 7-Day Hassle-Free Replacement Commitment
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
            At <strong>WeCover</strong>, we pride ourselves on crafting high-durability mobile accessories. If you are not completely satisfied with your purchase, our straightforward return and cancellation guidelines protect your rights.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-10 text-xs sm:text-sm text-slate-700 leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">1</span>
              Order Cancellation Policy
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                <strong>Before Dispatch:</strong> You may cancel your order free of charge at any point before it is handed over to our air courier partner (typically within 12–18 hours of placement). Simply email <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="text-brand-600 hover:underline">{COMPANY_INFO.supportEmail}</a> or call <a href={`tel:${COMPANY_INFO.supportPhone}`} className="text-brand-600 hover:underline">{COMPANY_INFO.supportPhone}</a> with your Order ID. A 100% full refund will be processed immediately.
              </li>
              <li>
                <strong>After Dispatch:</strong> Once your package is in transit with the courier, cancellation is not possible. You may refuse delivery upon arrival, or accept delivery and initiate a standard 7-day return request.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">2</span>
              7-Day Return & Replacement Window
            </h2>
            <p>
              We offer a <strong>7-Day Replacement Guarantee</strong> starting from the calendar date on which the tracking carrier marks the parcel as "Delivered".
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                <h4 className="font-bold text-emerald-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Eligible for Return / Replacement
                </h4>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                  <li>Damaged or cracked merchandise upon delivery</li>
                  <li>Manufacturing defect (loose connector, faulty switch)</li>
                  <li>Incorrect accessory or color delivered</li>
                  <li>Unused item in original box with all plastic films</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200 space-y-2">
                <h4 className="font-bold text-red-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  Ineligible for Return
                </h4>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                  <li>Tempered glass once protective adhesive film is removed</li>
                  <li>Damages caused by improper installation or drops exceeding specs</li>
                  <li>Items missing original box, manuals, or bundled clips</li>
                  <li>Requests initiated after the 7-day delivery window</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">3</span>
              How to Initiate a Return or Replacement
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-slate-600">
              <li>
                Send an email to <strong>{COMPANY_INFO.supportEmail}</strong> with the subject: <em>"Return Request - [Your Order ID]"</em>.
              </li>
              <li>
                Attach 2–3 clear photographs showing the product condition, shipping box, and barcode label.
              </li>
              <li>
                Our quality team will review and approve the request within 24 business hours.
              </li>
              <li>
                We will schedule a free reverse pickup with our courier partner from your delivery address.
              </li>
            </ol>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">4</span>
              Refund Method & Processing Timelines
            </h2>
            <p>
              Once your returned package arrives at our Bangalore fulfillment facility and passes physical inspection (usually within 48 hours of receipt):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Prepaid Orders (Razorpay UPI / Cards / Net Banking):</strong> Refunds are credited directly back to the original source bank account or card within <strong>5 to 7 working business days</strong>.
              </li>
              <li>
                <strong>Cash on Delivery (COD) Orders:</strong> Our customer support desk will email you a secure link to provide your bank account number and IFSC code for direct IMPS/NEFT transfer within 3 to 5 business days.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900">Need Immediate Help with an Order?</h3>
            <p className="text-slate-600">
              Email our support desk at <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="text-brand-600 font-semibold hover:underline">{COMPANY_INFO.supportEmail}</a> or call <a href={`tel:${COMPANY_INFO.supportPhone}`} className="text-brand-600 font-semibold hover:underline">{COMPANY_INFO.supportPhone}</a> (Monday – Saturday, 9:30 AM – 6:30 PM IST).
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}

