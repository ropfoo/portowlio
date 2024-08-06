import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useNavObserver } from '../../hooks/useNavObserver';
import { OwlIcon } from '../icons/Owl/OwlIcon';
import { mainPadding } from '../Layout';
import NavbarLink from './NavbarLink';

export default function Navbar(): JSX.Element {
  const { showNavigation } = useNavObserver({ options: { threshold: 0.8 } });

  return (
    <motion.nav
      animate={{
        y: showNavigation ? 64 : 0,
      }}
      transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
      className={clsx(
        'fixed -top-16 z-10 flex w-full items-center justify-between py-5 font-bold',
        'bg-nightowl/90 backdrop-blur-md backdrop-brightness-200',
        mainPadding
      )}
    >
      <Link href='/#' scroll>
        <OwlIcon />
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
