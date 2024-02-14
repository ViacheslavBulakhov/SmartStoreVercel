import { useEffect } from 'react';

import { useStore } from '../../zustand/store';

import styled from 'styled-components';
import Card from '../../components/AdminComponent/Card';
import GoodForm from '../../components/AdminComponent/AddGoodsForm/GoodForm';
import { useNavigate } from 'react-router-dom';

const AdminList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const AdminPage = () => {
  const { getGoods } = useStore();

  const goods = useStore(state => state.goods);

  const isLoggedIn = useStore(state => state.auth.isLoggedIn);
  const role = useStore(state => state.auth.user.role);
  const navigate = useNavigate();

  useEffect(() => {
    if ((!isLoggedIn && role === 'user') || role !== 'admin') {
      navigate('/');
    }
  }, [isLoggedIn, navigate, role]);

  useEffect(() => {
    getGoods();
  }, []);

  return (
    <>
      <GoodForm />
      <AdminList>
        {goods.length && goods.map(item => <Card key={item._id} data={item} />)}
      </AdminList>
    </>
  );
};

export default AdminPage;
