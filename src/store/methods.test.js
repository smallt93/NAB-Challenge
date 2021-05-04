import * as methods from './methods';
import * as api from 'apis/weather';

describe('methods', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch fetch location list api', () => {
    const mock = 'Vietnam';
    api.fetchLocationListApi = jest.fn().mockImplementation(
      () => Promise.resolve()
    );
    methods.fetchLocationList(dispatch, mock);

    expect(api.fetchLocationListApi).toBeCalledWith(mock);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  it('should dispatch fetch location selected api', () => {
    const mock = '123';
    api.fetchLocationSelectedApi = jest.fn().mockImplementation(
      () => Promise.resolve()
    );
    methods.fetchLocationSelected(dispatch, mock);

    expect(api.fetchLocationSelectedApi).toBeCalledWith(mock);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should dispatch update searching status', () => {
    const mock = 'Vietnam';
    methods.updateSearchingStatus(dispatch, mock);

    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should dispatch reset location list', () => {
    methods.resetLocationList(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should dispatch reset current location selected', () => {
    methods.resetCurLocationSelected(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
