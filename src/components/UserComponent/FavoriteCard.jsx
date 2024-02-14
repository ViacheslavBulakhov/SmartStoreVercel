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
import { height } from '@mui/system';

const FavoriteCard = ({ item }) => {
  const deletteItem = async id => {
    console.log(id);
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
