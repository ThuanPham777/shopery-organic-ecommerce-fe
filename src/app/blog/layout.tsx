import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Blog | Shopery',
  description:
    'Read articles, tips, and news about organic living and sustainable shopping from Shopery.',
  keywords: [
    'Shopery Blog',
    'Organic Tips',
    'Sustainable Living',
    'Healthy Lifestyle',
    'Eco News',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};
export default function BlogsLayout({
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
