import * as React from 'react';
import type { NextPage } from 'next';
import IntroSection from '../components/Sections/IntroSection';
import ProjectsSection from '../components/Sections/ProjectsSection';
import AboutSection from '../components/Sections/AboutSection';
import { getProjectsData } from '../helper/getProjectsData';
import { IntroSectionData, ProjectType, SectionData } from '../types';
import { getIntroSectionData, getSectionData } from '../helper/getSectionData';

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

const Home: NextPage<HomeProps> = (props) => {
  return (
    <>
      <IntroSection sectionData={props.introSectionData} />
      <AboutSection id='about' sectionData={props.aboutSectionData} />
      <ProjectsSection
        id='projects'
        projects={props.projects}
        sectionData={props.projectsSectionData}
      />
    </>
  );
};

export default Home;
