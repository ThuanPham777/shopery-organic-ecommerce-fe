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

  return (
    <div className='w-full py-8 p-4'>
      {/* Responsive Grid Container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10'>
        {features.map((feature) => (
          <div
            key={feature.title}
            className='p-4 flex justify-center sm:justify-start'
          >
            {/* Feature Icon and Text */}
            <div className='flex gap-4 items-center'>
              <div className='relative border rounded-full p-4 w-16 h-16 flex items-center justify-center bg-gray-200 border-gray-300'>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className='w-8 h-8'
                />
              </div>
              <div>
                <h3 className='text-lg font-bold text-gray-800'>
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
