import React from 'react';

// Account Settings Form Component
function AccountSettings() {
  return (
    <div className='col-span-2'>
      <h2 className='text-2xl font-bold mb-6'>Account Settings</h2>
      <form className='grid grid-cols-1 gap-4'>
        <div>
          <label
            htmlFor='firstName'
            className='block text-sm font-medium text-gray-700'
          >
            First name
          </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            defaultValue='Dianne'
            className='mt-1 p-2 border rounded-md w-full focus:ring-customGreen focus:border-customGreen'
          />
        </div>

        <div>
          <label
            htmlFor='lastName'
            className='block text-sm font-medium text-gray-700'
          >
            Last Name
          </label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            defaultValue='Russell'
            className='mt-1 p-2 border rounded-md w-full focus:ring-customGreen focus:border-customGreen'
          />
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            defaultValue='dianne.russell@gmail.com'
            className='mt-1 p-2 border rounded-md w-full focus:ring-customGreen focus:border-customGreen'
          />
        </div>

        <div>
          <label
            htmlFor='phone'
            className='block text-sm font-medium text-gray-700'
          >
            Phone Number
          </label>
          <input
            type='text'
            id='phone'
            name='phone'
            defaultValue='(603) 555-0123'
            className='mt-1 p-2 border rounded-md w-full focus:ring-customGreen focus:border-customGreen'
          />
        </div>

        <button
          type='submit'
          className='mt-4 bg-customGreen text-white py-2 px-4 rounded-full hover:bg-hoverGreen'
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

// Profile Image Upload Component
function ProfileImageUpload() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-32 h-32 rounded-full overflow-hidden mb-4'>
        <img
          src='https://via.placeholder.com/128'
          alt='Profile'
          className='w-full h-full object-cover'
        />
      </div>
      <button className='text-customGreen bg-white py-2 px-4 hover:text-hoverGreen border-customGreen border rounded-full'>
        Choose Image
      </button>
    </div>
  );
}

// Billing Address Component
function BillingAddress() {
  return (
    <div className='border p-6 rounded-md'>
      <h3 className='text-xl font-bold mb-4'>Billing Address</h3>
      <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            First name
          </label>
          <input
            type='text'
            defaultValue='Dianne'
            className='mt-1 p-2 border rounded-md w-full'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Last name
          </label>
          <input
            type='text'
            defaultValue='Russell'
            className='mt-1 p-2 border rounded-md w-full'
          />
        </div>
        <div className='md:col-span-2'>
          <label className='block text-sm font-medium text-gray-700'>
            Company Name (optional)
          </label>
          <input
            type='text'
            defaultValue='Zakirsoft'
            className='mt-1 p-2 border rounded-md w-full'
          />
        </div>
        <div className='md:col-span-2'>
          <label className='block text-sm font-medium text-gray-700'>
            Street Address
          </label>
          <input
            type='text'
            defaultValue='4140 Parl'
            className='mt-1 p-2 border rounded-md w-full'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Country / Region
          </label>
          <select className='mt-1 p-2 border rounded-md w-full'>
            <option>United States</option>
          </select>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            State
          </label>
          <select className='mt-1 p-2 border rounded-md w-full'>
            <option>Washington DC</option>
          </select>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Zip Code
          </label>
          <input
            type='text'
            defaultValue='20033'
            className='mt-1 p-2 border rounded-md w-full'
          />
        </div>
        <div className='md:col-span-2'>
          <label className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input
            type='email'
            defaultValue='dianne.russell@gmail.com'
            className='mt-1 p-2 border rounded-md w-full'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Phone
          </label>
          <input
            type='text'
            defaultValue='(603) 555-0123'
            className='mt-1 p-2 border rounded-md w-full'
          />
        </div>
        <div className='md:col-span-2'>
          <button
            type='submit'
            className='mt-4 bg-customGreen text-white py-2 px-4 rounded-full hover:bg-hoverGreen'
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

// Change Password Component
function ChangePassword() {
  return (
    <div className='border p-6 rounded-md'>
      <h3 className='text-xl font-bold mb-4'>Change Password</h3>
      <form className='grid grid-cols-1 gap-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Current Password
          </label>
          <input
            type='password'
            className='mt-1 p-2 border rounded-md w-full'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            New Password
          </label>
          <input
            type='password'
            className='mt-1 p-2 border rounded-md w-full'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Confirm Password
          </label>
          <input
            type='password'
            className='mt-1 p-2 border rounded-md w-full'
          />
        </div>
        <div>
          <button
            type='submit'
            className='mt-4 bg-customGreen text-white py-2 px-4 rounded-full hover:bg-hoverGreen'
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}

// Main Settings Component
export default function Settings() {
  return (
    <div className='container mx-auto space-y-6'>
      {/* Account Settings and Profile Image */}
      <div className='border p-6 rounded-md grid grid-cols-1 md:grid-cols-3 gap-8'>
        <AccountSettings />
        <ProfileImageUpload />
      </div>

      {/* Billing Address */}
      <BillingAddress />

      {/* Change Password */}
      <ChangePassword />
    </div>
  );
}
