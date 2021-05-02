import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-image: ${({ bg }) => `url(${bg})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const DashboardWrapper = styled.div`
  width: ${({ theme }) => theme.rem(600)};
`;

export const SearchWrapper = styled.div`
  margin-top: 10em;
  width: 100%;
`