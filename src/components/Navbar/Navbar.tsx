import { motion } from 'framer-motion';
import Link from 'next/link';
import { useNavObserver } from '../../hooks/useNavObserver';
import { OwlIcon } from '../icons/Owl/OwlIcon';
import { mainPadding } from '../Section';
import NavbarLink from './NabarLink';

export default function Navbar(): JSX.Element {
    const { showNavigation } = useNavObserver({ options: { threshold: 0.8 } });

    return (
        <motion.nav
            animate={{
                y: showNavigation ? 64 : 0,
            }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
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
            <Link href='/#' passHref scroll>
                <div>
                    <OwlIcon />
                </div>
            </Link>
            <div className='flex'>
                <NavbarLink href='/#about'>about me</NavbarLink>
                <NavbarLink isLast href='/#projects'>
                    projects
                </NavbarLink>
            </div>
        </motion.nav>
    );
}
