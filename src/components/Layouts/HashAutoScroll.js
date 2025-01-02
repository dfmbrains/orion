import { handleScrollToTop, scrollIntoView } from 'helpers/utils';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HashAutoScroll = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scrollIntoView(location.hash);
    } else {
      handleScrollToTop();
    }
  }, [location]);

  return children;
};

export default HashAutoScroll;
