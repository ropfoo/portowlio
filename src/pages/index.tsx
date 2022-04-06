import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import IntroSection from '../components/Sections/IntroSection';
import ProjectsSection from '../components/Sections/ProjectsSection';
import { mainPadding } from '../components/Layout';
import AboutSection from '../components/Sections/AboutSection';
import { OwlIcon } from '../components/icons/Owl/OwlIcon';
import Navbar from '../components/Navbar/Navbar';

gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
    const introRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
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

            <main className='flex flex-col justify-center  h-screen'>
                <IntroSection />
            </main>

            <main
                id='about'
                ref={aboutRef}
                className='flex flex-col justify-center  h-screen'>
                <AboutSection />
            </main>

            <main
                id='projects'
                ref={projectRef}
                className='flex flex-col justify-center  h-screen'>
                <ProjectsSection />
            </main>
        </div>
    );
};

export default Home;
