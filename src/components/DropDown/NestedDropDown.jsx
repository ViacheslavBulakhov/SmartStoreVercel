/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { NestedDropdownItem, NestedDropdownList } from './NestedDropDownStyled';
import { NavLink } from 'react-router-dom';
import { stringNormalize } from '../../utils';

const NestedDropdown = ({ data, brand, item, name }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = event => {
      containerRef.current.scrollLeft += event.deltaY * 0.3;
      event.preventDefault();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const filtersData = data.filter(
    item => stringNormalize(item.brand) === stringNormalize(brand)
  );

  return (
    <NestedDropdownList
      className="nested-dropdown-content"
      id={name}
      ref={containerRef}
    >
      {filtersData.map(item => (
        <NestedDropdownItem key={item._id}>
          <NavLink
            to={stringNormalize(
              `/goods/${item.categories}/${item.brand}/${item.model}`
            )}
          >
            {item.brand} {item.model}
          </NavLink>
        </NestedDropdownItem>
      ))}
    </NestedDropdownList>
  );
};

export default NestedDropdown;
