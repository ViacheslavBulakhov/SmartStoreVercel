import { useState } from 'react';
import {
  DropdownContainer,
  DropdownContent,
  DropdownLink,
  DropdownTitle,
} from './DropDownStyled';
import NestedDropdown from './NestedDropDown';

import { NavLink } from 'react-router-dom';

const dropArr = ['Iphone', 'Samsung', 'Nokia', 'Philips', 'Other'];

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
    <DropdownContainer
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <NavLink to={`/goods/${name.replace(/\s/g, '')}`}>
        <DropdownTitle>{name}</DropdownTitle>
        {showContent && (
          <DropdownContent className="dropdown-content">
            {dropArr.map(item => (
              <DropdownLink key={item}>
                <NavLink to={`/goods/${name.replace(/\s/g, '')}/${item}`}>
                  {name} {item}
                  <NestedDropdown item={item} name={name} />
                </NavLink>
              </DropdownLink>
            ))}
          </DropdownContent>
        )}
      </NavLink>
    </DropdownContainer>
  );
};

export default Dropdown;
