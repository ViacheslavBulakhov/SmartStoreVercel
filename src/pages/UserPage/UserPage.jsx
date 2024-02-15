/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from 'react-router-dom';
import { useStore } from '../../zustand/store';

import FavoriteCard from '../../components/UserComponent/FavoriteCard';
import { useEffect } from 'react';

const UserPage = () => {
  const user = useStore(state => state.auth.user);
  const navigate = useNavigate();

  const goods = useStore(state => state.goods);
  const filteredByFavorites = goods.filter(item =>
    item.favorites.includes(user?.id)
  );

  useEffect(() => {
    if (!user) navigate('/');
  }, []);

  return (
    user && (
      <div>
        <div>
          <p>
            Мій номер:
            <span>{user.number}</span>
          </p>
          <p>
            Mоя знижка:
            <span>{user.personalDiscount}</span>
          </p>
        </div>
        <div>
          <h2>Мої закладки</h2>
          <ul>
            {filteredByFavorites.map(item => (
              <li key={item._id}>
                <FavoriteCard item={item} />
              </li>
            ))}
          </ul>
        </div>

        {user.role === 'admin' && <NavLink to={'/admin'}>Go to Admin</NavLink>}
      </div>
    )
  );
};

export default UserPage;
