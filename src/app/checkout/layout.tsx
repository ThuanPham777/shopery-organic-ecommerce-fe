import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Checkout | Shopery',
  description:
    'Complete your order and enjoy healthy, organic products delivered to your door.',
  keywords: [
    'Checkout',
    'Shopery Checkout',
    'Organic Delivery',
    'Secure Payment',
    'Eco-friendly Shopping',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};
export default function CheckoutLayout({
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
