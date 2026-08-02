import { useRouter } from 'next/router';
import { useCart } from '@/context/CartContext';
import { HiShoppingBag, HiSearch } from 'react-icons/hi';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          onClick={() => router.push('/')}
          className="text-2xl font-extrabold tracking-tight cursor-pointer select-none bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
        >
          URBAN
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            onClick={() => router.push('/')}
            className={`text-sm font-medium cursor-pointer transition-colors ${
              router.pathname === '/'
                ? 'text-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            Home
          </a>
          <a
            onClick={() => router.push('/products')}
            className={`text-sm font-medium cursor-pointer transition-colors ${
              router.pathname === '/products'
                ? 'text-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            Shop
          </a>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl hover:bg-gray-100 transition-colors">
            <HiSearch size={20} className="text-gray-600" />
          </button>
          <button
            onClick={() => router.push('/cart')}
            className="relative flex items-center justify-center w-10 h-10 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <HiShoppingBag size={22} className="text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}