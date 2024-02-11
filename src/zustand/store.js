import axios from 'axios';
import { create } from 'zustand';

import { devtools } from 'zustand/middleware';
import {
  notifyError,
  notifyErrorLogin,
  notifyFulfilledLogin,
} from '../components/Toasters/Toasters';

axios.defaults.baseURL = 'https://smartstoredev.onrender.com/api';

// axios.defaults.baseURL = 'http://localhost:3000/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const useStore = create(
  devtools(
    set => ({
      auth: { user: null, isLoggedIn: false },
      goods: [],
      filters: {
        search: '',
        region: null,
      },

      setUser: async credentials => {
        try {
          const { data: user } = await axios.post('/auth/login', credentials);
          token.set(user.token);
          notifyFulfilledLogin();

          set(
            state => ({ ...state, auth: { user, isLoggedIn: true } }),
            false,
            'setAuth'
          );
        } catch (error) {
          notifyErrorLogin();
          return;
        }
      },

      removeUser: async () => {
        const { data } = await axios.delete('/goods');
        console.log(data);

        set(
          state => ({
            ...state,
            auth: { user: null, isLoggedIn: false },
          }),
          false,
          'setGoods'
        );
      },

      getGoods: async () => {
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

      setNewGoods: async credentials => {
        try {
          const { data } = await axios.post(`/goods`, credentials);
          console.log(data);
          set(state => ({
            ...state,
            goods: [...state.goods, { ...data }],
          }));
        } catch (error) {
          notifyError(error.message);
        }
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
    { name: 'Auth' }
  )
);
