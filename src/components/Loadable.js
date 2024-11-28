import React, { Suspense } from 'react';
import Loader from './Loader';

const Loadable = Component => props => {
  return (
    <Suspense fallback={<Loader window="full" size="medium" />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
