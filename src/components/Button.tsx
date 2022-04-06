export const Button: React.FC = ({ children }) => (
    <button
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
