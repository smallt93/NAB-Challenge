import { ACTION_TYPE } from './constants';

export const fetchLocationListProcessing = () =>({
  type: ACTION_TYPE.FETCH_LOCATION_LIST_PROCESSING,
});

export const fetchLocationListSuccess = (data) =>({
  type: ACTION_TYPE.FETCH_LOCATION_LIST_SUCCESS,
  payload: data,
});

export const fetchLocationListFailure = (err) =>({
  type: ACTION_TYPE.FETCH_LOCATION_LIST_FAILURE,
  payload: err,
});

export const fetchCurLocationSelectedProcessing = () =>({
  type: ACTION_TYPE.FETCH_CURRENT_LOCATION_SELECTED_PROCESSING,
});

export const fetchCurLocationSelectedSuccess = (data) =>({
  type: ACTION_TYPE.FETCH_CURRENT_LOCATION_SELECTED_SUCCESS,
  payload: data,
});

export const fetchCurrentLocationSelectedFailure = (err) =>({
  type: ACTION_TYPE.FETCH_CURRENT_LOCATION_SELECTED_FAILURE,
  payload: err,
});

export const updateSearchingStatus = (value) =>({
  type: ACTION_TYPE.UPDATE_SEARCHING_STATUS,
  payload: value,
});

export const setCurLocationId = (value) =>({
  type: ACTION_TYPE.SET_CURRENT_LOCATION_ID,
  payload: value,
});

export const resetLocationList = () =>({
  type: ACTION_TYPE.RESET_LOCATION_LIST,
});

export const resetCurLocationSelected = () =>({
  type: ACTION_TYPE.RESET_CURRENT_LOCATION_SELECTED,
});
