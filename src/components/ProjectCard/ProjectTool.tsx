import { useMemo, useState } from 'react';
import { ToolType } from '../../types';
import { FlutterIcon } from '../icons/Tools/FlutterIcon/FlutterIcon';
import { FirebaseIcon } from '../icons/Tools/FirebaseIcon/FirebaseIcon';
import { GraphQLIcon } from '../icons/Tools/GQLIcon/GraphQLIcon';
import { NodeJSIcon } from '../icons/Tools/NodeJsIcon/NodeJSIcon';
import { ReactIcon } from '../icons/Tools/ReactIcon/ReactIcon';
import { TailwindIcon } from '../icons/Tools/TailwindIcon/TailwindIcon';
import { NextJsIcon } from '../icons/Tools/NextJsIcon/NextJsIcon';
import { GatsbyIcon } from '../icons/Tools/GatsbyIcon/GatsbyIcon';
import { IonicIcon } from '../icons/Tools/IonicIcon/IonicIcon';

interface ProjectToolProps {
  tool: ToolType;
  showNameOnHover?: boolean;
  color?: string;
}

const ProjectTool: React.FC<ProjectToolProps> = ({
  tool,
  color,
  showNameOnHover = true,
}) => {
  const [showName, setShowName] = useState(false);
  const ToolIcon = useMemo(() => {
    if (tool === 'react') return <ReactIcon color={color} />;
    if (tool === 'graphql') return <GraphQLIcon color={color} />;
    if (tool === 'nodejs') return <NodeJSIcon color={color} />;
    if (tool === 'firebase') return <FirebaseIcon color={color} />;
    if (tool === 'tailwind') return <TailwindIcon color={color} />;
    if (tool === 'flutter') return <FlutterIcon color={color} />;
    if (tool === 'nextjs') return <NextJsIcon color={color} size={19} />;
    if (tool === 'gatsby') return <GatsbyIcon color={color} size={19} />;
    if (tool === 'ionic') return <IonicIcon color={color} size={19} />;
    return <></>;
  }, [tool, color]);

  return (
    <div
      onMouseEnter={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
    >
      <div className='flex h-6 items-center'>{ToolIcon}</div>
      {!!showNameOnHover && showName && (
        <small className='absolute -translate-x-1/4 translate-y-3'>
          {tool}
        </small>
      )}
    </div>
  );
};

export default ProjectTool;
