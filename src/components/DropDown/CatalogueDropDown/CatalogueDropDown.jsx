import { GiHamburgerMenu } from 'react-icons/gi';
import { DropdownItemContainer } from '../DropDownStyled';
import { useState } from 'react';
import {
  CatalougeList,
  Catalougeitem,
  SubparagraphList,
} from './CatalogueDropDownStyled';
import { NavLink } from 'react-router-dom';

const testArr = [
  'Чохли',
  'Скло',
  'Навушники',
  'Інші Аксесуари',
  'Побутова Техніка',
  "Краса та Здоров'я",
  'Посуд та товари для дому',
];

const testArr2 = [
  'Lorem ipsum',
  'Aliquam nobis',
  'Ad enim temp',
  'Placeat expedita',
  'Delectus numquam',
];

const CatalogueDropDown = () => {
  const [showContent, setShowContent] = useState(false);

  const handleHoverEnter = () => {
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  const handleHoverLeave = () => {
    if (showContent)
      setTimeout(() => {
        setShowContent(false);
      }, 300);
  };

  const handleCloseList = e => {
    if (e.target === e.currentTarget) setShowContent(false);
  };

  return (
    <DropdownItemContainer
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <NavLink>
        <GiHamburgerMenu style={{ marginRight: '10px' }} size={'20px'} />
        Каталог
      </NavLink>

      {showContent && (
        <CatalougeList onClick={handleCloseList}>
          {testArr.map(name => (
            <Catalougeitem key={name}>
              <NavLink to={`/goods/${name}`}>
                <img
                  src="https://picsum.photos/100/100"
                  alt=""
                  width="100px"
                  height="100px"
                />
                <h4>{name}</h4>
              </NavLink>
              <SubparagraphList>
                {testArr2.map(item => (
                  <li key={item}>
                    <NavLink to={`/goods/${name}/${item}`}>{item}</NavLink>
                  </li>
                ))}
              </SubparagraphList>
            </Catalougeitem>
          ))}
        </CatalougeList>
      )}
    </DropdownItemContainer>
  );
};

export default CatalogueDropDown;
