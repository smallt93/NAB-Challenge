import React, { memo, useState, useEffect, useReducer } from 'react';
import { useDebounce } from 'utils/useDebounce';

import Loader from 'components/Loader';
import SearchBar from 'components/SearchBar';
import WeatherInfor from 'containers/WeatherInfor';
import { WeatherInforWrapper } from 'containers/WeatherInfor/WeatherInfor.styles';

import { reducer, initialState } from 'store/reducer';
import {
  fetchLocationList,
  fetchLocationSelected,
  updateSearchingStatus,
  resetLocationList,
  resetCurLocationSelected,
} from 'store/methods';
import {
  DashboardContainer,
  DashboardWrapper,
  SearchWrapper
} from './Dashboard.styles';
import background from 'assets/images/world-map.jpg';

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeId, setActiveId] = useState(0);
  const searchValueDb = useDebounce(searchValue, 500);
  const [{
    locationList,
    curLocation,
    isLoading,
    isSearching,
    isLoadWeather,
  }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (searchValueDb) {
      fetchLocationList(dispatch, searchValueDb);
    } else {
      resetLocationList(dispatch);
    }
  }, [searchValueDb]);

  const handleSearching = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSelectedItem = (item) => {
    setSearchValue('');
    setActiveId(item.woeid);
    updateSearchingStatus(dispatch, false);
    fetchLocationSelected(dispatch, item.woeid);
  };

  const onResetCurLocation = () => {
    resetCurLocationSelected(dispatch);
  }

  return (
    <DashboardContainer bg={background}>
      <DashboardWrapper>
        <SearchWrapper>
          <SearchBar
            onSearching={handleSearching}
            onSelectedItem={handleSelectedItem}
            setSearchValue={setSearchValue}
            setActiveId={setActiveId}
            isSearching={isSearching}
            isLoading={isLoading}
            locationList={locationList}
            activeId={activeId}
            searchValue={searchValue}
          />
        </SearchWrapper>

        {isLoadWeather
          ? (
            <WeatherInforWrapper>
              <Loader size='large' />
            </WeatherInforWrapper>
          ) : ( curLocation && (
              <WeatherInfor
                data={curLocation}
                onResetCurLocation={onResetCurLocation}
              />
            )
          ) 
        }

      </DashboardWrapper>
    </DashboardContainer>
  );
};

export default memo(Dashboard);
