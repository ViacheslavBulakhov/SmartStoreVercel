import { CategoriesList, SectionWrap } from './SharedLayoutStyled';
import Header from '../components/Header/Header';

import { Suspense, useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import { Outlet } from 'react-router-dom';
import { Container } from '../components/Container';
import SearchBox from '../components/SearchBox/SearchBox';
import CatalogueDropDown from '../components/DropDown/CatalogueDropDown/CatalogueDropDown';
import Dropdown from '../components/DropDown/DropDown';

import { Toaster } from 'react-hot-toast';
import { useStore } from '../zustand/store';

const categories = [
  'Чохли',
  'Скло',
  'Навушники',
  'Інші Аксесуари',
  'Побутова Техніка',
  "Краса та Здоров'я",
  'Посуд та товари для дому',
];

const SharedLayout = () => {
  const { getGoods } = useStore();
  // const data = useStore(state => state.goods);
  // const categories = data.map(item => item.categories);
  useEffect(() => {
    getGoods();
  }, []);

  return (
    <>
      <Header />
      <Toaster />
      <Container>
        <SectionWrap>
          <SearchBox />

          <nav>
            <CategoriesList>
              <CatalogueDropDown />
              {categories.map(item => (
                <Dropdown key={item} name={item} />
              ))}
            </CategoriesList>
          </nav>
        </SectionWrap>
      </Container>
      <Suspense
        fallback={
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <HashLoader
              color="green"
              loading="true"
              size={155}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
