import { FaStar, FaRegStar } from 'react-icons/fa';
import Title from '../Title';

export default function ClientTestimonial() {
  const clients = [
    {
      name: 'Robert Fox',
      title: 'Customer',
      text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.',
      image: '/images/client_testimonial/client1.png',
      rating: 5,
    },
    {
      name: 'Dianne Russell',
      title: 'Customer',
      text: 'Mauris non lectus ac libero malesuada malesuada. Donec facilisis nisi in ligula malesuada, in condimentum urna bibendum. Sed lobortis, velit vel consectetur.',
      image: '/images/client_testimonial/client2.png',
      rating: 4,
    },
    {
      name: 'Eleanor Pena',
      title: 'Customer',
      text: 'Nunc ullamcorper, est vel consectetur tristique, enim ligula sagittis tellus, non consectetur nunc velit vel velit. Sed vel gravida lectus, at fermentum sapien.',
      image: '/images/client_testimonial/client3.png',
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => {
      if (index < rating) {
        return (
          <FaStar
            key={index}
            className='text-yellow-500'
          />
        );
      } else {
        return (
          <FaRegStar
            key={index}
            className='text-gray-300'
          />
        );
      }
    });
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {clients.map((client, index) => (
        <div
          key={index}
          className='p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow space-y-4'
        >
          {/* Testimonial Text */}
          <div>
            <img
              src='/images/client_testimonial/quot.png'
              alt='Quotation mark'
              className='w-6 h-6'
            />
          </div>
          <p className='text-gray-600 italic mb-6'>&quot;{client.text}&quot;</p>
          {/* Client Info */}
          <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
              <img
                src={client.image}
                alt={client.name}
                className='w-12 h-12 rounded-full border border-gray-300'
              />
              <div>
                <h4 className='text-lg font-semibold'>{client.name}</h4>
                <p className='text-sm text-gray-500'>{client.title}</p>
              </div>
            </div>
            {/* Rating */}
            <div className='flex space-x-1'>{renderStars(client.rating)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
