import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Shop | Shopery',
  description: 'Browse and buy organic, eco-friendly products from Shopery.',
  keywords: [
    'Shopery',
    'Shop',
    'Organic Products',
    'Eco-friendly',
    'Sustainable',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};
export default function ProductsLayout({
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
