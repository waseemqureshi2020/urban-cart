import type { AppProps } from 'next/app';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'react-hot-toast';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Navbar />
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </CartProvider>
  );
}