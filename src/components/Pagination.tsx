import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  // Hàm sinh mảng các trang (kèm dấu ...)
  const getPageNumbers = () => {
    const maxVisiblePages = 5; // hiển thị tối đa 5 trang (có thể tùy chỉnh)
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      // Nếu tổng trang ít, hiển thị hết
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Tính khoảng hiển thị quanh currentPage
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      // Nếu trang bắt đầu > 1 => thêm 1 + ...
      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push('...');
        }
      }

      // Thêm các trang ở khoảng giữa
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Nếu trang kết thúc < totalPages => thêm ... + totalPages
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className='flex items-center justify-center mt-6 space-x-2'>
      {/* Nút PREV */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-9 h-9 flex items-center justify-center
          rounded-full border transition-colors
          ${
            currentPage === 1
              ? 'text-gray-400 border-gray-200'
              : 'text-gray-700 border-gray-300 hover:bg-gray-100'
          }`}
      >
        &lt;
      </button>

      {/* Các trang */}
      {pageNumbers.map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`w-9 h-9 flex items-center justify-center rounded-full
              border transition-colors
              ${
                page === currentPage
                  ? 'bg-customGreen text-white border-customGreen'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
          >
            {page}
          </button>
        ) : (
          // Dấu ...
          <span
            key={index}
            className='w-9 h-9 flex items-center justify-center text-gray-500'
          >
            ...
          </span>
        )
      )}

      {/* Nút NEXT */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-9 h-9 flex items-center justify-center
          rounded-full border transition-colors
          ${
            currentPage === totalPages
              ? 'text-gray-400 border-gray-200'
              : 'text-gray-700 border-gray-300 hover:bg-gray-100'
          }`}
      >
        &gt;
      </button>
    </div>
  );
}
