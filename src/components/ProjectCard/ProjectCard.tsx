import { ProjectType } from '../../types';
import { GithubIcon } from '../icons/Github/GithubIcon';
import { H3 } from '../Text';
import ProjectCarousel from './ProjectCarousel';
import ProjectTools from './ProjectTools';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({
  project,
}: ProjectCardProps): JSX.Element {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-75px' }}
      transition={{ type: 'tween', duration: 0.5 }}
      className='
            mb-32 
            flex flex-col
            md:mb-0 md:flex-row
        '
    >
      <div
        className='
                mb-2 
                w-full 
                rounded-md 
                bg-snowowl p-6
                text-nightowl md:mb-36
                md:mr-6 md:w-7/12
                md:p-12
            '
      >
        <div>
          <H3>{project.title}</H3>
          <ProjectTools tools={project.toolIds} />
          <article>
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </article>
          <div className='mt-10'>
            {project.githubLink && (
              <div className='w-fit duration-300 hover:scale-125'>
                <a href={project.githubLink} target='_blank' rel='noreferrer'>
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
                w-full rounded-md
                bg-snowowl 
                md:w-5/12 
            '
      >
        <ProjectCarousel imageSources={project.carousel} />
      </div>
    </motion.div>
  );
}
