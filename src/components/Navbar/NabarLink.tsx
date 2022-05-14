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
            <div
                className={`
                ${!isLast && 'mr-10'} 
                duration-200 
                transition-all
                hover:text-jeans 
            `}>
                {children}
            </div>
        </Link>
    );
}

export default NavbarLink;
