import { RefObject } from 'react';
import { OwlIcon } from '../icons/Owl/OwlIcon';
import { mainPadding } from '../Layout';

interface NavbarProps {
    navbarRef: RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ navbarRef }) => {
    return (
        <nav
            ref={navbarRef}
            className={`
            bg-nightowl
            fixed 
            flex 
            font-bold 
            -top-16 
            z-10 
            py-5 
            w-full 
            opacity-95 
            justify-between
            items-center
            ${mainPadding}
        `}>
            <a href='#'>
                <OwlIcon />
            </a>
            <div className='flex'>
                <a className='mr-10' href='#about'>
                    about me
                </a>
                <a href='#projects'>projects</a>
            </div>
        </nav>
    );
};

export default Navbar;
