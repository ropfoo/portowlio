import Navbar from './Navbar/Navbar';

export const mainPadding = 'px-3 sm:px-24 md:px-24 lg:px-36 xl:px-60 2xl:px-96';

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      <main className={mainPadding}>{children}</main>
    </>
  );
}
