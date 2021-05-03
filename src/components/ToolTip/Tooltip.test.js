import React from 'react';
import { mountWithTheme as mount } from 'utils/testHelper';
import Tooltip from 'components/Tooltip';

describe('render Tooltip component', () => {
  let Component;

  const mockProps = {
    align: 'left',
    title: '',
    infoList: [],
  }
  
  beforeEach(() => {
    Component = mount(<Tooltip {...mockProps} />);
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
