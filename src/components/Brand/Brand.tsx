export default function Brand() {
  const brands = [
    { image: '/images/brand/brand1.png' },
    { image: '/images/brand/brand2.png' },
    { image: '/images/brand/brand3.png' },
    { image: '/images/brand/brand4.png' },
    { image: '/images/brand/brand5.png' },
    { image: '/images/brand/brand6.png' },
  ];

  return (
    <div className='flex flex-wrap gap-4 justify-center md:justify-between items-center p-4 py-8'>
      {brands.map((item) => (
        <div
          key={item.image}
          className='flex justify-center'
        >
          <img
            src={item.image}
            alt={item.image}
            className='max-w-full h-auto object-contain'
          />
        </div>
      ))}
    </div>
  );
}
