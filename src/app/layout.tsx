import '../styles/globals.css';
import { Montserrat } from 'next/font/google';

import Layout from '../components/Layout';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={montserrat.className}>
      <body>
        <Layout>
          <main>{children}</main>
        </Layout>
      </body>
    </html>
  );
}
