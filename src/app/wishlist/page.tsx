'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTimes,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  status: 'In Stock' | 'Out of Stock';
}

const initialWishlist: Product[] = [
  {
    id: 1,
    name: 'Green Capsicum',
    price: 14.99,
    oldPrice: 20.99,
    image: '/images/featured_products/Image1.png',
    status: 'In Stock',
  },
  {
    id: 2,
    name: 'Chinese Cabbage',
    price: 45.0,
    image: '/images/featured_products/Image1.png',
    status: 'In Stock',
  },
  {
    id: 3,
    name: 'Fresh Sujapuri Mango',
    price: 9.0,
    image: '/images/featured_products/Image1.png',
    status: 'Out of Stock',
  },
];

const socialIcons = [
  { icon: FaFacebookF, link: 'https://facebook.com' },
  { icon: FaTwitter, link: 'https://twitter.com' },
  { icon: FaLinkedinIn, link: 'https://linkedin.com' },
  { icon: FaInstagram, link: 'https://instagram.com' },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Product[]>(initialWishlist);

  const router = useRouter();
  const handleRemove = (id: number) => {
    setWishlist((prev) => prev.filter((product) => product.id !== id));
  };

  // Nếu giỏ hàng rỗng, hiển thị thông báo và nút quay về shop
  if (wishlist.length === 0) {
    return (
      <div className='container mx-auto p-6 text-center'>
        <h1 className='text-2xl font-bold mb-6'>My Wishlist</h1>
        <p className='text-lg mb-4'>You have not a product in wishlist</p>
        <button
          onClick={() => router.push('/shop')}
          className='border px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300'
        >
          Return to shop
        </button>
      </div>
    );
  }

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <h1 className='text-2xl font-bold text-center mb-6'>My Wishlist</h1>
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='p-3 text-left'>PRODUCT</th>
              <th className='p-3 text-left'>PRICE</th>
              <th className='p-3 text-left'>STOCK STATUS</th>
              <th className='p-3 text-left'></th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((product) => (
              <tr
                key={product.id}
                className='border-t border-gray-300'
              >
                <td className='p-3 flex items-center gap-4'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-16 h-16'
                  />
                  <span>{product.name}</span>
                </td>
                <td className='p-3'>
                  <span className='font-semibold'>
                    ${product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className='text-gray-500 line-through ml-2'>
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </td>
                <td className='p-3'>
                  <span
                    className={
                      product.status === 'In Stock'
                        ? 'bg-green-100 text-green-600 px-2 py-1 rounded'
                        : 'bg-red-100 text-red-600 px-2 py-1 rounded'
                    }
                  >
                    {product.status}
                  </span>
                </td>
                <td className='space-x-4'>
                  {product.status === 'In Stock' ? (
                    <button className='bg-customGreen hover:bg-hoverGreen rounded-full text-white px-4 py-2'>
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      className='bg-gray-300 text-gray-500 px-4 py-2 rounded-full'
                      disabled
                    >
                      Add to Cart
                    </button>
                  )}
                  <button
                    onClick={() => handleRemove(product.id)}
                    className='text-red-500 hover:text-red-700'
                    title='Remove'
                  >
                    <FaTimes size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Share section */}
      <div className='flex flex-col items-center mt-6'>
        <span className='mb-2'>Share:</span>
        <div className='flex gap-3'>
          {socialIcons.map(({ icon: Icon, link }, idx) => (
            <a
              key={idx}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-gray-700 hover:bg-customGreen transition-all'
            >
              <Icon className='text-lg text-white' />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
