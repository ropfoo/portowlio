import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MeImage(): JSX.Element {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], [0, -100]);
  return (
    <motion.div
      style={{ y }}
      className='relative ml-3 h-[400px] w-[130px] md:ml-5 md:h-[500px] md:w-[150px] xl:h-[511px] xl:w-[200px]'
    >
      <Image
        className='pointer-events-none select-none rounded-md object-cover'
        src='/images/rp_team.jpg'
        alt='an image of me'
        sizes='320 640 750'
        layout='fill'
        priority
      />
    </motion.div>
  );
}
