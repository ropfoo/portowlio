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
}) => {
    return (
        <MainSection id={id} sectionRef={sectionRef}>
            <div className='flex flex-col justify-between'>
                <H1>projects:</H1>

                <div>
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </MainSection>
    );
};

export default ProjectsSection;
