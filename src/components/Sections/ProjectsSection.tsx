import { MainSection, SectionProps } from '../Layout';
import ProjectCard from '../ProjectCard/ProjectCard';
import { H1 } from '../Text';

const ProjectsSection: React.FC<SectionProps> = ({ id, sectionRef }) => {
    return (
        <MainSection id={id} sectionRef={sectionRef}>
            <div className='flex flex-col justify-between'>
                <div>
                    <H1>projects:</H1>
                </div>

                <ProjectCard />
                <ProjectCard />
            </div>
        </MainSection>
    );
};

export default ProjectsSection;
