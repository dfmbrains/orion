import React from 'react';

const LazyImage = ({ src, alt = 'LazyImage', ...props }) => {
  return <img src={src} alt={alt} {...props} loading="lazy" />;
};

export default LazyImage;
