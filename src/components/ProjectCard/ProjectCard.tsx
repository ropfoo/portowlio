import { GithubIcon } from '../icons/Github/GithubIcon';
import { H3, P } from '../Text';
import ProjectCarousel from './ProjectCarousel';
import ProjectTools from './ProjectTools';

const ProjectCard: React.FC = () => {
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
                    <H3>Project Title</H3>
                    <ProjectTools tools={['react', 'graphql']} />
                    <P>
                        Eine tolle Beschreibung die das Projekt beschreibt und
                        ich habe keine Ahnung, was ich hier noch schreiben soll
                    </P>
                    <div className='mt-5'>
                        <a
                            className='
                            scale-50
                            transition-transform'
                            href='#'>
                            <GithubIcon />
                        </a>
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
                <ProjectCarousel />
            </div>
        </div>
    );
};

export default ProjectCard;
