'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { MdChevronRight } from 'react-icons/md';

export default function Breadcrumb() {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại

  // Kiểm tra nếu đường dẫn khớp với mẫu /shop/<số> hoặc /blog/<số>
  const detailMatch = pathname.match(/^\/(shop|blog)\/\d+$/);
  if (detailMatch) {
    const type = detailMatch[1]; // 'shop' hoặc 'blog'
    const label = type === 'shop' ? 'Shop Details' : 'Blog Details';

    return (
      <div
        className='relative bg-cover bg-center text-white py-10 px-6'
        style={{ backgroundImage: "url('/images/Breadcrumbs.png')" }}
      >
        {/* Overlay để tăng độ tương phản */}
        <div className='absolute inset-0 bg-black/50'></div>

        {/* Nội dung breadcrumb */}
        <div className='relative flex items-center text-lg font-medium'>
          {/* Home */}
          <Link
            href='/'
            passHref
          >
            <div className='flex items-center text-white hover:text-gray-300'>
              <FaHome
                className='mr-2'
                size={16}
              />
              Home
            </div>
          </Link>

          <MdChevronRight
            className='mx-2'
            size={20}
          />

          <span className='text-customGreen capitalize text-lg'>{label}</span>
        </div>
      </div>
    );
  }

  // Nếu không khớp với mẫu trên, render breadcrumb theo logic thông thường
  const pathnames = pathname.split('/').filter((x) => x);
  return (
    <div
      className='relative bg-cover bg-center text-white py-10 px-6'
      style={{ backgroundImage: "url('/images/Breadcrumbs.png')" }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* Nội dung breadcrumb */}
      <div className='relative flex items-center text-lg font-medium'>
        <Link
          href='/'
          passHref
        >
          <div className='flex items-center text-white hover:text-gray-300'>
            <FaHome
              className='mr-2'
              size={16}
            />
            Home
          </div>
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = name.replace(/-/g, ' ');
          return (
            <span
              key={routeTo}
              className='flex items-center'
            >
              <MdChevronRight
                className='mx-2'
                size={20}
              />
              {isLast ? (
                <span className='text-customGreen capitalize text-lg'>
                  {label}
                </span>
              ) : (
                <Link
                  href={routeTo}
                  passHref
                >
                  <p className='text-white hover:text-gray-300 capitalize text-lg'>
                    {label}
                  </p>
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
