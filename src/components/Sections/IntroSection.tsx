import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Button } from '../Button';
import { H1Large } from '../Text';
import { mainPadding } from '../Layout';
import { GithubIcon } from '../icons/Github/GithubIcon';
import { LinkedinIcon } from '../icons/Linkedin/LinkdedInIcon';
import { IntroSectionData } from '../../types';
import { useIntroAnimation } from '../Intro/useIntroAnimation';

interface IntroSectionProps {
    sectionData: IntroSectionData;
}

const IntroSection: React.FC<IntroSectionProps> = ({ sectionData }) => {
    const { meImageRef, sectionRef, socialsRef, textRef } = useIntroAnimation();

    return (
        <section
            ref={sectionRef}
            className={`flex h-screen justify-center flex-col ${mainPadding}`}>
            <div
                className='
                flex 
                flex-row 
                justify-between
            '>
                <div ref={textRef} className='flex flex-col justify-between'>
                    <div>
                        <div className='mb-24 md:mb-36 xl:mb-52'>
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
                            <Button>about me</Button>
                        </a>
                        <a href='#projects'>
                            <Button>projects</Button>
                        </a>
                    </section>
                </div>
                <div
                    className='
                    flex
                    flex-col-reverse md:flex-row
                    items-end 
                    ml-2
                '>
                    <div
                        ref={socialsRef}
                        className='
                        bg-snowowl 
                        h-12 md:h-72 
                        w-[150px] md:w-28 
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
                    </div>
                    <div
                        ref={meImageRef}
                        className='
                        w-[150px] xl:w-[250px]
                        h-[500px] xl:h-[611px]
                        ml-3 md:ml-5 lg:ml-14
                        relative 
                    '>
                        <Image
                            className='object-cover rounded-md select-none pointer-events-none'
                            src='/images/rp_team.jpg'
                            layout='fill'
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
