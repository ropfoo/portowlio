import { useMemo, useState } from 'react';
import { ToolType } from '../../types';
import { GraphQLIcon } from '../icons/Tools/GQLIcon/GraphQLIcon';
import { NodeJSIcon } from '../icons/Tools/NodeJsIcon/NodeJSIcon';
import { ReactIcon } from '../icons/Tools/ReactIcon/ReactIcon';

interface ProjectToolProps {
    tool: ToolType;
}

const ProjectTool: React.FC<ProjectToolProps> = ({ tool }) => {
    const [showName, setShowName] = useState(false);
    const ToolIcon = useMemo(() => {
        if (tool === 'react') return <ReactIcon />;
        if (tool === 'graphql') return <GraphQLIcon />;
        if (tool === 'nodejs') return <NodeJSIcon />;
        return <></>;
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
