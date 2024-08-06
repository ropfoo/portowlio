import { NextURL } from 'next/dist/server/web/next-url';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ArrowIcon } from './icons/Arrow/ArrowIcon';

interface AProps {
  children: React.ReactNode;
  href: string;
}

export function A({ children, href }: AProps) {
  return (
    <Link
      href={href}
      className='cursor-pointer text-jeans hover:text-jeanslight'
    >
      {children}
    </Link>
  );
}

export function Back() {
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
