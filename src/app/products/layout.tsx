export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>Our Products</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}