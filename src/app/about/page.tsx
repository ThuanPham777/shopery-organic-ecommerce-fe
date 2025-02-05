import TeamMembers from '@/components/TeamMembers/TeamMembers';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa6';

export default function About() {
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
    {
      title: '100% Organic food',
      description: '100% Organic food',
      image: '/images/feature/leaf.png',
    },
    {
      title: 'Customer Feedback',
      description: 'Our happy customer',
      image: '/images/feature/star.png',
    },
  ];
  return (
    <>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        {/* Section 1 */}
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div className='text-center md:text-left'>
            <h2 className='text-4xl font-bold text-gray-900'>
              100% Trusted Organic Food Store
            </h2>
            <p className='mt-4 text-gray-600'>
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
          <div>
            <img
              src='/images/about/Image1.png'
              alt='Farmer with vegetables'
              className='rounded-lg w-full object-cover'
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className='grid md:grid-cols-2 gap-8 mt-12'>
          <div className='relative w-full'>
            {/* Background Image */}
            <div className='relative'>
              <img
                src='/images/about/BG.png'
                alt='Another farmer'
                className='rounded-lg w-full object-cover'
              />
            </div>

            {/* Overlay Image2 */}
            <img
              src='/images/about/Image2.png'
              alt='Another farmer'
              className='absolute top-1/2 right-5 transform -translate-y-1/2 rounded-lg h-full w-auto max-w-[50%] md:max-w-[40%]'
            />
          </div>

          <div className='text-center md:text-left'>
            <h2 className='text-4xl font-bold text-gray-900'>
              100% Trusted Organic Food Store
            </h2>
            <p className='mt-4 text-gray-600'>
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-4'>
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className='flex items-center'
                >
                  {/* Feature Icon and Text */}
                  <div className='flex items-center gap-2'>
                    <div className='relative bg-gray-200 border rounded-full p-2 w-12 h-12 flex items-center'>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className='w-8 h-8'
                      />
                    </div>
                    <div>
                      <h3 className='text-md font-bold'>{feature.title}</h3>
                      <p className='text-gray-600 text-sm'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className='grid md:grid-cols-2 gap-8 items-center mt-12'>
          <div className='text-center md:text-left'>
            <h2 className='text-4xl font-bold text-gray-900'>
              We Delivered, You Enjoy Your Order.
            </h2>
            <p className='mt-4 text-gray-600'>
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>
            <div className='mt-6 space-y-4'>
              <div className='flex items-center space-x-3'>
                <div className='flex items-center rounded-full bg-gray-200 p-2'>
                  <span className='text-customGreen'>
                    <FaCheck />
                  </span>
                </div>
                <span>100% Organic Food - Freshly Picked</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='flex items-center rounded-full bg-gray-200 p-2'>
                  <span className='text-customGreen'>
                    <FaCheck />
                  </span>
                </div>
                <span>Sed in metus pellentesque.</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='flex items-center rounded-full bg-gray-200 p-2'>
                  <span className='text-customGreen'>
                    <FaCheck />
                  </span>
                </div>
                <span>Maecenas ut nunc fringilla erat varius.</span>
              </div>
            </div>
            <Link href='/shop'>
              <button className='mt-6 bg-customGreen text-white px-6 py-3 rounded-lg font-medium hover:bg-hoverGreen'>
                Shop Now
              </button>
            </Link>
          </div>

          <div>
            <img
              src='/images/about/Image3.png'
              alt='Delivery person'
              className='rounded-lg w-full object-cover'
            />
          </div>
        </div>
      </div>
      <div className='mt-12 space-y-4 px-4 py-12'>
        <div className='flex flex-col items-center space-y-2 text-center'>
          <h1 className='text-4xl font-bold'>Our Awesome Team</h1>
          <p className='text-sm max-w-lg'>
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </p>
        </div>
        <TeamMembers />
      </div>
    </>
  );
}
