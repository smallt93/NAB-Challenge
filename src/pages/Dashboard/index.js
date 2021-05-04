import React, { memo, useState, useEffect, useReducer } from 'react';

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
  const [searchValue, setSearchValue] = useState({
    value: '',
    trigger: false,
  });
  const [searchValueDb, setSearchValueDb] = useState(searchValue.value);
  const [activeId, setActiveId] = useState(0);
  const [{
    locationList,
    curLocation,
    isLoading,
    isSearching,
    isLoadWeather,
  }, dispatch] = useReducer(reducer, initialState);

  // Handle debounce search value
  useEffect(() => {
    const debounce = setTimeout(() => {
      setSearchValueDb(searchValue.value);
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchValue.value]);

  useEffect(() => {
    if (searchValueDb && searchValue.trigger) {
      fetchLocationList(dispatch, searchValueDb);
    } else {
      resetLocationList(dispatch);
    }
  }, [searchValueDb, searchValue.trigger]);

  const handleSearching = (e) => {
    setSearchValue({
      value: e.target.value,
      trigger: true,
    });
  };

  const handleSelectedItem = (item) => {
    setSearchValue({
      value: item.title,
      trigger: false, 
    });
    setActiveId(item.woeid);
    updateSearchingStatus(dispatch, false);
    fetchLocationSelected(dispatch, item.woeid);
  };

  const onResetCurLocation = () => {
    setSearchValue({
      value: '',
      trigger: false, 
    });
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
            onResetLocationList={() => resetLocationList(dispatch)}
            isSearching={isSearching}
            isLoading={isLoading}
            locationList={locationList}
            activeId={activeId}
            searchValue={searchValue.value}
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
