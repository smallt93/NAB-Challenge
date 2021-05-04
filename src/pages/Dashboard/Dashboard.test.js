import React from 'react';
import Dashboard from 'pages/Dashboard';
import * as methods from 'store/methods';
import { mountWithTheme as mount } from 'utils/testHelper';

describe('render Dashboard component', () => {
  let Component, dispatch;

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
    dispatch = jest.fn(() => {});
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

  it('should call resetLocationList', () => {
    methods.resetLocationList = jest.fn();
    Component = mount(<Dashboard {...mockProps} />);

    expect(methods.resetLocationList).toHaveBeenCalledTimes(1);
  });

  describe('search function', () => {
    it('should change value in search bar', () => {
      let SearchBarComp;
      SearchBarComp = Component.find('input[data-testid="search-location"]');
      SearchBarComp.simulate('change', {
        target: {
          value: 'Vietnam',
        }
      })

      SearchBarComp = Component.find('input[data-testid="search-location"]');
      expect(SearchBarComp.prop('value')).toEqual('Vietnam');
    });

    it('should call fetchLocationList function', () => {
      methods.fetchLocationList = jest.fn();

      methods.fetchLocationList(dispatch, 'Vietnam');
      expect(methods.fetchLocationList).toHaveBeenCalledTimes(1);

    });
  })
});
