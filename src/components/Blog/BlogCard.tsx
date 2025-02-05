import React from 'react';
import { FiTag } from 'react-icons/fi';
import { IoPersonOutline } from 'react-icons/io5';
import { FaRegCommentAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string; // ví dụ: "18 Nov"
  category: string; // ví dụ: "Food" (dùng cho filter)
  tag: string; // ví dụ: "food", dùng để hiển thị tag
  author: string; // ví dụ: "Admin"
  comments: number; // ví dụ: 65
  imageUrl: string;
  slug: string; // link đọc thêm
}

export default function BlogCard({
  title,
  excerpt,
  date,
  category,
  tag,
  author,
  comments,
  imageUrl,
  slug,
}: BlogCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        console.log('navigate');
        router.push(`/blog/${slug}`);
      }}
      className='bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow'
    >
      {/* Container ảnh với chiều cao được kéo dài (h-64) */}
      <div className='relative w-full h-64'>
        <img
          src={imageUrl}
          alt={title}
          className='w-full h-full object-cover'
        />
        {/* Date overlay nằm dưới góc bên trái của ảnh */}
        <div className='absolute bottom-2 left-2 bg-gray-100 text-gray-800 font-medium px-2 py-1 rounded'>
          {date}
        </div>
      </div>

      {/* Nội dung */}
      <div className='p-4'>
        {/* Tag, Tác giả, Số bình luận */}
        <div className='flex gap-2 items-center text-sm text-gray-500'>
          <div className='flex items-center gap-2'>
            <FiTag />
            <span>{tag}</span>
          </div>
          <div className='flex items-center gap-2'>
            <IoPersonOutline />
            <span>By {author}</span>
          </div>
          <div className='flex items-center gap-2'>
            <FaRegCommentAlt />
            <span>{comments} Comments</span>
          </div>
        </div>

        {/* Tiêu đề bài viết */}
        <h2 className='text-lg font-semibold text-gray-800 mb-2 line-clamp-2'>
          {title}
        </h2>

        {/* Mô tả ngắn */}
        <p className='text-gray-600 line-clamp-3 mb-4'>{excerpt}</p>

        {/* Nút "Read More" */}
        <a
          href={`/blog/${slug}`}
          className='text-primary font-semibold text-customGreen hover:text-hoverGreen'
        >
          Read More →
        </a>
      </div>
    </div>
  );
}
