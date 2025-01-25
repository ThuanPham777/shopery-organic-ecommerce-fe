import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  const socialIcons = [
    { icon: FaFacebookF, link: 'https://facebook.com' },
    { icon: FaTwitter, link: 'https://twitter.com' },
    { icon: FaLinkedinIn, link: 'https://linkedin.com' },
    { icon: FaInstagram, link: 'https://instagram.com' },
  ];

  const myAccountLinks = [
    'My Account',
    'Order History',
    'Shopping Cart',
    'Wishlist',
  ];

  const helpsLinks = [
    'Contact',
    'FAQs',
    'Terms & Conditions',
    'Privacy Policy',
  ];

  const proxyLinks = ['About', 'Shop', 'Product', 'Track Order'];

  return (
    <div>
      <div className='bg-gray-900 px-6'>
        <div className='flex flex-col space-y-4 lg:flex-row items-center justify-between py-12 px-6'>
          <div className='flex space-x-2 items-center'>
            <div>
              <img
                src='/images/footer/Envelope.png'
                alt='Envelope'
              />
            </div>
            <div>
              <h3 className='text-lg font-bold text-white'>
                Subscribe our Newsletter
              </h3>
              <p className='text-sm text-gray-400'>
                Pellentesque eu nibh eget mauris congue mattis matti.
              </p>
            </div>
          </div>
          <div className='text-white flex relative items-center w-full max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Your email address'
              className='w-full px-6 py-2 pr-24 rounded-full bg-gray-800 outline-none'
            />
            <button className='absolute right-0 bg-customGreen hover:bg-hoverGreen px-6 py-2 rounded-full text-sm font-bold'>
              Subscribe
            </button>
          </div>

          {/* Social Media Icons */}
          <div className='flex space-x-4 text-white mt-6 md:mt-0'>
            {socialIcons.map(({ icon: Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-full bg-gray-700 hover:bg-customGreen transition-all'
              >
                <Icon className='text-lg' />
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className='bg-gray-100'>
        <div className='max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 lg:grid-cols-5 space-x-8'>
          {/* Contact Info */}
          <div>
            <div className='flex items-center gap-2'>
              <img
                src='/images/plant_logo.png'
                alt='logo'
                className='w-10 h-10 object-contain'
              />
              <h3 className='text-3xl font-bold'>Ecobazar</h3>
            </div>
            <p className='text-sm text-gray-400 mt-4'>
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className='mt-4 flex gap-2'>
              <div className='text-center'>
                <p className='text-sm'>(219) 555-0114</p>
                <div className='h-[2px] bg-customGreen w-full mt-1'></div>
              </div>
              <span className='text-gray-400'>or</span>
              <div className='text-center'>
                <p className='text-sm'>Proxy@gmail.com</p>
                <div className='h-[2px] bg-customGreen w-full mt-1'></div>
              </div>
            </div>
          </div>

          {/* My Account Links */}
          <div className='mt-0'>
            <h3 className='text-lg font-bold'>My Account</h3>
            <ul className='mt-2 space-y-2 text-sm text-gray-400'>
              {myAccountLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href='#'
                    className='hover:text-gray-700'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Helps Links */}
          <div className='mt-0'>
            <h3 className='text-lg font-bold'>Helps</h3>
            <ul className='mt-2 space-y-2 text-sm text-gray-400'>
              {helpsLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href='#'
                    className='hover:text-gray-700'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Proxy Links */}
          <div className='mt-0'>
            <h3 className='text-lg font-bold'>Proxy</h3>
            <ul className='mt-2 space-y-2 text-sm text-gray-400'>
              {proxyLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href='#'
                    className='hover:text-gray-700'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Apps */}
          <div>
            <h3 className='text-lg font-bold'>Download Mobile App</h3>
            <div className='flex space-x-4 mt-4'>
              <img
                src='/images/footer/AppStore.png'
                alt='App Store'
                className='cursor-pointer w-32 object-contain mb-4 md:mb-0'
              />
              <img
                src='/images/footer/GooglePlay.png'
                alt='Google Play'
                className='cursor-pointer w-32 object-contain mb-4 md:mb-0'
              />
            </div>
          </div>
        </div>
      </footer>

      <div className='flex flex-col md:flex-row justify-between items-center py-4 px-6'>
        <p className='text-center md:text-left'>
          Ecobazar eCommerce © 2025. All Rights Reserved
        </p>
        <img
          src='/images/footer/PaymentType.png'
          alt='Payment'
          className='mt-4 md:mt-0'
        />
      </div>
    </div>
  );
}
