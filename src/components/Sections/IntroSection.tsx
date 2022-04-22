import { useEffect, useRef } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import gsap from 'gsap';
import { Button } from '../Button';
import { H1Large, P } from '../Text';
import { mainPadding } from '../Layout';
import { GithubIcon } from '../icons/Github/GithubIcon';
import { LinkedinIcon } from '../icons/Linkedin/LinkdedInIcon';
import { SectionType } from '../../types';

interface IntroSectionProps {
    data: SectionType;
}

const IntroSection: React.FC<IntroSectionProps> = ({ data }) => {
    const meImageRef = useRef<HTMLDivElement>(null);
    const socialsRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.to(meImageRef.current, {
            y: -300,
            x: -50,

            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'center center',
                end: 'bottom 50px',
                scrub: true,
                id: 'scrub',
            },
        });
        gsap.to(socialsRef.current, {
            // x: 200,
            y: -300,
            // opacity: 0,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'center center',
                end: 'bottom 50px',
                scrub: true,
                id: 'scrub',
            },
        });
        gsap.to(textRef.current, {
            y: -70,
            scrollTrigger: {
                trigger: textRef.current,
                start: 'center center',
                end: 'bottom 50px',
                scrub: true,
                id: 'scrub',
            },
        });
    }, []);

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
                            <H1Large>{data.title}</H1Large>
                        </div>
                        <article className='w-8/12'>
                            <ReactMarkdown>{data.body}</ReactMarkdown>
                        </article>
                    </div>

                    <section className='flex flex-col sm:flex-row'>
                        <div
                            className='
                            mb-2 sm:mb-0
                            mr-0 sm:mr-5
                        '>
                            <Button>about me</Button>
                        </div>
                        <div>
                            <Button>projects</Button>
                        </div>
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
                        justify-end
                        items-center
                        md:pb-7
                        pr-5 md:pr-0
                        mt-5 md:mt-0
                '>
                        <a
                            className='
                            bg-transparent 
                            pr-5 md:pr-0 
                            md:mb-5 
                            hover:scale-125 
                            transition-transform
                            duration-300
                            '
                            href='#'>
                            <GithubIcon />
                        </a>
                        <a
                            className='bg-transparent hover:scale-125 transition-transform duration-300'
                            href='#'>
                            <LinkedinIcon />
                        </a>
                    </div>
                    <div
                        ref={meImageRef}
                        className='
                        w-[150px] xl:w-[250px]
                        h-[500px] xl:h-[611px]
                        ml-2 md:ml-5 lg:ml-14
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
