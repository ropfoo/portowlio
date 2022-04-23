interface ButtonProps {
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
    <button
        onClick={() => onClick && onClick()}
        className='
        bg-snowowl hover:bg-jeans
        text-nightowl 
        font-bold 
        rounded-md 
        py-2 
        px-5 
        items-center
        transition-all
        duration-300
    '>
        {children}
    </button>
);
