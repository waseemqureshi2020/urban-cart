import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import products, { categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  let filtered =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Sort
  if (sortBy === 'price-low') filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
            Explore
          </p>
          <h1 className="text-4xl font-bold">All Products</h1>
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-2 text-sm bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/5"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-black text-white shadow-lg shadow-black/10'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product count */}
      <p className="text-sm text-gray-400 mb-6">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}