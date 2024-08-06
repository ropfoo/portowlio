'use client';

import { useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ProjectType, ToolType } from '../../types';
import { Article } from '../Article';
import { MainSection, SectionProps } from '../Section';
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
      projects.filter((project) => {
        if (project.public)
          return filter ? project.toolIds.includes(filter) : true;
      }),
    [filter, projects]
  );

  return (
    <MainSection id={id} sectionRef={sectionRef}>
      <div className='flex flex-col'>
        <H1>{sectionData?.title}</H1>

        <Article>
          {sectionData?.body && (
            <ReactMarkdown>{sectionData.body}</ReactMarkdown>
          )}
        </Article>

        <div className='mt-24'>
          <ProjectsFilter
            activeFilter={filter}
            handleChange={(filterType) => setFilter(filterType)}
          />
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </MainSection>
  );
};

export default ProjectsSection;
