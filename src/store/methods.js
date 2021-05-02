import * as actions from './actions';
import {
  fetchLocationSelectedApi,
  fetchLocationListApi
} from 'apis/weather';

export const fetchLocationList = async (dispatch, param) => {
  dispatch(actions.fetchLocationListProcessing());
  dispatch(actions.updateSearchingStatus(true));

  const data = await fetchLocationListApi(param)
  .then(({ data }) => data.slice(0, 8))
  .catch(error => {
    dispatch(actions.fetchLocationListFailure(error));
    return;
  });
  
  if (data && data.length > 0) {
    dispatch(actions.fetchLocationListSuccess(data));
  }
}

export const fetchLocationSelected = async (dispatch, locationId) => {
  dispatch(actions.fetchCurLocationSelectedProcessing());

  const data = await fetchLocationSelectedApi(locationId)
    .then(({ data }) => data)
    .catch(error => {
      dispatch(actions.fetchCurrentLocationSelectedFailure(error));
      return;
    });

  if (data) {
    dispatch(actions.fetchCurLocationSelectedSuccess(data));
  }

}

export const setCurLocationId = (dispatch, param) => {
  dispatch(setCurLocationId(param));
}

export const updateSearchingStatus = (dispatch, value) => {
  dispatch(actions.updateSearchingStatus(value));
}

export const resetLocationList = (dispatch) => {
  dispatch(actions.resetLocationList());
}

export const resetCurLocationSelected = (dispatch) => {
  dispatch(actions.resetCurLocationSelected());
}