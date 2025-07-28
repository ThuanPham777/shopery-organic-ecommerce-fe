import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { Metadata } from 'next';
export const metadata: Metadata  = {
  title: 'About Us | Shopery',
  description:
    'Learn more about Shopery and our mission to bring organic and eco-friendly products to everyone.',
  keywords: [
    'About Shopery',
    'Organic Mission',
    'Eco-friendly Company',
    'Shopery Team',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};
export default function AboutLayout({
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
