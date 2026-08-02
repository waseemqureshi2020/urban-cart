export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  inStock: boolean;
  rating: number;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Classic White Sneakers',
    category: 'Shoes',
    price: 79.99,
    description:
      'Timeless design with modern comfort. Perfect for everyday wear.',
    images: [
      'https://images.unsplash.com/photo-1722489291778-cb2a414d6ee0?w=600',
      'https://images.unsplash.com/photo-1722489292294-426912777649?w=600',
    ],
    inStock: true,
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Leather Backpack',
    category: 'Bags',
    price: 129.99,
    description:
      'Handcrafted genuine leather backpack with laptop compartment.',
    images: [
      'https://images.unsplash.com/photo-1549943872-f7ff0b2b51be?w=600',
    ],
    inStock: true,
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 199.99,
    description:
      'Noise-cancelling over-ear headphones with 30-hour battery.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
    ],
    inStock: false,
    rating: 4.2,
  },
  {
    id: '4',
    name: 'Running Shoes',
    category: 'Shoes',
    price: 109.99,
    description:
      'Lightweight and responsive cushioning for your daily run.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
    ],
    inStock: true,
    rating: 4.7,
  },
  {
    id: '5',
    name: 'Denim Jacket',
    category: 'Clothing',
    price: 89.99,
    description: 'Classic denim jacket that never goes out of style.',
    images: [
      'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600',
    ],
    inStock: true,
    rating: 4.3,
  },
  {
    id: '6',
    name: 'Canvas Tote Bag',
    category: 'Bags',
    price: 34.99,
    description: 'Eco-friendly cotton tote for everyday shopping.',
    images: [
      'https://images.unsplash.com/photo-1630381260512-e3fe55c11973?w=600',
    ],
    inStock: true,
    rating: 4.6,
  },
  {
    id: '7',
    name: 'Sunglasses',
    category: 'Accessories',
    price: 49.99,
    description: 'Polarised UV protection with retro design.',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600',
    ],
    inStock: true,
    rating: 4.4,
  },
  {
    id: '8',
    name: 'Smart Watch',
    category: 'Electronics',
    price: 249.99,
    description: 'Track your fitness and stay connected.',
    images: [
      'https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?w=600',
    ],
    inStock: true,
    rating: 4.1,
  },
];

export const categories = [
  'All',
  'Shoes',
  'Bags',
  'Electronics',
  'Clothing',
  'Accessories',
];

export default products;