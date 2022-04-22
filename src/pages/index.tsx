import { useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import IntroSection from '../components/Sections/IntroSection';
import ProjectsSection from '../components/Sections/ProjectsSection';
import AboutSection from '../components/Sections/AboutSection';
import Navbar from '../components/Navbar/Navbar';
import { useNavAnimation } from '../hooks/useNavAnimaiton';
import { getProjectsData } from '../helper/getProjectsData';
import { ProjectType, SectionType } from '../types';
import { getSectionData } from '../helper/getSectionData';

export async function getStaticProps() {
    const projects = await getProjectsData();
    const aboutData = await getSectionData('about');
    const introData = await getSectionData('intro');

    return {
        props: {
            projects,
            aboutData,
            introData,
        },
    };
}

interface HomeProps {
    projects: ProjectType[];
    aboutData: SectionType;
    introData: SectionType;
}

const Home: NextPage<HomeProps> = props => {
    const aboutRef = useRef(null);
    const navRef = useRef<HTMLDivElement>(null);

    gsap.registerPlugin(ScrollTrigger);

    useNavAnimation(navRef, aboutRef);

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
                <IntroSection data={props.introData} />
                <AboutSection
                    id='about'
                    sectionRef={aboutRef}
                    data={props.aboutData}
                />
                <ProjectsSection id='projects' projects={props.projects} />
            </main>
        </div>
    );
};

export default Home;
