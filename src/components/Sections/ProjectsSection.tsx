import { ProjectType } from '../../types';
import { MainSection, SectionProps } from '../Layout';
import ProjectCard from '../ProjectCard/ProjectCard';
import { H1 } from '../Text';

interface ProjectSectionProps extends SectionProps {
    projects: ProjectType[];
}

const ProjectsSection: React.FC<ProjectSectionProps> = ({
    id,
    sectionRef,
    projects,
    sectionData,
}) => {
    return (
        <MainSection id={id} sectionRef={sectionRef}>
            <div className='flex flex-col'>
                <H1>{sectionData?.title}</H1>

                <article>{sectionData?.body}</article>

                <div className='mt-24'>
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </MainSection>
    );
};

export default ProjectsSection;
