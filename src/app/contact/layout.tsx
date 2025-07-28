import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact Us | Shopery',
  description:
    'Get in touch with the Shopery team for support, questions, or partnership inquiries.',
  keywords: [
    'Contact Shopery',
    'Customer Support',
    'Help',
    'Shopery Contact',
    'Organic Store Support',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};
export default function ContactLayout({
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
