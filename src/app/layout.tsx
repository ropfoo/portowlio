import Layout from '../components/Layout';
import '../styles/globals.css';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Layout>
          <main>{children}</main>
        </Layout>
      </body>
    </html>
  );
}
