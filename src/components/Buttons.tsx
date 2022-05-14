interface ButtonProps {
  onClick?: () => void;
  title: string;
}

export function ButtonCTA({ title, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={() => onClick && onClick()}
      className='
      items-center
      rounded-md 
      bg-snowowl 
      py-2 px-5
      font-bold
      text-nightowl
      shadow-lg 
      shadow-snowowl/40 
      transition-all 
      duration-300 
      hover:bg-jeans
      hover:shadow-xl
      hover:shadow-jeans/50
        '
    >
      {title}
    </button>
  );
}
