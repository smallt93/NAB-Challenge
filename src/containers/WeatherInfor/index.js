import React, { memo } from 'react';
import { getDayOfWeek } from 'utils/getToday';
import { getIconWeather } from 'apis/weather';

import WeatherDetail from 'containers/WeatherDetail';
import humidity from 'assets/icons/humidity.svg'
import wind from 'assets/icons/wind.svg'
import noData from 'assets/icons/no-data.svg'

import {
  WeatherInforWrapper,
  WeatherHeaderWrapper,
  WeatherItem,
  WeatherContent,
  WeatherTemp,
  WeatherCloud,
  WeatherImage,
  WeatherIcon,
  NoDataIcon,
  NoDataText,
  TempMin,
  TempMax,
} from './WeatherInfor.styles';

const WeatherHeader = () => (
  <WeatherHeaderWrapper>
    <div>Day</div>
    <div>Temperature</div>
    <div>Forecast</div>
    <div>Humidity</div>
    <div>Wind Compass</div>
  </WeatherHeaderWrapper>
)

const weatherItem = (item, index) => {
  const {
    applicable_date: applicableDt,
    min_temp: minTemp,
    max_temp: maxTemp,
    weather_state_abbr: stateAbbr,
    weather_state_name: stateName,
    wind_direction_compass: windDirCompass,
    wind_speed: windSpeed,
  } = item; 
  return (
    <WeatherItem key={index}>
      <WeatherContent>
        <div>{getDayOfWeek(new Date(applicableDt))}</div>

        <WeatherTemp>
          <TempMin>{Math.round(minTemp) + '°'}</TempMin>
          <p>/</p>
          <TempMax>{Math.round(maxTemp) + '°'}</TempMax>
        </WeatherTemp>

        <WeatherCloud>
          <WeatherImage src={getIconWeather(stateAbbr)} alt={stateName} />
          <p>{stateName}</p>
        </WeatherCloud>

        <WeatherIcon>
          <img src={humidity} alt='Humidity' />
          <p>{Math.round(item.humidity)}%</p>
        </WeatherIcon>

        <WeatherIcon>
          <img src={wind} alt='Wind' />
          <p>{windDirCompass} {Math.round(windSpeed)} mph</p>
        </WeatherIcon>
      </WeatherContent>
    </WeatherItem>
  )
}

const WeatherInfor = ({
  data = null,
  onResetCurLocation = () => {}
}) => {
  if (data) {
    const { weatherList } = data;

    return (
      <WeatherInforWrapper>
        <WeatherDetail
          data={data}
          onResetCurLocation={onResetCurLocation}
        />
        <WeatherHeader />
        {weatherList && weatherList.map(weatherItem)}
      </WeatherInforWrapper>
    )
  }
  
  return (
    <WeatherInforWrapper>
      <NoDataIcon src={noData} alt='No data' />
      <NoDataText>No data</NoDataText>
    </WeatherInforWrapper>
    
  )
};

export default memo(WeatherInfor);
