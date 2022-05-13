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
                    ? 'scale-100 opacity-100 shadow-xl shadow-stoneowl/40'
                    : 'scale-0 md:scale-100 opacity-0 md:opacity-100'
            }                    
        `}>
            {children}
        </div>
    );
}
