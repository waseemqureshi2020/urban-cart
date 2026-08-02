import Image from 'next/image';
import { useRouter } from 'next/router';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { HiShoppingBag, HiStar } from 'react-icons/hi';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const router = useRouter();
  const { addToCart } = useCart();

  const goToProduct = () => router.push(`/product/${product.id}`);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div
        onClick={goToProduct}
        style={{ position: 'relative', height: '16rem', width: '100%' }}
        className="cursor-pointer overflow-hidden bg-gray-50"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!product.inStock && (
          <span className="absolute top-3 left-3 bg-red-500/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium">
            Sold Out
          </span>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            disabled={!product.inStock}
            className="bg-white/90 backdrop-blur-sm text-black p-2.5 rounded-full shadow-lg hover:bg-white transition disabled:opacity-50"
          >
            <HiShoppingBag size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category */}
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
          {product.category}
        </p>

        {/* Name */}
        <a
          onClick={goToProduct}
          className="font-semibold text-gray-900 hover:text-gray-600 transition-colors mb-2 cursor-pointer line-clamp-1"
        >
          {product.name}
        </a>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <HiStar size={14} className="text-amber-400" />
          <span className="text-xs text-gray-500">{product.rating}</span>
        </div>

        {/* Price + Add to cart */}
        <div className="flex items-end justify-between mt-auto">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="text-sm font-semibold text-black border border-black rounded-lg px-4 py-2 hover:bg-black hover:text-white transition-all duration-200 disabled:border-gray-200 disabled:text-gray-300 disabled:hover:bg-transparent"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}