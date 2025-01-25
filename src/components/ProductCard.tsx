import React from 'react';
import Image from 'next/image';
import { AiOutlineHeart, AiOutlineEye, AiFillStar } from 'react-icons/ai';
import { IoBagOutline } from 'react-icons/io5';
import clsx from 'clsx';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number; // Giá trị từ 0-5
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
  variant?: 'horizontal' | 'vertical';
}

export default function ProductCard({
  product,
  variant = 'horizontal',
}: ProductCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <AiFillStar
          key={i}
          size={16}
          className={i < rating ? 'text-yellow-500' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };

  return (
    <div
      className={clsx(
        'border rounded-2xl shadow-sm bg-white flex group overflow-hidden relative transition-shadow hover:shadow-lg',
        {
          'flex-col items-stretch text-left': variant === 'vertical',
          'flex-row items-center p-4': variant === 'horizontal',
        }
      )}
    >
      {/* Image */}
      <div
        className={clsx('relative', {
          'w-full h-full': variant === 'vertical',
          'w-24 h-24 flex-shrink-0': variant === 'horizontal',
        })}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className='w-full h-full object-cover'
        />
        {variant === 'vertical' && (
          <div className='absolute top-0 right-0 flex flex-col items-center justify-center space-y-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity'>
            <button className='p-2 bg-gray-100 text-gray-600 rounded-full transition-all hover:bg-customGreen hover:text-white'>
              <AiOutlineEye size={16} />
            </button>
            <button className='p-2 bg-gray-100 text-gray-600 rounded-full transition-all hover:bg-customGreen hover:text-white'>
              <AiOutlineHeart size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Content for vertical layout */}
      {variant === 'vertical' && (
        <div className='flex flex-row w-full p-4'>
          {/* Left section: product details */}
          <div className='flex-1'>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              {product.name}
            </h3>
            <p className='text-green-600 font-bold text-md mb-2'>
              ${product.price.toFixed(2)}
            </p>
            <div className='flex'>{renderStars(product.rating)}</div>
          </div>

          {/* Right section: shopping button */}
          <div className='flex items-center space-x-2'>
            <button className='p-3 bg-gray-100 rounded-full transition-all hover:bg-customGreen hover:text-white'>
              <IoBagOutline size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Content for horizontal layout */}
      {variant === 'horizontal' && (
        <div className='flex-grow ml-4'>
          <h3 className='text-lg font-semibold text-gray-800 mb-2'>
            {product.name}
          </h3>
          <p className='text-green-600 font-bold text-md mb-2'>
            ${product.price.toFixed(2)}
          </p>
          <div className='flex mb-2'>{renderStars(product.rating)}</div>
          <div className='flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity'>
            <button className='p-2 bg-gray-100 text-gray-600 rounded-full transition-all hover:bg-customGreen hover:text-white'>
              <IoBagOutline size={16} />
            </button>
            <button className='p-2 bg-gray-100 text-gray-600 rounded-full transition-all hover:bg-customGreen hover:text-white'>
              <AiOutlineEye size={16} />
            </button>
            <button className='p-2 bg-gray-100 text-gray-600 rounded-full transition-all hover:bg-customGreen hover:text-white'>
              <AiOutlineHeart size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
