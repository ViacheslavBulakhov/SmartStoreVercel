import { useParams } from 'react-router-dom';
import Main from '../../components/Main/Main';
import { Aside } from '../../components/SharedLayoutForGoodsComponents/aside/Aside';
import styled from 'styled-components';

const GoodsSection = styled.section`
  display: flex;
  margin-top: 10px;
  padding: 15px;
  background-color: var(--colors-ui-base);
`;

export const SharedLayoutForGoods = () => {
  let { goodsName, id, nestedId } = useParams();
  console.log(goodsName, id, nestedId);

  return (
    <GoodsSection>
      <Aside />
      <Main>
        <h1>Test Page</h1>
        {goodsName ? <h1>{goodsName}</h1> : <h1>All goods</h1>}
        {id && <h1>{id}</h1>}
        {nestedId && <h1>{nestedId}</h1>}
      </Main>
    </GoodsSection>
  );
};

export default SharedLayoutForGoods;
