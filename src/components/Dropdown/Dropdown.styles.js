import styled, { css } from "styled-components";

export const DropdownWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: ${({ theme }) => theme.rem(4)} ${({ theme }) => theme.rem(8)};
`;

export const DropdownItem = styled.li`
  padding: 0em .5em;
  line-height: 2rem;
  cursor: pointer;
  background-color: transparent;
  transition: all 200ms ease;
  border-radius: ${({ theme }) => theme.rem(3)};
  font-size: ${({ theme }) => theme.rem(10)};
  color: ${({ theme }) => theme.colors.textPrimary};
  ${({ theme, active }) =>
    active && css`
      background-color: ${theme.colors.greyHover};
    `
  }
`;