import { useRouter } from 'next/router';
import { ArrowIcon } from './icons/Arrow/ArrowIcon';

export function BackLink() {
  const { back } = useRouter();
  return (
    <button
      onClick={back}
      className='mb-10 flex  fill-snowowl text-snowowl hover:fill-jeanslight hover:text-jeanslight'
    >
      <div className='mr-2 rotate-90 '>
        <ArrowIcon />
      </div>
      <p className='font-bold'>back</p>
    </button>
  );
}
