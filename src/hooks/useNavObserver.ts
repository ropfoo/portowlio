import { useRouter } from 'next/router';
import * as React from 'react';

type NavObserverParams = {
  options?: {
    threshold: number;
  };
};

export function useNavObserver(params?: NavObserverParams) {
  const { pathname } = useRouter();
  const isToggleing = pathname === '/';

  const [showNavigation, setShowNavigation] = React.useState(!isToggleing);
  const options = params?.options ?? { threshold: 1 };

  React.useEffect(() => {
    function toggleNavbar() {
      if (isToggleing) {
        if (window.pageYOffset > screen.height * options.threshold) {
          setShowNavigation(true);
        } else {
          setShowNavigation(false);
        }
      }
    }

    window.addEventListener('scroll', toggleNavbar);

    return () => {
      window.removeEventListener('scroll', toggleNavbar);
    };
  }, [options.threshold, isToggleing]);

  return {
    showNavigation,
  };
}
