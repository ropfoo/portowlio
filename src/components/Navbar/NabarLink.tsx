import * as React from 'react';

interface NavbarLinkProps {
    children: string;
    href: string;
    isLast?: boolean;
}

function NavbarLink({ children, href, isLast }: NavbarLinkProps): JSX.Element {
    return (
        <a
            className={`
            ${!isLast && 'mr-10'} 
            duration-200 
            transition-all
            hover:text-jeans 
            `}
            href={href}>
            {children}
        </a>
    );
}

export default NavbarLink;
