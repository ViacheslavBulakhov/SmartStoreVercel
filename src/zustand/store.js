import axios from 'axios';
import { create } from 'zustand';

import { devtools } from 'zustand/middleware';
import { ALL_GOODS } from '../config';

export const useStore = create(
  devtools(
    set => ({
      goods: [],
      filters: {
        search: '',
        region: null,
      },

      setGoods: async () => {
        const { data } = await axios.get(ALL_GOODS);
        console.log(data);
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

      // setRegionFilter: value =>
      //   set(
      //     state => ({
      //       ...state,
      //       filters: { ...state.filters, region: value },
      //     }),
      //     false,
      //     'setRegionFilter'
      //   ),
    }),
    { name: 'Countries' }
  )
);
