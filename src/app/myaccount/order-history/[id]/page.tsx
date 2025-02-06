import AddressCard from '@/components/MyAccount/order-details/AddressCard';
import OrderSummaryCard from '@/components/MyAccount/order-details/OrderSummaryCard';
import ProductTable from '@/components/MyAccount/order-details/ProductTable';
import ProgressBar from '@/components/MyAccount/order-details/ProgressBar';
import Link from 'next/link';
// Định nghĩa kiểu cho progress steps
type ProgressStep = {
  number: string;
  label: string;
  completed: boolean;
};

// Định nghĩa kiểu cho product
type Product = {
  name: string;
  image: string;
  price: string;
  quantity: string;
  subtotal: string;
};
export default function OrderDetails() {
  // Dữ liệu mẫu - có thể thay thế bằng dữ liệu từ backend
  const billingAddress = {
    title: 'Billing Address',
    name: 'Dianne Russell',
    address: '4140 Parker Rd. Allentown, New Mexico 31134',
    email: 'dianne.russell@gmail.com',
    phone: '(671) 555-0110',
  };

  const shippingAddress = {
    title: 'Shipping Address',
    name: 'Dianne Russell',
    address: '4140 Parker Rd. Allentown, New Mexico 31134',
    email: 'dianne.russell@gmail.com',
    phone: '(671) 555-0110',
  };

  const orderSummary = {
    orderId: '#4152',
    paymentMethod: 'Paypal',
    subtotal: '$365.00',
    discount: '20%',
    shipping: 'Free',
    total: '$84.00',
  };

  const progressSteps: ProgressStep[] = [
    { number: '01', label: 'Order received', completed: true },
    { number: '02', label: 'Processing', completed: true },
    { number: '03', label: 'On the way', completed: false },
    { number: '04', label: 'Delivered', completed: false },
  ];

  const products: Product[] = [
    {
      name: 'Red Capsicum',
      image: '/images/featured_products/Image1.png',
      price: '$14.00',
      quantity: 'x5',
      subtotal: '$70.00',
    },
    {
      name: 'Green Capsicum',
      image: '/images/featured_products/Image1.png',
      price: '$14.00',
      quantity: 'x2',
      subtotal: '$28.00',
    },
    {
      name: 'Green Chili',
      image: '/images/featured_products/Image1.png',
      price: '$26.70',
      quantity: 'x10',
      subtotal: '$267.00',
    },
  ];

  return (
    <div className='max-w-5xl mx-auto p-6 bg-white border rounded-md'>
      {/* Header */}
      <div className='flex justify-between items-center border-b pb-4'>
        <h1 className='text-xl font-semibold'>
          Order Details{' '}
          <span className='text-gray-500'>
            • April 24, 2021 • {products.length} Products
          </span>
        </h1>
        <Link href='/myaccount/order-history'>
          <p className='text-green-500 font-medium'>Back to List</p>
        </Link>
      </div>

      {/* Billing, Shipping, Order Summary */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
        <AddressCard {...billingAddress} />
        <AddressCard {...shippingAddress} />
        <OrderSummaryCard {...orderSummary} />
      </div>

      {/* Order Progress */}
      <ProgressBar steps={progressSteps} />

      {/* Product List */}
      <ProductTable products={products} />
    </div>
  );
}
