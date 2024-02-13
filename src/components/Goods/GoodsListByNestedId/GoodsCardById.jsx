/* eslint-disable react/prop-types */

import { FaStar } from 'react-icons/fa';
import {
  AmountWrap,
  BuyBtn,
  CardItemWrap,
  CardLink,
  DescriptionWrap,
  StarWrap,
} from './GoodsCardStyled';
import {
  notifyAddGoodsToShopingCart,
  notifyError,
} from '../../Toasters/Toasters';
import { useStore } from '../../../zustand/store';
import { formatter } from '../../../utils';

const GoodsCardById = ({ data }) => {
  const { setNewIdList } = useStore();

  const amount = data.amount;
  const discount = parseInt(data.discount);

  const { imgUrl, title, description, _id } = data;

  function applyDiscount(amount, discountPercent) {
    if (parseInt(discountPercent) < 0 || parseInt(discountPercent) > 100) {
      return 'Некоректні дані';
    }

    // Обчислення суми знижки
    let discountAmount = parseInt(amount) * (parseInt(discountPercent) / 100);

    // Обчислення вартості зі знижкою
    let discountedPrice = parseInt(amount) - discountAmount;

    // Округлення до цілого числа
    discountedPrice = Math.round(discountedPrice);

    return discountedPrice;
  }

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
            <div>
              <span>-{discount}%</span>
              <span>Акція</span>
            </div>
          )}
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
