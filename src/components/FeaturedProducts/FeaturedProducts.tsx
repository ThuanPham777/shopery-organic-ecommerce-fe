// FeaturedProducts.tsx
import ProductCard from '../ProductCard';
import Title from '../Title';
import ProductSection from './ProductSection';
import PromotionBanner from './PromotionBanner';

export default function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Organic Green Apple',
      price: 14.99,
      rating: 4,
      imageUrl: '/images/featured_products/Image1.png',
    },
    {
      id: 2,
      name: 'Organic Indian Mango',
      price: 10.99,
      rating: 5,
      imageUrl: '/images/featured_products/Image2.png',
    },
    {
      id: 3,
      name: 'Organic Banana',
      price: 7.99,
      rating: 4,
      imageUrl: '/images/featured_products/Image3.png',
    },
    {
      id: 4,
      name: 'Organic Orange',
      price: 12.99,
      rating: 5,
      imageUrl: '/images/featured_products/Image4.png',
    },
  ];
  return (
    <div className='space-y-8'>
      <div>
        <div className='lg:col-span-3 md:col-span-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
          <div className='col-span-1'>
            <PromotionBanner
              title='Summer Sale'
              discount='75% off'
              buttonText='Shop Now'
              imageUrl='/images/promotion_banner/Image1.png'
            />
          </div>
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant='vertical'
            />
          ))}
        </div>
      </div>
      <div className='lg:col-span-3 md:col-span-2'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <ProductSection
            title='Hot Deals'
            products={[
              {
                id: 1,
                name: 'Green Apple',
                price: 14.99,
                rating: 4,
                imageUrl: '/images/hot_deals/Image1.png',
              },
              {
                id: 2,
                name: 'Indian Malta',
                price: 14.99,
                rating: 5,
                imageUrl: '/images/hot_deals/Image2.png',
              },
              {
                id: 3,
                name: 'Green Lettuce',
                price: 14.99,
                rating: 4.5,
                imageUrl: '/images/hot_deals/Image3.png',
              },
            ]}
          />
          <ProductSection
            title='Best Seller'
            products={[
              {
                id: 4,
                name: 'Eggplant',
                price: 14.99,
                rating: 4,
                imageUrl: '/images/best_seller/Image1.png',
              },
              {
                id: 5,
                name: 'Red Capsicum',
                price: 20.99,
                rating: 4.5,
                imageUrl: '/images/best_seller/Image2.png',
              },
              {
                id: 6,
                name: 'Red Tomatoes',
                price: 14.99,
                rating: 4.5,
                imageUrl: '/images/best_seller/Image3.png',
              },
            ]}
          />
          <ProductSection
            title='Top Rated'
            products={[
              {
                id: 7,
                name: 'Big Potatoes',
                price: 14.99,
                rating: 5,
                imageUrl: '/images/top_rated/Image1.png',
              },
              {
                id: 8,
                name: 'Corn',
                price: 14.99,
                rating: 4,
                imageUrl: '/images/top_rated/Image2.png',
              },
              {
                id: 9,
                name: 'Fresh Cauliflower',
                price: 14.99,
                rating: 4.5,
                imageUrl: '/images/top_rated/Image3.png',
              },
            ]}
          />
          <PromotionBanner
            title='Hot sale'
            discount='Save 37% on Every Order'
            buttonText='Shop Now'
            imageUrl='/images/promotion_banner/Image2.png'
          />
        </div>
      </div>
    </div>
  );
}
