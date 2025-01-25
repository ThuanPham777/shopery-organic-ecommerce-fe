import { CiLocationOn } from 'react-icons/ci';

export default function TopBar() {
  return (
    <div className='bg-gray-100 text-sm text-gray-600 flex flex-wrap justify-between items-center px-4 py-2'>
      {/* Store Location */}
      <div className='flex items-center space-x-2 w-full sm:w-auto'>
        <CiLocationOn className='h-5 w-5 text-gray-800' />
        <p className='text-xs sm:text-sm'>
          Store Location: Lincoln - 344, Illinois, Chicago, USA
        </p>
      </div>
      {/* Language and Currency */}
      <div className='flex flex-col sm:flex-row sm:space-x-4 mt-2 sm:mt-0 w-full sm:w-auto justify-end items-end sm:items-center'>
        <span className='cursor-pointer hover:text-gray-800 transition-all duration-300'>
          Eng
        </span>
        <span className='cursor-pointer hover:text-gray-800 transition-all duration-300'>
          USD
        </span>
      </div>
    </div>
  );
}
