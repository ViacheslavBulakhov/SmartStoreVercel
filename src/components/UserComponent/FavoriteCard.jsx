/* eslint-disable react/prop-types */

import { ImgCardWrap } from '../Modals/ShopingCartModal/ShopingCartModalStyled';
import { applyDiscount, formatter } from '../../utils';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import {
  ActionBtnWrap,
  AmountWrap,
  BuyBtn,
  FavoriteCardDescription,
  FavoriteCardDescriptionWrap,
  FavoriteCardWrap,
} from './FavoriteCardStyled';

import axios from 'axios';
import { useStore } from '../../zustand/store';

const FavoriteCard = ({ item }) => {
  const { getGoods } = useStore();
  const deletteItem = async id => {
    const { data } = await axios.patch(`goods/${id}/favorite`);
    getGoods();
    console.log(data);
  };
  return (
    <FavoriteCardWrap>
      <FavoriteCardDescriptionWrap>
        <div>
          <img
            src={item.imgUrl}
            alt={item.title}
            width={'200px'}
            height={'200px'}
          />
        </div>
        <FavoriteCardDescription>
          <h3>{item.title}</h3>
          <p>
            Модель:
            <span>{` ${item.model}`}</span>
          </p>

          <AmountWrap>
            <p>
              Вартість за одиницю товару:{' '}
              <span>{item.discount ? formatter.format(item.amount) : ''}</span>
              <span>
                {item.discount
                  ? formatter.format(applyDiscount(item.amount, item.discount))
                  : formatter.format(item.amount)}
              </span>
            </p>
          </AmountWrap>
        </FavoriteCardDescription>
      </FavoriteCardDescriptionWrap>
      <ActionBtnWrap>
        <RiDeleteBin5Fill size={'25px'} onClick={() => deletteItem(item._id)} />

        <BuyBtn type="button">Купити</BuyBtn>
      </ActionBtnWrap>
    </FavoriteCardWrap>
  );
};

export default FavoriteCard;
