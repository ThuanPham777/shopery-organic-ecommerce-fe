'use client';
import FilterBlog from '@/components/Blog/FilterBlog';
import { useEffect, useState } from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { FiTag } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { IoPersonOutline } from 'react-icons/io5';

export default function BlogDetails() {
  const blog = {
    id: 1,
    title: 'Curabitur porttitor orci eget neque accumsan venenatis',
    excerpt:
      'Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus. Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.',
    date: '18 Nov',
    category: 'Business',
    tag: 'food',
    author: 'Admin',
    comments: 65,
    imageUrl: '/images/blog/Image1.png',
    slug: 'curabitur-porttitor-orci-eget-neque',
  };

  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      date: '3 Apr, 2021',
      comment:
        'This product is very good. The packaging was well done and the freshness of the cabbage was excellent.',
      avatar: '/images/users/avatar1.png',
    },
    {
      id: 2,
      name: 'Jane Smith',
      date: '3 Apr, 2021',
      comment:
        'I love this product! The cabbage was so tasty and the packaging was perfect.',
      avatar: '/images/users/avatar2.png',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      date: '3 Apr, 2021',
      comment:
        'I had a little bit of trouble with the packaging and the cabbage was not as fresh as I expected.',
      avatar: '/images/users/avatar3.png',
    },
    {
      id: 4,
      name: 'Alice Wilson',
      date: '3 Apr, 2021',
      comment:
        'This product is amazing! The cabbage was delicious and the packaging was perfect.',
      avatar: '/images/users/avatar4.png',
    },
  ];

  const [showSidebar, setShowSidebar] = useState(false);
  const [reviewsToShow, setReviewsToShow] = useState(2); // Ban đầu hiển thị 2 reviews

  const handleLoadMoreReviews = () => {
    setReviewsToShow((prev) => prev + 2); // Hiển thị thêm 2 review mỗi lần bấm
  };

  useEffect(() => {
    if (showSidebar) {
      setShowSidebar(false);
    }
  }, []);

  useEffect(() => {
    if (showSidebar) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showSidebar]);

  return (
    <div className='relative flex flex-col lg:flex-row gap-8 p-6 min-h-screen'>
      <main className='w-full lg:w-3/4 bg-white shadow-md p-6 rounded-lg'>
        {/* Blog Details */}
        <article>
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className='w-full h-full rounded-lg'
          />
          <h1 className='text-2xl font-bold mt-4'>{blog.title}</h1>
          <div className='flex gap-2 items-center text-sm text-gray-500 mt-2'>
            <div className='flex items-center gap-2'>
              <FiTag />
              <span>{blog.tag}</span>
            </div>
            <div className='flex items-center gap-2'>
              <IoPersonOutline />
              <span>By {blog.author}</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaRegCommentAlt />
              <span>{blog.comments} Comments</span>
            </div>
          </div>
          <p className='text-gray-700 mt-4'>{blog.excerpt}</p>
        </article>

        {/* Banner */}

        {/* Comment Form */}
        <section className='mt-8'>
          <h2 className='text-xl font-semibold mb-4'>Leave a Comment</h2>
          <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='fullname'
                className='block text-sm font-medium'
              >
                Full Name
              </label>
              <input
                type='text'
                id='fullname'
                placeholder='Full Name'
                className='border p-2 rounded w-full mt-2'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                placeholder='Email'
                className='border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500 mt-2'
              />
            </div>
            <div className='md:col-span-2'>
              <label
                htmlFor='comment'
                className='block text-sm font-medium mt-2'
              >
                Message
              </label>
              <textarea
                id='comment'
                placeholder='Write your comment here...'
                className='border p-2 rounded w-full mt-2'
              />
            </div>
            <div className='md:col-span-2 flex items-center gap-2 text-sm'>
              <input
                type='checkbox'
                id='save-info'
              />
              <label htmlFor='save-info'>
                Save my name and email in this browser for the next time I
                comment.
              </label>
            </div>
            <div className='md:col-span-2'>
              <button className='bg-customGreen hover:bg-hoverGreen text-white py-2 px-4 rounded-full'>
                Post Comments
              </button>
            </div>
          </form>
        </section>

        {/* Comments List */}
        <section className='mt-8'>
          <h2 className='text-xl font-semibold mb-4'>Comments</h2>
          <ul className='space-y-4'>
            {reviews.slice(0, reviewsToShow).map((c, i) => (
              <li
                key={i}
                className='flex justify-between items-center border-b pb-2'
              >
                <div className='flex flex-col sm:flex-row items-center justify-between'>
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className='w-10 h-10 rounded-full object-cover'
                  />
                  <div>
                    <p className='text-sm text-gray-500'>
                      <span className='text-black font-bold'>{c.name}</span> •{' '}
                      {c.date}
                    </p>
                    <p className='text-gray-700'>{c.comment}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {reviewsToShow < reviews.length && (
            <button
              onClick={handleLoadMoreReviews}
              className='mt-4 px-4 py-2 border border-customGreen rounded-full text-customGreen font-semibold focus:outline-none focus:ring-2 focus:ring-customGreen'
            >
              Load More
            </button>
          )}
        </section>
      </main>

      {showSidebar && (
        <div
          className='fixed inset-0 z-50 bg-black bg-opacity-50'
          onClick={() => setShowSidebar(false)}
        >
          <aside
            className='absolute right-0 top-0 bottom-0 bg-white shadow-lg w-3/4 max-w-md p-4 space-y-4 flex flex-col h-full overflow-y-auto'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-lg font-semibold text-gray-800'>Filters</h2>
              <button
                className='text-gray-500 hover:text-black'
                onClick={() => setShowSidebar(false)}
              >
                <IoMdClose className='text-2xl' />
              </button>
            </div>
            <FilterBlog />
          </aside>
        </div>
      )}
      <aside className='hidden lg:block lg:w-1/4'>
        <div className='bg-white shadow-lg p-4 space-y-4 flex flex-col h-full'>
          <h2 className='text-lg font-semibold text-gray-800'>Filters</h2>
          <FilterBlog />
        </div>
      </aside>
    </div>
  );
}
