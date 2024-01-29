/* eslint-disable react/prop-types */
import { useState } from "react";
import { CategoriesItem, CategoriesList } from "./AsideStyled";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

const categories = [
  "Чохли",
  "Скло",
  "Навушники",
  "Інші Аксесуари",
  "Побутова Техніка",
  "Краса та Здоров'я",
  "Посуд та товари для дому",
];

const testCategories = ["test1", "test2", "test3", "test4", "test5"];

const CategoriesItems = ({ item }) => {
  const [isArrow, setIsArrow] = useState(true);
  return (
    <CategoriesItem onClick={() => setIsArrow((prev) => !prev)}>
      {isArrow ? <FaArrowRight size="10px" /> : <FaArrowDown size="10px" />}
      {`${item}`}
      {!isArrow && (
        <ul>
          {testCategories.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </CategoriesItem>
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
