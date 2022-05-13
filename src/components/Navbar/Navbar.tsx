import { motion } from 'framer-motion';
import { RefObject } from 'react';
import { OwlIcon } from '../icons/Owl/OwlIcon';
import { mainPadding } from '../Layout';
import NavbarLink from './NabarLink';

interface NavbarProps {
    navbarRef: RefObject<HTMLDivElement>;
    isVisible: boolean;
}

export default function Navbar({
    navbarRef,
    isVisible,
}: NavbarProps): JSX.Element {
    return (
        <motion.nav
            ref={navbarRef}
            animate={{
                y: isVisible ? 64 : 0,
            }}
            transition={{ type: 'tween', duration: 0.5 }}
            className={`
            bg-nightowl/90
            fixed 
            flex 
            backdrop-blur-md backdrop-brightness-90
            font-bold 
            -top-16
            z-10 
            py-5 
            w-full 
            justify-between
            items-center
            ${mainPadding}
        `}>
            <a href='#'>
                <OwlIcon />
            </a>
            <div className='flex'>
                <NavbarLink href='#about'>about me</NavbarLink>
                <NavbarLink isLast href='#projects'>
                    projects
                </NavbarLink>
            </div>
        </motion.nav>
    );
}
