import styled from 'styled-components';

export const WeatherDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 2em);
  padding: 1em;
`;

export const WeatherDetailContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
`

export const WeatherDetailItem = styled.div`
  label {
    font-weight: 600;
    margin-right: ${({ theme }) => theme.rem(4)};
  }
  &:first-child {
    span {
      text-transform: uppercase; 
    }
  }
`; 

export const ResetButton = styled.button`
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.borderInput};
  padding: ${({ theme }) => theme.rem(4)} ${({ theme }) => theme.rem(6)};
  transition: all 300ms ease;
  &:hover {
    opacity: 0.7;
  }
`;