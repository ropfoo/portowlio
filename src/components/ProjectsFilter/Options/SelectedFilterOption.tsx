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
            flex
            w-36
            items-center
            justify-between
            bg-stoneowl
            px-3
            py-4
            transition-all
            duration-200
            md:hidden
            ${isOptionsVisible ? 'rounded-l-lg' : 'rounded-lg'}
        `}
    >
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
                
                transition-transform
                ${
                  isOptionsVisible
                    ? '-rotate-90 scale-100'
                    : 'rotate-0 scale-[65%]'
                }
            `}
      >
        <ArrowIcon color={isOptionsVisible ? '#0085FF' : '#EEF3F7'} />
      </div>
    </button>
  );
}
