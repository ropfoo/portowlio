import { ToolType } from '../../../types';
import { ArrowIcon } from '../../icons/Arrow/ArrowIcon';
import ProjectTool from '../../ProjectCard/ProjectTool';

interface SelectedFilterProps {
    toggleOptions: () => void;
    isOptionsVisible: boolean;
    activeFilter: ToolType | null;
}
export default function SelectedFilter({
    isOptionsVisible,
    activeFilter,
    toggleOptions,
}: SelectedFilterProps): JSX.Element {
    return (
        <button
            onClick={toggleOptions}
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
                transition-transform
                ${isOptionsVisible ? 'scale-100' : 'scale-[65%]'}
            `}>
                <ArrowIcon color={isOptionsVisible ? '#0085FF' : '#EEF3F7'} />
            </div>
        </button>
    );
}
