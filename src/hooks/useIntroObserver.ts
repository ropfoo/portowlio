import * as React from 'react';

export function useIntroObserver() {
    const introRef = React.useRef<HTMLDivElement>(null);
    const [showNavigation, setShowNavigation] = React.useState(false);

    React.useEffect(() => {
        const target = introRef.current;
        const options = {
            root: null,
            rootMargin: '300px',
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setShowNavigation(false);
                } else {
                    console.log('now what');
                    setShowNavigation(true);
                }
            });
        }, options);
        if (target) observer.observe(target);
    }, []);

    return {
        introRef,
        showNavigation,
    };
}
