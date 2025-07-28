import '../styles/globals.css';
import '../components/Header/Header';
import Header from '../components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopery | Organic Ecommerce Platform for Healthy Living',
  description:
    'Shopery is an organic e-commerce platform offering eco-friendly, healthy, and sustainable products delivered to your door.',
  keywords: [
    'Organic',
    'Ecommerce',
    'Shopery',
    'Healthy Products',
    'Eco-friendly',
    'Online Store',
    'Sustainable',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
