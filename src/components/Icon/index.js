import React from 'react';
import ToolTip from 'components/ToolTip';
import {
  IconWrapper,
  IconItem,
} from './Icon.styles';

const IconComponent = ({
  text = '',
  iconUrl = '',
  iconSize = 1,
  showToolTip = false,
}) => {
  return (
    <IconWrapper hover={showToolTip}>
      <IconItem iconUrl={iconUrl} iconSize={iconSize} />

      {showToolTip && <ToolTip title={text} align='center' />}
    </IconWrapper>
  );
};

export default IconComponent;
