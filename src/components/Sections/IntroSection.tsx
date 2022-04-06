import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { Button } from '../Button';
import { H1Large, P } from '../Text';
import { MainSection } from '../Layout';
import { GithubIcon } from '../icons/Github/GithubIcon';
import { LinkedinIcon } from '../icons/Linkedin/LinkdedInIcon';

const IntroSection: React.FC = () => {
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
        <MainSection ref={sectionRef}>
            <div ref={textRef} className='flex flex-col justify-between'>
                <div>
                    <div className='mb-24 md:mb-36 xl:mb-52'>
                        <H1Large>hey.</H1Large>
                    </div>
                    <P>My name is Robert and I am a Frontend Developer. </P>
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
                ml-2 sm:ml-10  md:ml-12  lg:ml-28 
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
                        transition-transform'
                        href='#'>
                        <GithubIcon />
                    </a>
                    <a
                        className='bg-transparent hover:scale-125 transition-transform'
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
                        src={'/images/rp_team.jpg'}
                        layout={'fill'}
                        priority
                    />
                </div>
            </div>
        </MainSection>
    );
};

export default IntroSection;
