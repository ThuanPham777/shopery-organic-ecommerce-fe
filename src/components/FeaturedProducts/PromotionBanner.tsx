import Link from 'next/link';

// PromotionBanner.tsx
interface PromotionBannerProps {
  title: string;
  discount: string;
  buttonText: string;
  imageUrl: string;
}

export default function PromotionBanner({
  title,
  discount,
  buttonText,
  imageUrl,
}: PromotionBannerProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-start p-6 text-center rounded-md h-full`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='relative z-10'>
        <h2 className='text-sm md:text-base font-bold mt-2'>{title}</h2>
        <h1 className='mt-4 text-3xl font-bold md:text-4xl'>{discount}</h1>
        <Link href='/shop'>
          <button className='mt-6 px-6 py-3 bg-customGreen text-white rounded-lg hover:bg-hoverGreen'>
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}
