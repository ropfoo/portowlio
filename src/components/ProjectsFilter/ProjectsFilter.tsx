import * as React from 'react';
import { ToolType } from '../../types';
import ProjectFilterOption from './Options/ProjectFilterOption';
import ProjectFilterOptionsWrapper from './Options/ProjectFilterOptionsWrapper';
import SelectedFilter from './Options/SelectedFilterOption';

interface ProjectsFilterProps {
    activeFilter: ToolType | null;
    handleChange: (filter: ToolType | null) => void;
}

export default function ProjectsFilter({
    activeFilter,
    handleChange,
}: ProjectsFilterProps): JSX.Element {
    const [isOptionsVisible, setIsOptionsVisible] = React.useState(false);
    const filterableTools: ToolType[] = [
        'react',
        'firebase',
        'flutter',
        'graphql',
    ];
    return (
        <div className='mb-10'>
            <div className=' flex relative md:relative'>
                <SelectedFilter
                    activeFilter={activeFilter}
                    isOptionsVisible={isOptionsVisible}
                    toggleOptions={() => setIsOptionsVisible(v => !v)}
                />
                <ProjectFilterOptionsWrapper
                    isOptionsVisible={isOptionsVisible}>
                    <>
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
                    </>
                </ProjectFilterOptionsWrapper>
            </div>
        </div>
    );
}
