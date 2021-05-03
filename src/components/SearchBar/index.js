import React, { memo } from 'react';
import Icon from 'components/Icon';
import Dropdown from 'components/Dropdown';
import Loader from 'components/Loader';
import iconSearch from 'assets/icons/search.svg';

import {
  SearchBarWrapper,
  LocationListWrapper,
  SearchInput,
  ClearSearch,
  Empty,
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
        data-testid='search-location'
        placeholder='Search Location'
        onChange={onSearching}
        value={searchValue}
      />

      {isLoading
        ? <Loader />
        : searchValue ? (
          <ClearSearch
            className='search-reset'
            onClick={() => setSearchValue('')}
          >
            x
          </ClearSearch>
        ) : <Empty />
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

export default memo(SearchBar);
