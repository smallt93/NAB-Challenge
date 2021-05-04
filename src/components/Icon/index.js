import React, { memo } from 'react';
import {
  IconWrapper,
  IconItem,
} from './Icon.styles';

const Icon = ({
  text = '',
  iconUrl = '',
  iconSize = 1,
  showToolTip = false,
}) => {
  return (
    <IconWrapper hover={showToolTip}>
      <IconItem iconUrl={iconUrl} iconSize={iconSize} />
    </IconWrapper>
  );
};

export default memo(Icon);
