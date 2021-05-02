import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .5rem;
  padding: ${({ theme }) => theme.rem(4)} ${({ theme }) => theme.rem(8)};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SearchInput = styled.input`
  position: relative;
  border: none;
  outline: none;
  width: 100%;
  font-size:  ${({ theme }) => theme.rem(10)};
  height: ${({ theme }) => theme.rem(16)};
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LocationListWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  top: 41px;
  border-radius: 1rem;
  box-shadow: 0 2px 5px 1px rgba(64,60,67,.16);
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ClearSearch = styled.div`
  position: absolute;
  cursor: pointer;
  right: 18px;
  top: 3px;
  font-size: ${({ theme }) => theme.rem(12)};
  transition: all 300ms ease;
  &:hover {
    opacity: 0.7;
  }
` 