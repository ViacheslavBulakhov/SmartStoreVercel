/* eslint-disable react/prop-types */
import { useStore } from '../../../zustand/store';
import CloseBtn from '../../Common/CloseBtn';
import { AuthTitleWrap } from '../AuthModal/AuthModalStyled';
import {
  BtnWrap,
  ShopingBox,
  ShopingModalWrap,
} from './ShopingCartModalStyled';

import ShopingCard from './ShopingCard/ShopingCard';
import { useEffect, useState } from 'react';
import { formatter } from '../../../utils';
import { sendMail } from '../../../services/sendMail';

const ShopingCartModal = ({ toggleModal }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [buyingList, setBuyingList] = useState([]);

  const idList = useStore(state => state.idList);

  const data = useStore(state => state.goods);

  useEffect(() => {
    setBuyingList(data?.filter(item => idList.includes(item._id)) || []);
  }, [idList]);

  const onByClick = () => {
    sendMail(buyingList);
  };

  return (
    <ShopingModalWrap>
      <AuthTitleWrap>
        <h3>Кошик</h3>
        <CloseBtn type="button" toggleModal={toggleModal} />
      </AuthTitleWrap>
      <ShopingBox>
        <div>
          <p>
            В кошику<span>{` ${buyingList.length} товарів`}</span> на суму
            <span>{` ${formatter.format(totalAmount)}`}</span>
          </p>
          <p>
            При замовленні на 1000 грн або більше доставка буде безкоштовною
          </p>
        </div>

        {buyingList.length > 0 && (
          <ul>
            {buyingList.map((item, index) => (
              <li key={item._id}>
                <ShopingCard
                  item={item}
                  setTotalAmount={setTotalAmount}
                  setBuyingList={setBuyingList}
                  index={index}
                />
              </li>
            ))}
          </ul>
        )}

        <BtnWrap>
          <button type="button" onClick={toggleModal}>
            Продовжити Покупки
          </button>
          <button type="button" onClick={onByClick}>
            Оформити Замовлення
          </button>
        </BtnWrap>
      </ShopingBox>
    </ShopingModalWrap>
  );
};

export default ShopingCartModal;
