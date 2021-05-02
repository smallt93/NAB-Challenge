import React from 'react';
import { getDayOfWeek } from 'utils/getToday';
import { getIconWeather } from 'apis/weather';

import humidity from 'assets/icons/humidity.svg'
import wind from 'assets/icons/wind.svg'
import noData from 'assets/icons/no-data.svg'
import {
  WeatherInforWrapper,
  WeatherItem,
  WeatherContent,
  WeatherTemp,
  WeatherCloud,
  WeatherImage,
  WeatherIcon,
  NoDataIcon,
  NoDataText,
  TempMin,
} from './WeatherInfor.styles';

const weatherItem = item => {
  const {
    id,
    applicable_date: applicableDt,
    min_temp: minTemp,
    max_temp: maxTemp,
    weather_state_abbr: stateAbbr,
    weather_state_name: stateName,
    wind_direction_compass: windDirCompass,
    wind_speed: windSpeed,
  } = item; 
  return (
    <WeatherItem key={id}>
      <WeatherContent>
        <p>
          {getDayOfWeek(new Date(applicableDt))}
        </p>

        <WeatherTemp>
          <TempMin>{Math.round(minTemp) + '°'}</TempMin>
          <p>/</p>
          <p>{Math.round(maxTemp) + '°'}</p>
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

const WeatherInfor = ({ data = null }) => {
console.log("🚀 ~ file: index.js ~ line 65 ~ WeatherInfor ~ data", data)
  if (data) {
    const { weatherList } = data;

    return (
      <WeatherInforWrapper>
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

export default WeatherInfor;
