import { CircularProgress } from '@mui/material';
import React from 'react';
import { Img } from 'react-image';

const LazyImage = ({ src, alt = 'LazyImage', ...props }) => {
  return (
    <Img
      src={src}
      alt={alt}
      {...props}
      unloader={<div>Error</div>}
      loader={<CircularProgress />}
    />
  );
};

export default LazyImage;
