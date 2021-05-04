import axios from 'axios';

const ALLOW_CORS = 'https://cors-anywhere.herokuapp.com';
const BASE_API_URL = `${ALLOW_CORS}/https://www.metaweather.com/api`;

const apiClient = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

const FETCH_LOCATION_LIST_URL = `${BASE_API_URL}/location/search/?query=`;
const FETCH_LOCATION_SELECTED_URL = `${BASE_API_URL}/location`;
const GET_ICON_URL = 'https://www.metaweather.com/';

export const fetchLocationListApi = (location) =>
  apiClient
    .get(FETCH_LOCATION_LIST_URL + location)
    .then((response) => response)
    .catch(function (error) {
      console.error(error);
      throw error;
    });

export const fetchLocationSelectedApi = (locationId) => 
  apiClient
    .get(`${FETCH_LOCATION_SELECTED_URL}/${locationId}`)
    .then((response) => response)
    .catch(function (error) {
      console.error(error);
      throw error;
    });

export const getIconWeather = (icon) => `${GET_ICON_URL}/static/img/weather/${icon}.svg`;
