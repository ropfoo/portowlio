interface ProjectFilterOptionWrapperProps {
  children: JSX.Element;
  isOptionsVisible: boolean;
}

export default function ProjectFilterOptionsWrapper({
  children,
  isOptionsVisible,
}: ProjectFilterOptionWrapperProps): JSX.Element {
  return (
    <div
      className={`
            absolute
            left-36 flex
            origin-left -translate-y-1/3 
            flex-col items-start
            rounded-lg bg-stoneowl
            transition-all md:relative
            md:left-0
            md:translate-y-0 md:flex-row
            md:items-center
            md:bg-transparent 
            ${
              isOptionsVisible
                ? 'scale-100 opacity-100 shadow-xl shadow-stoneowl/40'
                : 'scale-0 opacity-0 md:scale-100 md:opacity-100'
            }                    
        `}
    >
      {children}
    </div>
  );
}
