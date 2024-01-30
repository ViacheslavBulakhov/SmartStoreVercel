import { CategoriesList } from "./AsideStyled";
import Dropdown from "../../DropDown/DropDown";

const categories = [
  "Чохли",
  "Скло",
  "Навушники",
  "Інші Аксесуари",
  "Побутова Техніка",
  "Краса та Здоров'я",
  "Посуд та товари для дому",
];

export const Aside = () => {
  return (
    <aside>
      <h3 className="asd">Категорії</h3>

      <CategoriesList>
        {categories.map((item) => (
          <Dropdown key={item} name={item} />
        ))}
      </CategoriesList>
    </aside>
  );
};
