import { useEffect } from 'react';

import { useGoods } from '../../zustand/store';

import Card from './AdminComponent/Card';
import styled from 'styled-components';
import GoodForm from './AdminComponent/GoodForm';

const AdminList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const AdminPage = () => {
  const { setGoods } = useGoods();

  const goods = useGoods(state => state.goods);

  useEffect(() => {
    setGoods();
  }, []);

  return (
    // <AdminList>
    //   {goods.length && goods.map(item => <Card key={item._id} data={item} />)}
    // </AdminList>
    <GoodForm />
  );
};

export default AdminPage;
