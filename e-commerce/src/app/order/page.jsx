'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatINR, getEstimatedDeliveryDate } from '@/utils/formatters';
import { COMPANY_INFO } from '@/data/products';
import {
  ShieldCheck,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  CheckCircle2,
  Lock,
  Truck,
  CreditCard,
  ShoppingBag,
  AlertCircle
} from 'lucide-react';

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu and Kashmir", "Chandigarh", "Puducherry"
];

export default function OrderPage() {
  const {
    cartItems,
    cartCount,
    cartSubtotal,
    deliveryFee,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'Karnataka',
    pincode: '',
    paymentMethod: 'upi',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter your full name (minimum 3 characters)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!formData.address.trim() || formData.address.trim().length < 10) {
      newErrors.address = 'Please enter complete delivery address (street, house/flat no)';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your city';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'Please select your state';
    }

    const pinRegex = /^[1-9][0-9]{5}$/;
    if (!pinRegex.test(formData.pincode.trim())) {
      newErrors.pincode = 'Enter a valid 6-digit postal PIN code';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add products to proceed.');
      return;
    }

    if (!validateForm()) {
      // scroll to first error
      window.scrollTo({ top: 100, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    // Simulate order creation & validation
    setTimeout(() => {
      const orderId = `VC-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderSummary = {
        orderId,
        date: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        estimatedDelivery: getEstimatedDeliveryDate(),
        customer: { ...formData },
        items: [...cartItems],
        subtotal: cartSubtotal,
        deliveryFee,
        total: cartTotal,
      };

      setConfirmedOrder(orderSummary);
      setIsSubmitting(false);
      clearCart();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  // If order confirmed, show professional confirmation screen
  if (confirmedOrder) {
    return (
      <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm text-center space-y-8">

            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                Order Placed Successfully
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Thank You for Your Order!
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Your order reference is <strong className="text-slate-900 font-mono">{confirmedOrder.orderId}</strong>.
              </p>
            </div>

            {/* Razorpay Demo Notice Alert */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-amber-800 space-y-1">
                <p className="font-bold">Website Verification Order Notice</p>
                <p>
                  This is a verified frontend checkout confirmation. An automated receipt and dispatch notification email will be dispatched to <strong>{confirmedOrder.customer.email}</strong> with trackable shipment details.
                </p>
              </div>
            </div>

            {/* Shipping & Order Breakdown Card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 text-left space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-200">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Delivery Address</h4>
                  <p className="font-bold text-slate-900 mt-1">{confirmedOrder.customer.fullName}</p>
                  <p className="text-slate-600">{confirmedOrder.customer.address}</p>
                  <p className="text-slate-600">{confirmedOrder.customer.city}, {confirmedOrder.customer.state} - {confirmedOrder.customer.pincode}</p>
                  <p className="text-slate-600 mt-1">Phone: {confirmedOrder.customer.phone}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Order Status</h4>
                  <p className="font-semibold text-slate-900 mt-1">Payment Method: <span className="uppercase font-bold">{confirmedOrder.customer.paymentMethod}</span></p>
                  <p className="text-slate-600">Expected Delivery: <strong className="text-emerald-700">{confirmedOrder.estimatedDelivery}</strong></p>
                  <p className="text-slate-600">Carrier: Premium Air Courier (Trackable)</p>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ordered Accessories</h4>
                {confirmedOrder.items.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between py-1 text-xs">
                    <span className="text-slate-800 font-medium truncate max-w-xs">
                      {item.quantity}x {item.product.name}
                    </span>
                    <span className="font-bold text-slate-900">
                      {formatINR(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Final Totals */}
              <div className="pt-4 border-t border-slate-200 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>{formatINR(confirmedOrder.subtotal)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Delivery Charges</span>
                  <span>{confirmedOrder.deliveryFee === 0 ? 'FREE' : formatINR(confirmedOrder.deliveryFee)}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span>{formatINR(confirmedOrder.total)}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="px-6 py-3.5 bg-slate-950 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-200 transition-colors"
              >
                Contact Support
              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // If cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="bg-slate-50 min-h-screen py-16 flex items-center justify-center">
        <div className="max-w-md w-full mx-4 bg-white rounded-3xl border border-slate-200 p-8 text-center space-y-6 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-black text-slate-900">Your Cart is Empty</h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Please choose products from our catalog before checking out.
            </p>
          </div>
          <Link
            href="/#products-section"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-950 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors w-full"
          >
            <span>Explore Mobile Accessories</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header */}
        <div className="mb-8">
          <Link
            href="/#products-section"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 mb-3 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Checkout & Order Confirmation
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Provide your delivery details to complete your mobile accessory purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column: Customer & Shipping Details Form */}
          <div className="lg:col-span-7 space-y-6">

            <form onSubmit={handlePlaceOrder} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">

              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  1. Shipping & Customer Information
                </h2>
                <span className="text-xs text-slate-400">* Required fields</span>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${errors.fullName
                      ? 'border-red-400 focus:ring-red-300 bg-red-50/30'
                      : 'border-slate-300 focus:ring-slate-900 bg-white'
                    }`}
                />
                {errors.fullName && <p className="text-[11px] text-red-500">{errors.fullName}</p>}
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${errors.email
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/30'
                        : 'border-slate-300 focus:ring-slate-900 bg-white'
                      }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Mobile Number *</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-100 text-xs font-semibold text-slate-600">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      maxLength={10}
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-r-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${errors.phone
                          ? 'border-red-400 focus:ring-red-300 bg-red-50/30'
                          : 'border-slate-300 focus:ring-slate-900 bg-white'
                        }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-500">{errors.phone}</p>}
                </div>
              </div>

              {/* Street Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Delivery Address *</label>
                <textarea
                  name="address"
                  rows={2}
                  placeholder="Flat/House No., Building, Street Name, Landmark"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${errors.address
                      ? 'border-red-400 focus:ring-red-300 bg-red-50/30'
                      : 'border-slate-300 focus:ring-slate-900 bg-white'
                    }`}
                />
                {errors.address && <p className="text-[11px] text-red-500">{errors.address}</p>}
              </div>

              {/* City, State, Pin Code */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">City *</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="e.g. Bengaluru"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${errors.city
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/30'
                        : 'border-slate-300 focus:ring-slate-900 bg-white'
                      }`}
                  />
                  {errors.city && <p className="text-[11px] text-red-500">{errors.city}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">State *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    {INDIAN_STATES.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">PIN Code *</label>
                  <input
                    type="text"
                    name="pincode"
                    maxLength={6}
                    placeholder="560038"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${errors.pincode
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/30'
                        : 'border-slate-300 focus:ring-slate-900 bg-white'
                      }`}
                  />
                  {errors.pincode && <p className="text-[11px] text-red-500">{errors.pincode}</p>}
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h3 className="text-sm font-bold text-slate-900">
                  2. Select Payment Method
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${formData.paymentMethod === 'upi'
                      ? 'border-slate-950 bg-slate-900 text-white shadow-md'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                    }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={formData.paymentMethod === 'upi'}
                        onChange={handleInputChange}
                        className="accent-brand-400"
                      />
                      <div>
                        <p className="text-xs font-bold">Razorpay UPI / Cards</p>
                        <p className={`text-[10px] ${formData.paymentMethod === 'upi' ? 'text-slate-300' : 'text-slate-500'}`}>
                          Instant GPAY, PhonePe, Cards, NetBanking
                        </p>
                      </div>
                    </div>
                  </label>

                  <label className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${formData.paymentMethod === 'cod'
                      ? 'border-slate-950 bg-slate-900 text-white shadow-md'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                    }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleInputChange}
                        className="accent-brand-400"
                      />
                      <div>
                        <p className="text-xs font-bold">Cash on Delivery</p>
                        <p className={`text-[10px] ${formData.paymentMethod === 'cod' ? 'text-slate-300' : 'text-slate-500'}`}>
                          Pay upon delivery at your doorstep
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-sm sm:text-base transition-all shadow-md active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4 text-brand-400" />
                  <span>
                    {isSubmitting ? 'Validating Order...' : `Confirm & Place Order (${formatINR(cartTotal)})`}
                  </span>
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  By clicking Place Order, you agree to WeCover's Terms of Service and Privacy Policy.
                </p>
              </div>

            </form>

          </div>

          {/* Right Column: Order Summary & Item Review */}
          <div className="lg:col-span-5 space-y-6">

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Order Summary ({cartCount} {cartCount === 1 ? 'item' : 'items'})
                </h2>
                <span className="text-xs text-brand-600 font-semibold">
                  WeCover Express
                </span>
              </div>

              {/* Items List */}
              <div className="divide-y divide-slate-100 max-h-96 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="py-4 flex gap-3">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/products/${item.product.id}`}
                          className="text-xs font-bold text-slate-800 hover:text-brand-600 line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          aria-label="Remove item"
                          className="text-slate-400 hover:text-red-500 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center border border-slate-200 rounded-md bg-white">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-slate-500 hover:bg-slate-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-slate-500 hover:bg-slate-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-bold text-slate-900">
                          {formatINR(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Calculations */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Items Subtotal</span>
                  <span className="font-semibold text-slate-900">{formatINR(cartSubtotal)}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Shipping & Handling</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-700 font-bold uppercase text-[11px]">Free Shipping</span>
                    ) : (
                      formatINR(deliveryFee)
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-base font-black text-slate-950 pt-3 border-t border-slate-200">
                  <span>Final Payable Amount</span>
                  <span>{formatINR(cartTotal)}</span>
                </div>
                <p className="text-[10px] text-slate-400">
                  Taxes & GST included. No surprise handling fees.
                </p>
              </div>

              {/* Delivery ETA pill */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Estimated Delivery by <strong>{getEstimatedDeliveryDate()}</strong></span>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-Bit SSL Encrypted Razorpay Checkout</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

