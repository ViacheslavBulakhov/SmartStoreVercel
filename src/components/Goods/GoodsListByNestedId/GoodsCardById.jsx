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
import { applyDiscount, formatter } from '../../../utils';
import axios from 'axios';

const GoodsCardById = ({ data }) => {
  const { setNewIdList } = useStore();
  const user = useStore(state => state.auth.user);
  const { getGoods } = useStore();

  const amount = data.amount;
  const discount = parseInt(data.discount);
  const isFavorite = data.favorites.includes(user?.id);

  const { imgUrl, title, description, _id } = data;

  const countPositiveFeedbackPoints = () => {
    const total = 0;
    const good = 0;

    // Розрахунок відсотка позитивного відгуку
    const percentage = (good / total) * 100;

    // Розрахунок кількості зірочок від 0 до 5
    const stars = Math.ceil(percentage / 20);

    // Перевірка, щоб не було більше 5 зірочок
    const cappedStars = Math.min(stars, 5);

    return cappedStars;
  };

  const starsCount = countPositiveFeedbackPoints();

  let stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < starsCount) {
      stars.push(<FaStar key={i} size={25} color="rgb(201 183 77)" />);
    } else {
      stars.push(<FaStar key={i} size={25} />);
    }
  }

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
      console.log('eror=>>>', error.message);
      notifyError(
        "Щось пішло не так, спробуйте пізніше або зв'яжіться з нами по телефону!"
      );
    }
  };

  const handleFavorite = async id => {
    try {
      const result = await axios.patch(`goods/${id}/favorite`);
      console.log(result.data.favorites);
      if (result.status === 200) {
        getGoods();
      }
      result.data.favorites && notifySucces('Товар успішно додано до закладок');
    } catch (error) {
      notifyError('Упс, щось пішло не так ...Спробуйте пізніше');
    }
  };

  return (
    <CardItemWrap>
      <div>
        <CardLink>
          <img
            src={imgUrl}
            alt={title}
            width="200px"
            height="200px"
            loading="lazy"
          />
          <h3>{title}</h3>

          {discount > 0 && (
            <DiscountWrap>
              <span>-{discount}%</span>
              <span>Акція</span>
            </DiscountWrap>
          )}
          <FavoritesWrap onClick={() => handleFavorite(_id)}>
            {isFavorite ? <FcLike size={30} /> : <FcDislike size={30} />}
          </FavoritesWrap>
        </CardLink>
      </div>
      <StarWrap>{stars}</StarWrap>
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
