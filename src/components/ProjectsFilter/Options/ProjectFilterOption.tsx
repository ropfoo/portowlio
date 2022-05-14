import { ToolType } from '../../../types';
import ProjectTool from '../../ProjectCard/ProjectTool';

interface ProjectFilterOptionProps {
  tool: ToolType | null;
  isActive: boolean;
  onClick: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

const ProjectFilterOption: React.FC<ProjectFilterOptionProps> = ({
  tool,
  isActive,
  onClick,
  isFirst,
  isLast,
}) => {
  return (
    <button
      key={tool}
      className={`
            flex 
            w-full 
            cursor-pointer 
            items-center px-5
            py-4 transition-all 
            duration-300
            hover:border-jeans md:ml-3
            md:w-fit
            md:rounded-full
            md:border-[1px]
            md:px-3
            md:py-1
            ${
              isActive
                ? 'border-jeans bg-jeans'
                : 'border-stoneowl md:bg-stoneowl'
            }
            ${isFirst && 'rounded-t-lg'}
            ${isLast && 'rounded-b-lg'}
            `}
      onClick={() => onClick()}
    >
      <div className='mr-2'>
        {tool ? (
          <ProjectTool color={'#EEF3F7'} tool={tool} showNameOnHover={false} />
        ) : (
          'all'
        )}
      </div>
      {tool}
    </button>
  );
};

export default ProjectFilterOption;
