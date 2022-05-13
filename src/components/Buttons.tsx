interface ButtonProps {
    onClick?: () => void;
    title: string;
}

export function ButtonCTA({ title, onClick }: ButtonProps): JSX.Element {
    return (
        <button
            onClick={() => onClick && onClick()}
            className='
            bg-snowowl hover:bg-jeans
            shadow-lg shadow-snowowl/40 hover:shadow-xl hover:shadow-jeans/50
            text-nightowl
            font-bold 
            rounded-md 
            py-2 
            px-5 
            items-center
            transition-all
            duration-300
        '>
            {title}
        </button>
    );
}