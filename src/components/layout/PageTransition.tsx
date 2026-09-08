import { useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const { pathname } = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTransitioning(true);
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setTransitioning(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <main
      className={`min-h-screen transition-all duration-300 ${
        transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
    >
      {displayChildren}
    </main>
  );
}
