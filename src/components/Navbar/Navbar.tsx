import { motion } from 'framer-motion';
import Link from 'next/link';
import { useNavObserver } from '../../hooks/useNavObserver';
import { OwlIcon } from '../icons/Owl/OwlIcon';
import { mainPadding } from '../Layout';
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
      fixed
      -top-16 
      z-10 
      flex w-full
      items-center 
      justify-between
      bg-nightowl/90 
      py-5 
      font-bold 
      backdrop-blur-md
      backdrop-brightness-90
      ${mainPadding}
        `}
    >
      <Link href='/#' passHref scroll>
        <a>
          <OwlIcon />
        </a>
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
