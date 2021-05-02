import styled, { css } from 'styled-components';

export const LoaderWrapper = styled.div`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-top: 2px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  animation: spin 1s linear infinite;
  position: absolute;
  right: 10px;
  z-index: 1000;
  width: 1.3rem;
  height: 1.3rem;

  @-webkit-keyframes loading {
    0% { transform: translate(0, 0); }
    50% { transform: translate(0, 15px); }
    100% { transform: translate(0, 0) }
  }

  @keyframes loading {
    0% { transform: translate(0, 0); }
    50% { transform: translate(0, 15px); }
    100% { transform: translate(0, 0) }
  }

  ${({ theme, size }) => size === 'large' && css`
    border: 4px solid ${theme.colors.white};
    border-top: 4px solid ${theme.colors.grey};
    border-bottom: 4px solid ${theme.colors.grey};
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 1em;
    position: unset;
  `}
`;