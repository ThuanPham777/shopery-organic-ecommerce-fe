import { useRouter } from 'next/navigation';
import { MdClose } from 'react-icons/md';

type CartOffsetProps = {
  isShoppingCartOpen: boolean;
  setIsShoppingCartOpen: (isOpen: boolean) => void;
};

const cartItems = [
  {
    id: 1,
    name: 'Fresh Indian Orange',
    price: 12.0,
    quantity: 1,
    image: '/images/featured_products/Image1.png',
  },
  {
    id: 2,
    name: 'Green Apple',
    price: 14.0,
    quantity: 1,
    image: '/images/featured_products/Image1.png',
  },
];

export default function CartOffset({
  isShoppingCartOpen,
  setIsShoppingCartOpen,
}: CartOffsetProps) {
  const router = useRouter();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {isShoppingCartOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end'
          // Khi click vào overlay (ngoại trừ phần cart) sẽ đóng shopping cart
          onClick={() => setIsShoppingCartOpen(false)}
        >
          {/* Sidebar */}
          <div
            className='w-80 h-screen bg-white shadow-lg transform transition-transform duration-300 flex flex-col'
            // Ngăn sự kiện click lan sang overlay khi click bên trong sidebar
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className='flex justify-between items-center p-4 text-black'>
              <h2 className='font-semibold text-lg'>
                Shopping Cart ({cartItems.length})
              </h2>
              <button onClick={() => setIsShoppingCartOpen(false)}>
                <MdClose
                  size={24}
                  className='text-gray-600 hover:text-red-500'
                />
              </button>
            </div>

            {/* Danh sách sản phẩm (có scroll nếu quá dài) */}
            <div className='flex-grow overflow-y-auto'>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <div className='flex items-center justify-between p-4 text-black'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-12 h-12 rounded-md'
                    />
                    <div className='flex-1 ml-3'>
                      <h3 className='text-sm font-medium'>{item.name}</h3>
                      <p className='text-gray-500 text-xs'>
                        {item.quantity} kg × ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <button className='text-gray-500 hover:text-red-500'>
                      <MdClose size={20} />
                    </button>
                  </div>
                  {/* Đường kẻ dưới mỗi sản phẩm */}
                  <hr className='border-gray-200' />
                </div>
              ))}
            </div>

            {/* Footer cố định sát dưới với 2 nút */}
            <div className='p-4'>
              <div className='flex justify-between font-semibold text-md mb-4 text-black'>
                <span>{cartItems.length} Product</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className='w-full bg-customGreen text-white py-2 rounded-full'>
                Checkout
              </button>
              <button
                onClick={() => {
                  router.push('/cart');
                }}
                className='w-full bg-gray-200 text-customGreen py-2 rounded-full mt-2'
              >
                Go To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
