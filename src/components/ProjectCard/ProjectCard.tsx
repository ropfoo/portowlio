import { ProjectType } from '../../types';
import { GithubIcon } from '../icons/Github/GithubIcon';
import { H3, P } from '../Text';
import ProjectCarousel from './ProjectCarousel';
import ProjectTools from './ProjectTools';
import ReactMarkdown from 'react-markdown';

interface ProjectCardProps {
    project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div
            className='
            flex 
            flex-col md:flex-row
            mb-32 md:mb-0
        '>
            <div
                className='
                bg-snowowl 
                text-nightowl 
                rounded-md 
                p-6 md:p-12
                w-full md:w-7/12
                mb-2 md:mb-36
                md:mr-6
            '>
                <div>
                    <H3>{project.title}</H3>
                    <ProjectTools tools={project.toolIds} />
                    <article>
                        <ReactMarkdown>{project.description}</ReactMarkdown>
                    </article>
                    <div className='mt-10'>
                        {project.githubLink && (
                            <div className='w-fit hover:scale-125 duration-300'>
                                <a href={project.githubLink} target='_blank'>
                                    <GithubIcon size={32} />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div
                className='
                h-fit                 
                w-full md:w-5/12
                bg-snowowl 
                rounded-md 
            '>
                <ProjectCarousel imageSources={project.carousel} />
            </div>
        </div>
    );
};

export default ProjectCard;
