import { NavLink } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const BuyBtn = styled.button`
  display: block;
  width: calc(100% - 30px);
  padding: 8px 0;
  margin: 0 auto;

  border-radius: var(--b-radius);
  border: var(--border-base);

  box-shadow: var(--shadow);

  text-transform: uppercase;
  color: var(--colors-text);
  font-size: var(--fs-sd);
  font-weight: var(--fw-normal);

  background-color: hsl(0deg 7.6% 81.25% / 38%);

  transition: background 0.15s ease 0.05s;
  cursor: pointer;

  &:hover {
    background-color: #dee2e6;
    transform: translate(-5px, -5px);
    box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.7);
  }
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CardItemWrap = styled.li`
  position: relative;
  width: calc(33.33% - 20px);

  padding: 20px;

  border-radius: 5px;
  box-shadow: var(--shadow);
  overflow: hidden;
  background-color: var(--colors-bg);
  & > div:not(:first-child) {
    margin-top: 20px;
  }

  &:hover {
    background-color: hsl(243.69deg 16.79% 90.54% / 81%);
  }
`;

const CardLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & > div {
    position: absolute;
    top: 20px;
    left: 5px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    & > span {
      color: white;
      background-color: #eb5757;
      font-size: 10px;
      padding: 5px 8px;

      & + span {
        background-color: rgb(0, 120, 255);
      }
    }
  }
`;

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > div > span {
    color: #cbcfd4;
    font-size: var(--fs-md);
    text-decoration: line-through;
    & + span {
      margin-left: 10px;
      color: var(--colors-text);
      font-weight: var(--fw-bold);
      text-decoration: none;
    }
  }
`;

const StarWrap = styled.div`
  width: fit-content;
  margin: 0px auto;
  // color: rgb(201 183 77);
`;

const AmountWrap = styled.div`
  width: fit-content;
  margin: 0px auto;
`;

const GoodsListByNestedId = () => {
  const discount = 47;
  const amount = 920;

  function applyDiscount(amount, discountPercent) {
    if (
      typeof amount !== 'number' ||
      typeof discountPercent !== 'number' ||
      discountPercent < 0 ||
      discountPercent > 100
    ) {
      return 'Некоректні дані';
    }

    // Обчислення суми знижки
    let discountAmount = amount * (discountPercent / 100);

    // Обчислення вартості зі знижкою
    let discountedPrice = amount - discountAmount;

    // Округлення до цілого числа
    discountedPrice = Math.round(discountedPrice);

    return discountedPrice;
  }

  const countPositiveFeedbackPoints = () => {
    const total = 15;
    const good = 8;

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
    <div style={{ flex: '0 0 75%', maxWidth: '75%' }}>
      <CardList>
        <CardItemWrap>
          <div>
            <CardLink>
              <img
                src="https://picsum.photos/100/100"
                alt=""
                width="200px"
                height="200px"
              />
              <h3>Чохол для Iphone 15 Pro Max</h3>

              <div>
                <span>-{discount}%</span>
                <span>Акція</span>
              </div>
            </CardLink>
          </div>
          <StarWrap>{stars}</StarWrap>
          <DescriptionWrap>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              officiis ab est totam blanditiis incidunt unde ipsam officia quasi
              enim, temporibus accusamus!
            </p>
            <AmountWrap>
              <span>{amount}.00₴</span>
              <span>{applyDiscount(amount, discount)}.00₴</span>
            </AmountWrap>

            <BuyBtn type="button">Купити</BuyBtn>
          </DescriptionWrap>
        </CardItemWrap>
      </CardList>
    </div>
  );
};

export default GoodsListByNestedId;
