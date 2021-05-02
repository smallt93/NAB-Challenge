import React from 'react';
import Icon from 'components/Icon';
import Dropdown from 'components/Dropdown';
import Loader from 'components/Loader';
import iconSearch from 'assets/icons/search.svg';

import {
  SearchBarWrapper,
  LocationListWrapper,
  SearchInput,
  ClearSearch,
} from './SearchBar.styles';

const SearchBar = ({
  onSearching = () => {},
  onSelectedItem = () => {},
  setSearchValue = () => {},
  setActiveId = () => {},
  isSearching = false,
  isLoading = false,
  locationList = null,
  searchValue = '',
  activeId = 0,
}) => {
  return (
    <SearchBarWrapper searching={isSearching}>
      <Icon iconUrl={iconSearch} iconSize={1.5} />
      <SearchInput
        type='text'
        placeholder='Search location'
        onChange={onSearching}
        value={searchValue}
      />

      {isLoading
        ? <Loader />
        : searchValue ? (
          <ClearSearch onClick={() => setSearchValue('')}>
            x
          </ClearSearch>
        ) : <div />
      }
      
      {isSearching && locationList && (
        <LocationListWrapper>
          <Dropdown
            data={locationList}
            activeId={activeId}
            onSelectedItem={onSelectedItem}
            setActiveId={setActiveId}
          />
        </LocationListWrapper>
      )}
    </SearchBarWrapper>
  );
};

export default SearchBar;
