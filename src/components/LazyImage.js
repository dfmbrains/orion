import React, { useEffect, useRef, useState } from 'react';

function LazyImage({ src, alt = 'LazyImg', ...rest }) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const node = imgRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  return (
    <img
      {...rest}
      alt={alt}
      ref={imgRef}
      loading="lazy"
      src={isVisible ? src : ''}
    />
  );
}

export default LazyImage;
