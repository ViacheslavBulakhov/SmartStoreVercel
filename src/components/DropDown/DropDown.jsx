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

  const uniqueFilters = categoriesData
    .map(item => item.brand)
    .filter((filter, index, array) => array.indexOf(filter) === index);

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
          {uniqueFilters.map(item => (
            <DropdownItem key={item}>
              <NavLink to={`/goods/${stringNormalize(name)}/${item}`}>
                {name} {item}
              </NavLink>
              <NestedDropdown data={categoriesData} brand={item} name={name} />
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownItemContainer>
  );
};

export default Dropdown;
