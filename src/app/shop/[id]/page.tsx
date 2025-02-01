'use client';
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoBagOutline } from 'react-icons/io5';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ProductCard from '@/components/ProductCard';

export default function ProductDetails() {
  const product = {
    id: 1,
    name: 'Chinese Cabbage',
    price: 17.28,
    originalPrice: 48.0,
    images: [
      '/images/product-details/image1.png',
      '/images/product-details/image1.png',
      '/images/product-details/image1.png',
      '/images/product-details/image1.png',
    ],
    description:
      'Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.',
    rating: 4,
    reviews: 4,
    discount: 64,
    category: 'Vegetables',
    brand: 'Farm Fresh',
    status: 'In Stock',
  };

  const socialIcons = [
    { icon: FaFacebookF, link: 'https://facebook.com' },
    { icon: FaTwitter, link: 'https://twitter.com' },
    { icon: FaLinkedinIn, link: 'https://linkedin.com' },
    { icon: FaInstagram, link: 'https://instagram.com' },
  ];

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [reviewsToShow, setReviewsToShow] = useState(2); // Ban đầu hiển thị 2 reviews

  const relatedProducts = [
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

  // Cập nhật đối tượng review để bao gồm avatar của người dùng
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      rating: 4,
      review:
        'This product is very good. The packaging was well done and the freshness of the cabbage was excellent.',
      avatar: '/images/users/avatar1.png',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 5,
      review:
        'I love this product! The cabbage was so tasty and the packaging was perfect.',
      avatar: '/images/users/avatar2.png',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      rating: 3,
      review:
        'I had a little bit of trouble with the packaging and the cabbage was not as fresh as I expected.',
      avatar: '/images/users/avatar3.png',
    },
    {
      id: 4,
      name: 'Alice Wilson',
      rating: 5,
      review:
        'This product is amazing! The cabbage was delicious and the packaging was perfect.',
      avatar: '/images/users/avatar4.png',
    },
  ];

  const handleLoadMoreReviews = () => {
    setReviewsToShow((prev) => prev + 2); // Hiển thị thêm 2 review mỗi lần bấm
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      {/* Product Details */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Product Image Gallery */}
        <div className='relative flex flex-col items-center'>
          <div className='w-full relative'>
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className='w-full rounded-lg shadow-lg'
            />
            {/* Left Arrow */}
            <button
              className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-customGreen'
              onClick={() =>
                setSelectedImage((prev) =>
                  prev === 0 ? product.images.length - 1 : prev - 1
                )
              }
            >
              <FaArrowLeft />
            </button>
            {/* Right Arrow */}
            <button
              className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-customGreen'
              onClick={() =>
                setSelectedImage((prev) =>
                  prev === product.images.length - 1 ? 0 : prev + 1
                )
              }
            >
              <FaArrowRight />
            </button>
          </div>
          {/* Image Thumbnails */}
          <div className='flex gap-2 mt-3 overflow-x-auto'>
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`w-16 h-16 object-cover rounded cursor-pointer border ${
                  index === selectedImage
                    ? 'border-green-500'
                    : 'border-gray-200'
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div>
          <h1 className='text-3xl font-bold flex items-center gap-2'>
            {product.name}
            <span className='bg-green-500 text-white text-xs px-2 py-1 rounded'>
              {product.status}
            </span>
          </h1>

          {/* Rating & Reviews */}
          <div className='flex items-center gap-2 mt-2'>
            <div className='flex text-yellow-400'>
              {[...Array(product.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className='text-gray-500'>{product.reviews} Reviews</span>
          </div>

          {/* Pricing */}
          <div className='mt-3 text-xl'>
            <span className='line-through text-gray-400'>
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className='text-green-600 font-bold ml-2'>
              ${product.price.toFixed(2)}
            </span>
            <span className='bg-red-500 text-white text-sm px-2 py-1 rounded ml-2'>
              {product.discount}% OFF
            </span>
          </div>

          {/* Product Description */}
          <p className='mt-4 text-gray-600'>{product.description}</p>

          {/* Brand & Category */}
          <div className='mt-4'>
            <p>
              <span className='font-semibold'>Brand:</span> {product.brand}
            </p>
            <p>
              <span className='font-semibold'>Category:</span>{' '}
              {product.category}
            </p>
          </div>

          {/* Share Icons */}
          <div className='flex items-center gap-2 mt-4'>
            <span className='font-semibold'>Share Item:</span>
            <div className='flex gap-2'>
              {socialIcons.map(({ icon: Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 rounded-full hover:bg-customGreen transition-all focus:outline-none focus:ring-2 focus:ring-customGreen'
                >
                  <Icon className='text-md' />
                </a>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className='flex items-center mt-4 gap-4'>
            <button
              className='px-3 py-1 border rounded text-lg focus:outline-none focus:ring-2 focus:ring-customGreen'
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className='text-lg font-semibold'>{quantity}</span>
            <button
              className='px-3 py-1 border rounded text-lg focus:outline-none focus:ring-2 focus:ring-customGreen'
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className='mt-4 flex flex-col sm:flex-row justify-between items-center gap-4'>
            <button className='w-full flex items-center justify-center gap-2 bg-customGreen text-white py-3 rounded-full text-lg hover:bg-hoverGreen transition focus:outline-none focus:ring-2 focus:ring-customGreen'>
              Add to Cart <IoBagOutline />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Logic cho nút heart (wishlist)
              }}
              className='p-2 bg-gray-100 text-gray-600 rounded-full transition-all hover:bg-customGreen hover:text-white focus:outline-none focus:ring-2 focus:ring-customGreen'
            >
              <AiOutlineHeart size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className='mt-8'>
        <h2 className='text-2xl font-semibold'>Customer Reviews</h2>
        <div className='mt-4 space-y-4'>
          {reviews.slice(0, reviewsToShow).map((review) => (
            <div
              key={review.id}
              className='border border-gray-200 p-4 rounded-lg shadow-sm'
            >
              <div className='flex flex-col sm:flex-row items-center justify-between'>
                <div className='flex items-center gap-3'>
                  {/* Ảnh đại diện user */}
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className='w-10 h-10 rounded-full object-cover'
                  />
                  <div>
                    <div className='flex items-center gap-2'>
                      {/* Hiển thị rating: sao vàng và sao xám */}
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className='text-yellow-400'
                        />
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className='text-gray-300'
                        />
                      ))}
                    </div>
                    <span className='font-semibold text-gray-800'>
                      {review.name}
                    </span>
                  </div>
                </div>
                {/* Thời gian review (tùy chọn) */}
                <span className='text-gray-500 text-sm mt-2 sm:mt-0'>
                  Mar 10, 2025
                </span>
              </div>
              <p className='mt-2 text-gray-600 leading-relaxed'>
                {review.review}
              </p>
            </div>
          ))}
        </div>
        {reviewsToShow < reviews.length && (
          <button
            onClick={handleLoadMoreReviews}
            className='bg-gray-100 hover:bg-gray-200 mt-4 px-4 py-2 rounded-full text-customGreen font-semibold focus:outline-none focus:ring-2 focus:ring-customGreen'
          >
            Load More
          </button>
        )}
      </div>

      {/* Related Products */}
      <div className='mt-12'>
        <h2 className='text-2xl font-semibold'>Related Products</h2>
        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant='vertical'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
