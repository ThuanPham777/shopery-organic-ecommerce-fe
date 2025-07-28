import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Your Cart | Shopery',
  description: 'Review the organic products in your cart before checkout.',
  keywords: [
    'Cart',
    'Shopery Cart',
    'Organic Products',
    'Eco-friendly Checkout',
    'Shopping Cart',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};
export default function ShoppingCartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <Breadcrumb />
      </header>
      <main>{children}</main>
    </div>
  );
}
