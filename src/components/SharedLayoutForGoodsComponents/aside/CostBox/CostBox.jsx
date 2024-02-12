/* eslint-disable react/prop-types */
import RangeSlider from '../Range/RangeSlider';
import { InputsWrap } from './CostBoxStyled';
import { FiltersItemWrap } from '../../../Filters/AsideFiltersItemStyled';
import { useEffect, useState } from 'react';
import { useStore } from '../../../../zustand/store';

const CostBox = () => {
  const [rangeValues, setRangeValues] = useState(null);
  const goods = useStore(state => state.goods);

  useEffect(() => {
    function findMaxMin(arr) {
      if (!arr.length) return;
      setRangeValues([Math.min(...arr), Math.max(...arr)]);
    }
    const array = goods.map(item => Number(item.amount));
    findMaxMin(array);
  }, [goods]);

  return (
    rangeValues && (
      <FiltersItemWrap>
        <InputsWrap>
          <input
            type="number"
            autoComplete="off"
            aria-label="Ціна"
            value={rangeValues[0]}
            onChange={e => setRangeValues(prev => [e.target.value, prev[1]])}
          />

          <span>-</span>

          <input
            type="number"
            autoComplete="off"
            aria-label="Ціна"
            value={rangeValues[1]}
            onChange={e => setRangeValues(prev => [prev[0], e.target.value])}
          />

          <span>Грн</span>
        </InputsWrap>
        <RangeSlider
          rangeValues={rangeValues}
          setRangeValues={setRangeValues}
        />
      </FiltersItemWrap>
    )
  );
};

export default CostBox;
