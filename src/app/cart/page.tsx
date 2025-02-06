'use client';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const initialCart: Product[] = [
  {
    id: 1,
    name: 'Green Capsicum',
    price: 14.0,
    quantity: 5,
    image: '/images/featured_products/Image1.png',
  },
  {
    id: 2,
    name: 'Red Capsicum',
    price: 14.0,
    quantity: 5,
    image: '/images/featured_products/Image1.png',
  },
];

export default function ShoppingCartPage() {
  const [cart, setCart] = useState<Product[]>(initialCart);
  const [coupon, setCoupon] = useState('');
  const router = useRouter();

  const updateQuantity = (id: number, change: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Nếu giỏ hàng rỗng, hiển thị thông báo và nút quay về shop
  if (cart.length === 0) {
    return (
      <div className='container mx-auto p-6 text-center'>
        <h1 className='text-2xl font-bold mb-6'>My Shopping Cart</h1>
        <p className='text-lg mb-4'>You have not a product in shopping cart</p>
        <button
          onClick={() => router.push('/shop')}
          className='border px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300'
        >
          Return to shop
        </button>
      </div>
    );
  }

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-2xl font-bold text-center mb-6'>My Shopping Cart</h1>

      {/* Grid: 1 cột trên mobile, 3 cột trên desktop với cột trái chiếm 2/3 */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Cột trái: Bảng sản phẩm & Coupon Code */}
        <div className='md:col-span-2'>
          <div className='border rounded-lg shadow-sm overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='border-b bg-gray-100 text-left text-gray-600 uppercase text-sm'>
                  <th className='p-4'>Product</th>
                  <th className='p-4'>Price</th>
                  <th className='p-4'>Quantity</th>
                  <th className='p-4'>Subtotal</th>
                  <th className='p-4'></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className='border-b'
                  >
                    <td className='p-6 flex items-center'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='w-16 h-16 mr-3'
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className='p-6'>${item.price.toFixed(2)}</td>
                    <td className='p-6'>
                      <div className='inline-flex items-center border rounded-full overflow-hidden'>
                        <button
                          className='m-1 p-2 text-gray-600 hover:bg-gray-200 bg-gray-100 rounded-full'
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <FiMinus />
                        </button>
                        <span className='px-2 py-1 bg-white'>
                          {item.quantity}
                        </span>
                        <button
                          className='m-1 p-2 text-gray-600 hover:bg-gray-200 bg-gray-100 rounded-full'
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </td>
                    <td className='p-6'>
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className='p-6'>
                      <button
                        className='text-gray-500 hover:text-red-500'
                        onClick={() => removeItem(item.id)}
                      >
                        <MdClose size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Nút thao tác */}
          <div className='p-4 flex flex-col sm:flex-row justify-between gap-4'>
            <button
              onClick={() => router.push('/shop')}
              className='border px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300'
            >
              Return to shop
            </button>
            <button className='bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full'>
              Update Cart
            </button>
          </div>

          {/* Mã giảm giá */}
          <div className='mt-6 flex flex-col sm:flex-row items-center border rounded-lg p-4 shadow-sm'>
            <h2 className='mb-2 sm:mb-0 sm:mr-4 font-semibold'>Coupon Code</h2>
            <input
              type='text'
              placeholder='Enter code'
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className='flex-grow border p-2 rounded-full mb-2 sm:mb-0'
            />
            <button className='bg-gray-800 text-white px-4 py-2 rounded-full sm:ml-2'>
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Cột phải: Tổng đơn hàng */}
        <div className='border rounded-lg p-6 shadow-sm md:h-[280px] h-auto'>
          <h2 className='text-lg font-semibold mb-4'>Cart Total</h2>
          <div className='flex justify-between text-gray-600'>
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <hr className='my-4' />
          <div className='flex justify-between text-gray-600 my-2'>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr className='my-4' />
          <div className='flex justify-between font-bold'>
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className='w-full bg-customGreen text-white mt-4 py-2 rounded-full hover:bg-customGreen'>
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
