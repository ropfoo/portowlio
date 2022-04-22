import React, { useEffect } from 'react';
import gsap from 'gsap';

export function useNavAnimation(
    navRef: React.RefObject<HTMLDivElement>,
    triggerRef: React.RefObject<HTMLDivElement>
) {
    useEffect(() => {
        gsap.to(navRef.current, {
            y: 64,
            duration: 0.3,
            scrollTrigger: {
                trigger: triggerRef.current,
                toggleActions: 'play pause resume reverse',
                start: 'top 100px',
            },
        });
    }, []);
}
