import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';

const LazyImage = ({ src, alt = 'LazyImage', ...props }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {loading && !error && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <CircularProgress />
        </div>
      )}
      {!error && (
        <img
          src={src}
          alt={alt}
          {...props}
          loading="lazy"
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          style={loading ? { visibility: 'hidden' } : {}}
        />
      )}
      {error && <div style={{ color: 'red' }}>Error loading image</div>}
    </div>
  );
};

export default LazyImage;
