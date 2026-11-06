import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/products';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | WeCover',
  description: 'Learn how WeCover collects, utilizes, and protects your personal customer data and order details in compliance with Indian IT regulations.',
};

export default function PrivacyPolicyPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
            <Lock className="w-3.5 h-3.5" />
            <span>Legal Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Last Updated: November 2026 • Effective Date: January 1, 2025
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
            This Privacy Policy describes how <strong>{COMPANY_INFO.legalName}</strong> ("WeCover", "we", "us", or "our") collects, uses, protects, and discloses personal information when you visit our website <strong>https://wecover.web.app</strong>, purchase mobile accessories, or interact with our customer service.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-10 text-xs sm:text-sm text-slate-700 leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">1</span>
              Information We Collect
            </h2>
            <p>
              When you browse our storefront or place an order for mobile phone covers, screen protectors, chargers, and related gear, we collect the following customer information:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Contact & Identity Data:</strong> Your full name, mobile telephone number, and email address.</li>
              <li><strong>Delivery Information:</strong> Physical delivery address including apartment/house number, street name, city, state, and 6-digit postal PIN code.</li>
              <li><strong>Transaction Data:</strong> Ordered items, product quantities, total paid amounts, timestamp, and transaction identifiers. <em>Note: We do NOT store your credit card numbers, CVVs, or UPI PINs. All financial payments are securely handled by PCI-DSS certified payment processors (e.g. Razorpay).</em></li>
              <li><strong>Technical & Device Data:</strong> IP address, browser type, operating system version, and general geographic location data to prevent fraudulent activities.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">2</span>
              How We Use Your Personal Information
            </h2>
            <p>
              We process personal customer data exclusively for legitimate commercial purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>To fulfill and dispatch your mobile accessories order to your destination address.</li>
              <li>To send automatic transaction receipts, shipment dispatch alerts, and carrier tracking links.</li>
              <li>To provide active post-sales customer support, return management, and warranty replacements.</li>
              <li>To prevent cyber abuse, fraudulent order placements, and suspicious chargebacks.</li>
              <li>To satisfy accounting, tax compliance, and regulatory obligations under Indian law.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">3</span>
              Third-Party Service Disclosures
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third-party marketing brokers. Data is shared strictly on a need-to-know basis with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Payment Gateway Partners:</strong> Authorized gateway partners (including Razorpay Software Pvt. Ltd.) to securely authenticate and process online payments via UPI, Net Banking, and Cards.</li>
              <li><strong>Logistics & Courier Partners:</strong> Certified courier and freight partners (such as Blue Dart, Delhivery, DTDC, India Post) to physically transport and deliver packages.</li>
              <li><strong>Government & Law Enforcement Authorities:</strong> Only when legally mandated by court order or applicable laws in India.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">4</span>
              Data Protection & Security
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical security safeguards:
            </p>
            <p>
              Our website uses 256-bit Secure Socket Layer (SSL) encryption for all transmitted data. Access to customer shipping records is restricted strictly to authorized logistics staff.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">5</span>
              Cookies and Tracking
            </h2>
            <p>
              We use necessary local storage and browser cookies to maintain your active shopping cart, preserve your selected product filters, and remember shipping choices. You can disable cookies in your browser settings, though certain shopping cart conveniences may be disabled.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-slate-950 text-white text-xs flex items-center justify-center font-bold">6</span>
              Customer Rights & Inquiries
            </h2>
            <p>
              Under Indian Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, you hold the right to review, update, or request the deletion of your personal records stored in our systems.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mt-3 space-y-1.5">
              <p className="font-bold text-slate-900">Privacy & Grievance Contact:</p>
              <p>Email: <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="text-brand-600 hover:underline">{COMPANY_INFO.supportEmail}</a></p>
              <p>Phone: <a href={`tel:${COMPANY_INFO.supportPhone}`} className="text-brand-600 hover:underline">{COMPANY_INFO.supportPhone}</a></p>
              <p>Office Address: {COMPANY_INFO.address}</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}

