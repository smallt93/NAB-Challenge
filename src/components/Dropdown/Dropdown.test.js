import React from 'react';
import Dropdown from 'components/Dropdown';
import { mountWithTheme as mount } from 'utils/testHelper';
import { DropdownItem } from 'components/Dropdown/Dropdown.styles';

describe('render Dropdown component', () => {
  let Component;

  const mockProps = {
    data: [{}, {}, {}],
    activeId: 0,
    onSelectedItem: jest.fn(),
    setActiveId: jest.fn(),
  }
  
  beforeEach(() => {
    Component = mount(<Dropdown {...mockProps} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
    Component.unmount();
  });

  it('should render', () => {
    expect(Component.length).toBe(1);
  });

  it('should match snapshot', () => {
    expect(Component).toMatchSnapshot();
  });

  it('should have default value', () => {
    expect(typeof Component.props().data).toBe('object');
    expect(typeof Component.props().activeId).toBe('number');
    expect(typeof Component.props().onSelectedItem).toBe('function');
    expect(typeof Component.props().setActiveId).toBe('function');
  });

  describe('mouse event', () => {
    it('should call setActiveId when mouse over and mouse out', () => {
      Component.setProps({
        data: [{}],
      });
      const DropdownItemComp = Component.find(DropdownItem);
  
      DropdownItemComp.simulate('mouseover');
      expect(mockProps.setActiveId).toHaveBeenCalledTimes(1);
  
      DropdownItemComp.simulate('mouseout');
      expect(mockProps.setActiveId).toHaveBeenCalledTimes(2);
      expect(mockProps.setActiveId).toHaveBeenCalledWith(0);
    });

    it('should call onSelectedItem when click dropdom item', () => {
      Component.setProps({
        data: [{}],
      });
      const DropdownItemComp = Component.find(DropdownItem);
  
      DropdownItemComp.simulate('click');
      expect(mockProps.onSelectedItem).toHaveBeenCalledTimes(1);
      expect(mockProps.onSelectedItem).toHaveBeenCalledWith({});
    });
  })
});
