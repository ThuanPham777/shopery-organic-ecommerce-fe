type OrderSummaryCardProps = {
  orderId: string;
  paymentMethod: string;
  subtotal: string;
  discount: string;
  shipping: string;
  total: string;
};

export default function OrderSummaryCard({
  orderId,
  paymentMethod,
  subtotal,
  discount,
  shipping,
  total,
}: OrderSummaryCardProps) {
  return (
    <div className='border p-4 rounded-md'>
      <h2 className='text-gray-500 text-sm uppercase'>Order Summary</h2>
      <p>
        <strong>Order ID:</strong> {orderId}
      </p>
      <p>
        <strong>Payment Method:</strong> {paymentMethod}
      </p>
      <div className='mt-4 border-t pt-3'>
        <p className='flex justify-between'>
          <span>Subtotal:</span> <strong>{subtotal}</strong>
        </p>
        <p className='flex justify-between'>
          <span>Discount:</span> <strong>{discount}</strong>
        </p>
        <p className='flex justify-between'>
          <span>Shipping:</span> <strong>{shipping}</strong>
        </p>
        <p className='flex justify-between text-green-500 text-lg font-semibold mt-2'>
          <span>Total:</span> <span>{total}</span>
        </p>
      </div>
    </div>
  );
}
