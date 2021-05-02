import React, { memo } from 'react';
import { LoaderWrapper } from './Loader.styles';

const Loader = ({ size = '' }) => {
  return <LoaderWrapper size={size} />;
};

export default memo(Loader);
