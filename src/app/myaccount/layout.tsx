'use client';
import { useState, useEffect } from 'react';
import SidebarNavigation from '@/components/MyAccount/SidebarNavigation';
import { AiOutlineClose } from 'react-icons/ai';
import { usePathname } from 'next/navigation';

export default function MyAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname(); // Lấy đường dẫn hiện tại

  // Khi đường dẫn thay đổi => Đóng sidebar
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden'); // Reset khi unmount
    };
  }, [isSidebarOpen]);

  return (
    <div className='min-h-screen flex flex-col md:flex-row gap-4'>
      {/* Sidebar dành cho desktop */}
      <aside className='hidden md:block w-64 p-6'>
        <div className='border w-64 p-6'>
          <SidebarNavigation />
        </div>
      </aside>

      {/* Nút Menu cho mobile */}
      <header className='md:hidden p-4 flex justify-between items-center'>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className='p-2 border bg-customGreen text-white rounded-md hover:bg-hoverGreen'
        >
          Menu
        </button>
        <h1 className='text-xl font-semibold'>My Account</h1>
      </header>

      {/* Sidebar dạng Drawer cho mobile */}
      {isSidebarOpen && (
        <>
          {/* Sidebar Mobile */}
          <aside className='fixed inset-y-0 left-0 z-50 w-64 p-6 bg-white transition-transform duration-300 ease-in-out md:hidden'>
            <SidebarNavigation />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className='absolute top-4 right-4 hover:opacity-60'
            >
              <AiOutlineClose size={24} />
            </button>
          </aside>
          {/* Overlay để đóng sidebar khi nhấn bên ngoài */}
          <div
            className='fixed inset-0 bg-black opacity-50 md:hidden'
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        </>
      )}

      {/* Nội dung chính */}
      <main className='flex-1 p-6'>{children}</main>
    </div>
  );
}
