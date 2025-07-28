import type { Metadata } from 'next';
import MyAccountLayoutClient from '@/components/MyAccount/MyAccountLayoutClient';

export const metadata: Metadata = {
  title: 'My Account | Shopery',
  description:
    'Manage your profile, orders, and preferences in your Shopery account.',
  keywords: [
    'Shopery Account',
    'User Profile',
    'Order History',
    'Account Settings',
    'Manage Account',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MyAccountLayoutClient>{children}</MyAccountLayoutClient>;
}
