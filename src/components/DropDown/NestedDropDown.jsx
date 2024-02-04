import { useEffect, useRef } from 'react';
import { NestedDropdownItem, NestedDropdownList } from './NestedDropDownStyled';
import { NavLink } from 'react-router-dom';

const NestedDropdown = ({ item, name }) => {
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

  const testArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ];

  return (
    <NestedDropdownList
      className="nested-dropdown-content"
      id={name}
      ref={containerRef}
    >
      {testArr.map((number, index) => (
        <NestedDropdownItem key={index}>
          <NavLink to={`/goods/${name.replace(/\s/g, '')}/${item}/${number}`}>
            {name} {item} {number}
          </NavLink>
        </NestedDropdownItem>
      ))}
    </NestedDropdownList>
  );
};

export default NestedDropdown;
