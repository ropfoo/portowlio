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
        after:h-[2px]
        after:w-[90%]
        after:bg-jeans
        hover:text-jeans
        ${!isLast && 'mr-10'} 
            `}
      >
        {children}
        {/* <div className='' /> */}
      </a>
    </Link>
  );
}

export default NavbarLink;
