import Link from 'next/link';

export default function HeroBanner() {
  interface BannerItem {
    id: number;
    title: string;
    subtitle: string;
    description?: string;
    buttonText: string;
    backgroundImage: string;
    textColor: string;
    link: string;
  }

  const banners: BannerItem[] = [
    {
      id: 1,
      title: 'Sale of the Month',
      subtitle: 'Best Deals',
      description: '00 DAYS : 02 HOURS : 18 MINS : 46 SECS',
      buttonText: 'Shop Now',
      backgroundImage: '/images/hero_banner/hero_banner_1.png',
      textColor: 'text-white',
      link: '/shop',
    },
    {
      id: 2,
      title: 'Low-Fat Meat',
      subtitle: '85% FAT FREE',
      description: 'Started at $79.99',
      buttonText: 'Shop Now',
      backgroundImage: '/images/hero_banner/hero_banner_2.png',
      textColor: 'text-white',
      link: '/shop',
    },
    {
      id: 3,
      title: '100% Fresh Fruit',
      subtitle: 'Summer Sale',
      description: 'Up to 64% OFF',
      buttonText: 'Shop Now',
      backgroundImage: '/images/hero_banner/hero_banner_3.png',
      textColor: 'text-black',
      link: '/shop',
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
      {banners.map((banner) => (
        <div
          key={banner.id}
          className={`relative flex flex-col items-center justify-start ${banner.textColor} p-6 text-center rounded-md`}
          style={{
            backgroundImage: `url(${banner.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh', // Full chiều cao màn hình
          }}
        >
          <div className='relative z-10 mt-10'>
            <h3 className='text-lg uppercase font-semibold'>
              {banner.subtitle}
            </h3>
            <h2 className='text-3xl md:text-4xl font-bold mt-2'>
              {banner.title}
            </h2>
            <p className='mt-4 text-sm md:text-base'>{banner.description}</p>
            <Link href={banner.link}>
              <button className='mt-6 px-6 py-3 bg-customGreen text-white rounded-lg hover:bg-hoverGreen'>
                {banner.buttonText}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
