import React from 'react';
import { mountWithTheme as mount } from 'utils/testHelper';
import { ClearSearch, Empty } from 'components/SearchBar/SearchBar.styles';
import SearchBar from 'components/SearchBar';
import Dropdown from 'components/Dropdown';
import Loader from 'components/Loader';

describe('render SearchBar component', () => {
  let Component;

  const mockProps = {
    onSearching: jest.fn(),
    onSelectedItem: jest.fn(),
    setSearchValue: jest.fn(),
    setActiveId: jest.fn(),
    onResetLocationList: jest.fn(),
    isSearching: false,
    isLoading: false,
    locationList: null,
    searchValue: '',
    activeId: 0,
  }
  
  beforeEach(() => {
    Component = mount(<SearchBar {...mockProps} />);
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

  it('should change search location value', () => {
    const SearchInput = Component.find('input[data-testid="search-location"]');
    SearchInput.simulate('change', {
      target: { value: 'Vietnam' },
    });

    expect(mockProps.onSearching).toHaveBeenCalledTimes(1);
  });

  it('should render loader component', () => {
    Component.setProps({ isLoading: true });
    const LoaderComponent = Component.find(Loader);
  
    expect(LoaderComponent.length).toBe(1);
  });

  it('should render div when search value is empty', () => {
    Component.setProps({
      isLoading: false,
      searchValue: '',
    });
    const EmptyComponent = Component.find(Empty);
  
    expect(EmptyComponent.length).toBe(1);
  });

  it('should render reset button and call setSearchValue and set empty for search value', () => {
    const expected = {
      value: '',
      trigger: false,
    }
    Component.setProps({
      isLoading: false,
      searchValue: 'Vietnam',
    });
    const ResetSearchBtn = Component.find(ClearSearch);
    expect(ResetSearchBtn.length).toBe(1);

    ResetSearchBtn.simulate('click');
    expect(mockProps.setSearchValue).toHaveBeenCalledTimes(1);
    expect(mockProps.setSearchValue).toHaveBeenCalledWith(expected);
    expect(mockProps.onResetLocationList).toHaveBeenCalledTimes(1);
  });

  it('should render null when search value and locationList are empty', () => {
    Component.setProps({
      isSearching: false,
      locationList: null,
    });
    const DropdownComponent = Component.find(Dropdown);
    expect(DropdownComponent.length).toBe(0);
  });

  it('should render dropdown location list', () => {
    Component.setProps({
      isSearching: true,
      locationList: [{}, {}, {}],
    });
    const DropdownComponent = Component.find(Dropdown);
    expect(DropdownComponent.length).toBe(1);
  });
});
