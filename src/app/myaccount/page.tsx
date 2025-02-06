'use client';
import { useRouter } from 'next/navigation';

const orders = [
  {
    id: '738',
    date: '8 Sep, 2020',
    total: '$135.00 (5 Products)',
    status: 'Processing',
  },
  {
    id: '703',
    date: '24 May, 2020',
    total: '$25.00 (1 Product)',
    status: 'On the way',
  },
  {
    id: '130',
    date: '22 Oct, 2020',
    total: '$260.00 (4 Products)',
    status: 'Completed',
  },
  {
    id: '561',
    date: '1 Feb, 2020',
    total: '$35.00 (0 Products)',
    status: 'Completed',
  },
  {
    id: '538',
    date: '8 Sep, 2020',
    total: '$578.00 (3 Products)',
    status: 'Completed',
  },
  {
    id: '492',
    date: '22 Oct, 2020',
    total: '$345.00 (7 Products)',
    status: 'Completed',
  },
];

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className='min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Profile Section */}
        <div className='p-6 border rounded-md'>
          <div className='flex flex-col justify-center items-center space-y-4'>
            <img
              src='https://via.placeholder.com/60'
              alt='Profile'
              className='w-16 h-16 rounded-full border'
            />
            <div className='flex flex-col items-center space-y-1'>
              <h2 className='text-lg font-semibold'>Dianne Russell</h2>
              <p className='text-gray-500'>Customer</p>
              <a
                href=''
                className='text-customGreen hover:text-hoverGreen font-medium'
              >
                Edit Profile
              </a>
            </div>
          </div>
        </div>

        {/* Billing Address Section */}
        <div className='p-6 border rounded-md'>
          <h3 className='text-gray-500 text-sm uppercase mb-1'>
            Billing Address
          </h3>
          <h2 className='text-lg font-semibold'>Dianne Russell</h2>
          <p className='text-gray-500'>
            4140 Parker Rd. Allentown, New Mexico 31134
          </p>
          <p className='text-gray-500'>dianne.russell@gmail.com</p>
          <p className='text-gray-500'>(671) 555-0110</p>
          <a
            href=''
            className='text-customGreen hover:text-hoverGreen font-medium'
          >
            Edit Address
          </a>
        </div>
      </div>

      {/* Order History Section */}
      <div className='mt-6 p-6 border rounded-md'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
          <h3 className='text-lg font-semibold mb-2 sm:mb-0'>
            Recent Order History
          </h3>
          <a
            href='/myaccount/order-history'
            className='text-customGreen hover:text-hoverGreen font-medium'
          >
            View All
          </a>
        </div>

        {/* Responsive table wrapper */}
        <div className='overflow-x-auto mt-4'>
          <table className='w-full table-auto'>
            <thead>
              <tr className='text-left text-gray-500 text-sm'>
                <th className='pb-2 px-4 border-b border-gray-300'>ORDER ID</th>
                <th className='pb-2 px-4 border-b border-gray-300'>DATE</th>
                <th className='pb-2 px-4 border-b border-gray-300'>TOTAL</th>
                <th className='pb-2 px-4 border-b border-gray-300'>STATUS</th>
                <th className='pb-2 px-4 border-b border-gray-300'></th>
              </tr>
            </thead>
            <tbody className='text-sm'>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className='border-t border-gray-300'
                >
                  <td className='py-2 px-4'>#{order.id}</td>
                  <td className='py-2 px-4'>{order.date}</td>
                  <td className='py-2 px-4'>{order.total}</td>
                  <td className='py-2 px-4 text-gray-600'>{order.status}</td>
                  <td
                    onClick={() => {
                      router.push(`/myaccount/order-history/${order.id}`);
                    }}
                    className='py-2 px-4 text-customGreen hover:text-hoverGreen cursor-pointer'
                  >
                    View Details
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
