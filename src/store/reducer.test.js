
import { reducer, initialState } from './reducer';
import * as actions from './actions';

describe('reducer', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    expect(reducer({}, undefined)).toEqual(state);
  });

  it('should handle location list processing', () => {
    const expected = {
      ...initialState,
      isLoading: true,
    }

    expect(reducer(initialState, actions.fetchLocationListProcessing())).toEqual(expected);
  });

  it('should handle location list success', () => {
    const mockData = [{}, {}, {}];
    const expected = {
      ...initialState,
      locationList: mockData,
      isLoading: false,
    }

    expect(reducer(initialState, actions.fetchLocationListSuccess(mockData))).toEqual(expected);
  });

  it('should handle location list failure', () => {
    const expected = {
      ...initialState,
      isLoading: false,
    }

    expect(reducer(initialState, actions.fetchLocationListFailure())).toEqual(expected);
  });

  it('should handle reset location list', () => {
    const expected = {
      ...initialState,
      locationList: null,
      isLoading: false,
    }

    expect(reducer(initialState, actions.resetLocationList())).toEqual(expected);
  });

  it('should handle update searching status', () => {
    const expected = {
      ...initialState,
      isSearching: true,
    }

    expect(reducer(initialState, actions.updateSearchingStatus(true))).toEqual(expected);
  });

  it('should handle fetch current location selected processing', () => {
    const expected = {
      ...initialState,
      isLoadWeather: true,
    }

    expect(reducer(initialState, actions.fetchCurLocationSelectedProcessing())).toEqual(expected);
  });
  it('should handle fetch current location selected success', () => {
    const expected = {
      ...initialState,
      curLocation: {},
      isLoadWeather: false,
    }

    expect(reducer(initialState, actions.fetchCurLocationSelectedSuccess({}))).toEqual(expected);
  });
  it('should handle set current location selected', () => {
    const expected = {
      ...initialState,
      curLocation: null,
      isLoadWeather: false,
    }

    expect(reducer(initialState, actions.resetCurLocationSelected())).toEqual(expected);
  });
});