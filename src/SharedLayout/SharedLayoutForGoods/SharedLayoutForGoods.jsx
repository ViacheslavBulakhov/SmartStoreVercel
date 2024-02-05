import { useParams } from 'react-router-dom';
import Main from '../../components/Main/Main';
import { Aside } from '../../components/SharedLayoutForGoodsComponents/aside/Aside';
import styled from 'styled-components';
import GoodsListByNestedId from '../../components/Goods/GoodsListByNestedId/GoodsListByNestedId';
import GoodsListById from '../../components/Goods/GoodsListById/GoodsListById';
import NamedGoodsList from '../../components/Goods/NamedGoodsList/NamedGoodsList';

const GoodsSection = styled.section`
  display: flex;
  margin-top: 10px;
  padding: 15px;
  background-color: var(--colors-ui-base);
`;

export const SharedLayoutForGoods = () => {
  let { goodsName, id, nestedId } = useParams();
  console.log(goodsName, id, nestedId);

  const isNamedGoodsList = goodsName && !id && !nestedId;
  const isGoodsListById = id && !nestedId;

  return (
    <GoodsSection>
      <Main>
        <div>
          <Aside />
          {isNamedGoodsList && <NamedGoodsList name={goodsName} />}
          {isGoodsListById && <GoodsListById />}
          {nestedId && <GoodsListByNestedId />}
        </div>
      </Main>
    </GoodsSection>
  );
};

export default SharedLayoutForGoods;
