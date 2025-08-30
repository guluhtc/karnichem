import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to scroll to top when route changes
 * This ensures pages always start from the top when navigating
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use instant for immediate effect
    });
  }, [pathname]);
};

export default useScrollToTop;
