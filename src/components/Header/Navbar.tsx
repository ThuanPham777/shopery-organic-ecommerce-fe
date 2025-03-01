'use client';

import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';
import { IoIosHeartEmpty } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import CartOffset from '../ShoppingCart/CartOffset';
import CategoryOffset from '../Categories/CategoryOffset';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  {
    label: 'Pages',
    href: '#',
    dropdownIcon: <RiArrowDropDownLine />,
    sublinks: [
      { label: 'Shopping cart', href: '/cart' },
      { label: 'Checkout', href: '/checkout' },
      { label: 'Wishlist', href: '/wishlist' },
    ],
  },
];

const categories = [
  { label: 'Fruits and Vegetables', icon: '🥦' },
  { label: 'Dairy and Eggs', icon: '🥛' },
  { label: 'Meat and Poultry', icon: '🍖' },
  { label: 'Seafood', icon: '🐟' },
  { label: 'Bakery and Bread', icon: '🍞' },
  { label: 'Canned Goods', icon: '🥫' },
  { label: 'Frozen Foods', icon: '❄️' },
  { label: 'Pasta and Rice', icon: '🍝' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavLinksOpen, setIsNavLinksOpen] = useState(false);
  const [clickedNav, setClickedNav] = useState<string | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleNavLinks = () => setIsNavLinksOpen(!isNavLinksOpen);

  const handleNavClick = (label: string) => {
    setClickedNav((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setClickedNav(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isSidebarOpen || isShoppingCartOpen) {
      document.body.classList.add('overflow-hidden'); // Thêm class để ngăn cuộn
    } else {
      document.body.classList.remove('overflow-hidden'); // Xóa class để cuộn lại
    }

    // Cleanup khi component unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isSidebarOpen, isShoppingCartOpen]);

  return (
    <nav className='bg-black text-white px-4 py-4 sm:px-6 flex flex-col space-y-4 md:flex-row md:space-y-0 justify-between items-center relative'>
      {/* sidebar shoppingcart Overlay */}
      <CategoryOffset
        categories={categories}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* sidebar shoppingcart Overlay */}
      <CartOffset
        isShoppingCartOpen={isShoppingCartOpen}
        setIsShoppingCartOpen={setIsShoppingCartOpen}
      />

      {/* Sidebar Trigger */}
      <div className='flex items-center'>
        <button
          className='flex items-center bg-customGreen text-white px-3 py-2 rounded-l'
          onClick={toggleSidebar}
        >
          <FaBars className='text-xl' />
          <span className='ml-2 hidden sm:block'>Menu</span>
        </button>
        <select
          className='bg-black text-white px-3 py-2 rounded-r cursor-pointer text-md'
          onChange={(e) => console.log('Selected category:', e.target.value)}
        >
          <option value='all'>All Categories</option>
          {categories.map((category, index) => (
            <option
              key={index}
              value={category.label}
            >
              {category.label}
            </option>
          ))}
        </select>
      </div>

      {/* Responsive Navigation Links Button */}
      <button
        className='sm:hidden flex items-center text-white text-2xl ml-4'
        onClick={toggleNavLinks}
      >
        <FaBars />
      </button>

      {/* Navigation Links */}
      <ul
        ref={navRef}
        className={`${
          isNavLinksOpen ? 'flex' : 'hidden'
        } bg-black w-full sm:w-auto sm:flex flex-col sm:flex-row sm:space-x-6 text-md text-center`}
      >
        {navLinks.map((nav) => (
          <li
            key={nav.label}
            className={`relative hover:text-customGreen py-2 sm:py-0 ${
              pathname === nav.href && !nav.sublinks
                ? 'underline underline-offset-4 decoration-customGreen decoration-2'
                : ''
            }`}
          >
            <a
              href={nav.href}
              className='flex items-center'
              onClick={(e) => {
                if (nav.sublinks) {
                  e.preventDefault();
                  handleNavClick(nav.label);
                }
              }}
            >
              {nav.label}
              {nav.dropdownIcon && (
                <span className='w-4 h-4'>{nav.dropdownIcon}</span>
              )}
            </a>
            {nav.sublinks && clickedNav === nav.label && (
              <ul
                className={`${
                  isNavLinksOpen
                    ? ''
                    : 'absolute top-full left-1/2 transform -translate-x-1/2 z-50'
                } bg-black shadow-lg text-white w-48 mt-2 rounded-md`}
              >
                {nav.sublinks.map((sublink, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={sublink.href}
                      className='block py-2 px-4 text-sm hover:text-customGreen'
                    >
                      {sublink.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className='flex space-x-4 text-2xl'>
        <IoIosHeartEmpty className='cursor-pointer hover:text-customGreen' />
        <IoBagOutline
          onClick={() => {
            setIsShoppingCartOpen(!isShoppingCartOpen);
          }}
          className='cursor-pointer hover:text-customGreen'
        />
        <CiUser
          onClick={() => {
            //router.push('/login');
            router.push('/myaccount');
          }}
          className='cursor-pointer hover:text-customGreen'
        />
      </div>
    </nav>
  );
}
