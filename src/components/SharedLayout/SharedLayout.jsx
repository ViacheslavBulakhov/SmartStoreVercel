import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { HashLoader } from "react-spinners";
import { SearchBox, SectionWrap } from "./SharedLayoutStyled";
import Header from "../Header/Header";
import { Container } from "../Container";
import { Aside } from "./aside/Aside";
import Search from "../Filters/SearchInput/Search";
import { FaShoppingCart } from "react-icons/fa";
import ShopingCartBox from "../ShopingCartBox/ShopingCartBox";
import { CategoriesList } from "./aside/AsideStyled";
import Dropdown from "../DropDown/DropDown";
import { SalesPosts } from "../SalesPosts/SalesPosts";

const categories = [
  "Чохли",
  "Скло",
  "Навушники",
  "Інші Аксесуари",
  "Побутова Техніка",
  "Краса та Здоров'я",
  "Посуд та товари для дому",
];

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <SearchBox>
          <Search />
          <ShopingCartBox />
        </SearchBox>

        <SectionWrap>
          <Aside />
          <CategoriesList>
            {categories.map((item) => (
              <Dropdown key={item} name={item} />
            ))}
          </CategoriesList>
          <SalesPosts />
          <main>
            <Suspense
              fallback={
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
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
          </main>
        </SectionWrap>
      </Container>
    </>
  );
};
export default SharedLayout;
