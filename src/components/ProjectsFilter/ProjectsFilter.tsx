import { useState } from 'react';
import { ToolType } from '../../types';
import { ArrowIcon } from '../icons/Arrow/ArrowIcon';
import ProjectTool from '../ProjectCard/ProjectTool';
import ProjectFilterOption from './ProjectFilterOption';

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
                    justify-between
                    items-center
                    duration-200
                    ${isOptionsVisible ? 'rounded-l-lg' : 'rounded-lg'}
                `}>
                    <div className='flex'>
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
                        -rotate-90
                        ${isOptionsVisible ? 'scale-100' : 'scale-[65%]'}
                    `}>
                        <ArrowIcon
                            color={isOptionsVisible ? '#0085FF' : '#EEF3F7'}
                        />
                    </div>
                </div>
                <div
                    className={`
                    flex
                    flex-col md:flex-row
                    items-start md:items-center 
                    left-36 md:left-0
                    absolute md:relative
                    -translate-y-1/3 md:translate-y-0
                    rounded-lg
                    bg-stoneowl md:bg-transparent
                    transition-all
                    origin-left 
                    ${
                        isOptionsVisible
                            ? 'scale-100 opacity-100 drop-shadow-lg'
                            : 'scale-0 md:scale-100  opacity-0 md:opacity-100'
                    }                    
                `}>
                    <ProjectFilterOption
                        tool={null}
                        isActive={activeFilter === null}
                        onClick={() => handleChange(null)}
                        isFirst
                    />
                    {filterableTools.map((tool, index) => (
                        <ProjectFilterOption
                            key={tool}
                            tool={tool}
                            isActive={activeFilter === tool}
                            onClick={() => handleChange(tool)}
                            isLast={index === filterableTools.length - 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsFilter;
