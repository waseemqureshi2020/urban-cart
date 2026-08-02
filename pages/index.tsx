import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import products from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { HiArrowRight } from 'react-icons/hi';

export default function Home() {
  const router = useRouter();
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOHYyaC0ydi0yaDJ6bTAgMHYyaC0ydi0yaDJ6bTAgMHYyaC0ydi0yaDJ6bTAgMHYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
              ✦ New Collection 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Elevate your
              <br />
              everyday style
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
              Discover a curated collection of premium sneakers, accessories,
              and lifestyle essentials designed for the modern individual.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => router.push('/products')}
                className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 active:scale-95"
              >
                Shop Collection
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => router.push('/products')}
                className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all duration-200 active:scale-95"
              >
                View Lookbook
              </button>
            </div>
          </motion.div>

          {/* Floating stats */}
          <div className="flex flex-wrap gap-8 mt-16">
            {[
              { label: 'Happy Customers', value: '12k+' },
              { label: 'Products', value: '200+' },
              { label: 'Rating', value: '4.8' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Handpicked
            </p>
            <h2 className="section-title">Featured Products</h2>
          </div>
          <button
            onClick={() => router.push('/products')}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors"
          >
            View all <HiArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Free shipping on orders over $100
            </h2>
            <p className="text-gray-300 mb-8">
              Premium delivery. No hidden fees.
            </p>
            <button
              onClick={() => router.push('/products')}
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all active:scale-95"
            >
              Start Shopping <HiArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 text-center text-sm text-gray-400">
          © 2026 Urban Cart. All rights reserved. Demo project.
        </div>
      </footer>
    </div>
  );
}