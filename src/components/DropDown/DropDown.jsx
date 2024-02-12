import { useState } from 'react';
import {
  DropdownItem,
  DropdownItemContainer,
  DropdownList,
} from './DropDownStyled';
import NestedDropdown from './NestedDropDown';

import { NavLink } from 'react-router-dom';
import { useStore } from '../../zustand/store';
import { stringNormalize } from '../../utils';

const Dropdown = ({ name }) => {
  const [showContent, setShowContent] = useState(false);

  const data = useStore(state => state.goods);

  const categoriesData = data.filter(
    item => stringNormalize(item.categories) === stringNormalize(name)
  );

  const handleHoverEnter = () => {
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  const handleHoverLeave = () => {
    setTimeout(() => {
      setShowContent(false);
    }, 100);
  };

  return (
    <DropdownItemContainer
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <NavLink to={`/goods/${stringNormalize(name)}`}>{name}</NavLink>

      {showContent && categoriesData.length > 0 && (
        <DropdownList className="dropdown-content">
          {categoriesData.map(item => (
            <DropdownItem key={item._id}>
              <NavLink to={`/goods/${stringNormalize(name)}/${item.brand}`}>
                {name} {item.brand}
              </NavLink>
              <NestedDropdown
                data={categoriesData}
                brand={item.brand}
                name={name}
              />
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownItemContainer>
  );
};

export default Dropdown;
