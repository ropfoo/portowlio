import { ToolType } from '../../types';
import { Button } from '../Button';
import ProjectTool from '../ProjectCard/ProjectTool';

interface ProjectsFilterProps {
    activeFilter: ToolType | null;
    handleChange: (filter: ToolType | null) => void;
}

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({
    activeFilter,
    handleChange,
}) => {
    const filterableTools: ToolType[] = [
        'react',
        'firebase',
        'flutter',
        'graphql',
    ];
    return (
        <div className='flex flex-wrap items-center mb-10'>
            <Button onClick={() => handleChange(null)}>all</Button>
            {filterableTools.map(tool => (
                <div
                    key={tool}
                    className={`
                    flex 
                    ml-3 
                    border-[1px] 
                    px-3
                    py-1 
                    rounded-full
                    items-center
                    transition-all
                    duration-300
                    cursor-pointer
                    hover:border-jeans
                    ${tool === activeFilter && 'bg-jeans border-jeans'}
                    `}
                    onClick={() => handleChange(tool)}>
                    <div className='mr-2'>
                        <ProjectTool
                            color={
                                tool === activeFilter ? '#EEF3F7' : '#EEF3F7'
                            }
                            tool={tool}
                            showNameOnHover={false}
                        />
                    </div>
                    {tool}
                </div>
            ))}
        </div>
    );
};

export default ProjectsFilter;
