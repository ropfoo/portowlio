import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useIntroAnimation() {
    const meImageRef = useRef<HTMLDivElement>(null);
    const socialsRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.to(meImageRef.current, {
            y: -250,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'center center',
                end: 'bottom 50px',
                scrub: true,
                id: 'scrub',
            },
        });
        gsap.to(socialsRef.current, {
            y: -150,
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

    return {
        meImageRef,
        socialsRef,
        textRef,
        sectionRef,
    };
}
