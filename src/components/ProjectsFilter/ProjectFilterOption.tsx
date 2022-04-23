import { ToolType } from '../../types';
import ProjectTool from '../ProjectCard/ProjectTool';

interface ProjectFilterOptionProps {
    tool: ToolType | null;
    isActive: boolean;
    onClick: () => void;
}

const ProjectFilterOption: React.FC<ProjectFilterOptionProps> = ({
    tool,
    isActive,
    onClick,
}) => {
    return (
        <div
            key={tool}
            className={`
            flex 
            md:ml-3 
            md:border-[1px] 
            px-5 md:px-3
            py-4 md:py-1 
            md:rounded-full
            w-full md:w-fit
            items-center
            transition-all
            duration-300
            cursor-pointer
            hover:border-jeans
            ${
                isActive
                    ? 'bg-jeans border-jeans'
                    : 'md:bg-stoneowl border-stoneowl'
            }
            `}
            onClick={() => onClick()}>
            <div className='mr-2'>
                {tool ? (
                    <ProjectTool
                        color={'#EEF3F7'}
                        tool={tool}
                        showNameOnHover={false}
                    />
                ) : (
                    'all'
                )}
            </div>
            {tool}
        </div>
    );
};

export default ProjectFilterOption;
