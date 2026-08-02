import { useRouter } from 'next/router';
import products from '@/data/products';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { HiStar, HiShoppingBag, HiTruck, HiShieldCheck } from 'react-icons/hi';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-400">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <a onClick={() => router.push('/')} className="hover:text-black cursor-pointer transition-colors">
          Home
        </a>
        <span>/</span>
        <a onClick={() => router.push('/products')} className="hover:text-black cursor-pointer transition-colors">
          Products
        </a>
        <span>/</span>
        <span className="text-black font-medium">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Image gallery */}
        <div>
          {/* Main image */}
          <div
            style={{
              position: 'relative',
              height: '28rem',
              width: '100%',
              marginBottom: '1rem',
            }}
            className="bg-gray-50 rounded-2xl overflow-hidden"
          >
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <button
                key={img}
                onClick={() => setSelectedImage(idx)}
                style={{
                  position: 'relative',
                  height: '4.5rem',
                  width: '4.5rem',
                }}
                className={`rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                  idx === selectedImage
                    ? 'border-black ring-2 ring-black/10'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div className="flex flex-col">
          {/* Category badge */}
          <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 w-fit uppercase tracking-wider">
            {product.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <HiStar
                  key={i}
                  size={18}
                  className={i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 font-medium">
              {product.rating} · 42 reviews
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-4xl font-bold">${product.price.toFixed(2)}</span>
            {product.inStock ? (
              <span className="text-sm text-green-600 font-semibold">In Stock</span>
            ) : (
              <span className="text-sm text-red-500 font-semibold">Out of Stock</span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {product.description}
          </p>

          {/* Add to cart */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-black text-white hover:bg-gray-800'
              } disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed active:scale-[0.98]`}
            >
              <HiShoppingBag size={22} />
              {added ? 'Added!' : 'Add to Cart'}
            </button>
          </div>

          {/* Benefits */}
          <div className="border-t border-gray-100 pt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <HiTruck size={18} className="text-gray-400" />
              Free shipping on orders over $100
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <HiShieldCheck size={18} className="text-gray-400" />
              30-day money back guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}