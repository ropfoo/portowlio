import AboutSection from '../components/Sections/AboutSection';
import IntroSection from '../components/Sections/IntroSection';
import ProjectsSection from '../components/Sections/ProjectsSection';
import { getProjectsData } from '../helper/getProjectsData';
import { getIntroSectionData, getSectionData } from '../helper/getSectionData';

export default async function Main() {
  const projects = await getProjectsData();
  const introSectionData = await getIntroSectionData();
  const aboutSectionData = await getSectionData('about');
  const projectsSectionData = await getSectionData('projects');
  return (
    <>
      <IntroSection sectionData={introSectionData} />
      <AboutSection id='about' sectionData={aboutSectionData} />
      <ProjectsSection
        id='projects'
        projects={projects}
        sectionData={projectsSectionData}
      />
    </>
  );
}
