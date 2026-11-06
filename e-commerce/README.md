# WeCover Mobile Accessories Storefront

A modern, standalone React / Next.js e-commerce storefront for **WeCover** mobile accessories, engineered specifically for **Razorpay Website Verification** and standalone static deployment on Firebase Hosting.

---

## 📱 Features

- **Brand Identity**: Metallic luxury shield branding with WeCover logo assets.
- **Realistic Catalog**: 15 high-quality mobile accessories with authentic photography, detailed specifications, and pricing in INR (₹).
- **Responsive Design**: Tailored with Tailwind CSS for mobile (320px–480px), tablet (768px–1024px), laptop, and desktop viewports.
- **Shopping Flow**:
  - Home landing page with categories, instant search, best-sellers, and promotional banners.
  - Dynamic product detail pages (`/products/[id]`) with image zoom, specification tables, quantity selectors, and stock statuses.
  - Interactive slide-over Cart Drawer with free shipping threshold meter.
  - Checkout interface (`/order`) with field-by-field validation, subtotal calculations, dynamic delivery fees, and order confirmation UI.
  - LocalStorage cart persistence.
- **Razorpay Legal & Business Policy Pages**:
  - `/privacy-policy` (Data collection, payment handling, customer rights)
  - `/terms-and-conditions` (Acceptance terms, warranty limits, Bangalore jurisdiction)
  - `/refund-and-cancellation` (7-day replacement guarantee, return steps, timelines)
  - `/shipping-policy` (Pan-India coverage, dispatch windows, express delivery tiers)
  - `/contact` (Support email, phone, physical office address, interactive message form)

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Export Mode**: Static Export (`output: 'export'`)
- **Hosting Target**: Firebase Hosting (`site: wecover`)

---

## 🚀 Local Development

1. Navigate to the `e-commerce` directory:
   ```bash
   cd e-commerce
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Static Build

To generate the static HTML export:

```bash
cd e-commerce
npm run build
```

This compiles all pages into static production assets inside the `e-commerce/out` directory.

---

## 🔥 Firebase Hosting Deployment

The project root contains `firebase.json` mapped to the Firebase hosting site `wecover` in project `dubaimobiles`.

To build and deploy:

```bash
# 1. Build static export
cd /Users/inspirezesttechnologies/wecover/e-commerce
npm run build

# 2. Deploy to Firebase site "wecover"
cd /Users/inspirezesttechnologies/wecover
firebase deploy --only hosting:wecover
```

Live Site URL: [https://wecover.web.app](https://wecover.web.app)

---

## 📝 Business Information Checklist for Razorpay Verification

Before submitting the website to Razorpay for merchant verification, update the placeholders in `src/data/products.js`:

| Field | Current Placeholder | Update With |
|---|---|---|
| Legal Name | `WeCover Technologies India` | Your registered company / proprietorship name |
| Support Email | `support@vcover.in` | Your official support email |
| Support Phone | `+91 98765 43210` | Your active business phone number |
| Office Address | `#42, Commercial Avenue, Indiranagar, Bengaluru...` | Your registered business address |
| Working Hours | `Mon-Sat: 9:30 AM - 6:30 PM IST` | Your actual support hours |
