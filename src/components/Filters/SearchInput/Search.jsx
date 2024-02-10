import { IoSearch } from 'react-icons/io5';
import { SearchInput, SearchInputWrap } from './SerachStyled';
import { useGoods } from '../../../zustand/store';

const Search = () => {
  const search = useGoods(state => state.filters.search);
  const setSearchFilter = useGoods(state => state.setSearchFilter);

  return (
    <SearchInputWrap>
      <IoSearch />
      <SearchInput
        onChange={e => setSearchFilter(e.target.value)}
        value={search}
      />
    </SearchInputWrap>
  );
};

export default Search;
