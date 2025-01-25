import '../styles/globals.css'
import '../components/Header/Header'
import Header from '../components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header/>
          <main>{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
