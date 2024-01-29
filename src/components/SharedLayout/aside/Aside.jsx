/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  CategoriesItem,
  CategoriesList,
  SubСategoriesList,
} from "./AsideStyled";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { BsArrowReturnRight } from "react-icons/bs";

const categories = [
  "Чохли",
  "Скло",
  "Навушники",
  "Інші Аксесуари",
  "Побутова Техніка",
  "Краса та Здоров'я",
  "Посуд та товари для дому",
];

const subСategories = ["test1", "test2", "test3", "test4", "test5"];

const CategoriesItems = ({ item }) => {
  const [isArrow, setIsArrow] = useState(true);
  const toggleArrow = () => {
    setIsArrow((prev) => !prev);
  };

  return (
    <div>
      <CategoriesItem onClick={toggleArrow}>
        {isArrow ? <FaArrowRight size="10px" /> : <FaArrowDown size="10px" />}
        {`${item}`}
      </CategoriesItem>
      {!isArrow && (
        <SubСategoriesList>
          {subСategories.map((item) => (
            <CategoriesItem key={item}>
              <BsArrowReturnRight />
              {item}
            </CategoriesItem>
          ))}
        </SubСategoriesList>
      )}
    </div>
  );
};

export const Aside = () => {
  return (
    <aside>
      <h3>Категорії</h3>
      <CategoriesList>
        {categories.map((item) => (
          <CategoriesItems key={item} item={item} />
        ))}
      </CategoriesList>
    </aside>
  );
};
