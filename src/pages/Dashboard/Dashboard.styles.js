import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const DashboardWrapper = styled.div`
  width: ${({ theme }) => theme.rem(500)};
`;

export const SearchWrapper = styled.div`
  margin-top: 10em;
  width: 100%;
`