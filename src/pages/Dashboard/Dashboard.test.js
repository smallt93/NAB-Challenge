import React from 'react';
import Dashboard from 'pages/Dashboard';
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
});
