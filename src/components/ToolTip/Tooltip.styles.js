import styled, { css } from "styled-components";

export const TooltipWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.opacityGrey};
  text-align: ${({ align }) => align};
  visibility: hidden;
  position: absolute;
  z-index: 1000;
  top: 3rem;
  right: 0;
  padding: 0.3125rem;
  width: max-content;
  line-height: 1rem;
  border-radius: 0.25rem;

  ${({ align }) => align === "center" && css`
    top: 2.375rem;
    left: 50%;
    transform: translate(-50%);
  `}
`;

export const TooltipTitle = styled.div`
  color: ${({ theme}) => theme.colors.white};
  font-size: 0.875rem;
`;

export const TooltipInfoList = styled.ul`
  color: ${({ theme }) => theme.colors.greyText};
  font-size: 0.875rem;
`;