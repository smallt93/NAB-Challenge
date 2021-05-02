import styled from 'styled-components';

export const WeatherInforWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 0;
  width: 100%;
  margin-bottom: 3rem;
  min-height: 33rem;
`;

export const WeatherItem = styled.li`
  width: 100%;
  display: flex;

  &:last-child > div {
    border: 0;
  }
`;

export const WeatherContent = styled.div`
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.borderGrey};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 2rem;
  text-align: center;

  p {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`

export const WeatherTemp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const TempMin = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`

export const WeatherCloud = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const WeatherImage = styled.img`
  width: 3rem;
  margin-right: 1rem;
`

export const WeatherIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 2rem;
    margin-right: 0.5rem;
  }
`

export const NoDataIcon = styled.img`
  width: 10rem;
`

export const NoDataText = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`