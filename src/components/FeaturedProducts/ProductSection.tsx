// ProductSection.tsx
import ProductCard from '../ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  highlight?: boolean;
}

export default function ProductSection({
  title,
  products,
  highlight = false,
}: ProductSectionProps) {
  return (
    <div className='mb-8'>
      <h2 className='text-2xl font-bold mb-6 text-gray-800'>{title}</h2>
      <div className='flex flex-col gap-6'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            variant={highlight ? 'vertical' : 'horizontal'}
          />
        ))}
      </div>
    </div>
  );
}
