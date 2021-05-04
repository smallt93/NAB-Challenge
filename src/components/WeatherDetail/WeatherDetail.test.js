import React from 'react';
import WeatherDetail from 'components/WeatherDetail';
import { mountWithTheme as mount } from 'utils/testHelper';
import { ResetButton } from 'components/WeatherDetail/WeatherDetail.styles';

describe('render WeatherDetail component', () => {
  let Component;

  const mockProps = {
    data: {},
    onResetCurLocation: jest.fn(),
  }
  
  beforeEach(() => {
    Component = mount(<WeatherDetail {...mockProps} />);
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

  describe('reset button', () => {
    it('should call onResetCurLocation when click reset button', () => {
      const ResetBtn = Component.find(ResetButton);
      ResetBtn.simulate('click');

      expect(mockProps.onResetCurLocation).toHaveBeenCalledTimes(1);
    })
  })
});
