/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {
  BaseInfoWrap,
  CountWrap,
  ImgCardWrap,
  ShopingCardWrap,
} from '../ShopingCartModalStyled';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { notifyError } from '../../../Toasters/Toasters';
import { useStore } from '../../../../zustand/store';
import { formatter } from '../../../../utils';

const ShopingCard = ({ item, setTotalAmount }) => {
  const [count, setCount] = useState(1);
  const [currentAmount, setCurrentAmount] = useState(() => count * item.amount);

  const { removeIdItem } = useStore();
  const data = useStore(state => state.goods);

  const incrementCount = () => setCount(prev => prev + 1);
  const decrementCount = () => setCount(prev => prev - 1);

  const deletteItem = async id => {
    try {
      let data = JSON.parse(localStorage.getItem('idList')) || [];

      localStorage.setItem(
        'idList',
        JSON.stringify(data.filter(item => item !== id))
      );
      removeIdItem(id);
      setTotalAmount(prev => Number(prev) - Number(currentAmount));
    } catch (error) {
      notifyError(
        "Щось пішло не так, спробуйте пізніше або зв'яжіться з нами по телефону!"
      );
    }
  };

  useEffect(() => {
    const amount = Number(count) * Number(item.amount);

    setTotalAmount(
      prevTotalAmount =>
        prevTotalAmount - Number(currentAmount) + Number(amount)
    );
    setCurrentAmount(amount);
  }, [count, item.amount]);

  useEffect(() => {
    setTotalAmount(prev => Number(prev) + Number(item.amount));
  }, []);

  return (
    <ShopingCardWrap>
      <ImgCardWrap>
        <img src={item.imgUrl} alt="" />
      </ImgCardWrap>

      <BaseInfoWrap>
        <h3>{item.title}</h3>
        <CountWrap>
          <span onClick={decrementCount}>-</span>
          <input
            type="number"
            autoComplete="off"
            aria-label="Ціна"
            value={count}
            onChange={e => setCount(Number(e.target.value))}
          />
          <span onClick={incrementCount}>+</span>
        </CountWrap>
        <span>{formatter.format(item.amount * count)}</span>
      </BaseInfoWrap>

      <div>
        <RiDeleteBin5Fill size={'25px'} onClick={() => deletteItem(item._id)} />
      </div>
    </ShopingCardWrap>
  );
};

export default ShopingCard;
