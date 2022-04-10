export const P: React.FC = ({ children }) => (
    <p
        className='
        font-bold
        text-sm xl:text-base  
    '>
        {children}
    </p>
);

export const H1Large: React.FC = ({ children }) => (
    <h1
        className='
        text-[65px] md:text-[130px] xl:text-[200px]
        font-bold 
        h-10 xl:h-30
        md:leading-[6.5rem] xl:leading-[10rem]
        transition-all
    '>
        {children}
    </h1>
);

export const H1: React.FC = ({ children }) => (
    <h1
        className='
        text-[45px] md:text-[70px] xl:text-[100px]
        pb-5 md:pb-24
        mt-16
        font-bold 
        transition-all
    '>
        {children}
    </h1>
);

export const H3: React.FC = ({ children }) => (
    <h1
        className='
        text-4xl
        font-bold 
        transition-all
        mb-3
    '>
        {children}
    </h1>
);
