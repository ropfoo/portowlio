import ReactMarkdown from 'react-markdown';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { ButtonCTA } from '../Buttons';
import { H1Large } from '../Text';
import { SectionProps } from '../Section';
import { GithubIcon } from '../icons/Github/GithubIcon';
import { LinkedinIcon } from '../icons/Linkedin/LinkdedInIcon';
import { IntroSectionData } from '../../types';
import MeImage from './Intro/MeImage';

interface IntroSectionProps extends SectionProps {
  sectionData: IntroSectionData;
}

export default function IntroSection({ sectionData }: IntroSectionProps) {
  const { scrollY } = useViewportScroll();
  const textContentY = useTransform(scrollY, [0, 500], [0, 50]);
  const linksY = useTransform(scrollY, [0, 2000], [0, 50]);

  return (
    <section className='flex h-screen flex-col justify-center'>
      <div className='flex flex-row justify-between'>
        <motion.div
          style={{
            y: textContentY,
          }}
          className='flex flex-col justify-between'
        >
          <div>
            <div className='mb-16 md:mb-36 xl:mb-52'>
              <H1Large>{sectionData.title}</H1Large>
            </div>
            <article className='mb-5 w-10/12 md:w-8/12'>
              <ReactMarkdown>{sectionData.body}</ReactMarkdown>
            </article>
          </div>

          <section className='flex flex-col sm:flex-row'>
            <a className='mb-2 mr-0 sm:mb-0 sm:mr-5' href='#about'>
              <ButtonCTA title='about me' />
            </a>
            <a href='#projects'>
              <ButtonCTA title='projects' />
            </a>
          </section>
        </motion.div>
        <div className='ml-2 flex flex-col-reverse items-end md:flex-row'>
          <motion.div
            style={{
              y: linksY,
            }}
            className='
            mt-5
            flex
            h-12
            w-[130px]
            flex-row 
            items-center justify-around 
            rounded-md bg-snowowl 
            md:mt-0
            md:h-72 md:w-28
            md:flex-col
            md:justify-end
            md:pb-7 md:pr-0'
          >
            <a
              className='bg-transparent transition-transform duration-300 hover:scale-125 md:mb-5 md:pr-0'
              href={sectionData.githubLink}
              target='_blank'
              rel='noreferrer'
            >
              <GithubIcon />
            </a>
            <a
              className='bg-transparent transition-transform duration-300 hover:scale-125'
              href={sectionData.linkedInLink}
              target='_blank'
              rel='noreferrer'
            >
              <LinkedinIcon />
            </a>
          </motion.div>
          <MeImage />
        </div>
      </div>
    </section>
  );
}
