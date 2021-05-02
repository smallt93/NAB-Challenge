import React from "react";
import { DropdownWrapper, DropdownItem } from './Dropdown.styles';

const Dropdown = ({
  data = [],
  activeId = 0,
  onSelectedItem = () => {},
  setActiveId = () => {},
}) => {
  const onFocusIn = (locationId) => {
    setActiveId(locationId)
  }

  const onFocusOut = () => {
    setActiveId(0)
  }

  return (
    <DropdownWrapper>
      {data.map((item) => (
        <DropdownItem
          key={item.woeid}
          onClick={() => onSelectedItem(item)}
          onMouseOver={() => onFocusIn(item.woeid)}
          onMouseOut={onFocusOut}
          active={activeId === item.woeid}
        >
          {item.title}
        </DropdownItem>
      ))}
    </DropdownWrapper>
  );
};

export default Dropdown;
