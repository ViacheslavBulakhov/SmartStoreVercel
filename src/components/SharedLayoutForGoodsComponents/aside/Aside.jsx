/* eslint-disable react/prop-types */
import AsideFiltersItem from '../../Filters/AsideFiltersItem';
import CostBox from './CostBox/CostBox';
import { useStore } from '../../../zustand/store';

export const Aside = ({ goodsName }) => {
  const goods = useStore(state => state.currentList);

  const filtersData = goods
    .flatMap(item => item.filters)
    .map(item => item.name.trim());

  const uniqueFilters = filtersData.filter(
    (filter, index, array) => array.indexOf(filter) === index
  );

  return (
    <aside
      style={{
        width: '25%',
        marginRight: '20px',
        flex: '0 0 25%',
        maxWidth: '25%',
      }}
    >
      <ul>
        <CostBox />
        {uniqueFilters.map(item => (
          <AsideFiltersItem key={item} name={item} />
        ))}
      </ul>
    </aside>
  );
};
