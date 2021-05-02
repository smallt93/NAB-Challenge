import React, { memo } from 'react';
import dayjs from 'dayjs';

import {
  WeatherDetailWrapper,
  WeatherDetailContent,
  WeatherDetailItem,
  ResetButton,
} from './WeatherDetail.styles';

const WeatherDetail = ({
  data,
  onResetCurLocation = () => {}
}) => {
  const curTime = dayjs(data?.curTime).format('MMMM D, YYYY h:mm A');

  const onReset = () => {
    onResetCurLocation();
  }

  return (
    <WeatherDetailWrapper>
      <WeatherDetailContent>
        <WeatherDetailItem>
          <label>Location:</label>
          <span>{data?.locationName}</span>
        </WeatherDetailItem>

        <WeatherDetailItem>
          <label>Current time:</label>
          <span>{curTime}</span>
        </WeatherDetailItem>

        <WeatherDetailItem>
          <label>Timezone:</label>
          <span>{data?.timezone}</span>
        </WeatherDetailItem>
      </WeatherDetailContent>

      <ResetButton onClick={onReset}>Reset</ResetButton>
    </WeatherDetailWrapper>
  )
}

export default memo(WeatherDetail);