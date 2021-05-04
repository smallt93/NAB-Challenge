import * as actions from './actions';
import { ACTION_TYPE } from './constants';


describe('actions', () => {
  it('should return fetch location list processing type', () => {
    const expected = {
      type: ACTION_TYPE.FETCH_LOCATION_LIST_PROCESSING,
    };

    expect(actions.fetchLocationListProcessing()).toEqual(expected);
  });

  it('should return fetch location list success type', () => {
    const dataMock = [{}, {}, {}];
    const expected = {
      type: ACTION_TYPE.FETCH_LOCATION_LIST_SUCCESS,
      payload: dataMock,
    };
    
    expect(actions.fetchLocationListSuccess(dataMock)).toEqual(expected);
  });

  it('should return fetch location list failure type', () => {
    const dataMock = 'err';
    const expected = {
      type: ACTION_TYPE.FETCH_LOCATION_LIST_FAILURE,
      payload: dataMock,
    };

    expect(actions.fetchLocationListFailure(dataMock)).toEqual(expected);
  });

  it('should return fetch current location selected processing type', () => {
    const expected = {
      type: ACTION_TYPE.FETCH_CURRENT_LOCATION_SELECTED_PROCESSING,
    };

    expect(actions.fetchCurLocationSelectedProcessing()).toEqual(expected);
  });

  it('should return fetch current location selected success type', () => {
    const expected = {
      type: ACTION_TYPE.FETCH_CURRENT_LOCATION_SELECTED_SUCCESS,
      payload: {},
    };

    expect(actions.fetchCurLocationSelectedSuccess({})).toEqual(expected);
  });

  it('should return fetch current location selected failure type', () => {
    const dataMock = 'err';
    const expected = {
      type: ACTION_TYPE.FETCH_CURRENT_LOCATION_SELECTED_FAILURE,
      payload: dataMock,
    };

    expect(actions.fetchCurrentLocationSelectedFailure(dataMock)).toEqual(expected);
  });

  it('should return update searching status type', () => {
    const expected = {
      type: ACTION_TYPE.UPDATE_SEARCHING_STATUS,
      payload: true,
    };

    expect(actions.updateSearchingStatus(true)).toEqual(expected);
  });

  it('should return reset location list type', () => {
    const expected = {
      type: ACTION_TYPE.RESET_LOCATION_LIST,
    };
    expect(actions.resetLocationList()).toEqual(expected);
  });

  it('should return reset current location selected type', () => {
    const expected = {
      type: ACTION_TYPE.RESET_CURRENT_LOCATION_SELECTED,
    };
    expect(actions.resetCurLocationSelected()).toEqual(expected);
  });
});
