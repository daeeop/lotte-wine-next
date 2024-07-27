import { TopButton } from '../_components/Button';
import { PagePropsWithChildren } from '../types/common';
import ReactQueryProvider from '../provider/react-query';
import Footer from '@/app/_components/Footer';
import Header from '../_components/Header';
import PageBanner from './_components/Banner';

export default function layout({ children }: PagePropsWithChildren) {
  return (
    <>
      <ReactQueryProvider>
        <main className="root-container">
          <Header />
          <PageBanner />
          <section className="contents-wrapper">{children}</section>
          <Footer />
          <TopButton />
        </main>
      </ReactQueryProvider>
    </>
  );
}
