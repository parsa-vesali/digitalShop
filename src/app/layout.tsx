import type { Metadata } from 'next';
import './globals.css';
import { NavBar } from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'فروشگاه اینترنتی اسمارت کالا',
  description: 'nextShop.ir',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`antialiased`}>
        <header>
          <NavBar />
        </header>
        <div className="px-16 pt-40">{children}</div>
      </body>
    </html>
  );
}
