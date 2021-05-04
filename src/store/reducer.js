import { ACTION_TYPE } from './constants';

export const initialState = {
  locationList: null,
  curLocation: null,
  isLoading: false,
  isSearching: false,
  isLoadWeather: false,
};

export function reducer(state, action) {
  switch (action?.type) {
    case ACTION_TYPE.FETCH_LOCATION_LIST_PROCESSING:
      return {
        ...state,
        isLoading: true,
      }
    case ACTION_TYPE.FETCH_LOCATION_LIST_SUCCESS:
      return {
        ...state,
        locationList: action.payload,
        isLoading: false,
      };
    case ACTION_TYPE.FETCH_LOCATION_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    case ACTION_TYPE.RESET_LOCATION_LIST:
      return {
        ...state,
        locationList: null,
        isLoading: false,
      };
    case ACTION_TYPE.UPDATE_SEARCHING_STATUS: 
      return {
        ...state,
        isSearching: action.payload,
      };

    case ACTION_TYPE.FETCH_CURRENT_LOCATION_SELECTED_PROCESSING:
      return {
        ...state,
        isLoadWeather: true,
      };
    case ACTION_TYPE.FETCH_CURRENT_LOCATION_SELECTED_SUCCESS: {
      const {
        consolidated_weather: weatherList,
        title: locationName,
        timezone,
        time: curTime,
      } = action.payload;

      return {
        ...state,
        curLocation: {
          weatherList: weatherList?.slice(0,5),
          locationName,
          timezone,
          curTime,
        },
        isLoadWeather: false,
      };
    }
    case ACTION_TYPE.RESET_CURRENT_LOCATION_SELECTED:
      return initialState;

    default:
      return initialState;
  }
}