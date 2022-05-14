import { ToolType } from '../../types';
import ProjectTool from './ProjectTool';

interface ProjectToolsProps {
  tools: ToolType[];
}

const ProjectTools: React.FC<ProjectToolsProps> = ({ tools }) => {
  return (
    <div
      className='
            mb-9 
            mt-5 
            flex 
            w-fit
            items-center
            justify-evenly
            rounded-full
            bg-mouse
            py-2
            px-3
        '
    >
      {tools.map((tool, index) => (
        <div className={`${index < tools.length - 1 && 'pr-4'}`} key={tool}>
          <ProjectTool tool={tool} />
        </div>
      ))}
    </div>
  );
};

export default ProjectTools;
