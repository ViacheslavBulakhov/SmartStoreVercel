import { IoSearch } from 'react-icons/io5';
import { SearchInput, SearchInputWrap } from './SerachStyled';
import { useStore } from '../../../zustand/store';

const Search = () => {
  const search = useStore(state => state.filters.search);
  const setSearchFilter = useStore(state => state.setSearchFilter);

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
