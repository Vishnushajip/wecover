import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Toast from '@/components/Toast';

export const metadata = {
  metadataBase: new URL('https://wecover.web.app'),
  title: 'WeCover | Premium Mobile Accessories & Device Armor',
  description: 'Shop genuine WeCover mobile covers, toughened 9H screen protectors, GaN 20W fast chargers, and durable braided cables. Fast shipping across India with 7-day easy returns.',
  keywords: 'WeCover, mobile accessories, phone covers, screen protector, fast charger, Type-C cable, car phone mount, India e-commerce',
  openGraph: {
    title: 'WeCover | Premium Mobile Accessories & Device Armor',
    description: 'Bespoke mobile phone cases, screen guards, and charging essentials engineered for extreme protection.',
    url: 'https://wecover.web.app',
    siteName: 'WeCover',
    images: [
      {
        url: '/assets/logo.png',
        width: 1024,
        height: 1024,
        alt: 'WeCover Brand Shield Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-500 selection:text-slate-950 font-sans">
        <CartProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
