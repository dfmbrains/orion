import React, { useState } from 'react';
import StaticImg from '../assets/images/logo.png';

const ImageComponent = ({
  src = '',
  alt,
  clx = '',
  fallbackSrc = StaticImg,
  setIsLoading,
}) => {
  const [imageSrc, setImageSrc] = useState(src);

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
      onLoad={handleLoad}
      className={clx}
      src={imageSrc}
      alt={alt}
      onError={handleError}
    />
  );
};

export default ImageComponent;
