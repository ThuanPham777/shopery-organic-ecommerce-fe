import React, { useState, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';

interface FilterBlogProps {
  onFilterChange?: (filters: {
    search: string;
    category: string;
    tag: string;
  }) => void;
}

export default function FilterBlog({ onFilterChange }: FilterBlogProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [tag, setTag] = useState('');

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({ search, category, tag });
    }
  }, [search, category, tag]);

  const resetFilters = () => {
    setSearch('');
    setCategory('');
    setTag('');
  };

  // Danh sách danh mục chính (Top Category) với số lượng bài viết
  const topCategories = [
    { name: 'Fresh Fruit', count: 134 },
    { name: 'Vegetables', count: 150 },
    { name: 'Cooking', count: 54 },
    { name: 'Snacks', count: 47 },
    { name: 'Beverages', count: 43 },
    { name: 'Beauty & Health', count: 38 },
    { name: 'Bread & Bakery', count: 15 },
  ];

  const popularTags = ['food', 'travel', 'tech', 'lifestyle', 'health'];

  return (
    <div>
      {/* 1. Search */}
      <div className='relative flex-grow mb-4'>
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full pl-10 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-customGreen'
        />
        <CiSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-xl' />
      </div>

      {/* 2. Top Category */}
      <div className='mb-4'>
        <span className='block text-lg font-semibold text-gray-700 mb-2'>
          Top Categories
        </span>
        <ul className='space-y-2'>
          {topCategories.map((cat) => (
            <li
              key={cat.name}
              onClick={() => setCategory(cat.name)}
              className='flex justify-between cursor-pointer px-2 py-1 rounded-md transition'
            >
              <span>{cat.name}</span>
              <span className='text-gray-500'>({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Popular Tag */}
      <div className='mb-4'>
        <span className='block text-lg font-semibold text-gray-700 mb-2'>
          Popular Tags
        </span>
        <div className='flex flex-wrap gap-2'>
          {popularTags.map((pTag) => (
            <button
              key={pTag}
              onClick={() => setTag(pTag)}
              className={`px-3 py-1 text-sm rounded-lg transition ${
                tag === pTag
                  ? 'bg-customGreen text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {pTag}
            </button>
          ))}
        </div>
      </div>

      {/* Nút Reset Filters */}
      <button
        type='button'
        onClick={resetFilters}
        className='w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition'
      >
        Clear Filters
      </button>
    </div>
  );
}
