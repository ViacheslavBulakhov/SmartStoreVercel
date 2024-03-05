import styled from 'styled-components';
import GoodsCardById from './GoodsCardById';
import { useStore } from '../../../zustand/store';
import { useEffect, useState } from 'react';
import { stringNormalize } from '../../../utils';

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 1023px) {
    justify-content: center;
  }
`;

const CardListWrap = styled.div`
  @media (min-width: 1024px) {
    flex: 0 0 75%;
    maxwidth: 75%;
  }
`;

// фільтрація списку === відображаються тільки ті товари які відповідають всим обраним фільтрам
// const GoodsListByNestedId = () => {
//   const [filteredData, setFilteredData] = useState([]);
//   const goods = useStore(state => state.currentList);
//   const { rangeValues, checkBox } = useStore(state => state.filters);

//   useEffect(() => {
//     setFilteredData(goods);
//   }, [goods]);

//   useEffect(() => {
//     if (!rangeValues) return;

//     const filteredDataByAmount = goods.filter(item => {
//       const amount = parseFloat(item.amount);
//       const [min, max] = rangeValues.map(parseFloat);

//       return amount >= min && amount <= max;
//     });

//     setFilteredData(filteredDataByAmount);
//   }, [rangeValues, goods]);

//   useEffect(() => {
//     if (checkBox.length === 0) {
//       setFilteredData(goods);
//       return;
//     }

//     const filterDataByCheckBox = () => {
//       const filteredDataByCheckBox = goods.filter(item =>
//         checkBox.every(check =>
//           item.filters.some(
//             filter => stringNormalize(filter.value) === stringNormalize(check)
//           )
//         )
//       );

//       setFilteredData(filteredDataByCheckBox);
//     };

//     filterDataByCheckBox();
//   }, [checkBox, goods]);

//   return (
//     <div style={{ flex: '0 0 75%', maxWidth: '75%' }}>
//       <CardList>
//         {filteredData.length > 0 &&
//           filteredData.map(item => (
//             <GoodsCardById data={item} key={item._id} />
//           ))}
//       </CardList>
//     </div>
//   );
// };

// фільтрація списку === якщо хоч один із пунктів відповідає товару то від буде відображений
const GoodsListByNestedId = () => {
  const [filteredData, setFilteredData] = useState([]);
  const goods = useStore(state => state.currentList);
  const { rangeValues, checkBox } = useStore(state => state.filters);

  useEffect(() => {
    setFilteredData(goods);
  }, [goods]); // Оновлено для відстеження змін goods

  useEffect(() => {
    if (!rangeValues && checkBox.length === 0) {
      setFilteredData(goods); // Повертаємо повний список товарів, якщо всі фільтри зняті
      return;
    }

    const filteredDataByAmount = goods.filter(item => {
      const amount = parseFloat(item.amount);
      const [min, max] = rangeValues.map(parseFloat);

      return amount >= min && amount <= max;
    });

    setFilteredData(filteredDataByAmount);
  }, [rangeValues, goods, checkBox]); // Оновлено для відстеження змін rangeValues, goods і checkBox

  useEffect(() => {
    if (checkBox.length === 0) return;

    const filterDataByCheckBox = () => {
      const filteredDataByCheckBox = goods.filter(item =>
        item.filters.some(filter =>
          checkBox.some(
            check => stringNormalize(filter.value) === stringNormalize(check)
          )
        )
      );

      setFilteredData(filteredDataByCheckBox);
    };

    filterDataByCheckBox();
  }, [checkBox, goods]); // Оновлено для відстеження змін checkBox і goods

  return (
    <CardListWrap>
      <CardList>
        {filteredData.length > 0 &&
          filteredData.map(item => (
            <GoodsCardById data={item} key={item._id} />
          ))}
      </CardList>
    </CardListWrap>
  );
};

export default GoodsListByNestedId;
