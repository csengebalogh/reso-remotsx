import { useState, useEffect } from 'react';

const useViewportWidth = (breakpoint: number) => {
  const [isWide, setIsWide] = useState(window.innerWidth > breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > breakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isWide;
};

export default useViewportWidth;
