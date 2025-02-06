type AddressCardProps = {
  title: string;
  name: string;
  address: string;
  email: string;
  phone: string;
};

export default function AddressCard({
  title,
  name,
  address,
  email,
  phone,
}: AddressCardProps) {
  return (
    <div className='border p-4 rounded-md'>
      <h2 className='text-gray-500 text-sm uppercase'>{title}</h2>
      <p className='font-semibold'>{name}</p>
      <p className='text-gray-500 text-sm'>{address}</p>
      <p className='text-gray-500 text-sm mt-2'>
        <strong>Email:</strong> {email}
      </p>
      <p className='text-gray-500 text-sm'>
        <strong>Phone:</strong> {phone}
      </p>
    </div>
  );
}
