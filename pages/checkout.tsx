import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '@/context/CartContext';
import { HiCheck, HiLockClosed } from 'react-icons/hi';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setSubmitted(true);
    clearCart();
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <HiCheck size={36} className="text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-500 mb-8 max-w-md">
          Thank you for your purchase. You'll receive a confirmation email shortly.
        </p>
        <button onClick={() => router.push('/')} className="btn-primary">
          Continue Shopping
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-400">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Form */}
        <div className="md:col-span-3 space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition"
            />
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition" />
              <input type="text" placeholder="Last name" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition" />
            </div>
            <input type="text" placeholder="Address" className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-4 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition" />
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <input type="text" placeholder="City" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition" />
              <input type="text" placeholder="State" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition" />
              <input type="text" placeholder="ZIP" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition" />
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">Payment</h2>
            <input
              type="text"
              placeholder="Card number"
              defaultValue="4242 4242 4242 4242"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition mb-4"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                defaultValue="12/26"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition"
              />
              <input
                type="text"
                placeholder="CVC"
                defaultValue="123"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition"
              />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-2">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 sticky top-28">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.name}{' '}
                    <span className="text-gray-400">×{item.quantity}</span>
                  </span>
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 mt-4 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-semibold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="text-green-600 font-medium">
                  {cartTotal >= 100 ? 'Free' : '$9.99'}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-100">
                <span>Total</span>
                <span>
                  ${cartTotal >= 100 ? cartTotal.toFixed(2) : (cartTotal + 9.99).toFixed(2)}
                </span>
              </div>
            </div>
            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              className="btn-primary w-full mt-6 inline-flex items-center justify-center gap-2"
            >
              <HiLockClosed size={18} />
              {loading ? 'Processing...' : 'Place Order (Demo)'}
            </button>
            <p className="text-xs text-gray-400 mt-3 text-center">
              This is a demo. No real payment is processed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}