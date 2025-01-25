'use client';
import { useState } from 'react';

export default function Feature() {
  const features = [
    {
      title: 'Free Shipping',
      description: 'Free shipping with discount',
      image: '/images/feature/delivery-truck.png',
    },
    {
      title: 'Great Support 24/7',
      description: 'Instant access to Contact',
      image: '/images/feature/headphones.png',
    },
    {
      title: '100% Secure Payment',
      description: 'We ensure your money is safe',
      image: '/images/feature/shopping-bag.png',
    },
    {
      title: 'Money-Back Guarantee',
      description: '30 days money-back',
      image: '/images/feature/package.png',
    },
  ];

  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const handleFeatureClick = (title: string) => {
    setSelectedFeature(title === selectedFeature ? null : title); // Toggle selection
  };

  return (
    <div className='w-full p-4 sm:p-6 lg:p-8'>
      {/* Responsive Grid Container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {features.map((feature) => (
          <div
            key={feature.title}
            onClick={() => handleFeatureClick(feature.title)}
            className={`p-4 flex flex-col items-center space-y-4 cursor-pointer transition-all duration-300 rounded-lg shadow-sm hover:shadow-lg ${
              selectedFeature === feature.title
                ? 'border-b-4 border-customGreen bg-gray-50'
                : 'border-b-2 border-transparent bg-white'
            }`}
          >
            {/* Feature Icon and Text */}
            <div className='flex flex-col items-center space-y-4'>
              <div
                className={`relative bg-gray-200 border rounded-full p-4 w-16 h-16 flex items-center justify-center transition-all duration-300 ${
                  selectedFeature === feature.title
                    ? 'bg-customGreen border-customGreen'
                    : 'bg-gray-200 border-gray-300'
                }`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={`w-8 h-8 transition-all duration-300 ${
                    selectedFeature === feature.title
                      ? 'filter brightness-150'
                      : 'filter brightness-100'
                  }`}
                />
              </div>
              <div className='text-center'>
                <h3
                  className={`text-lg font-bold transition-all duration-300 ${
                    selectedFeature === feature.title
                      ? 'text-customGreen'
                      : 'text-gray-800'
                  }`}
                >
                  {feature.title}
                </h3>
                <p className='text-gray-600 text-sm'>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
