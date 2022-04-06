import Image from 'next/image';
import { Button } from '../Button';
import { MainSection } from '../Layout';
import ProjectCard from '../ProjectCard/ProjectCard';
import { H1, P } from '../Text';

const ProjectsSection: React.FC = () => {
    return (
        <MainSection>
            <div className='flex flex-col justify-between'>
                <div>
                    <div className='mb-24 md:mb-36 xl:mb-52'>
                        <H1>projects:</H1>
                    </div>
                </div>

                <ProjectCard />
                <ProjectCard />
            </div>
        </MainSection>
    );
};

export default ProjectsSection;
