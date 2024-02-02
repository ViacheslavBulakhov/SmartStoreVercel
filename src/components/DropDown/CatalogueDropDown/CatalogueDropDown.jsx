import { GiHamburgerMenu } from 'react-icons/gi';
import { DropdownContainer, DropdownTitle } from '../DropDownStyled';
import { useState } from 'react';
import {
  CatalougeList,
  Catalougeitem,
  SubparagraphList,
} from './CatalogueDropDownStyled';
import { NavLink } from 'react-router-dom';

const CatalogueDropDown = () => {
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
      <GiHamburgerMenu style={{ marginRight: '10px' }} size={'20px'} />
      <DropdownTitle>Каталог</DropdownTitle>
      {showContent && (
        <CatalougeList>
          <Catalougeitem>
            <NavLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="100px"
                height="100px"
              />
              <h4>Чохли</h4>
            </NavLink>
            <SubparagraphList>
              <li>
                <NavLink>Lorem ipsum</NavLink>
              </li>
              <li>
                <NavLink>Aliquam nobis</NavLink>
              </li>
              <li>
                <NavLink>Ad enim temp</NavLink>
              </li>
              <li>
                <NavLink>Placeat expedita</NavLink>
              </li>
              <li>
                <NavLink>Delectus numquam</NavLink>
              </li>
            </SubparagraphList>
          </Catalougeitem>

          <Catalougeitem>
            <NavLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="100px"
                height="100px"
              />
              <h4>Скло</h4>
            </NavLink>
            <SubparagraphList>
              <li>
                <NavLink>Lorem ipsum</NavLink>
              </li>
              <li>
                <NavLink>Aliquam nobis</NavLink>
              </li>
              <li>
                <NavLink>Ad enim temp</NavLink>
              </li>
              <li>
                <NavLink>Placeat expedita</NavLink>
              </li>
              <li>
                <NavLink>Delectus numquam</NavLink>
              </li>
            </SubparagraphList>
          </Catalougeitem>

          <Catalougeitem>
            <NavLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="100px"
                height="100px"
              />
              <h4>Навушники</h4>
            </NavLink>
            <SubparagraphList>
              <li>
                <NavLink>Lorem ipsum</NavLink>
              </li>
              <li>
                <NavLink>Aliquam nobis</NavLink>
              </li>
              <li>
                <NavLink>Ad enim temp</NavLink>
              </li>
              <li>
                <NavLink>Placeat expedita</NavLink>
              </li>
              <li>
                <NavLink>Delectus numquam</NavLink>
              </li>
            </SubparagraphList>
          </Catalougeitem>

          <Catalougeitem>
            <NavLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="100px"
                height="100px"
              />
              <h4>Інші Аксесуари</h4>
            </NavLink>
            <SubparagraphList>
              <li>
                <NavLink>Lorem ipsum</NavLink>
              </li>
              <li>
                <NavLink>Aliquam nobis</NavLink>
              </li>
              <li>
                <NavLink>Ad enim temp</NavLink>
              </li>
              <li>
                <NavLink>Placeat expedita</NavLink>
              </li>
              <li>
                <NavLink>Delectus numquam</NavLink>
              </li>
            </SubparagraphList>
          </Catalougeitem>

          <Catalougeitem>
            <NavLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="100px"
                height="100px"
              />
              <h4>Побутова Техніка</h4>
            </NavLink>
            <SubparagraphList>
              <li>
                <NavLink>Lorem ipsum .</NavLink>
              </li>
              <li>
                <NavLink>Aliquam nobis</NavLink>
              </li>
              <li>
                <NavLink>Ad enim</NavLink>
              </li>
              <li>
                <NavLink>Placeat expedita </NavLink>
              </li>
              <li>
                <NavLink>Delectus numquam </NavLink>
              </li>
            </SubparagraphList>
          </Catalougeitem>

          <Catalougeitem>
            <NavLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="100px"
                height="100px"
              />
              <h4>Краса та Здоров'я</h4>
            </NavLink>
            <SubparagraphList>
              <li>
                <NavLink>Lorem ipsum</NavLink>
              </li>
              <li>
                <NavLink>Aliquam nobis</NavLink>
              </li>
              <li>
                <NavLink>Ad enim temp</NavLink>
              </li>
              <li>
                <NavLink>Placeat expedita</NavLink>
              </li>
              <li>
                <NavLink>Delectus numquam</NavLink>
              </li>
            </SubparagraphList>
          </Catalougeitem>

          <Catalougeitem>
            <NavLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="100px"
                height="100px"
              />
              <h4>Посуд та товари для дому</h4>
            </NavLink>
            <SubparagraphList>
              <li>
                <NavLink>Lorem ipsum</NavLink>
              </li>
              <li>
                <NavLink>Aliquam nobis</NavLink>
              </li>
              <li>
                <NavLink>Ad enim temp</NavLink>
              </li>
              <li>
                <NavLink>Placeat expedita</NavLink>
              </li>
              <li>
                <NavLink>Delectus numquam</NavLink>
              </li>
            </SubparagraphList>
          </Catalougeitem>
        </CatalougeList>
      )}
    </DropdownContainer>
  );
};

export default CatalogueDropDown;
