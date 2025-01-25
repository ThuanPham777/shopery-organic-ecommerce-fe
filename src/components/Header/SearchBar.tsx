import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";

export default function SearchBar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 bg-white space-y-4 sm:space-y-0">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/images/plant_logo.png"
          alt="Ecobazar Logo"
          width={24}
          height={24}
        />
        <span className="text-2xl sm:text-3xl font-bold">Ecobazar</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center flex-grow mx-4 max-w-full sm:max-w-lg">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-customGreen"
          />
          {/* Search Icon */}
          <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-xl" />
        </div>
        <button className="px-4 py-2 bg-customGreen text-white rounded-r-md hover:bg-hoverGreen">
          Search
        </button>
      </div>

      {/* Customer Service */}
      <div className="flex items-center text-right space-x-2 sm:space-x-4">
        <PiPhoneCallThin className="w-8 sm:w-10 h-8 sm:h-10" />
        <div>
          <div className="text-xs sm:text-sm text-gray-500">
            Customer Services
          </div>
          <div className="text-sm sm:text-lg font-bold text-gray-800">
            (219) 555-0114
          </div>
        </div>
      </div>
    </div>
  );
}

