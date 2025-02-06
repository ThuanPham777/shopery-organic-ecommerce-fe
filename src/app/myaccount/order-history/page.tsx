'use client';
import Pagination from '@/components/Pagination';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const orders = [
  {
    id: '3933',
    date: '4 April, 2021',
    total: '$135.00 (5 Products)',
    status: 'Processing',
  },
  {
    id: '3703',
    date: '27 Mar, 2021',
    total: '$25.00 (1 Product)',
    status: 'On the way',
  },
  {
    id: '5028',
    date: '19 Mar, 2021',
    total: '$250.00 (4 Products)',
    status: 'Completed',
  },
  {
    id: '4600',
    date: '19 Mar, 2021',
    total: '$35.00 (0 Products)',
    status: 'Completed',
  },
  {
    id: '4152',
    date: '18 Mar, 2021',
    total: '$578.00 (3 Products)',
    status: 'Completed',
  },
  {
    id: '3811',
    date: '5 Mar, 2021',
    total: '$345.00 (7 Products)',
    status: 'Completed',
  },
  {
    id: '3368',
    date: '5 Mar, 2021',
    total: '$560.00 (2 Products)',
    status: 'Completed',
  },
  {
    id: '1734',
    date: '27 Feb, 2021',
    total: '$560.00 (2 Products)',
    status: 'Completed',
  },
  {
    id: '7917',
    date: '24 Feb, 2021',
    total: '$23.00 (1 Product)',
    status: 'Completed',
  },
  {
    id: '4846',
    date: '24 Feb, 2021',
    total: '$23.00 (1 Product)',
    status: 'Completed',
  },
  {
    id: '6948',
    date: '20 Feb, 2021',
    total: '$23.00 (1 Product)',
    status: 'Completed',
  },
  {
    id: '1577',
    date: '12 Oct, 2020',
    total: '$23.00 (1 Product)',
    status: 'Completed',
  },
];

export default function OrderHistory() {
  const router = useRouter();
  // Khai báo state để lưu trang hiện tại
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10; // Số đơn hàng hiển thị trên 1 trang
  const totalPages = Math.ceil(orders.length / pageSize);

  // Lấy các đơn hàng cần hiển thị cho trang hiện tại
  const indexOfLastOrder = currentPage * pageSize;
  const indexOfFirstOrder = indexOfLastOrder - pageSize;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Hàm xử lý chuyển trang, chú ý thêm kiểu cho tham số 'page'
  const handlePageChange = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='p-6 min-h-screen border rounded-md'>
      <div className='max-w-5xl mx-auto'>
        <h3 className='text-2xl font-semibold'>Order History</h3>
        <table className='w-full mt-4'>
          <thead>
            <tr className='text-left text-gray-500 text-sm border-b'>
              <th className='pb-2'>ORDER ID</th>
              <th className='pb-2'>DATE</th>
              <th className='pb-2'>TOTAL</th>
              <th className='pb-2'>STATUS</th>
              <th className='pb-2'></th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {currentOrders.map((order, index) => (
              <tr
                key={index}
                className='border-t'
              >
                <td className='py-2'>#{order.id}</td>
                <td className='py-2'>{order.date}</td>
                <td className='py-2'>{order.total}</td>
                <td className='py-2 text-gray-600'>{order.status}</td>
                <td
                  onClick={() => {
                    router.push(`/myaccount/order-history/${order.id}`);
                  }}
                  className='py-2 text-customGreen cursor-pointer'
                >
                  View Details
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Component Phân Trang */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
