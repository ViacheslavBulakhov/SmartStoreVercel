/* eslint-disable react/prop-types */

import RangeSlider from '../Range/RangeSlider';
import { InputsWrap } from './CostBoxStyled';
import { FiltersItemWrap } from '../../../Filters/AsideFiltersItemStyled';
import { useEffect, useState } from 'react';
import { useStore } from '../../../../zustand/store';

const CostBox = () => {
  const goods = useStore(state => state.goods);
  const { rangeValues } = useStore(state => state.filters);
  const { setRangeValues } = useStore();

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
            onChange={e =>
              setRangeValues([Number(e.target.value), rangeValues[1]])
            }
          />

          <span>-</span>

          <input
            type="number"
            autoComplete="off"
            aria-label="Ціна"
            value={rangeValues[1]}
            onChange={e =>
              setRangeValues([rangeValues[0], Number(e.target.value)])
            }
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
