import { IoMdClose } from 'react-icons/io';

type CategoryOffsetProps = {
  categories: any[];
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
};
export default function CategoryOffset({
  categories,
  isSidebarOpen,
  setIsSidebarOpen,
}: CategoryOffsetProps) {
  return (
    <>
      {/* Sidebar category Overlay */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-50'
          onClick={() => setIsSidebarOpen(false)}
        >
          {/* Sidebar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={`fixed top-0 left-0 w-72 h-screen bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className='p-4 flex justify-between items-center border-b border-gray-300 text-black'>
              <h2 className='text-lg font-bold'>Categories</h2>
              <button
                className='text-gray-500 hover:text-black'
                onClick={() => setIsSidebarOpen(false)}
              >
                <IoMdClose className='text-2xl' />
              </button>
            </div>
            <ul className='p-4 space-y-3 text-black'>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className='flex items-center space-x-3 py-2 px-4 hover:bg-gray-100 rounded cursor-pointer'
                >
                  <span className='text-lg'>{category.icon}</span>
                  <span className='text-md font-medium'>{category.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
