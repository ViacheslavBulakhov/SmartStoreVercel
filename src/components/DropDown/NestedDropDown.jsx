import { useRef } from 'react';
import {
  NestedDropdownContent,
  NestedDropdownLink,
} from './NestedDropDownStyled';
import { NavLink } from 'react-router-dom';

const NestedDropdown = ({ item, name }) => {
  const containerRef = useRef(null);

  const handleScroll = event => {
    const container = containerRef.current;
    container.scrollLeft += event.deltaY;
    event.preventDefault();
  };
  const testArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ];

  return (
    <NestedDropdownContent
      className="nested-dropdown-content"
      id={name}
      ref={containerRef}
      onWheel={handleScroll}
    >
      {testArr.map((number, index) => (
        <NestedDropdownLink key={index}>
          <NavLink to={`/goods/${name.replace(/\s/g, '')}/${item}/${number}`}>
            {name} {item} {number}
          </NavLink>
        </NestedDropdownLink>
      ))}
    </NestedDropdownContent>
  );
};

export default NestedDropdown;
