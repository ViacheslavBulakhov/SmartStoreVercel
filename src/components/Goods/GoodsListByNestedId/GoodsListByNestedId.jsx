import styled from 'styled-components';
import GoodsCardById from './GoodsCardById';
import { useGoods } from '../../../zustand/store';

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const GoodsListByNestedId = () => {
  const goods = useGoods(state => state.goods);
  return (
    <div style={{ flex: '0 0 75%', maxWidth: '75%' }}>
      <CardList>
        {goods.length &&
          goods.map(item => <GoodsCardById data={item} key={item._id} />)}
      </CardList>
    </div>
  );
};

export default GoodsListByNestedId;
