import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { ButtonCTA } from '../Buttons';
import { H1Large } from '../Text';
import { mainPadding, SectionProps } from '../Section';
import { GithubIcon } from '../icons/Github/GithubIcon';
import { LinkedinIcon } from '../icons/Linkedin/LinkdedInIcon';
import { IntroSectionData } from '../../types';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

interface IntroSectionProps extends SectionProps {
    sectionData: IntroSectionData;
}

const IntroSection: React.FC<IntroSectionProps> = ({ sectionData }) => {
    const { scrollY } = useViewportScroll();
    const textContentY = useTransform(scrollY, [0, 500], [0, 50]);
    const linksY = useTransform(scrollY, [0, 2000], [0, 50]);
    const meImageOpacity = useTransform(scrollY, [0, 1000], [1, 0]);
    const meImageY = useTransform(scrollY, [0, 2000], [0, -100]);

    return (
        <section
            className={`flex h-screen justify-center flex-col ${mainPadding}`}>
            <div
                className='
                flex 
                flex-row 
                justify-between
            '>
                <motion.div
                    style={{ y: textContentY }}
                    className='flex flex-col justify-between'>
                    <div>
                        <div className='mb-16 md:mb-36 xl:mb-52'>
                            <H1Large>{sectionData.title}</H1Large>
                        </div>
                        <article className='w-full md:w-8/12'>
                            <ReactMarkdown>{sectionData.body}</ReactMarkdown>
                        </article>
                    </div>

                    <section className='flex flex-col sm:flex-row'>
                        <a
                            className='
                            mb-2 sm:mb-0
                            mr-0 sm:mr-5
                        '
                            href='#about'>
                            <ButtonCTA title='about me' />
                        </a>
                        <a href='#projects'>
                            <ButtonCTA title='projects' />
                        </a>
                    </section>
                </motion.div>
                <div
                    className='
                    flex
                    flex-col-reverse md:flex-row
                    items-end
                    ml-2
                '>
                    <motion.div
                        style={{ y: linksY }}
                        className='
                        bg-snowowl 
                        h-12 md:h-72 
                        w-[130px] md:w-28 
                        rounded-md
                        flex
                        flex-row md:flex-col
                        justify-around md:justify-end
                        items-center
                        md:pb-7
                         md:pr-0
                        mt-5 md:mt-0
                    '>
                        <a
                            className='
                            bg-transparent 
                            md:pr-0 
                            md:mb-5 
                            hover:scale-125 
                            transition-transform
                            duration-300
                            '
                            href={sectionData.githubLink}
                            target='_blank'
                            rel='noreferrer'>
                            <GithubIcon />
                        </a>
                        <a
                            className='bg-transparent hover:scale-125 transition-transform duration-300'
                            href={sectionData.linkedInLink}
                            target='_blank'
                            rel='noreferrer'>
                            <LinkedinIcon />
                        </a>
                    </motion.div>
                    <motion.div
                        style={{ y: meImageY, opacity: meImageOpacity }}
                        className='
                        w-[130px] md:w-[150px] xl:w-[250px]
                        h-[400px] md:h-[500px] xl:h-[611px]
                        ml-3 md:ml-5 lg:ml-14
                        relative 
                    '>
                        <Image
                            className='object-cover rounded-md select-none pointer-events-none'
                            src='/images/rp_team.jpg'
                            alt='an image of me'
                            sizes='320 640 750'
                            layout='fill'
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
