type SortBlogProps = {
  sortOption: string;
  setSortOption: (option: string) => void;
};

export default function SortBlog({ sortOption, setSortOption }: SortBlogProps) {
  return (
    <div className='flex items-center gap-2 flex-wrap'>
      <p className='text-sm md:text-base'>Sort by:</p>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className='border-2 border-gray-200 p-2 rounded-md text-sm md:text-base'
      >
        <option value='latest'>Latest</option>
        <option value='oldest'>Oldest</option>
      </select>
    </div>
  );
}
