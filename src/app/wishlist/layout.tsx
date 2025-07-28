import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Wishlist | Shopery Organic Store',
  description:
    'View and manage your favorite organic products saved for later.',
  keywords: [
    'Wishlist',
    'Saved Products',
    'Organic Wishlist',
    'Shopery Favorites',
    'Healthy Products',
    'Sustainable Shopping',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function WishlistLayout({
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
