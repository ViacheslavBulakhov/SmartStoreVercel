import axios from 'axios';
import { create } from 'zustand';

import { devtools } from 'zustand/middleware';
import {
  notifyErrorLogin,
  notifyFulfilledLogin,
} from '../components/Toasters/Toasters';

axios.defaults.baseURL = 'https://smartstoredev.onrender.com/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const useAuth = create(
  devtools(
    set => ({
      user: null,

      setUser: async credentials => {
        try {
          const { data: user } = await axios.post('/auth/login', credentials);
          token.set(user.token);
          notifyFulfilledLogin();

          set(state => ({ ...state, user }), false, 'setGoods');
        } catch (error) {
          notifyErrorLogin();
          return;
        }
      },
    }),
    { name: 'Auth' }
  )
);

export const useStore = create(
  devtools(
    set => ({
      goods: [],
      filters: {
        search: '',
        region: null,
      },

      setGoods: async () => {
        const { data } = await axios.get('/goods');

        set(
          state => ({
            ...state,
            goods: [...data],
          }),
          false,
          'setGoods'
        );
      },

      setSearchFilter: value =>
        set(
          state => ({
            ...state,
            filters: { ...state.filters, search: value },
          }),
          false,
          'setSearchFilter'
        ),
    }),
    { name: 'Countries' }
  )
);
