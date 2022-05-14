import Head from 'next/head';
import Navbar from './Navbar/Navbar';

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
                    rel='stylesheet'></link>
            </Head>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
