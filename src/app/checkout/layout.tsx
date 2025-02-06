import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

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
