export const P: React.FC = ({ children }) => (
  <p
    className='
        text-sm
        font-bold xl:text-base  
    '
  >
    {children}
  </p>
);

export const H1Large: React.FC = ({ children }) => (
  <h1
    className='
    relative
    h-10
    text-[65px]
    font-bold
    transition-all
    md:text-[130px] md:leading-[6.5rem]
    xl:h-32 
    xl:text-[200px]
    xl:leading-[10rem]
    '
  >
    {children}
  </h1>
);

export const H1: React.FC = ({ children }) => (
  <h1
    className='
        mt-16 pb-5 text-[45px]
        font-bold transition-all md:pb-16
        md:text-[70px]
        xl:pb-20 
        xl:text-[100px]
    '
  >
    {children}
  </h1>
);

export const H3: React.FC = ({ children }) => (
  <h1
    className='
        mb-3 text-3xl
        font-bold 
        transition-all
        md:text-4xl
    '
  >
    {children}
  </h1>
);
