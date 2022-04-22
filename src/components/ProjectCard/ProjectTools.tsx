import { ToolType } from '../../types';
import ProjectTool from './ProjectTool';

interface ProjectToolsProps {
    tools: ToolType[];
}

const ProjectTools: React.FC<ProjectToolsProps> = ({ tools }) => {
    return (
        <div
            className='
            py-2 
            px-3 
            bg-mouse 
            rounded-full
            w-fit
            flex
            mb-10
            mt-5
            justify-evenly
        '>
            {tools.map((tool, index) => (
                <div
                    className={`${index < tools.length - 1 && 'pr-4'}`}
                    key={tool}>
                    <ProjectTool tool={tool} />
                </div>
            ))}
        </div>
    );
};

export default ProjectTools;
