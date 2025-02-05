import { BsEnvelope } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { PiPhoneCallThin } from 'react-icons/pi';

export default function Contact() {
  return (
    <div className='max-w-6xl mx-auto p-8'>
      <div className='grid md:grid-cols-3 gap-12 p-10'>
        {/* Left Column - Contact Info */}
        <div className='space-y-6 rounded-md border shadow-md p-10'>
          <div className='flex flex-col items-center text-center justify-center gap-4'>
            <CiLocationOn className='text-customGreen text-5xl mt-1' />
            <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
          </div>
          {/* line */}
          <div className='border-b border-gray-300 w-full'></div>

          <div className='flex flex-col items-center text-center justify-center gap-4'>
            <BsEnvelope className='text-customGreen text-5xl mt-1' />
            <div>
              <p>Proxy@gmail.com</p>
              <p>Help.proxy@gmail.com</p>
            </div>
          </div>
          {/* line */}
          <div className='border-b border-gray-300 w-full'></div>

          <div className='flex flex-col items-center text-center justify-center gap-4'>
            <PiPhoneCallThin className='text-customGreen text-5xl mt-1' />
            <div>
              <p>(219) 555-0114</p>
              <p>(164) 333-0487</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className='md:col-span-2 rounded-md border shadow-md p-10'>
          <h2 className='text-2xl font-semibold'>Just Say Hello!</h2>
          <p className='text-gray-600 mb-6'>
            Do you fancy saying hi to me or want to get started with your
            project and need help? Feel free to contact me.
          </p>

          <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <input
              type='text'
              placeholder='Template Cookie'
              className='border p-2 rounded w-full'
            />
            <input
              type='email'
              placeholder='zakirsoft@gmail.com'
              className='border p-2 rounded w-full'
            />
            <input
              type='text'
              placeholder='Hello'
              className='border p-2 rounded w-full col-span-2 focus:outline-none focus:ring-2 focus:ring-customGreen'
            />
            <textarea
              placeholder='Subjects'
              className='border p-2 rounded w-full col-span-2'
            />
            <div className='col-span-2'>
              <button className='bg-customGreen hover:bg-hoverGreen text-white py-2 px-6 rounded-full'>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
