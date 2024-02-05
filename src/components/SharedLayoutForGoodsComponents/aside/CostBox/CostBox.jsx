import { useState } from 'react';
import RangeSlider from '../Range/RangeSlider';
import { InputsWrap } from './CostBoxStyled';
import { FiltersItemWrap } from '../../../Filters/AsideFiltersItemStyled';

const CostBox = () => {
  const [rangeValues, setRangeValues] = useState([
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * (10000 - 7000 + 1)) + 7000,
  ]);
  return (
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
      <RangeSlider rangeValues={rangeValues} setRangeValues={setRangeValues} />
    </FiltersItemWrap>
  );
};

export default CostBox;
