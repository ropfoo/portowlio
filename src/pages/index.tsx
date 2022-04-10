import { useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import IntroSection from '../components/Sections/IntroSection';
import ProjectsSection from '../components/Sections/ProjectsSection';
import AboutSection from '../components/Sections/AboutSection';
import Navbar from '../components/Navbar/Navbar';

gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
    const aboutRef = useRef(null);
    const navRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        gsap.to(navRef.current, {
            y: 64,
            duration: 0.3,
            scrollTrigger: {
                trigger: aboutRef.current,
                toggleActions: 'play pause resume reverse',
                start: 'top 100px',
            },
        });
    }, []);
    return (
        <div>
            <Head>
                <title>Robert Pasdziernik</title>
                <meta name='description' content='portfolio' />
                <link rel='icon' href='/favicon.ico' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
                    rel='stylesheet'></link>
            </Head>

            <Navbar navbarRef={navRef} />

            <main>
                <IntroSection />
                {/* <main className='flex flex-col justify-center  h-screen'>
                </main> */}

                <AboutSection id='about' sectionRef={aboutRef} />
                <ProjectsSection id='projects' />
            </main>
        </div>
    );
};

export default Home;
