import { H3, P } from '../Text';
import ProjectTools from './ProjectTools';

const ProjectCard: React.FC = () => {
    return (
        <div className='bg-snowowl text-nightowl rounded-md p-12 max-w-2xl mb-36'>
            <div>
                <H3>Project Title</H3>
                <ProjectTools tools={['react', 'graphql']} />
                <P>
                    Eine tolle Beschreibung die das Projekt beschreibt und ich
                    habe keine Ahnung, was ich hier noch schreiben soll
                </P>
            </div>
            <div></div>
        </div>
    );
};

export default ProjectCard;
