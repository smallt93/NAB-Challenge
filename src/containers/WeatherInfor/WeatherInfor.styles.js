import styled from 'styled-components';

export const WeatherInforWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: .5em;
  padding: 0;
  width: 100%;
  min-height: 28em;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const WeatherHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 1em);
  padding: 0 0.5em;
  height: 3em;
  background-color: #97979a;
  color: ${({ theme }) => theme.colors.white};
  > div {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #f5f5f5;
    &:last-child {
      border-right: none;
    }
  }
`;

export const WeatherItem = styled.li`
  width: 100%;
  display: flex;
  min-height: 5em;
  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

export const WeatherContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 0.5em;
  text-align: center;

  > div {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #f5f5f5;
    &:last-child {
      border-right: none;
    }
  }

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
  color: #d53333;
`

export const TempMax = styled.p`
  color: #000080;
`

export const WeatherCloud = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: .5em;
  }
`

export const WeatherImage = styled.img`
  width: 2.5em;
  margin-top: .5em;
`

export const WeatherIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 1.75rem;
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