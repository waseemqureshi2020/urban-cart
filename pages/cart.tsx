import { useRouter } from 'next/router';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { HiTrash, HiArrowLeft, HiArrowRight, HiShoppingBag } from 'react-icons/hi';

export default function CartPage() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <HiShoppingBag size={64} className="text-gray-300 mb-6" />
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-gray-400 mb-8">Add some items to get started.</p>
        <button
          onClick={() => router.push('/products')}
          className="btn-primary inline-flex items-center gap-2"
        >
          <HiArrowLeft size={18} /> Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <span className="text-sm text-gray-400 font-medium">{cartCount} item{cartCount !== 1 ? 's' : ''}</span>
      </div>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 md:gap-6 bg-white border border-gray-100 rounded-2xl p-4 hover:border-gray-200 transition-colors"
          >
            {/* Image */}
            <div
              style={{ position: 'relative', height: '5rem', width: '5rem', flexShrink: 0 }}
              className="rounded-xl overflow-hidden bg-gray-50"
            >
              <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.category}</p>
              <p className="font-bold text-gray-900 mt-1">${item.price.toFixed(2)}</p>
            </div>

            {/* Quantity controls */}
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
              >
                −
              </button>
              <span className="w-9 h-9 flex items-center justify-center text-sm font-semibold bg-gray-50">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
              >
                +
              </button>
            </div>

            {/* Subtotal */}
            <p className="font-bold text-gray-900 w-20 text-right">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="w-9 h-9 flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
            >
              <HiTrash size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-semibold">${cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500">Shipping</span>
          <span className="text-green-600 font-medium">
            {cartTotal >= 100 ? 'Free' : '$9.99'}
          </span>
        </div>
        <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
          <span className="text-lg font-bold">Total</span>
          <span className="text-2xl font-bold">
            ${cartTotal >= 100 ? cartTotal.toFixed(2) : (cartTotal + 9.99).toFixed(2)}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={clearCart}
            className="btn-secondary text-sm order-2 sm:order-1"
          >
            Clear Cart
          </button>
          <button
            onClick={() => router.push('/checkout')}
            className="btn-primary flex-1 inline-flex items-center justify-center gap-2 order-1 sm:order-2"
          >
            Checkout <HiArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}