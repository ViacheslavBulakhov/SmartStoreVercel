import { useState } from 'react';
import {
  DropdownItem,
  DropdownItemContainer,
  DropdownList,
} from './DropDownStyled';
import NestedDropdown from './NestedDropDown';

import { NavLink } from 'react-router-dom';

export const dropArr = ['Iphone', 'Samsung', 'Nokia', 'Philips', 'Other'];

const Dropdown = ({ name }) => {
  const [showContent, setShowContent] = useState(false);

  const handleHoverEnter = () => {
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  const handleHoverLeave = () => {
    setTimeout(() => {
      setShowContent(false);
    }, 300);
  };

  return (
    <DropdownItemContainer
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <NavLink to={`/goods/${name.replace(/\s/g, '')}`}>{name}</NavLink>

      {showContent && (
        <DropdownList className="dropdown-content">
          {dropArr.map(item => (
            <DropdownItem key={item}>
              <NavLink to={`/goods/${name.replace(/\s/g, '')}/${item}`}>
                {name} {item}
              </NavLink>
              <NestedDropdown item={item} name={name} />
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownItemContainer>
  );
};

export default Dropdown;
