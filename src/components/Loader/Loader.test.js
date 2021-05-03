import React from 'react';
import { mountWithTheme as mount } from 'utils/testHelper';
import Loader from 'components/Loader';

describe('render Loader component', () => {
  let Component;

  const mockProps = {
    size: '',
  }
  
  beforeEach(() => {
    Component = mount(<Loader {...mockProps} />);
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
