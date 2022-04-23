import { useMemo, useState } from 'react';
import { ProjectType, ToolType } from '../../types';
import { MainSection, SectionProps } from '../Layout';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectsFilter from '../ProjectsFilter/ProjectsFilter';
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
    const [filter, setFilter] = useState<ToolType | null>(null);

    const filteredProjects = useMemo(
        () =>
            projects.filter(project =>
                filter ? project.toolIds.includes(filter) : project
            ),
        [filter, projects]
    );

    return (
        <MainSection id={id} sectionRef={sectionRef}>
            <div className='flex flex-col'>
                <H1>{sectionData?.title}</H1>

                <article>{sectionData?.body}</article>

                <div className='mt-24'>
                    <ProjectsFilter
                        activeFilter={filter}
                        handleChange={filterType => setFilter(filterType)}
                    />
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </MainSection>
    );
};

export default ProjectsSection;
