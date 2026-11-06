import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/products';
import { FileText, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Terms and Conditions | WeCover',
  description: 'Review the terms and conditions governing the purchase and delivery of mobile accessories from WeCover.',
};

export default function TermsAndConditionsPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-bold border border-brand-200">
            <FileText className="w-3.5 h-3.5" />
            <span>Customer Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Last Updated: November 2026 • Governed by the Laws of India
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
            Welcome to <strong>WeCover</strong> (accessible at https://wecover.web.app). These Terms and Conditions govern your access to and purchase of mobile phone accessories, tempered glass, cables, and related physical merchandise operated by <strong>{COMPANY_INFO.legalName}</strong>.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-10 text-xs sm:text-sm text-slate-700 leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">1</span>
              General Store Terms
            </h2>
            <p>
              By accessing our website, placing an order, or browsing products, you confirm that you are at least 18 years of age or accessing under the supervision of a parent or legal guardian, and that you accept these Terms without alteration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">2</span>
              Product Descriptions & Compatibility
            </h2>
            <p>
              We endeavor to display product photography, colors, dimensions, and specifications as accurately as possible. However, actual colors may vary slightly depending on your device's display screen calibration. Customers are responsible for verifying their specific phone model compatibility prior to ordering.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">3</span>
              Pricing and Payment Terms
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>All prices listed on WeCover are quoted in Indian Rupees (INR ₹) and are inclusive of Goods and Services Tax (GST) unless explicitly noted.</li>
              <li>We reserve the right to revise prices or discontinue products without prior notification. However, the price confirmed at the moment of order placement is guaranteed.</li>
              <li>Payments are processed securely via authorized Indian payment gateways (such as Razorpay). We accept UPI (GPay, PhonePe, Paytm, BHIM), Net Banking, RuPay, Visa, MasterCard, and Cash on Delivery (COD) for eligible pin codes.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">4</span>
              Order Acceptance & Verification
            </h2>
            <p>
              Receipt of an order confirmation reference does not constitute final binding acceptance. WeCover reserves the right to decline or cancel any order if:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>The item is out of stock or discontinued.</li>
              <li>A pricing error occurred on the website catalog.</li>
              <li>The shipping address provided is incomplete, unserviceable by our courier network, or flagged for fraudulent activity.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">5</span>
              Warranty & Limitation of Liability
            </h2>
            <p>
              WeCover mobile accessories carry a manufacturer warranty against manufacturing defects (ranging from 30 days to 12 months as indicated on the specific product specifications page).
            </p>
            <p>
              The warranty does not cover normal wear and tear, cosmetic scratching incurred after prolonged usage, intentional damage, misuse, or drop impact exceeding stated test thresholds. In no event shall WeCover's financial liability exceed the total purchase price paid for the product.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">6</span>
              Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and Conditions and any transaction dispute arising between you and WeCover shall be governed by and construed in accordance with the substantive laws of India. Courts in <strong>Bengaluru, Karnataka</strong> shall hold exclusive territorial jurisdiction.
            </p>
          </section>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <p className="font-bold text-slate-900">Need clarification regarding our terms?</p>
            <p className="text-slate-600">Contact our legal team at: <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="text-brand-600 hover:underline">{COMPANY_INFO.supportEmail}</a></p>
          </div>

        </div>

      </div>
    </div>
  );
}

