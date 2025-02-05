'use client';
import { useEffect, useState } from 'react';
import BlogList from '@/components/Blog/BlogList';
import FilterBlog from '@/components/Blog/FilterBlog';
import SortBlog from '@/components/Blog/SortBlog';
import { IoMdClose } from 'react-icons/io';
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tag: string;
  author: string;
  comments: number;
  imageUrl: string;
  slug: string;
}

interface FilterType {
  search: string;
  category: string;
  tag: string;
}

export default function BlogsPage() {
  const blogData: BlogPost[] = [
    {
      id: 1,
      title: 'Curabitur porttitor orci eget neque accumsan venenatis',
      excerpt: 'Nunc fermentum. Lorem ipsum dolor sit amet...',
      date: '18 Nov',
      category: 'Business',
      tag: 'food',
      author: 'Admin',
      comments: 65,
      imageUrl: '/images/blog/Image1.png',
      slug: 'curabitur-porttitor-orci-eget-neque',
    },
    {
      id: 2,
      title: 'Another blog post example',
      excerpt: 'Short excerpt for another blog post...',
      date: '18 Nov',
      category: 'Travel',
      tag: 'travel',
      author: 'Admin',
      comments: 65,
      imageUrl: '/images/blog/Image2.png',
      slug: 'another-blog-post-example',
    },
    {
      id: 3,
      title: 'Delicious food and healthy lifestyle',
      excerpt: 'A brief introduction to healthy eating...',
      date: '20 Nov',
      category: 'Lifestyle',
      tag: 'food',
      author: 'Chef',
      comments: 12,
      imageUrl: '/images/blog/Image1.png',
      slug: 'delicious-food-healthy-lifestyle',
    },
    {
      id: 4,
      title: 'Exploring the world: travel tips',
      excerpt: 'Top travel tips for your next adventure...',
      date: '22 Nov',
      category: 'Adventure',
      tag: 'travel',
      author: 'Explorer',
      comments: 8,
      imageUrl: '/images/blog/Image1.png',
      slug: 'exploring-world-travel-tips',
    },
  ];
  const [showSidebar, setShowSidebar] = useState(false);
  const [filters, setFilters] = useState<FilterType>({
    search: '',
    category: '',
    tag: '',
  });

  const [sortOption, setSortOption] = useState<string>('latest');
  const [resultCount, setResultCount] = useState<number>(blogData.length);

  // Danh sách blogs

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

  const handleFilterChange = (newFilters: FilterType) => {
    setFilters(newFilters);
  };

  return (
    <div className='relative flex flex-col lg:flex-row gap-8 p-6 min-h-screen'>
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
            <FilterBlog onFilterChange={handleFilterChange} />
          </aside>
        </div>
      )}
      <aside className='hidden lg:block lg:w-1/4'>
        <div className='bg-white shadow-lg p-4 space-y-4 flex flex-col h-full'>
          <h2 className='text-lg font-semibold text-gray-800'>Filters</h2>
          <FilterBlog onFilterChange={handleFilterChange} />
        </div>
      </aside>

      <main className='flex-1'>
        <button
          className='lg:hidden mb-4 p-2 bg-customGreen hover:bg-hoverGreen text-white rounded'
          onClick={() => setShowSidebar(true)}
        >
          Filter
        </button>

        <div className='flex justify-between items-center mb-6'>
          <SortBlog
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          <div className='text-gray-600 text-sm mt-4 lg:mt-0'>
            {resultCount} results found
          </div>
        </div>

        {/* Truyền dữ liệu blogData xuống BlogList */}
        <BlogList
          blogs={blogData}
          filters={filters}
          sortOption={sortOption}
          onResultCountChange={setResultCount}
        />
      </main>
    </div>
  );
}
