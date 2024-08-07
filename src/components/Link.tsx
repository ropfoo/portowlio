import Link from 'next/link';
import * as React from 'react';

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
