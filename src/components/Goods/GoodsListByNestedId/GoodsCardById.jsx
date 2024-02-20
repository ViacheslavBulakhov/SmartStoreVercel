/* eslint-disable react/prop-types */

import { FaStar } from 'react-icons/fa';
import { FcLike, FcDislike } from 'react-icons/fc';
import {
  AmountWrap,
  BuyBtn,
  CardItemWrap,
  CardLink,
  DescriptionWrap,
  DiscountWrap,
  FavoritesWrap,
  StarWrap,
} from './GoodsCardStyled';
import {
  notifyAddGoodsToShopingCart,
  notifyError,
  notifySucces,
} from '../../Toasters/Toasters';
import { useStore } from '../../../zustand/store';
import {
  applyDiscount,
  calculateAverageRating,
  formatter,
} from '../../../utils';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GoodsCardById = ({ data }) => {
  const { setNewIdList } = useStore();
  const user = useStore(state => state.auth.user);
  const { getGoods } = useStore();
  let { goodsName, id, nestedId } = useParams();

  const discount = data && parseInt(data.discount);
  const isFavorite = data && data.favorites.includes(user?.id);
  const ratingArr = data && data.reviews.map(item => item.feedbackPoints);

  const { imgUrl, title, description, _id, amount } = data;

  const onByClick = id => {
    try {
      let idList = JSON.parse(localStorage.getItem('idList')) || [];

      if (!idList.includes(id)) {
        const newArr = [...idList, id];

        localStorage.setItem('idList', JSON.stringify(newArr));
        setNewIdList(newArr);
        notifyAddGoodsToShopingCart(title);
        return;
      } else {
        notifyAddGoodsToShopingCart(title);
      }
    } catch (error) {
      notifyError(
        "Щось пішло не так, спробуйте пізніше або зв'яжіться з нами по телефону!"
      );
    }
  };

  const handleFavorite = async id => {
    try {
      const result = await axios.patch(`goods/${id}/favorite`);

      if (result.status === 200) getGoods();

      if (result.data.favorites.includes(user.id)) {
        notifySucces('Товар успішно додано до закладок!');
        return;
      }
      notifySucces('Товар успішно видалено з закладок закладок!');
    } catch (error) {
      if (error?.response?.status === 401) {
        notifyError(
          'Для додавання товару в закладки необхідно увійти в акаунт!'
        );
        return;
      }
      notifyError('Упс, щось пішло не так ...Спробуйте пізніше');
    }
  };

  return (
    <CardItemWrap>
      <div>
        <div>
          <CardLink to={`/goods/${goodsName}/${id}/${nestedId}/${_id}`}>
            <img
              src={imgUrl}
              alt={title}
              width="200px"
              height="200px"
              loading="lazy"
            />
            <h3>{title}</h3>
          </CardLink>

          {discount > 0 && (
            <DiscountWrap>
              <span>-{discount}%</span>
              <span>Акція</span>
            </DiscountWrap>
          )}
          <FavoritesWrap onClick={() => handleFavorite(_id)}>
            {isFavorite ? <FcLike size={30} /> : <FcDislike size={30} />}
          </FavoritesWrap>
        </div>
      </div>
      <StarWrap>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            size={25}
            color={
              index < calculateAverageRating(ratingArr)
                ? 'rgb(201 183 77)'
                : 'gray'
            }
          />
        ))}
      </StarWrap>
      <DescriptionWrap>
        <p>{description}</p>
        {discount ? (
          <AmountWrap>
            <span>{formatter.format(amount)}</span>
            <span>{formatter.format(applyDiscount(amount, discount))}</span>
          </AmountWrap>
        ) : (
          <AmountWrap>
            <span></span>
            <span>{formatter.format(amount)}</span>
          </AmountWrap>
        )}

        <BuyBtn type="button" onClick={() => onByClick(_id)}>
          Купити
        </BuyBtn>
      </DescriptionWrap>
    </CardItemWrap>
  );
};

export default GoodsCardById;
