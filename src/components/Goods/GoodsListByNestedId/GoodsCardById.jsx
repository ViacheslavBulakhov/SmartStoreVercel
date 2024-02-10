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

const GoodsCardById = ({ data }) => {
  const amount = data.amount;
  const discount = parseInt(data.discount);

  const { imgUrl, title } = data;

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

  return (
    <CardItemWrap>
      <div>
        <CardLink>
          <img src={imgUrl} alt="" width="200px" height="200px" />
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          officiis ab est totam blanditiis incidunt unde ipsam officia quasi
          enim, temporibus accusamus!
        </p>
        {discount ? (
          <AmountWrap>
            <span>{amount}.00₴</span>
            <span>{applyDiscount(amount, discount)}.00₴</span>
          </AmountWrap>
        ) : (
          <AmountWrap>
            <span></span>
            <span>{amount}.00₴</span>
          </AmountWrap>
        )}

        <BuyBtn type="button">Купити</BuyBtn>
      </DescriptionWrap>
    </CardItemWrap>
  );
};

export default GoodsCardById;
