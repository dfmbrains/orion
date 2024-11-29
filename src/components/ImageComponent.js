import React, { useEffect, useState } from 'react';
import { ImageErrorUrl } from '../helpers/constants';

const ImageComponent = ({
  alt = 'ImageComponent',
  fallbackSrc = ImageErrorUrl,
  setIsLoading,
  src,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setImageSrc(src || fallbackSrc);
  }, [src, fallbackSrc]);

  const handleLoad = () => {
    if (setIsLoading) {
      setIsLoading(false);
    }
  };

  const handleError = () => {
    setImageSrc(fallbackSrc);
  };

  return (
    <img
      {...props}
      alt={alt}
      src={imageSrc}
      loading="lazy"
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

export default ImageComponent;
