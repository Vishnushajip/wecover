import { PRODUCTS } from '@/data/products';
import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export function generateMetadata({ params }) {
  const product = PRODUCTS.find((p) => p.id === params.id);
  if (!product) {
    return {
      title: 'Product Not Found | WeCover',
    };
  }

  return {
    title: `${product.name} | WeCover Store`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} - Buy Online at WeCover`,
      description: product.shortDescription,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductPage({ params }) {
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  // Related products from same category or top products
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.rating >= 4.8)
  ).slice(0, 4);

  return (
    <ProductDetailClient
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}

