type SortProductProps = {
  sortOption: string;
  setSortOption: (option: string) => void;
};

export default function SortProduct({
  sortOption,
  setSortOption,
}: SortProductProps) {
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
        <option value='highest-rating'>Highest Rating</option>
        <option value='lowest-rating'>Lowest Rating</option>
        <option value='lowest-price'>Lowest Price</option>
        <option value='highest-price'>Highest Price</option>
        <option value='a-to-z'>A-Z</option>
        <option value='z-to-a'>Z-A</option>
      </select>
    </div>
  );
}
