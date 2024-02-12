import styled from 'styled-components';
import GoodsCardById from './GoodsCardById';
import { useStore } from '../../../zustand/store';
import { useEffect, useState } from 'react';
import { stringNormalize } from '../../../utils';

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const GoodsListByNestedId = () => {
  const [filteredData, setFilteredData] = useState([]);
  const goods = useStore(state => state.goods);
  const { rangeValues, checkBox } = useStore(state => state.filters);

  useEffect(() => {
    setFilteredData(goods);
  }, []);

  useEffect(() => {
    if (!rangeValues) return;
    const filteredDataByAmount = (minMax = null) => {
      const withFilter = goods.filter(item => {
        const amount = parseFloat(item.amount);
        const [min, max] = minMax.map(parseFloat);

        return amount >= min && amount <= max;
      });

      setFilteredData(withFilter);
    };

    checkBox.length === 0 && filteredDataByAmount(rangeValues);
  }, [rangeValues, goods, checkBox]);

  useEffect(() => {
    if (checkBox.length === 0) return;

    const filterDataByCheckBox = check => {
      const filteredDataByCheckBox = filteredData.filter(item =>
        item.filters.some(
          filter => stringNormalize(filter.value) === stringNormalize(check)
        )
      );

      setFilteredData(filteredDataByCheckBox);
    };

    checkBox.map(item => filterDataByCheckBox(item));
  }, [checkBox]);

  return (
    <div style={{ flex: '0 0 75%', maxWidth: '75%' }}>
      <CardList>
        {goods.length > 0 &&
          filteredData.map(item => (
            <GoodsCardById data={item} key={item._id} />
          ))}
      </CardList>
    </div>
  );
};

export default GoodsListByNestedId;
