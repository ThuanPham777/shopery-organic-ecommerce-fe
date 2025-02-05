import Title from '../Title';

export default function Categories() {
  const sampleCategories = [
    { id: 1, name: 'Fresh Fruit', image: '/images/categories/category12.png' },
    {
      id: 2,
      name: 'Fresh Vegetables',
      image: '/images/categories/category1.png',
    },
    { id: 3, name: 'Meat & Fish', image: '/images/categories/category2.png' },
    { id: 4, name: 'Snacks', image: '/images/categories/category3.png' },
    { id: 5, name: 'Beverages', image: '/images/categories/category4.png' },
    {
      id: 6,
      name: 'Beauty & Health',
      image: '/images/categories/category5.png',
    },
    {
      id: 7,
      name: 'Bread & Bakery',
      image: '/images/categories/category6.png',
    },
    { id: 8, name: 'Baking Needs', image: '/images/categories/category7.png' },
    { id: 9, name: 'Cooking', image: '/images/categories/category8.png' },
    {
      id: 10,
      name: 'Diabetic Food',
      image: '/images/categories/category9.png',
    },
    {
      id: 11,
      name: 'Dish Detergents',
      image: '/images/categories/category10.png',
    },
    { id: 12, name: 'Oil', image: '/images/categories/category11.png' },
  ];

  return (
    <div>
      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4'>
        {sampleCategories.map((category) => (
          <div
            key={category.id}
            className='flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300'
          >
            <div className='w-24 h-24 mb-3'>
              <img
                src={category.image}
                alt={category.name}
                className='w-full h-full object-cover rounded-full'
              />
            </div>
            <h3 className='text-sm font-medium text-gray-800 text-center'>
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
