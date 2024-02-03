import { useParams } from 'react-router-dom';
import Main from '../../Main/Main';
import { Aside } from '../../SharedLayoutForGoodsComponents/aside/Aside';

export const SharedLayoutForGoods = () => {
  let { goodsName, id, nestedId } = useParams();
  console.log(goodsName, id, nestedId);

  return (
    <section>
      <h1>Test Page</h1>
      {goodsName ? <h1>{goodsName}</h1> : <h1>All goods</h1>}
      {id && <h1>{id}</h1>}
      {nestedId && <h1>{nestedId}</h1>}
      <Aside />
      <Main />
    </section>
  );
};

export default SharedLayoutForGoods;
