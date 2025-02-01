'use client';
import React, { useState, useEffect } from 'react';
import FilterProducts from '@/components/Shop/FilterProducts';
import ProductsList from '@/components/Shop/ProductsList';
import SortProduct from '@/components/Shop/SortProducts';

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [rating, setRating] = useState(0);
  const [sortOption, setSortOption] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Organic Green Apple',
      price: 14.99,
      rating: 4,
      imageUrl: '/images/featured_products/Image1.png',
      category: 'Fresh Fruit',
      brand: 'Whole Foods',
      stock: 100,
    },
    {
      id: 2,
      name: 'Organic Indian Mango',
      price: 10.99,
      rating: 5,
      imageUrl: '/images/featured_products/Image2.png',
      category: 'Vegetables',
      brand: 'Nature Choice',
      stock: 200,
    },
  ];

  const categories = [
    { name: 'Fresh Fruit', count: 34 },
    { name: 'Vegetables', count: 150 },
  ];
  const brands = [
    {
      name: 'Nature Choice',
    },
    {
      name: 'Whole Foods',
    },
  ];

  useEffect(() => {
    if (showSidebar) {
      setShowSidebar(false);
    }
  }, [selectedCategory, selectedBrand, priceRange, rating]);

  useEffect(() => {
    if (showSidebar) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showSidebar]);

  const filteredProducts = products
    .filter(
      (product) =>
        (!selectedCategory || selectedCategory === product.category) &&
        (!selectedBrand || selectedBrand === product.brand) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        product.rating >= rating
    )
    .sort((a, b) => {
      if (sortOption === 'highest-price') return b.price - a.price;
      if (sortOption === 'lowest-price') return a.price - b.price;
      if (sortOption === 'highest-rating') return b.rating - a.rating;
      if (sortOption === 'lowest-rating') return a.rating - b.rating;
      return 0;
    });

  return (
    <div className='relative flex flex-col lg:flex-row gap-8 p-6 min-h-screen'>
      {showSidebar && (
        <div
          className='fixed inset-0 z-50 bg-black bg-opacity-50'
          onClick={() => setShowSidebar(false)}
        >
          <aside
            className='absolute right-0 top-0 bottom-0 bg-white shadow-lg w-3/4 max-w-md p-4 space-y-4 flex flex-col h-full overflow-y-auto'
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='text-lg font-semibold text-gray-800 mb-4'>
              Filters
            </h2>
            <FilterProducts
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              brands={brands}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              rating={rating}
              setRating={setRating}
            />
            <button
              className='mt-4 p-2 bg-red-500 text-white rounded'
              onClick={() => setShowSidebar(false)}
            >
              Close
            </button>
          </aside>
        </div>
      )}

      <aside className='hidden lg:block lg:w-1/4'>
        <div className='bg-white shadow-lg p-4 space-y-4 flex flex-col h-full'>
          <h2 className='text-lg font-semibold text-gray-800 mb-4'>Filters</h2>
          <FilterProducts
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            brands={brands}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            rating={rating}
            setRating={setRating}
          />
        </div>
      </aside>

      <main className='flex-1'>
        <button
          className='lg:hidden mb-4 p-2 bg-customGreen hover:bg-hoverGreen text-white rounded'
          onClick={() => setShowSidebar(true)}
        >
          Filter
        </button>

        <div className='flex justify-between items-center mb-6'>
          <SortProduct
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          <div className='text-gray-600 text-sm mt-4 lg:mt-0'>
            {filteredProducts.length} results found
          </div>
        </div>
        <ProductsList
          products={filteredProducts}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={12}
        />
      </main>
    </div>
  );
}
