import * as React from 'react';

type NavObserverParams = {
  options?: {
    threshold: number;
  };
};

export function useNavObserver(params?: NavObserverParams) {
  const [showNavigation, setShowNavigation] = React.useState(false);
  const options = params?.options ?? { threshold: 1 };

  React.useEffect(() => {
    function toggleNavbar() {
      if (window.pageYOffset > screen.height * options.threshold) {
        setShowNavigation(true);
      } else {
        setShowNavigation(false);
      }
    }

    window.addEventListener('scroll', toggleNavbar);

    return () => {
      window.removeEventListener('scroll', toggleNavbar);
    };
  }, [options.threshold]);

  return {
    showNavigation,
  };
}
