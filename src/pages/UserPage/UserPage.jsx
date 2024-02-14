/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { useStore } from '../../zustand/store';

import FavoriteCard from '../../components/UserComponent/FavoriteCard';

const UserPage = () => {
  const { number, role, personalDiscount } = useStore(state => state.auth.user);

  const goods = useStore(state => state.goods);

  return (
    <div>
      <div>
        <p>
          Мій номер:
          <span>{number}</span>
        </p>
        <p>
          Mоя знижка:
          <span>{personalDiscount}</span>
        </p>
      </div>
      <div>
        <h2>Мої закладки</h2>
        <ul>
          {goods.map(item => (
            <li key={item._id}>
              <FavoriteCard item={item} />
            </li>
          ))}
        </ul>
      </div>

      {role === 'admin' && <NavLink to={'/admin'}>Go to Admin</NavLink>}
    </div>
  );
};

export default UserPage;
