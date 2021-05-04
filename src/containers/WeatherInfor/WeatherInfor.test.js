import React from 'react';
import WeatherInfor from 'containers/WeatherInfor';
import { WeatherItem } from 'containers/WeatherInfor/WeatherInfor.styles';
import { mountWithTheme as mount } from 'utils/testHelper';

describe('render WeatherInfor component', () => {
  let Component;

  const mockProps = {
    data: {
      weatherList: [{}, {}, {}, {}, {}],
    },
    onResetCurLocation: jest.fn(),
  }
  
  beforeEach(() => {
    Component = mount(<WeatherInfor {...mockProps} />);
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

  it('should render 5 days forecast', () => {
    const WeatherItemComp = Component.find(WeatherItem);
    expect(WeatherItemComp.length).toBe(5);
  });
});
