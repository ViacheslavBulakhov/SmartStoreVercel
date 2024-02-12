import styled from 'styled-components';
import GoodsCardById from './GoodsCardById';
import { useStore } from '../../../zustand/store';

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const GoodsListByNestedId = () => {
  const goods = useStore(state => state.currentList);
  return (
    <div style={{ flex: '0 0 75%', maxWidth: '75%' }}>
      <CardList>
        {goods.length > 0 &&
          goods.map(item => <GoodsCardById data={item} key={item._id} />)}
      </CardList>
    </div>
  );
};

export default GoodsListByNestedId;
