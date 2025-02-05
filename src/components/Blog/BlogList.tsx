import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import Pagination from '../Pagination';

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

interface BlogListProps {
  blogs: BlogPost[];
  filters: { search: string; category: string; tag: string };
  sortOption: string;
  onResultCountChange: (count: number) => void;
}

export default function BlogList({
  blogs,
  filters,
  sortOption,
  onResultCountChange,
}: BlogListProps) {
  // Lọc dữ liệu dựa trên filters
  const filteredBlogs = blogs.filter((post) => {
    const searchMatch = post.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const categoryMatch = filters.category
      ? post.category.toLowerCase() === filters.category.toLowerCase()
      : true;
    const tagMatch = filters.tag
      ? post.tag.toLowerCase() === filters.tag.toLowerCase()
      : true;
    return searchMatch && categoryMatch && tagMatch;
  });

  // Sắp xếp dữ liệu dựa trên sortOption
  const sortedBlogs = filteredBlogs.sort((a, b) => {
    if (sortOption === 'latest') {
      return b.id - a.id;
    } else {
      return a.id - b.id;
    }
  });

  useEffect(() => {
    onResultCountChange(filteredBlogs.length);
  }, [filteredBlogs]);

  // Phân trang
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(sortedBlogs.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortOption]);

  const currentBlogs = sortedBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {currentBlogs.length > 0 ? (
          currentBlogs.map((post) => (
            <BlogCard
              key={post.id}
              {...post}
            />
          ))
        ) : (
          <p className='col-span-full text-center text-gray-600'>
            No blogs found
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
