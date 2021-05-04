import React from 'react';
import Dashboard from 'pages/Dashboard';
import * as methods from 'store/methods';
import { mountWithTheme as mount } from 'utils/testHelper';

describe('render Dashboard component', () => {
  let Component;

  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  const mockProps = {
    locationList: [],
    curLocation: {},
    isLoading: false,
    isSearching: false,
    isLoadWeather: false,
  }
  
  beforeEach(() => {
    Component = mount(<Dashboard {...mockProps} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    expect(Component.length).toBe(1);
  });

  it('should match snapshot', () => {
    expect(Component).toMatchSnapshot();
  });

  describe('useEffect hook when did mount', () => {
    it('should call resetLocationList', () => {
      methods.resetLocationList = jest.fn();
      Component = mount(<Dashboard {...mockProps} />);
  
      expect(methods.resetLocationList).toHaveBeenCalledTimes(1);
    });
  })
});
