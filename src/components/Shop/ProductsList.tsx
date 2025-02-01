import ProductCard from '@/components/ProductCard';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
type ProductsListProps = {
  products: any[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
};

export default function ProductsList({
  products,
  currentPage,
  setCurrentPage,
  itemsPerPage,
}: ProductsListProps) {
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 2 && i <= currentPage + 2)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              i === currentPage
                ? 'bg-customGreen text-white font-bold'
                : 'hover:bg-gray-200'
            }`}
          >
            {i}
          </button>
        );
      } else if (
        (i === currentPage - 3 || i === currentPage + 3) &&
        totalPages > 5
      ) {
        pages.push(
          <span
            key={i}
            className='w-10 h-10 flex items-center justify-center'
          >
            ...
          </span>
        );
      }
    }
    return pages;
  };

  return (
    <div className='space-y-4'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            variant='vertical'
          />
        ))}
      </div>
      {/* Pagination */}
      <div className='flex justify-center items-center gap-4'>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className='w-10 h-10 border rounded-full flex items-center justify-center disabled:opacity-50'
          disabled={currentPage === 1}
        >
          <RiArrowLeftSLine />
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className='w-10 h-10 border rounded-full flex items-center justify-center disabled:opacity-50'
          disabled={currentPage === totalPages}
        >
          <RiArrowRightSLine />
        </button>
      </div>
    </div>
  );
}
