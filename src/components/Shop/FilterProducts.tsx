import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

type FilterProductsProps = {
  categories: { name: string; count: number }[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  brands: { name: string }[];
  selectedBrand: string | null;
  setSelectedBrand: (brand: string | null) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  rating: number;
  setRating: (rating: number) => void;
};

export default function FilterProducts({
  categories,
  selectedCategory,
  setSelectedCategory,
  brands,
  selectedBrand,
  setSelectedBrand,
  priceRange,
  setPriceRange,
  rating,
  setRating,
}: FilterProductsProps) {
  const [minPrice, setMinPrice] = useState(priceRange[0]);
  const [maxPrice, setMaxPrice] = useState(priceRange[1]);

  const applyPriceFilter = () => {
    setPriceRange([minPrice, maxPrice]);
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const selectBrand = (brand: string) => {
    setSelectedBrand(selectedBrand === brand ? null : brand);
  };

  return (
    <div className='space-y-6'>
      {/* Categories */}
      <div>
        <h3 className='font-bold text-lg mb-4 text-gray-700'>All Categories</h3>
        <ul className='space-y-2'>
          {categories.map((category, idx) => (
            <li
              key={idx}
              className='flex justify-between items-center'
            >
              <label className='flex items-center gap-2 text-gray-600'>
                <input
                  type='checkbox'
                  checked={selectedCategory === category.name}
                  onChange={() => selectCategory(category.name)}
                  className='accent-customGreen'
                />
                {category.name}
              </label>
              <span className='text-gray-500'>{category.count}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Brands */}
      <div>
        <h3 className='font-bold text-lg mb-4 text-gray-700'>Brands</h3>
        <ul className='space-y-2'>
          {brands.map((brand, idx) => (
            <li
              key={idx}
              className='flex justify-between items-center'
            >
              <label className='flex items-center gap-2 text-gray-600'>
                <input
                  type='checkbox'
                  checked={selectedBrand === brand.name}
                  onChange={() => selectBrand(brand.name)}
                  className='accent-customGreen'
                />
                {brand.name}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className='font-bold text-lg mb-4 text-gray-700'>Price</h3>
        <div className='flex items-center gap-2'>
          <input
            type='number'
            min={0}
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className='border border-gray-300 px-2 py-1 w-20 rounded-md text-gray-700'
            placeholder='Min'
          />
          <span>-</span>
          <input
            type='number'
            max={200}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className='border border-gray-300 px-2 py-1 w-20 rounded-md text-gray-700'
            placeholder='Max'
          />
          <button
            onClick={applyPriceFilter}
            className='bg-orange-400 text-white px-2 py-2 rounded-md flex items-center'
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      {/* Rating */}
      <div>
        <h3 className='font-bold text-lg mb-4 text-gray-700'>Rating</h3>
        <ul className='space-y-2'>
          {[5, 4, 3, 2, 1].map((star) => (
            <li
              key={star}
              className='flex items-center gap-2 cursor-pointer'
              onClick={() => setRating(star)}
            >
              <div className='flex items-center gap-1'>
                {Array.from({ length: star }).map((_, idx) => (
                  <AiFillStar
                    key={idx}
                    className='text-yellow-400'
                  />
                ))}
                {Array.from({ length: 5 - star }).map((_, idx) => (
                  <AiFillStar
                    key={idx}
                    className='text-gray-300'
                  />
                ))}
              </div>
              {star < 5 && <span className='text-gray-600'>And Up</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
