import { useMemo, useState } from 'react';
import { ReactIcon } from '../icons/ReactIcon/ReactIcon';
import { ToolType } from './ToolType';

interface ProjectToolProps {
    tool: ToolType;
}

const ProjectTool: React.FC<ProjectToolProps> = ({ tool }) => {
    const [showName, setShowName] = useState(false);
    const ToolIcon = useMemo(() => {
        if (tool === 'react') return <ReactIcon />;
        return <ReactIcon />;
    }, [tool]);

    return (
        <div
            onMouseEnter={() => setShowName(true)}
            onMouseLeave={() => setShowName(false)}>
            {ToolIcon}
            {showName && (
                <small className='absolute -translate-x-1/4 translate-y-2'>
                    {tool}
                </small>
            )}
        </div>
    );
};

export default ProjectTool;
