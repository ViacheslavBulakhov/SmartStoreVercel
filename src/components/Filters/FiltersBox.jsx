import { FiltersBoxWrap } from "./FiltersBoxStyled";
import Search from "./SearchInput/Search";
import CustomSelect from "./Custom select/CustomSelect";

const FiltersBox = () => {
  return (
    <FiltersBoxWrap>
      <Search />
      <CustomSelect />
    </FiltersBoxWrap>
  );
};

export default FiltersBox;
