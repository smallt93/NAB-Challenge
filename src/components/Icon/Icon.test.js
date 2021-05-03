import React from 'react';
import { mountWithTheme as mount } from 'utils/testHelper';
import Icon from 'components/Icon';

describe('render Icon component', () => {
  let Component;

  const mockProps = {
    text: '',
    iconUrl: '',
    iconSize: 1,
    showToolTip: false,
  }
  
  beforeEach(() => {
    Component = mount(<Icon {...mockProps} />);
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
