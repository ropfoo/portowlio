import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import IntroSection from '../components/Sections/IntroSection';
import ProjectsSection from '../components/Sections/ProjectsSection';
import AboutSection from '../components/Sections/AboutSection';
import Navbar from '../components/Navbar/Navbar';
import { getProjectsData } from '../helper/getProjectsData';
import { IntroSectionData, ProjectType, SectionData } from '../types';
import { getIntroSectionData, getSectionData } from '../helper/getSectionData';
import { useIntroObserver } from '../hooks/useIntroObserver';

export async function getStaticProps() {
    const projects = await getProjectsData();

    const introSectionData = await getIntroSectionData();
    const aboutSectionData = await getSectionData('about');
    const projectsSectionData = await getSectionData('projects');

    return {
        props: {
            projects,
            aboutSectionData,
            introSectionData,
            projectsSectionData,
        },
    };
}

interface HomeProps {
    projects: ProjectType[];
    introSectionData: IntroSectionData;
    aboutSectionData: SectionData;
    projectsSectionData: SectionData;
}

const Home: NextPage<HomeProps> = props => {
    const aboutRef = React.useRef(null);
    const navRef = React.useRef<HTMLDivElement>(null);

    const { introRef, showNavigation } = useIntroObserver();

    return (
        <div>
            <Head>
                <title>Portfolio | Robert Pasdziernik</title>
                <meta name='description' content='portfolio' />
                <link rel='icon' href='/favicon.ico' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
                    rel='stylesheet'></link>
            </Head>
            <Navbar isVisible={showNavigation} navbarRef={navRef} />
            <main>
                <IntroSection
                    sectionRef={introRef}
                    sectionData={props.introSectionData}
                />
                <AboutSection
                    id='about'
                    sectionRef={aboutRef}
                    sectionData={props.aboutSectionData}
                />
                <ProjectsSection
                    id='projects'
                    projects={props.projects}
                    sectionData={props.projectsSectionData}
                />
            </main>
        </div>
    );
};

export default Home;
