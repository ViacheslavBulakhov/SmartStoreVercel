import { useParams } from 'react-router-dom';
import Main from '../../components/Main/Main';
import { Aside } from '../../components/SharedLayoutForGoodsComponents/aside/Aside';
import styled from 'styled-components';
import GoodsListByNestedId from '../../components/Goods/GoodsListByNestedId/GoodsListByNestedId';
import NamedGoodsList from '../../components/Goods/NamedGoodsList/NamedGoodsList';
import { useEffect } from 'react';
import { useStore } from '../../zustand/store';
import { stringNormalize } from '../../utils';

const GoodsSection = styled.section`
  margin-top: 10px;
  padding: 15px;
  background-color: var(--colors-ui-base);
`;

const CoodsWrap = styled.div`
  display: flex;
`;

export const SharedLayoutForGoods = () => {
  let { goodsName, id, nestedId } = useParams();

  const { setCurrentGoods } = useStore();
  const goods = useStore(state => state.goods);

  const isNamedGoodsList = goodsName && !id && !nestedId;
  const isGoodsListById = id && !nestedId;

  useEffect(() => {
    const checkArr = ['чохли', 'скло', 'навушники'];
    const typeOrBrand = checkArr.includes(stringNormalize(goodsName));

    const filterById = () =>
      goods.filter(item => {
        const isCategories =
          stringNormalize(item.categories) === stringNormalize(goodsName);

        const isBrand = typeOrBrand
          ? stringNormalize(item.brand) === stringNormalize(id)
          : stringNormalize(item.type) === stringNormalize(id);

        return isCategories && isBrand;
      });

    const filterByNestedId = () => {
      return goods.filter(item =>
        stringNormalize(item.categories) === stringNormalize(goodsName) &&
        typeOrBrand
          ? stringNormalize(item.brand) === stringNormalize(id)
          : stringNormalize(item.type) === stringNormalize(id) &&
            stringNormalize(item.model) === stringNormalize(nestedId)
      );
    };

    isNamedGoodsList &&
      setCurrentGoods([
        ...goods.filter(
          item =>
            stringNormalize(item.categories) === stringNormalize(goodsName)
        ),
      ]);

    isGoodsListById && setCurrentGoods(filterById());

    nestedId && setCurrentGoods(filterByNestedId());
  }, [goods, goodsName, id, nestedId]);

  return (
    <GoodsSection>
      <Main>
        <CoodsWrap>
          {!isGoodsListById && <Aside goodsName={goodsName} />}
          {isNamedGoodsList && <GoodsListByNestedId />}
          {isGoodsListById && <NamedGoodsList name={goodsName} />}
          {nestedId && <GoodsListByNestedId />}
        </CoodsWrap>
      </Main>
    </GoodsSection>
  );
};

export default SharedLayoutForGoods;
