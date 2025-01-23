import Link from 'next/link';

export default function ProductList() {
  const products = [
    { id: '1', name: 'Product 1', description: 'Description of Product 1' },
    { id: '2', name: 'Product 2', description: 'Description of Product 2' },
    // Add more products or fetch from an API
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}