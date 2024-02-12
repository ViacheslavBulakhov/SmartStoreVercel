/* eslint-disable react/prop-types */
import { useStore } from '../../zustand/store';
import { CheckboxItem, FiltersItemWrap } from './AsideFiltersItemStyled';

const AsideFiltersItem = ({ name }) => {
  const goods = useStore(state => state.goods);

  const filtersData = goods
    .flatMap(item => item.filters)
    .filter(item => item.name.trim() === name.trim())
    .map(item => item.value);

  const uniqueFilters = filtersData.filter(
    (filter, index, array) => array.indexOf(filter) === index
  );

  const filteredCount = value =>
    goods
      .flatMap(item => item.filters)
      .map(item => ({ name: item.name.trim(), value: item.value.trim() }))
      .filter(item => item.name.trim() === name.trim() && item.value === value)
      .length;

  const handleCheckboxChange = (item, checked) => {
    console.log(
      `Checkbox "${item} ${name}" is ${checked ? 'checked' : 'unchecked'}`
    );
  };

  return (
    <FiltersItemWrap>
      <h3>{name}</h3>
      <ul>
        {uniqueFilters.map(item => (
          <CheckboxItem key={item}>
            <input
              type="checkbox"
              id={`${item}`}
              onChange={e => handleCheckboxChange(item, e.target.checked)}
            />
            <label htmlFor={`${item}`}>{`${item}`}</label>
            <span>{filteredCount(item)}</span>
          </CheckboxItem>
        ))}
      </ul>
    </FiltersItemWrap>
  );
};

export default AsideFiltersItem;
