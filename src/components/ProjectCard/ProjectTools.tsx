import ProjectTool from './ProjectTool';
import { ToolType } from './ToolType';

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
            justify-evenly
        '>
            {tools.map((tool, index) => (
                <div
                    className={`${index < tools.length - 1 && 'pr-3'}`}
                    key={tool}>
                    <ProjectTool tool={tool} />
                </div>
            ))}
        </div>
    );
};

export default ProjectTools;
