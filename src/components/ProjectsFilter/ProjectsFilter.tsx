import { useState } from 'react';
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
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);
    const filterableTools: ToolType[] = [
        'react',
        'firebase',
        'flutter',
        'graphql',
    ];
    return (
        <div className='mb-10'>
            <div className=' flex relative md:relative'>
                <div
                    onClick={() => setIsOptionsVisible(v => !v)}
                    className={`
                    px-3
                    py-4
                    md:hidden
                    w-36
                    flex
                    bg-stoneowl
                    transition-all
                    duration-200
                    ${isOptionsVisible ? 'rounded-l-lg' : 'rounded-lg'}
                `}>
                    {activeFilter && (
                        <div className='mr-2'>
                            <ProjectTool
                                color={'#EEF3F7'}
                                tool={activeFilter}
                                showNameOnHover={false}
                            />
                        </div>
                    )}
                    {activeFilter ?? 'all'}
                </div>
                <div
                    className={`
                    flex
                    flex-col md:flex-row
                    top-0
                    items-start md:items-center 
                    left-36 md:left-0
                    absolute md:relative
                    -translate-y-1/3
                    rounded-lg
                    drop-shadow-lg
                    bg-stoneowl md:bg-transparent
                    transition-all
                    origin-left 
                    ${
                        isOptionsVisible
                            ? 'scale-100 opacity-1'
                            : 'scale-0 opacity-0'
                    }
                `}>
                    <div onClick={() => handleChange(null)}>all</div>
                    {filterableTools.map(tool => (
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
                                tool === activeFilter
                                    ? 'bg-jeans border-jeans'
                                    : 'md:bg-stoneowl border-stoneowl'
                            }
                            `}
                            onClick={() => handleChange(tool)}>
                            <div className='mr-2'>
                                <ProjectTool
                                    color={'#EEF3F7'}
                                    tool={tool}
                                    showNameOnHover={false}
                                />
                            </div>
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsFilter;
