import React from "react";
import {
  TooltipWrapper,
  TooltipTitle,
  TooltipInfoList,
} from './Tooltip.styles';

function ToolTip({
  align = 'left',
  title = '',
  infoList = [],
}) {
  return (
    <TooltipWrapper align={align}>
      <TooltipTitle>{title}</TooltipTitle>

      {infoList.length > 0 && (
        <TooltipInfoList>
          {infoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </TooltipInfoList>
      )}
    </TooltipWrapper>
  );
}

export default ToolTip;
