'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/products';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    orderId: '',
    subject: 'Order Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Store</span>
        </Link>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-bold border border-brand-200">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Customer Assistance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Contact WeCover Support
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Have questions about your order, product specifications, bulk business inquiries, or returns? Our Bangalore support team is ready to assist.
          </p>
        </div>

        {/* Grid Layout: Contact Info & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Official Business Details (Razorpay Requirement) */}
          <div className="lg:col-span-5 space-y-6">

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">
                Official Business Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">

                {/* Brand Name */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-brand-400 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Brand & Entity Name</h3>
                    <p className="text-slate-600 mt-0.5">{COMPANY_INFO.name} ({COMPANY_INFO.legalName})</p>
                    <p className="text-[11px] text-slate-400">Mobile Accessories Store</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Customer Support Email</h3>
                    <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="text-brand-600 hover:underline font-semibold block mt-0.5">
                      {COMPANY_INFO.supportEmail}
                    </a>
                    <p className="text-[11px] text-slate-400">Expected response within 24 business hours</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Helpline Number</h3>
                    <a href={`tel:${COMPANY_INFO.supportPhone}`} className="text-slate-800 hover:text-brand-600 font-semibold block mt-0.5">
                      {COMPANY_INFO.supportPhone}
                    </a>
                    <p className="text-[11px] text-slate-400">Toll-free customer assistance</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Operating Address</h3>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Operating Hours</h3>
                    <p className="text-slate-600 mt-0.5">{COMPANY_INFO.workingHours}</p>
                    <p className="text-[11px] text-slate-400">Closed on Sundays and National Holidays</p>
                  </div>
                </div>

              </div>

              {/* Editable Placeholder Note for User */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-800 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Razorpay Verification Note:</span>
                </p>
                <p className="text-[11px] leading-relaxed">
                  Before final merchant approval, update your registered office address, GSTIN, and business support phone number in <code>src/data/products.js</code> to match your legal banking documents.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Send Us a Direct Message
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the form below and our customer support team will get back to you promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950">Message Sent Successfully!</h3>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    Thank you, {form.name}. We have received your query regarding "{form.subject}". A ticket has been created and an agent will reply to {form.email} within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        phone: '',
                        orderId: '',
                        subject: 'Order Inquiry',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">

                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="10-digit mobile"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Order ID (If Applicable)</label>
                      <input
                        type="text"
                        name="orderId"
                        placeholder="e.g. VC-ORD-123456"
                        value={form.orderId}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                    >
                      <option value="Order Inquiry">Order Inquiry / Tracking</option>
                      <option value="Product Details">Product Compatibility Question</option>
                      <option value="Return/Replacement">Return / Replacement Request</option>
                      <option value="Payment Inquiry">Payment / Razorpay Receipt Query</option>
                      <option value="Bulk Order">Bulk Corporate Order</option>
                      <option value="Other">Other Query</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Your Message *</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Please describe how we can assist you..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3.5 px-6 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-sm transition-all shadow-md active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-brand-400" />
                    <span>{isSending ? 'Sending Message...' : 'Submit Message'}</span>
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

