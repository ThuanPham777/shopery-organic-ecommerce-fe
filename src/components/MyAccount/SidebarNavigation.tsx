'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdDashboard, MdHistory } from 'react-icons/md';
import { CiHeart, CiSettings, CiLogout } from 'react-icons/ci';
import { IoBagOutline } from 'react-icons/io5';

export default function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Vô hiệu hoá scroll khi modal mở
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup khi component unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Dashboard', href: '/myaccount', icon: <MdDashboard /> },
    {
      label: 'Order History',
      href: '/myaccount/order-history',
      icon: <MdHistory />,
    },
    { label: 'Wishlist', href: '/wishlist', icon: <CiHeart /> },
    { label: 'Shopping Cart', href: '/cart', icon: <IoBagOutline /> },
    { label: 'Settings', href: '/myaccount/settings', icon: <CiSettings /> },
  ];

  return (
    <>
      <h2 className='text-lg font-semibold mb-4'>Navigation</h2>
      <ul>
        {navLinks.map(({ label, href, icon }) => {
          const isActive = pathname === href;

          return (
            <li
              key={href}
              className='mb-2'
            >
              <Link
                href={href}
                className={`flex items-center space-x-3 p-2 rounded-lg transition
                  ${
                    isActive
                      ? 'bg-gray-200 text-customGreen'
                      : 'hover:bg-gray-100'
                  }`}
              >
                <span className='text-xl'>{icon}</span>
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
        <li className='mt-4'>
          <button
            onClick={() => setIsOpen(true)}
            className='flex items-center space-x-3 p-2 rounded-lg text-red-500 hover:bg-gray-100 transition w-full'
          >
            <CiLogout className='text-xl' />
            <span>Log-out</span>
          </button>
        </li>
      </ul>

      {/* Modal tùy chỉnh */}
      {isOpen && (
        // Container modal bao gồm overlay và nội dung modal
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          {/* Overlay nền tối */}
          <div
            className='absolute inset-0 bg-black opacity-50'
            onClick={() => setIsOpen(false)}
          ></div>
          {/* Nội dung modal */}
          <div className='relative bg-white p-6 rounded-lg shadow-lg z-10'>
            <h3 className='text-lg font-semibold mb-4'>
              Are you sure you want to log out?
            </h3>
            <div className='flex justify-center items-center space-x-3'>
              <button
                onClick={() => setIsOpen(false)}
                className='px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300'
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Logged out!');
                  setIsOpen(false);
                }}
                className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600'
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
