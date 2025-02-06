'use client';
import { useState } from 'react';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('cod');

  return (
    <div className='max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8'>
      {/* Billing Information */}
      <div className='lg:col-span-2 bg-white p-6 shadow-md rounded-lg'>
        <h2 className='text-xl font-semibold mb-4'>Billing Information</h2>
        <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* First Name */}
          <div className='flex flex-col'>
            <label
              htmlFor='firstName'
              className='mb-1 text-sm font-medium'
            >
              First Name
            </label>
            <input
              id='firstName'
              type='text'
              placeholder='Your first name'
              className='border p-2 rounded'
            />
          </div>
          {/* Last Name */}
          <div className='flex flex-col'>
            <label
              htmlFor='lastName'
              className='mb-1 text-sm font-medium'
            >
              Last Name
            </label>
            <input
              id='lastName'
              type='text'
              placeholder='Your last name'
              className='border p-2 rounded'
            />
          </div>
          {/* Company Name */}
          <div className='flex flex-col md:col-span-2'>
            <label
              htmlFor='companyName'
              className='mb-1 text-sm font-medium'
            >
              Company Name (Optional)
            </label>
            <input
              id='companyName'
              type='text'
              placeholder='Company name (optional)'
              className='border p-2 rounded'
            />
          </div>
          {/* Street Address */}
          <div className='flex flex-col md:col-span-2'>
            <label
              htmlFor='streetAddress'
              className='mb-1 text-sm font-medium'
            >
              Street Address
            </label>
            <input
              id='streetAddress'
              type='text'
              placeholder='Street Address'
              className='border p-2 rounded'
            />
          </div>
          {/* Country */}
          <div className='flex flex-col'>
            <label
              htmlFor='country'
              className='mb-1 text-sm font-medium'
            >
              Country
            </label>
            <select
              id='country'
              className='border p-2 rounded'
            >
              <option>Select Country</option>
            </select>
          </div>
          {/* State */}
          <div className='flex flex-col'>
            <label
              htmlFor='state'
              className='mb-1 text-sm font-medium'
            >
              State
            </label>
            <select
              id='state'
              className='border p-2 rounded'
            >
              <option>Select State</option>
            </select>
          </div>
          {/* Zip Code */}
          <div className='flex flex-col'>
            <label
              htmlFor='zipCode'
              className='mb-1 text-sm font-medium'
            >
              Zip Code
            </label>
            <input
              id='zipCode'
              type='text'
              placeholder='Zip Code'
              className='border p-2 rounded'
            />
          </div>
          {/* Email Address */}
          <div className='flex flex-col md:col-span-2'>
            <label
              htmlFor='email'
              className='mb-1 text-sm font-medium'
            >
              Email Address
            </label>
            <input
              id='email'
              type='email'
              placeholder='Email Address'
              className='border p-2 rounded'
            />
          </div>
          {/* Phone Number */}
          <div className='flex flex-col md:col-span-2'>
            <label
              htmlFor='phone'
              className='mb-1 text-sm font-medium'
            >
              Phone Number
            </label>
            <input
              id='phone'
              type='text'
              placeholder='Phone number'
              className='border p-2 rounded'
            />
          </div>
          {/* Ship to a different address */}
          <div className='flex items-center gap-2 md:col-span-2'>
            <input
              id='shipDifferent'
              type='checkbox'
              className='w-4 h-4'
            />
            <label
              htmlFor='shipDifferent'
              className='text-sm'
            >
              Ship to a different address
            </label>
          </div>
        </form>

        {/* Additional Info */}
        <div className='mt-6'>
          <h2 className='text-xl font-semibold mb-2'>Additional Info</h2>
          <div className='flex flex-col'>
            <label
              htmlFor='orderNotes'
              className='mb-1 text-sm font-medium'
            >
              Order Notes
            </label>
            <textarea
              id='orderNotes'
              className='border p-2 rounded w-full'
              placeholder='Notes about your order, e.g. special notes for delivery'
            ></textarea>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className='bg-white p-6 shadow-md rounded-lg h-[560px]'>
        <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
        <div className='border-b pb-4'>
          <div className='flex justify-between items-center mb-2'>
            <div className='flex items-center gap-2'>
              <img
                src='/images/featured_products/Image1.png'
                alt='Green Capsicum'
                className='w-14 h-14'
              />
              <span>Green Capsicum x5</span>
            </div>
            <span>$70.00</span>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <img
                src='/images/featured_products/Image1.png'
                alt='Red Capsicum'
                className='w-14 h-14'
              />
              <span>Red Capsicum x1</span>
            </div>
            <span>$14.00</span>
          </div>
        </div>

        <div className='border-b py-4'>
          <div className='flex justify-between'>
            <span>Subtotal:</span>
            <span>$84.00</span>
          </div>
          <div className='flex justify-between'>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
        </div>

        <div className='py-4 font-semibold text-lg flex justify-between'>
          <span>Total:</span>
          <span>$84.00</span>
        </div>

        {/* Payment Method */}
        <h2 className='text-xl font-semibold mb-3'>Payment Method</h2>
        <div className='space-y-2'>
          <label className='flex items-center gap-2'>
            <input
              type='radio'
              name='payment'
              value='cod'
              checked={paymentMethod === 'cod'}
              onChange={() => setPaymentMethod('cod')}
            />
            <span>Cash on Delivery</span>
          </label>
          <label className='flex items-center gap-2'>
            <input
              type='radio'
              name='payment'
              value='paypal'
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
            />
            <span>Paypal</span>
          </label>
          <label className='flex items-center gap-2'>
            <input
              type='radio'
              name='payment'
              value='amazon'
              checked={paymentMethod === 'amazon'}
              onChange={() => setPaymentMethod('amazon')}
            />
            <span>Amazon Pay</span>
          </label>
        </div>

        <button className='mt-6 w-full bg-customGreen hover:bg-hoverGreen text-white py-2 rounded-full text-lg'>
          Place Order
        </button>
      </div>
    </div>
  );
}
