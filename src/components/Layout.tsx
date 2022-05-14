import Head from 'next/head';
import Navbar from './Navbar/Navbar';

export const mainPadding = 'px-3 sm:px-24 md:px-24 lg:px-36 xl:px-60 2xl:px-96';

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Portfolio | Robert Pasdziernik</title>
        <meta name='description' content='portfolio' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Navbar />
      <main className={mainPadding}>{children}</main>
    </>
  );
}
