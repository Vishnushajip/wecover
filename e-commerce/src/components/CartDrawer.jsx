'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatINR } from '@/utils/formatters';
import { COMPANY_INFO } from '@/data/products';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Truck, 
  ShieldCheck 
} from 'lucide-react';

export default function CartDrawer() {
  const { 
    cartItems, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    cartSubtotal, 
    deliveryFee, 
    cartTotal,
    cartCount
  } = useCart();

  if (!isCartOpen) return null;

  const freeShippingThreshold = COMPANY_INFO.shippingThresholdFree;
  const differenceForFree = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingProgress = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-slate-800" />
              <h2 className="text-lg font-bold text-slate-900">
                Your Shopping Cart ({cartCount})
              </h2>
            </div>
            <button
              onClick={closeCart}
              aria-label="Close Cart"
              className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-slate-900 text-white p-3.5 text-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <Truck className="w-4 h-4 text-brand-400 flex-shrink-0" />
              {differenceForFree === 0 ? (
                <span className="font-semibold text-brand-300">
                  🎉 Congratulations! You have unlocked FREE Express Delivery!
                </span>
              ) : (
                <span>
                  Add <strong className="text-brand-300">{formatINR(differenceForFree)}</strong> more to get <strong>FREE Delivery</strong>!
                </span>
              )}
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-brand-400 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 divide-y divide-slate-100">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">Your cart is empty</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs">
                    Explore our collection of premium mobile covers, toughened screen guards, and fast chargers.
                  </p>
                </div>
                <button
                  onClick={closeCart}
                  className="px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-4">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/products/${item.product.id}`}
                          onClick={closeCart}
                          className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-brand-600 line-clamp-2"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          aria-label="Remove item"
                          className="text-slate-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {item.product.category}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-slate-200 rounded-md bg-white">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 sm:p-1.5 text-slate-600 hover:bg-slate-100 rounded-l-md"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-semibold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 sm:p-1.5 text-slate-600 hover:bg-slate-100 rounded-r-md"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-bold text-slate-900">
                          {formatINR(item.product.price * item.quantity)}
                        </span>
                        {item.quantity > 1 && (
                          <span className="block text-[10px] text-slate-400">
                            {formatINR(item.product.price)} each
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50 space-y-4">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-800">{formatINR(cartSubtotal)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Estimated Delivery</span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-600 uppercase font-bold text-[11px]">Free</span>
                    ) : (
                      formatINR(deliveryFee)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Payable Total</span>
                  <span className="text-slate-950">{formatINR(cartTotal)}</span>
                </div>
                <p className="text-[10px] text-slate-400 text-center pt-1">
                  Applicable GST & taxes included in product prices.
                </p>
              </div>

              <div className="space-y-2">
                <Link
                  href="/order"
                  onClick={closeCart}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-slate-950 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={closeCart}
                  className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 text-center transition-colors"
                >
                  Continue Shopping
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Safe & Secure 256-bit Encrypted Checkout</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

