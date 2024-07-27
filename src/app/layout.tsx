import type { Metadata } from 'next';
import { Poppins, Noto_Sans_KR } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';

import '../../public/styles/main.scss';

const notoSansKr: NextFont = Noto_Sans_KR({
  weight: ['400'],
  subsets: ['latin'],
});

const poppins: NextFont = Poppins({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '롯데 와인',
  description: 'Lotte Wine',
  icons: '/icons/favicon.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
