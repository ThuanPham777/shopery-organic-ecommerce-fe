type Product = {
  name: string;
  image: string;
  price: string;
  quantity: string;
  subtotal: string;
};

type ProductTableProps = {
  products: Product[];
};

export default function ProductTable({ products }: ProductTableProps) {
  return (
    <div className='mt-12 border rounded-md'>
      <table className='w-full'>
        <thead className='bg-gray-100 text-gray-600 text-left text-sm'>
          <tr>
            <th className='p-3'>Product</th>
            <th className='p-3'>Price</th>
            <th className='p-3'>Quantity</th>
            <th className='p-3'>Subtotal</th>
          </tr>
        </thead>
        <tbody className='text-sm'>
          {products.map((product, index) => (
            <tr
              className='border-t'
              key={index}
            >
              <td className='p-3 flex items-center space-x-3'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-10 h-10 rounded-md'
                />
                <span>{product.name}</span>
              </td>
              <td className='p-3'>{product.price}</td>
              <td className='p-3'>{product.quantity}</td>
              <td className='p-3 font-semibold'>{product.subtotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
