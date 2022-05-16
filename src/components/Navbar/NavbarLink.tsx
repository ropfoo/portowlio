import Link from 'next/link';
import * as React from 'react';

interface NavbarLinkProps {
  children: string;
  href: string;
  isLast?: boolean;
}

function NavbarLink({ children, href, isLast }: NavbarLinkProps): JSX.Element {
  return (
    <Link href={href} passHref scroll>
      <a
        className={`
        relative
        transition-all
        duration-200
        after:absolute
        after:block
        after:h-[4px]
        after:w-[100%]
        after:origin-left
        after:scale-x-[50%]
        after:bg-stoneowl
        after:transition-all
        after:duration-300
        hover:scale-x-100
        hover:text-jeans
        after:hover:scale-x-100
        after:hover:bg-jeans
        ${!isLast && 'mr-10'} 
            `}
      >
        {children}
      </a>
    </Link>
  );
}

export default NavbarLink;
